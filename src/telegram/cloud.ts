import type { CloudAPI } from './bridge';
import { parseSave,MAX_SAVE_BYTES } from '../persistence/validateSave';
import type { SaveV1 } from '../state/types';

const HEAD='five_meetings_v1_head',CHUNK=3500,MAX_CHUNKS=Math.ceil(MAX_SAVE_BYTES/CHUNK);
type Part={slot:'a'|'b';count:number;length:number;hash:string};
type Head={version:1;current:Part;previous:Part|null};
export type CloudSnapshot={head:string;save:SaveV1|null;backup:SaveV1|null;damaged:boolean};
export class CloudConflict extends Error {constructor(){super('В Telegram появилась другая копия истории.');}}
class CloudTransportError extends Error {}
export function cloudRaw(save:SaveV1){return JSON.stringify({...save,continuation:null});}
export function splitCloudText(raw:string){
  const chunks:string[]=[];
  for(let start=0;start<raw.length;){
    let end=Math.min(start+CHUNK,raw.length);
    // Keep emoji and other non-BMP characters intact across the native bridge.
    if(end<raw.length&&/[\uD800-\uDBFF]/.test(raw[end-1])&&/[\uDC00-\uDFFF]/.test(raw[end]))end--;
    chunks.push(raw.slice(start,end));start=end;
  }return chunks;
}
function request<T>(run:(done:(error:string|null,value:T)=>void)=>unknown):Promise<T>{
  return new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(new CloudTransportError('Telegram не ответил вовремя.')),8000);
    try{run((error,value)=>{clearTimeout(timer);if(error)reject(new CloudTransportError('Не удалось связаться с облаком Telegram.'));else resolve(value);});}catch{clearTimeout(timer);reject(new CloudTransportError('Не удалось связаться с облаком Telegram.'));}
  });
}
function part(value:unknown):Part{
  const p=value as Part;if(!p||!['a','b'].includes(p.slot)||!Number.isInteger(p.count)||p.count<1||p.count>MAX_CHUNKS||!Number.isInteger(p.length)||p.length<1||p.length>MAX_SAVE_BYTES||p.count<Math.ceil(p.length/CHUNK)||p.count>Math.ceil(p.length/(CHUNK-1))||!/^[a-f0-9]{64}$/.test(p.hash))throw new Error('Повреждено описание облачной копии.');return p;
}
function header(raw:string):Head{
  if(raw.length>1024)throw new Error('Повреждено описание облачной копии.');
  const h=JSON.parse(raw) as Head;if(h.version!==1)throw new Error('Неизвестная версия облачной копии.');
  const current=part(h.current),previous=h.previous===null?null:part(h.previous);
  if(previous?.slot===current.slot)throw new Error('Повреждено описание облачной копии.');
  return {version:1,current,previous};
}
async function digest(raw:string){return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(raw))),n=>n.toString(16).padStart(2,'0')).join('');}
function chunkKey(slot:string,index:number){return `five_meetings_v1_${slot}_${index}`;}
export class TelegramCloud {
  constructor(private api:CloudAPI){}
  private async getHead(){const raw=await request<string>(done=>this.api.getItem(HEAD,done));if(typeof raw!=='string')throw new CloudTransportError('Telegram не подтвердил состояние облака.');return raw;}
  private async readPart(p:Part){
    const keys=Array.from({length:p.count},(_,i)=>chunkKey(p.slot,i));
    const values=await request<Record<string,string>>(done=>this.api.getItems(keys,done));
    if(keys.some(k=>typeof values[k]!=='string'||!values[k]||values[k].length>CHUNK))throw new Error('Облачная копия неполная.');
    const raw=keys.map(k=>values[k]).join('');if(raw.length!==p.length||await digest(raw)!==p.hash)throw new Error('Облачная копия повреждена.');return parseSave(raw);
  }
  async read():Promise<CloudSnapshot>{
    const raw=await this.getHead();if(!raw)return {head:'',save:null,backup:null,damaged:false};
    let h:Head;try{h=header(raw);}catch{return {head:raw,save:null,backup:null,damaged:true};}
    // Transport errors must not be mistaken for an empty cloud. A bad snapshot is
    // always shown for explicit recovery, never silently replaced by a new game.
    let save:SaveV1|null=null,backup:SaveV1|null=null;
    try{save=await this.readPart(h.current);}catch(error){if(error instanceof CloudTransportError)throw error;}
    if(!save&&h.previous){try{backup=await this.readPart(h.previous);}catch(error){if(error instanceof CloudTransportError)throw error;}}
    if(await this.getHead()!==raw)throw new CloudConflict();
    return {head:raw,save,backup,damaged:!save};
  }
  async write(save:SaveV1,expectedHead:string):Promise<string>{
    const raw=cloudRaw(save);parseSave(raw);if(raw.length>MAX_SAVE_BYTES)throw new Error('Сохранение слишком большое для облака.');
    if(await this.getHead()!==expectedHead)throw new CloudConflict();
    let previous:Part|null=null;
    if(expectedHead){
      let h:Head|null=null;try{h=header(expectedHead);}catch{/* Explicit recovery can replace a malformed head. */}
      if(h){
        try{await this.readPart(h.current);previous=h.current;}catch(error){
          if(error instanceof CloudTransportError)throw error;
          if(h.previous){try{await this.readPart(h.previous);previous=h.previous;}catch(e){if(e instanceof CloudTransportError)throw e;}}
        }
      }
    }
    const slot=previous?.slot==='a'?'b':'a';const chunks=splitCloudText(raw),count=chunks.length;
    for(let i=0;i<count;i++){
      const ok=await request<boolean>(done=>this.api.setItem(chunkKey(slot,i),chunks[i],done));if(!ok)throw new Error('Telegram не подтвердил сохранение.');
    }
    const current:Part={slot,count,length:raw.length,hash:await digest(raw)};
    // Verify all chunks before publishing the pointer. Last committed bank stays intact.
    await this.readPart(current);
    if(await this.getHead()!==expectedHead)throw new CloudConflict();
    const next=JSON.stringify({version:1,current,previous} satisfies Head);
    if(!await request<boolean>(done=>this.api.setItem(HEAD,next,done)))throw new Error('Telegram не подтвердил сохранение.');
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
