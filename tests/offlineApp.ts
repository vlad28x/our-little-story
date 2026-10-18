import { build } from 'esbuild';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import type { Page } from '@playwright/test';
import type { SaveV1 } from '../src/state/types';
// Isolated browser harness: no localhost or external origin, all art comes from
// the workspace, and Storage is an in-memory fixture rather than user progress.
let script:Promise<string>|undefined;
export function offlineScript(){
  return script??=(async()=>{
    const result=await build({entryPoints:['src/main.tsx'],bundle:true,write:false,format:'iife',platform:'browser',jsx:'automatic',loader:{'.css':'empty'},define:{'process.env.NODE_ENV':'"production"','import.meta.env':JSON.stringify({DEV:false,BASE_URL:'/',MODE:'production'})},plugins:[{name:'local-art',setup(b){b.onLoad({filter:/assetManifest\.ts$/},args=>{
      const source=fs.readFileSync(args.path,'utf8');
      const files=Object.fromEntries([...source.matchAll(/file:'([^']+)'/g)].map(m=>[m[1],`data:image/webp;base64,${fs.readFileSync(`public/assets/${m[1]}`).toString('base64')}`]));
      return {contents:`const offlineArt=${JSON.stringify(files)};\n`+source.replace('return `${import.meta.env.BASE_URL}assets/${a.file}`;','return offlineArt[a.file];'),loader:'ts'};
    });}}]});return result.outputFiles[0].text;
  })();
}
type OfflineOptions={telegram?:{id:number;data:Record<string,string>;failReads?:boolean};local?:Record<string,string>;seedBrowser?:boolean};
export async function openOffline(page:Page,save:SaveV1,hash='/chapters',options:OfflineOptions={}){
  if(options.telegram)await page.exposeFunction('offlineDigest',(bytes:number[])=>Array.from(createHash('sha256').update(Buffer.from(bytes)).digest()));
  await page.route('**/*',route=>route.abort());
  await page.setContent(`<html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style>${fs.readFileSync('src/styles/game.css','utf8')}</style></head><body><div id="root"></div></body></html>`);
  await page.evaluate(({raw,hash,options})=>{
    const memory=new Map<string,string>(options.seedBrowser===false?[]:[['five-meetings:/:save',raw]]);
    for(const [key,value] of Object.entries(options.local??{}))memory.set(key,value);
    Object.defineProperty(window,'localStorage',{configurable:true,value:{getItem:(k:string)=>memory.get(k)??null,setItem:(k:string,v:string)=>memory.set(k,String(v)),removeItem:(k:string)=>memory.delete(k)}});location.hash=hash;
    if(options.telegram){
      // about:blank has no secure-context WebCrypto. Delegate just hashing to the
      // test runner; production still uses the browser's real SHA-256 on HTTPS.
      if(!crypto.subtle)Object.defineProperty(crypto,'subtle',{value:{async digest(_algorithm:string,bytes:ArrayBuffer){
        const hash=await (window as unknown as {offlineDigest:(bytes:number[])=>Promise<number[]>}).offlineDigest(Array.from(new Uint8Array(bytes)));return new Uint8Array(hash).buffer;
      }}});
      const remote=options.telegram;
      (window as unknown as {testCloud:typeof remote}).testCloud=remote;
      window.Telegram={WebApp:{initData:`user=${remote.id}`,initDataUnsafe:{user:{id:remote.id}},version:'9.0',ready(){},expand(){},setHeaderColor(){},setBackgroundColor(){},enableClosingConfirmation(){},disableClosingConfirmation(){},CloudStorage:{
        getItem(key,done){setTimeout(()=>done(remote.failReads?'offline':null,remote.data[key]??''),0);},
        getItems(keys,done){setTimeout(()=>done(remote.failReads?'offline':null,Object.fromEntries(keys.map(k=>[k,remote.data[k]??'']))),0);},
        setItem(key,value,done){setTimeout(()=>{remote.data[key]=value;done(null,true);},0);}
      }}};
    }
  },{raw:JSON.stringify(save),hash,options});
  await page.addScriptTag({content:await offlineScript()});
}
