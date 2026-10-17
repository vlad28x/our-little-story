import { build } from 'esbuild';
import fs from 'node:fs';
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
export async function openOffline(page:Page,save:SaveV1,hash='/chapters'){
  await page.route('**/*',route=>route.abort());
  await page.setContent(`<html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style>${fs.readFileSync('src/styles/game.css','utf8')}</style></head><body><div id="root"></div></body></html>`);
  await page.evaluate(({raw,hash})=>{
    const memory=new Map<string,string>([['five-meetings:/:save',raw]]);
    Object.defineProperty(window,'localStorage',{configurable:true,value:{getItem:(k:string)=>memory.get(k)??null,setItem:(k:string,v:string)=>memory.set(k,String(v)),removeItem:(k:string)=>memory.delete(k)}});location.hash=hash;
  },{raw:JSON.stringify(save),hash});
  await page.addScriptTag({content:await offlineScript()});
}
