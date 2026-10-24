import {it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {finishR3,priorR3,r3At,startR3,r3Action,type R3Path} from './r3Helpers';
import {legacySource,parseSave} from '../src/persistence/validateSave';
import {parseSave as parseR2} from '../src/legacy/r2/persistence/validateSave';
import {getChapter} from '../src/content/chapters';
import {validateContent} from '../src/engine/validateContent';
import {reduceSave} from '../src/state/reducer';
import {persist} from '../src/persistence/storage';
import type {EveningRouteResult,RouteStop} from '../src/engine/types';

it('R3 graph has no missing or unreachable nodes and round-trips every checkpoint of quiet routes',()=>{
 let save=priorR3();
 for(const chapter of [6,7,8,9,10] as const){
  expect(validateContent(getChapter(chapter)!)).toEqual([]);
  save=finishR3(chapter,{check:true,note:'Моя мысль 🌙'},save);
  expect(save.campaign.records[chapter]?.scriptRevision).toBe(3);
 }
 expect(save.contentVersion).toBe(14);expect(save.collection.memories).toHaveLength(5);expect(save.collection.secrets).toHaveLength(5);
},60000);
it('chapters1–3 and the frozen previous4–5 retain their approved 2026-10-23 bytes',()=>{
 const hashes=JSON.parse(readFileSync('tests/fixtures/r1/first-five-hashes.json','utf8')) as Record<string,string>;
 // Owner-approved baseline: outputs/SEASON_01_POLISH_BRIEF_2026_10_23.md.
 // The explicit 2026-10-24 exception changes4–5. Protect their frozen originals
 // with the original hashes, while1–3 remain protected in their runtime paths.
 for(const [file,hash] of Object.entries(hashes))expect(createHash('sha256').update(readFileSync(file.replace('content/chapters/ch04','legacy/season1/ch04').replace('content/chapters/ch05','legacy/season1/ch05'))).digest('hex')).toBe(hash);
});
it('all six golden R2 snapshots remain valid read-only sources until explicit update',()=>{
 for(const name of ['6','7','8','9','10','active8']){
  const raw=readFileSync('tests/fixtures/r2/'+name+'.json','utf8'),old=JSON.parse(raw);
  expect(parseR2(raw)).toEqual(old);
  const preview=parseSave(raw);expect(legacySource(preview)).toBe(raw);expect(preview.campaign.completed).toEqual([1,2,3,4,5]);
  for(const c of [1,2,3,4,5] as const)expect(preview.campaign.records[c]).toEqual(old.campaign.records[c]);
  let writes=0;expect(()=>persist({getItem:()=>raw,setItem:()=>{writes++;},removeItem:()=>{writes++;}},preview,preview.revision,'test')).toThrow('обновление');expect(writes).toBe(0);
 }
});
it('R1 sources still load without being interpreted as current graphs',()=>{
 for(const name of ['firstFive','six','seven','eight','nine','ten','activeEight']){
  const raw=readFileSync('tests/fixtures/r1/'+name+'.json','utf8');const preview=parseSave(raw);
  expect(!!legacySource(preview)).toBe(name!=='firstFive');
 }
});
const eightBase=()=>finishR3(7);
const romance8:Record<string,string>={'c8.r3.place':'home','c8.r3.gesture':'curls','c8.r3.kiss.answer':'yes','c8.r3.late':'dance','c8.r3.late.tender.choice':'neck','c8.r3.hoodie':'borrow','c8.r3.ending':'tea'};
it('8 keeps the kiss after tea and offers neck only late at home; hoodie survives into9',()=>{
 const save=finishR3(8,{choices:romance8,check:true},eightBase());
 expect(save.campaign.records[8]?.story).toMatchObject({c8LipKiss:'yes',c8LateTender:'neck',c8Close:'tea',c8Hoodie:'borrowed'});
 expect(save.campaign.records[8]?.cardId).toBe('c8.r3.tea');
 const nine=r3At(9,'c9.r3.hoodie',{choices:{'c9.r3.place':'home'}},save);
 expect(nine.campaign.active?.story.c8Hoodie).toBe('borrowed');
 const calm=r3At(8,'c8.r3.late.soft',{choices:{'c8.r3.place':'home','c8.r3.late':'dance'}},eightBase());
 const r=calm.campaign.active!,n=getChapter(8)!.nodes[r.nodeId];
 expect(n.kind==='choice'&&n.choices.some(c=>c.id==='neck')).toBe(false);
 const forged=structuredClone(calm);forged.campaign.active!.story.c8LipKiss='yes';expect(()=>parseSave(JSON.stringify(forged))).toThrow();
},60000);
it('8 public and no-kiss routes still finish a full evening with each neutral postcard',()=>{
 for(const close of ['dance','tea','next']){
  const save=finishR3(8,{choices:{'c8.r3.place':'cafe','c8.r3.late':'dance','c8.r3.ending':close},check:true},eightBase());
  expect(save.campaign.records[8]?.story.c8LipKiss).toBe('no');expect(save.campaign.records[8]?.story.c8Hoodie).toBeUndefined();
  expect(save.campaign.records[8]?.cardId).toBe('c8.r3.'+close);
 }
},60000);
it('9 continues through the film after embrace/kiss in both venues and retains separate closing fact',()=>{
 const base=finishR3(8);
 for(const place of ['home','courtyard'])for(const kiss of ['yes','her','hug']){
  const save=finishR3(9,{choices:{'c9.r3.place':place,'c9.r3.closeness':'shoulder','c9.r3.second':'hug','c9.r3.kiss':kiss,'c9.r3.ending':'quiet'},check:true},base);
  expect(save.campaign.records[9]?.story).toMatchObject({c9LipKiss:kiss==='hug'?'no':'yes',c9Close:'quiet'});
  expect(save.campaign.records[9]?.cardId).toBe('c9.r3.quiet');
 }
},60000);
it('10 all evening moments can reach overnight, including no prior kiss; move and later change are explicit',()=>{
 const base=finishR3(9);
 for(const place of ['home','terrace'])for(const moment of ['hug','kiss','talk']){
  const path:R3Path={choices:{'c10.r3.place':place,'c10.r3.moment':moment,'c10.r3.evening.kiss':'hug',['c10.r3.ending.'+place]:'overnight','c10.r3.move':'home','c10.r3.night':'hug','c10.r3.morning.choice':'coffee'},check:true};
  const save=finishR3(10,path,base);
  expect(save.campaign.records[10]?.story).toMatchObject({c10Ending:'overnight',c10Venue:'home',c10Night:'hug'});
  expect(save.campaign.records[10]?.cardId).toBe('c10.overnight');
 }
 const changed=finishR3(10,{choices:{'c10.r3.place':'terrace','c10.r3.ending.terrace':'overnight','c10.r3.move':'stay'},check:true},base);
 expect(changed.campaign.records[10]?.story).toMatchObject({c10Ending:'stay',c10Venue:'terrace'});
},60000);
it('trial discard is isolated and idempotent; completed variants do not rewrite canon',()=>{
 const base=finishR3(8),canonical=structuredClone(base.campaign);
 let trial=startR3(8,base,true);trial=reduceSave(trial,r3Action(trial.trial!.run,{},'trial'));
 const discarded=reduceSave(trial,{type:'discard-trial'});
 expect(discarded.trial).toBeNull();expect(discarded.campaign).toEqual(canonical);expect(reduceSave(discarded,{type:'discard-trial'})).toBe(discarded);
 const finished=finishR3(8,{choices:{'c8.r3.ending':'next'}},base,true);expect(finished.campaign).toEqual(canonical);
});
it('active side portraits and note questions are authored only in the new graph',()=>{
 for(const c of [6,7,8,9,10] as const){
  const chapter=getChapter(c)!;let notes=0;
  for(const node of Object.values(chapter.nodes)){
   expect(node.id).toContain('.r3.');
   if(node.kind==='note'){notes++;expect(node.questionId).toBe('s2.r3.q'+c);expect(node.answerOptions).toHaveLength(3);}
   if(node.kind==='choice')expect(node.choices.length).toBeLessThanOrEqual(node.id==='c8.r3.word'?5:4);
  }
  expect(notes).toBe(1);
 }
});
it('all three midnight choices and three mornings preserve a valid exact checkpoint',()=>{
 const base=finishR3(9);
 for(const night of ['hug','kiss','talk'])for(const morning of ['hug','breakfast','coffee']){
  const save=finishR3(10,{choices:{'c10.r3.ending.home':'private','c10.r3.private.choice':'overnight','c10.r3.night':night,'c10.r3.morning.choice':morning}},base);
  expect(parseSave(JSON.stringify(save))).toEqual(save);
 }
});
it('every selected route6 really visits its stops in order and preserves its exact result',()=>{
 const stops:RouteStop[]=['water','lights','window'];
 const paths:EveningRouteResult[]=[{kind:'evening-route',mode:'shared',stops:['lights','water']},{kind:'evening-route',mode:'skipped',stops:[]}];
 for(const a of stops)for(const b of stops)if(a!==b)paths.push({kind:'evening-route',mode:'own',stops:[a,b]});
 for(const path of paths){
  const save=finishR3(6,{results:{'evening-route':path}});
  expect(save.campaign.records[6]?.results['evening-route']).toEqual(path);
  expect(parseSave(JSON.stringify(save))).toEqual(save);
  if(path.stops.length){
   const stop=r3At(6,'c6.r3.stop.'+path.stops[0],{results:{'evening-route':path}});
   expect(stop.campaign.active?.nodeId).toBe('c6.r3.stop.'+path.stops[0]);
  }
 }
});
