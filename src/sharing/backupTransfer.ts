import { MAX_SAVE_BYTES } from '../persistence/validateSave';

const PREFIX='#/export-backup';
const MAX_URL_LENGTH=60000;
export type BackupFile={name:string;raw:string};
export type BackupRequest={file:BackupFile|null};

// A fragment is read only by the destination page, never sent in its HTTP
// request. This page exports bytes; it never imports into the browser's game.
export function backupTransferUrl(file:BackupFile,base:string){
  if(file.raw.length>MAX_SAVE_BYTES)throw new Error('Копия слишком большая для переноса ссылкой. Скопируй её текст ниже.');
  let binary='';for(const byte of new TextEncoder().encode(JSON.stringify(file)))binary+=String.fromCharCode(byte);
  const payload=btoa(binary).replaceAll('+','-').replaceAll('/','_').replace(/=+$/,'');
  const url=new URL(base);url.search='';url.hash=`${PREFIX}/${payload}`;
  if(url.href.length>MAX_URL_LENGTH)throw new Error('Для этой копии ссылка слишком длинная. Скопируй её текст ниже.');
  return url.href;
}
export function readBackupRequest(hash:string):BackupRequest|null{
  if(hash!==PREFIX&&!hash.startsWith(`${PREFIX}/`))return null;
  try{
    const encoded=hash.slice(PREFIX.length+1);if(encoded.length>MAX_URL_LENGTH||!encoded||!/^[A-Za-z0-9_-]+$/.test(encoded))throw new Error();
    const binary=atob(encoded.replaceAll('-','+').replaceAll('_','/'));
    const value:unknown=JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(Uint8Array.from(binary,c=>c.charCodeAt(0))));
    if(!value||typeof value!=='object')throw new Error();
    const file=value as BackupFile;
    if(typeof file.raw!=='string'||file.raw.length>MAX_SAVE_BYTES||typeof file.name!=='string'||!/^five-meetings-[a-z0-9-]+\.json$/.test(file.name)||file.name.length>100)throw new Error();
    return {file:{name:file.name,raw:file.raw}};
  }catch{return {file:null};}
}
