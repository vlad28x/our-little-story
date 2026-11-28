import {it,expect} from 'vitest';
import fs from 'node:fs';
import {chapter9} from '../src/content/chapters/ch09';
import {validateContent} from '../src/engine/validateContent';
import {startRun,step,resolveLine,resolveScene} from '../src/engine/step';
import { validateRun, validateSave as parseSave} from '../src/persistence/validateSave';
import {filmLeft} from '../src/persistence/photoSix';
import {cardFromStory,cardMeta} from '../src/content/cards';
import {getChapter} from '../src/content/chapters';
import {chapters} from '../src/content/chapters/manifest';
import {reduceSave,canStart} from '../src/state/reducer';
import {cloudRaw,TelegramCloud} from '../src/telegram/cloud';
import {finishSupper} from './supperHelpers';
import {finishGallery} from './gallery7Helpers';
import {startCourtyard,courtyardAt,courtyardCommand,finishCourtyard,type CourtyardPath} from './courtyard9Helpers';

it('ships the revised courtyard script, one neutral card, and exposes the new tenth graph',()=>{
 expect(validateContent(chapter9)).toEqual([]);
 expect(getChapter(9)).toBe(chapter9);expect(getChapter(10)?.entry).toBe('c10.travellers.entry');
 expect(Object.values(chapter9.nodes).filter(n=>n.kind==='end')).toHaveLength(1);
 const source=fs.readFileSync('outputs/CHAPTER_09_SCRIPT.md','utf8');
 for(const n of Object.values(chapter9.nodes))if(n.kind==='dialogue')for(const l of n.lines){expect(source).toContain(l.text);for(const v of l.variants??[])expect(source).toContain(v.text);}
 expect(Object.values(chapter9.nodes).filter(n=>n.kind==='minigame'||n.kind==='note')).toEqual([]);
});

it('1134 meaningful combinations preserve the fixed film, independent goodbye, hoodie and three remaining frames',()=>{
 const base=finishSupper().campaign.records[8]!.story;let count=0;
 for(const plan of ['tea','banter','coop'] as const)for(const priorKiss of ['yes','no'] as const)for(const clothing of ['none','evening','borrowed'] as const)for(const frame of ['vlad','seats','yard'] as const)for(const rain of ['canopy','arch','leave'] as const)for(const bet of (rain==='leave'?['skip']:['together','alone','skip']) as CourtyardPath['bet'][])for(const goodbye of ['kiss','hug','words'] as const){
  const borrowed=clothing==='borrowed',prior={...base,plan,c8LipKiss:priorKiss,c8Hoodie:borrowed?'borrowed' as const:clothing as 'none'|'evening'};
  const path:CourtyardPath={frame,rain,movie:'warm',bet,goodbye,hoodie:'return'};
  let run=startRun(chapter9,prior,'courtyard-combinations'),complete=false,menus=0;const text:string[]=[],scenes:string[]=[],counts=new Set<number>();
  for(let guard=0;guard<240;guard++){
   const node=chapter9.nodes[run.nodeId];scenes.push(node.id);
   if(node.kind==='dialogue')text.push(resolveLine(node.lines[run.lineIndex],run.story).text);
   if(node.kind==='choice')menus++;
   counts.add(filmLeft(run.story)!);
   if(node.id==='c9.courtyard.lastShots')expect(filmLeft(run.story)).toBe([2,2,1,1,0,0][run.lineIndex]);
   const next=step(chapter9,run,courtyardCommand(run,path));if(next.kind==='rejected')throw Error(next.reason);
   run=next.run;if(next.kind==='complete'){complete=true;expect(next.cardId).toBe('c9.courtyard');break;}
  }
  expect(complete).toBe(true);expect([...counts]).toEqual([3,2,1,0]);
  expect(run.story).toMatchObject({...prior,c9Frame:frame,c9Film:'submitted',c9Rain:rain,c9Place:'courtyard',c9Goodbye:goodbye,c9LipKiss:goodbye==='kiss'?'yes':'no'});
  expect(run.story.c9Hoodie).toBe(borrowed?'returned':undefined);
  expect(run.story.c9Bet).toBe(rain==='leave'?undefined:bet);
  expect(menus).toBe((rain==='leave'?4:5));
  expect(scenes.includes('c9.courtyard.resume')).toBe(rain!=='leave');
  expect(scenes.includes('c9.courtyard.earlyWalk')).toBe(rain==='leave');
  expect(scenes.indexOf('c9.courtyard.lastShots')).toBeGreaterThan(scenes.indexOf(rain==='leave'?'c9.courtyard.earlyWalk':'c9.courtyard.resume'));
  expect(scenes.indexOf('c9.courtyard.lab')).toBeGreaterThan(scenes.indexOf('c9.courtyard.lastShots'));
  expect(scenes.includes('c9.courtyard.won')).toBe(rain!=='leave'&&bet==='together');
  expect(scenes.includes('c9.courtyard.bothMissed')).toBe(rain!=='leave'&&bet==='alone');
  expect(scenes.includes('c9.courtyard.kissFirst')).toBe(goodbye==='kiss'&&priorKiss==='no');
  expect(scenes.includes('c9.courtyard.kissAgain')).toBe(goodbye==='kiss'&&priorKiss==='yes');
  expect(scenes).toContain('c9.courtyard.warmth');
  if(rain==='leave')expect(text.join(' ')).not.toMatch(/окно поезда|пассажира всё-таки зарегистрировали|подтягиваешь плед/);
  if(goodbye!=='kiss')expect(text.join(' ')).not.toMatch(/ты целуешь|и целуешь/i);
  expect(cardFromStory(run.story,9)).toMatchObject({id:'c9.courtyard',variant:rain,venue:'courtyard'});count++;
 }
 expect(count).toBe(1134);
},120000);

it('round trips every cursor on distinct routes, keeps prior records and rejects fictitious actions',()=>{
 const paths:Partial<CourtyardPath>[]=[{rain:'leave',goodbye:'words'},{rain:'arch',bet:'together',goodbye:'kiss',hoodie:'keep'},{rain:'canopy',bet:'alone',goodbye:'hug',hoodie:'return'},{rain:'arch',bet:'skip',goodbye:'kiss'},{rain:'leave',goodbye:'hug',hoodie:'keep'},{rain:'canopy',bet:'together',goodbye:'words'}];
 for(const [i,path] of paths.entries()){
  const prior=finishSupper(undefined,{hoodie:i%3===0?'pass':i%3===1?'borrow':'wear',kiss:i%2===0});prior.continuation='decline';prior.unlocked=[1,2,3,4,5,6,7,8,9,10];
  let save=startCourtyard(prior);
  while(save.campaign.active){
   const r=save.campaign.active;
   if(r.lineIndex===0)expect(parseSave(JSON.stringify(save))).toEqual(save);
   else expect(validateRun(r)).toEqual(r);
   const command=courtyardCommand(r,path);save=reduceSave(save,{type:'command',target:'campaign',command});
   expect(reduceSave(save,{type:'command',target:'campaign',command})).toEqual(save);
  }
  expect(parseSave(JSON.stringify(save))).toEqual(save);expect(parseSave(cloudRaw(save))).toEqual(save);expect(save.continuation).toBe('decline');expect(save.unlocked).toEqual(prior.unlocked);
  for(const id of [1,2,3,4,5,6,7,8] as const)expect(save.campaign.records[id]).toEqual(prior.campaign.records[id]);
 }
 const before=courtyardAt('c9.courtyard.frameChoice');
 for(const extra of [{c9Film:'key'},{c9Goodbye:'kiss',c9LipKiss:'yes'},{c9Hoodie:'kept'},{c9Bet:'together'},{c9Rain:'leave'}]){const bad=structuredClone(before);Object.assign(bad.campaign.active!.story,extra);expect(()=>parseSave(JSON.stringify(bad))).toThrow();}
 const bad=structuredClone(before);bad.campaign.active!.turn++;expect(()=>parseSave(JSON.stringify(bad))).toThrow();
},120000);

it('records actual shutter, handoff and kiss only after their action, and switches the bookcase after closing',()=>{
 const borrowed=finishSupper(undefined,{hoodie:'borrow',kiss:false});
 for(const [id,path,needle,key,value] of [
  ['c9.courtyard.frameVlad',{frame:'vlad'},'нажимаешь спуск','c9Film','key'],
  ['c9.courtyard.hoodie',{hoodie:'return'},'Ты достаёшь из сумки','c9Hoodie','returned'],
  ['c9.courtyard.kissFirst',{goodbye:'kiss'},'Первый поцелуй','c9LipKiss','yes'],
  ['c9.courtyard.lab',{},'опускаешь пакет','c9Film','submitted']
 ] as const){
  let save=courtyardAt(id,path,borrowed);
  while(true){const r=save.campaign.active!,n=chapter9.nodes[r.nodeId];if(n.kind==='dialogue'&&n.lines[r.lineIndex].text.includes(needle))break;save=reduceSave(save,{type:'command',target:'campaign',command:courtyardCommand(r,path)});}
  expect(save.campaign.active!.story[key]).not.toBe(value);save=reduceSave(save,{type:'command',target:'campaign',command:courtyardCommand(save.campaign.active!,path)});expect(save.campaign.active!.story[key]).toBe(value);
 }
 const book=courtyardAt('c9.courtyard.earlyWalk',{rain:'leave'}).campaign.active!,node=chapter9.nodes[book.nodeId];if(node.kind!=='dialogue')throw Error('No bookcase');
 for(const id of ['leave','warmth','nextCoop','nextOther','nextDate'] as const){
  const preceding=chapter9.nodes[`c9.courtyard.${id}`];
  if(preceding.kind!=='dialogue')throw Error('Missing dialogue before the bookcase');
  for(const lineIndex of preceding.lines.keys())expect(resolveScene(preceding.scene,book.story,{...book,lineIndex}).background).toBe('bg.courtyard9.open');
 }
 expect(resolveScene(node.scene,book.story,{...book,lineIndex:2}).background).toBe('bg.courtyard9.books');
 expect(resolveScene(node.scene,book.story,{...book,lineIndex:3}).background).toBe('bg.courtyard9.books-closed');
});

it('keeps current ninth trials isolated and never opens nine early',()=>{
 const done=finishCourtyard(undefined,{rain:'arch',goodbye:'words'}),trial=finishCourtyard(done,{rain:'leave',goodbye:'kiss'},true);
 expect(trial.campaign).toEqual(done.campaign);expect(trial.lastResult?.episodeRecord?.story).toMatchObject({c9Rain:'leave',c9LipKiss:'yes'});expect(parseSave(cloudRaw(trial))).toEqual(trial);
 expect(cardMeta(cardFromStory(trial.lastResult!.episodeRecord!.story,9)).caption).toContain('полку книг');
 const early=finishGallery();early.unlocked.push(9);expect(canStart(early,9)).toBe(false);
 expect(reduceSave(early,{type:'start',chapter:9,attemptId:'early'})).toEqual(early);
 const unlocked=reduceSave(done,{type:'unlock',code:chapters.find(c=>c.id===10)!.code!});expect(canStart(unlocked,10)).toBe(true);

});

it('restores the completed ninth and its trial using the real two-bank cloud protocol',async()=>{
 const done=finishCourtyard(finishSupper(undefined,{hoodie:'borrow'}),{hoodie:'keep',rain:'canopy',bet:'alone',goodbye:'hug'}),trial=finishCourtyard(done,{rain:'leave',goodbye:'kiss'},true);
 const data:Record<string,string>={};
 const api={getItem(key:string,callback:(e:string|null,v:string)=>void){callback(null,data[key]??'');},getItems(keys:string[],callback:(e:string|null,v:Record<string,string>)=>void){callback(null,Object.fromEntries(keys.map(k=>[k,data[k]??''])));},setItem(key:string,value:string,callback:(e:string|null,v:boolean)=>void){data[key]=value;callback(null,true);}};
 const cloud=new TelegramCloud(api),head=await cloud.write(done,'');await cloud.write(trial,head);expect((await new TelegramCloud(api).read()).save).toEqual(trial);
});
