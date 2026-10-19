import type { CloudAPI } from './bridge';
import { parseSave,MAX_SAVE_BYTES } from '../persistence/validateSave';
import type { SaveV1 } from '../state/types';

const HEAD='five_meetings_v1_head',LEGACY_CHUNK_UNITS=3500,CHUNK_JSON_BYTES=3000,READ_BATCH=32;
// JSON quoting can at most double the UTF-8 bytes of a valid save. Reserve the
// two string quotes and the largest escaped code point when bounding bank size.
const MAX_CHUNKS=Math.ceil(MAX_SAVE_BYTES*2/(CHUNK_JSON_BYTES-8));
type Part={slot:'a'|'b';count:number;length:number;hash:string};
type Head={version:1;current:Part;previous:Part|null};
export type CloudSnapshot={head:string;save:SaveV1|null;backup:SaveV1|null;damaged:boolean;needsRewrite:boolean};
export class CloudConflict extends Error {constructor(){super('В Telegram появилась другая копия истории.');}}
type CloudOperation='read-head'|'read-parts'|'write-part'|'write-head';
const operations:Record<CloudOperation,string>={'read-head':'Чтение состояния облака','read-parts':'Чтение сохранения','write-part':'Запись части сохранения','write-head':'Подтверждение сохранения'};
class CloudTransportError extends Error {
  constructor(operation:CloudOperation,code:string){
    super(`${operations[operation]}: ${code==='TIMEOUT'?'Telegram не ответил вовремя':code==='INVALID_RESPONSE'?'Telegram прислал неожиданный ответ':'Telegram не подтвердил запрос'} (${code}).`);
  }
}
class CloudCryptoError extends Error {constructor(){super('Не удалось проверить сохранение в этом окне Telegram (HASH_UNAVAILABLE).');}}
// Only a short machine code is retained. Never echo native error bodies, keys,
// launch data or save contents into the UI or console.
function nativeCode(error:unknown){
  const value=error instanceof Error?error.message:error;
  if(value==='WebAppMethodUnsupported')return 'METHOD_UNSUPPORTED';
  return typeof value==='string'&&/^[A-Z][A-Z0-9_]{0,63}$/.test(value)?value:'API_ERROR';
}
export function cloudErrorText(error:unknown){
  return error instanceof CloudTransportError||error instanceof CloudCryptoError||error instanceof CloudConflict?error.message:'Не удалось проверить или подтвердить облачную копию (CHECK_FAILED).';
}
export function cloudRaw(save:SaveV1){const normalized=parseSave(JSON.stringify(save));return JSON.stringify({...normalized,continuation:null,privateNotes:{},localNoteRevision:0});}
export function splitCloudText(raw:string){
  const chunks:string[]=[];let start=0,end=0,bytes=2;
  // Bound the encoded JSON string, not JS string.length. Cyrillic, emoji,
  // quotes and backslashes all consume different amounts on the native bridge.
  for(const symbol of raw){
    const code=symbol.codePointAt(0)!;
    const size=code===34||code===92?2:code<32?([8,9,10,12,13].includes(code)?2:6):code<128?1:code<2048?2:code>=0xd800&&code<=0xdfff?6:code<=0xffff?3:4;
    if(bytes+size>CHUNK_JSON_BYTES){chunks.push(raw.slice(start,end));start=end;bytes=2;}
    bytes+=size;end+=symbol.length;
  }
  if(end>start)chunks.push(raw.slice(start,end));return chunks;
}
function request<T>(operation:CloudOperation,run:(done:(error:string|null,value:T)=>void)=>unknown):Promise<T>{
  return new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(new CloudTransportError(operation,'TIMEOUT')),20000);
    try{run((error,value)=>{clearTimeout(timer);if(error)reject(new CloudTransportError(operation,nativeCode(error)));else resolve(value);});}catch(error){clearTimeout(timer);reject(new CloudTransportError(operation,nativeCode(error)));}
  });
}
function part(value:unknown):Part{
  const p=value as Part;if(!p||!['a','b'].includes(p.slot)||!Number.isInteger(p.count)||p.count<1||p.count>MAX_CHUNKS||!Number.isInteger(p.length)||p.length<1||p.length>MAX_SAVE_BYTES||p.count<Math.ceil(p.length/LEGACY_CHUNK_UNITS)||p.count>p.length||!/^[a-f0-9]{64}$/.test(p.hash))throw new Error('Повреждено описание облачной копии.');return p;
}
function header(raw:string):Head{
  if(raw.length>1024)throw new Error('Повреждено описание облачной копии.');
  const h=JSON.parse(raw) as Head;if(h.version!==1)throw new Error('Неизвестная версия облачной копии.');
  const current=part(h.current),previous=h.previous===null?null:part(h.previous);
  if(previous?.slot===current.slot)throw new Error('Повреждено описание облачной копии.');
  return {version:1,current,previous};
}
async function digest(raw:string){
  if(!globalThis.crypto?.subtle)throw new CloudCryptoError();
  try{return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(raw))),n=>n.toString(16).padStart(2,'0')).join('');}catch{throw new CloudCryptoError();}
}
function chunkKey(slot:string,index:number){return `five_meetings_v1_${slot}_${index}`;}
export class TelegramCloud {
  constructor(private api:CloudAPI){}
  private async getHead(){const raw=await request<string>('read-head',done=>this.api.getItem(HEAD,done));if(typeof raw!=='string')throw new CloudTransportError('read-head','INVALID_RESPONSE');return raw;}
  private async readPart(p:Part){
    const keys=Array.from({length:p.count},(_,i)=>chunkKey(p.slot,i));
    const parts:string[]=[];
    for(let offset=0;offset<keys.length;offset+=READ_BATCH){
      const batch=keys.slice(offset,offset+READ_BATCH),values=await request<Record<string,string>>('read-parts',done=>this.api.getItems(batch,done));
      if(!values||typeof values!=='object'||Array.isArray(values))throw new CloudTransportError('read-parts','INVALID_RESPONSE');
      if(batch.some(k=>typeof values[k]!=='string'||!values[k]||values[k].length>LEGACY_CHUNK_UNITS))throw new Error('Облачная копия неполная.');
      parts.push(...batch.map(k=>values[k]));
    }
    const raw=parts.join('');if(raw.length!==p.length||await digest(raw)!==p.hash)throw new Error('Облачная копия повреждена.');
    const save=parseSave(raw);return {save,needsRewrite:cloudRaw(save)!==raw};
  }
  async read():Promise<CloudSnapshot>{
    const raw=await this.getHead();if(!raw)return {head:'',save:null,backup:null,damaged:false,needsRewrite:false};
    let h:Head;try{h=header(raw);}catch{return {head:raw,save:null,backup:null,damaged:true,needsRewrite:false};}
    // Transport errors must not be mistaken for an empty cloud. A bad snapshot is
    // always shown for explicit recovery, never silently replaced by a new game.
    let save:SaveV1|null=null,backup:SaveV1|null=null,needsRewrite=false;
    try{const current=await this.readPart(h.current);save=current.save;needsRewrite=current.needsRewrite;}catch(error){if(error instanceof CloudTransportError||error instanceof CloudCryptoError)throw error;}
    if(!save&&h.previous){try{backup=(await this.readPart(h.previous)).save;}catch(error){if(error instanceof CloudTransportError||error instanceof CloudCryptoError)throw error;}}
    if(await this.getHead()!==raw)throw new CloudConflict();
    return {head:raw,save,backup,damaged:!save,needsRewrite};
  }
  async write(save:SaveV1,expectedHead:string):Promise<string>{
    const raw=cloudRaw(save);
    if(await this.getHead()!==expectedHead)throw new CloudConflict();
    let previous:Part|null=null;
    if(expectedHead){
      let h:Head|null=null;try{h=header(expectedHead);}catch{/* Explicit recovery can replace a malformed head. */}
      if(h){
        try{await this.readPart(h.current);previous=h.current;}catch(error){
          if(error instanceof CloudTransportError||error instanceof CloudCryptoError)throw error;
          if(h.previous){try{await this.readPart(h.previous);previous=h.previous;}catch(e){if(e instanceof CloudTransportError||e instanceof CloudCryptoError)throw e;}}
        }
      }
    }
    const slot=previous?.slot==='a'?'b':'a';const chunks=splitCloudText(raw),count=chunks.length;
    for(let i=0;i<count;i++){
      const ok=await request<boolean>('write-part',done=>this.api.setItem(chunkKey(slot,i),chunks[i],done));if(ok!==true)throw new CloudTransportError('write-part','NOT_STORED');
    }
    const current:Part={slot,count,length:raw.length,hash:await digest(raw)};
    // Verify all chunks before publishing the pointer. Last committed bank stays intact.
    await this.readPart(current);
    if(await this.getHead()!==expectedHead)throw new CloudConflict();
    const next=JSON.stringify({version:1,current,previous} satisfies Head);
    if(await request<boolean>('write-head',done=>this.api.setItem(HEAD,next,done))!==true)throw new CloudTransportError('write-head','NOT_STORED');
    if(await this.getHead()!==next)throw new CloudConflict();return next;
  }
}
export class CloudSession {
  private queue:Promise<unknown>=Promise.resolve();private stopped=false;
  constructor(readonly cloud:TelegramCloud,public head:string,private raw:string|null){}
  push(save:SaveV1):Promise<void>{
    const run=this.queue.then(async()=>{
      if(this.stopped)throw new Error('Синхронизация приостановлена.');
      const next=cloudRaw(save);if(next===this.raw)return;
      try{this.head=await this.cloud.write(save,this.head);this.raw=next;}catch(error){this.stopped=true;throw error;}
    });this.queue=run.catch(()=>{});return run;
  }
  async check(){await this.queue;if(this.stopped)return;if((await this.cloud.read()).head!==this.head){this.stopped=true;throw new CloudConflict();}}
}
