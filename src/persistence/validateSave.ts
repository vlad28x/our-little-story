import { getChapter } from '../content/chapters';
import { kitchenOutcome } from '../minigames/kitchenModel';
import { cards,cardFromStory } from '../content/cards';
import type { ChapterId,Run,StoryState } from '../engine/types';
import type { SaveV1 } from '../state/types';
export const MAX_SAVE_BYTES=256*1024;
function fail(message='Файл сохранения повреждён или не соответствует этой версии игры.'):never{throw new Error(message);}
function obj(x:unknown):Record<string,unknown>{if(!x||typeof x!=='object'||Array.isArray(x))fail();return x as Record<string,unknown>;}
function keys(x:Record<string,unknown>,allowed:string[]){if(Object.keys(x).some(k=>!allowed.includes(k)))fail();}
function arr(x:unknown,max:number):unknown[]{if(!Array.isArray(x)||x.length>max)fail();return x;}
function integer(x:unknown,max=1000000){if(typeof x!=='number'||!Number.isSafeInteger(x)||x<0||x>max)fail();}
function one(x:unknown,values:readonly unknown[]){if(!values.includes(x))fail();}
const firstFields=['approach','searchResult','catNoticed','pace','plan'];
const secondFields=['rainRoute','catApproach','umbrella','eveningMood'];
const thirdFields=['controllerReaction','teamName','kitchenStyle','kitchenResult','gameAftercare'];
const fourthFields=['bench','constellation','bond','wish'];
const fields=(id:ChapterId)=>[firstFields,secondFields,thirdFields,fourthFields,['ending']].slice(0,id).flat();
const storyEnums={approach:['joke','help','space'],searchResult:['tidy','detour','skipped'],catNoticed:[true,false],pace:['quiet','playful','flirt'],plan:['tea','banter','coop'],rainRoute:['shelter','arcade'],catApproach:['wait','help'],umbrella:['patched','borrowed','skipped'],eveningMood:['quiet','playful'],controllerReaction:['tease','help','absurd'],teamName:['dumpling','calm','accident'],kitchenStyle:['planner','improv'],kitchenResult:['feast','snack','chaos','skipped'],gameAftercare:['team','rematch'],bench:['near','space'],constellation:['cat','controllers','teapot'],bond:['romantic','friendly','undecided'],wish:['adventure','calm'],ending:['romantic','comic','gaming','friendly']};
function requireFields(s:StoryState,fields:string[]){if(fields.some(k=>s[k as keyof StoryState]===undefined))fail();}
function story(x:unknown,id:ChapterId,complete=false):StoryState{
  const o=obj(x);keys(o,fields(id));
  for(const [k,v]of Object.entries(o))one(v,storyEnums[k as keyof typeof storyEnums]);
  const s=o as StoryState;if(complete)requireFields(s,fields(id));
  if((s.searchResult===undefined)!==(s.catNoticed===undefined)||(s.searchResult==='tidy'&&s.catNoticed))fail();
  return s;
}
function sameStory(a:StoryState,b:StoryState){return Object.keys(a).length===Object.keys(b).length&&Object.keys(a).every(k=>a[k as keyof StoryState]===b[k as keyof StoryState]);}
function keepPrior(s:StoryState,prior:StoryState){if(Object.keys(prior).some(k=>s[k as keyof StoryState]!==prior[k as keyof StoryState]))fail('Копия содержит противоречащие друг другу решения глав.');}
function results(x:unknown,s:StoryState,id:ChapterId){
  const o=obj(x);
  if(id===5){keys(o,['memories']);if(o.memories!==undefined){const r=obj(o.memories);keys(r,['kind','outcome']);one(r.kind,['memories']);one(r.outcome,['viewed','skipped']);}return;}
  const game=id===1?'token-search':id===2?'umbrella-patch':id===3?'kitchen':'constellation',outcome=id===1?s.searchResult:id===2?s.umbrella:id===3?s.kitchenResult:s.constellation;
  keys(o,[game]);if(outcome===undefined){if(o[game]!==undefined)fail();return;}
  const r=obj(o[game]);keys(r,id===1?['kind','outcome','catNoticed']:id===2?['kind','outcome']:id===3?['kind','outcome','served','mode']:['kind','outcome','usedPreset']);
  if(id===3){integer(r.served,9);one(r.mode,['timed','calm']);if(r.outcome!=='skipped'&&r.outcome!==kitchenOutcome(r.served as number))fail();}
  if(id===4){one(r.usedPreset,[true,false]);if(r.usedPreset&&r.outcome!=='teapot')fail();}
  if(r.kind!==game||r.outcome!==outcome||(id===1&&r.catNoticed!==s.catNoticed))fail();
}
export function validateRun(x:unknown,maxChapter=5):Run{
  const r=obj(x);keys(r,['chapter','nodeId','lineIndex','turn','story','journal','results','earned']);one(r.chapter,Array.from({length:maxChapter},(_,i)=>i+1));
  const id=r.chapter as ChapterId,chapter=getChapter(id),node=chapter?.nodes[r.nodeId as keyof typeof chapter.nodes];
  if(!node||node.kind==='end'||node.kind==='route')fail('Сцена этой копии недоступна. Восстановите резервную копию или начните главу заново.');
  integer(r.lineIndex,node.kind==='dialogue'?node.lines.length-1:0);integer(r.turn);
  const s=story(r.story,id);results(r.results,s,id);const stage=String(r.nodeId);
  if(id===1){
    if(!['c1.entry','c1.door','c1.approach'].includes(stage)&&!s.approach)fail();
    if((stage.startsWith('c1.search.')&&stage!=='c1.search.intro'||stage==='c1.inside'||stage.startsWith('c1.pace')||stage==='c1.table'||stage.startsWith('c1.detail')||stage==='c1.pause'||stage==='c1.plan'||stage.startsWith('c1.end'))&&!s.searchResult)fail();
    if((stage.startsWith('c1.pace.')||stage==='c1.table'||stage.startsWith('c1.detail')||stage==='c1.pause'||stage==='c1.plan'||stage.startsWith('c1.end'))&&!s.pace)fail();
    if(stage.startsWith('c1.end.')&&stage!==`c1.end.${s.plan}`)fail();
  }else if(id===2){
    requireFields(s,firstFields);
    const beforeRain=['c2.arrival','c2.pace.quiet','c2.pace.flirt','c2.pace.playful','c2.plan.tea','c2.plan.coop','c2.plan.banter','c2.rain.intro','c2.rain'];
    if(!beforeRain.includes(stage)&&!s.rainRoute)fail();
    if((['c2.cat.wait','c2.cat.help'].includes(stage)||stage.startsWith('c2.umbrella')||stage.startsWith('c2.pause')||stage.startsWith('c2.cat.echo')||stage.startsWith('c2.end'))&&!s.catApproach)fail();
    if((['c2.umbrella.patched','c2.umbrella.borrowed','c2.umbrella.skipped'].includes(stage)||stage.startsWith('c2.pause')||stage.startsWith('c2.cat.echo')||stage.startsWith('c2.end'))&&!s.umbrella)fail();
    if((stage.startsWith('c2.pause.')&&stage!=='c2.pause.intro'||stage==='c2.end')&&!s.eveningMood)fail();
    if(['c2.rain.shelter','c2.rain.arcade'].includes(stage)&&stage!==`c2.rain.${s.rainRoute}`)fail();
  }
  if(id===3){
    requireFields(s,fields(2));
    const beforeReaction=['c3.sofa','c3.mood.quiet','c3.mood.playful','c3.pad.setup','c3.pad.press','c3.pad.dead','c3.pad.reaction'];
    if(!beforeReaction.includes(stage)&&!s.controllerReaction)fail();
    if((stage.startsWith('c3.team.')||stage==='c3.role'||stage.startsWith('c3.pad.echo')||stage==='c3.tutorial'||stage==='c3.kitchen'||stage.startsWith('c3.debrief')||stage.startsWith('c3.support')||stage==='c3.end')&&!s.teamName)fail();
    if((stage.startsWith('c3.pad.echo')||stage==='c3.tutorial'||stage==='c3.kitchen'||stage.startsWith('c3.debrief')||stage.startsWith('c3.support')||stage==='c3.end')&&!s.kitchenStyle)fail();
    if((stage.startsWith('c3.debrief')||stage.startsWith('c3.support')||stage==='c3.end')&&!s.kitchenResult)fail();
    if((stage.startsWith('c3.support.')||stage==='c3.end')&&!s.gameAftercare)fail();
    for(const [prefix,value] of [['c3.pad.',s.controllerReaction],['c3.pad.echo.',s.controllerReaction],['c3.team.',s.teamName],['c3.debrief.',s.kitchenResult],['c3.support.',s.gameAftercare]]){
      if(stage.startsWith(prefix!)&&Object.values(storyEnums).some(list=>(list as readonly unknown[]).includes(stage.slice(prefix!.length)))&&stage!==prefix!+value)fail();
    }
  }
  if(id===4){
    requireFields(s,fields(3));
    const beforeBench=['c4.walk','c4.team.dumpling','c4.team.calm','c4.team.accident','c4.after.team','c4.after.rematch','c4.distance'];
    if(!beforeBench.includes(stage)&&!s.bench)fail();
    if((['c4.stars.cat','c4.stars.controllers','c4.stars.teapot','c4.honest','c4.bond'].includes(stage)||stage.startsWith('c4.bond.')||stage.startsWith('c4.wish')||stage==='c4.end')&&!s.constellation)fail();
    if((stage.startsWith('c4.bond.')||stage.startsWith('c4.wish')||stage==='c4.end')&&!s.bond)fail();
    if((['c4.wish.adventure','c4.wish.calm','c4.end'].includes(stage))&&!s.wish)fail();
    for(const [prefix,value] of [['c4.distance.',s.bench],['c4.bond.',s.bond],['c4.stars.',s.constellation],['c4.wish.',s.wish]]){
      const suffix=stage.slice(prefix!.length);if(stage.startsWith(prefix!)&&suffix!=='intro'&&stage!==prefix!+value)fail();
    }
  }
  if(id===5){
    requireFields(s,fields(4));
    const afterAlbum=stage==='c5.letter'||stage.startsWith('c5.tone.')||stage.startsWith('c5.ending.')||stage.startsWith('c5.gaming.');
    if(afterAlbum&&obj(r.results).memories===undefined)fail();
    if((stage.startsWith('c5.ending.')||stage.startsWith('c5.gaming.'))&&!s.ending)fail();
    if(stage.startsWith('c5.ending.')&&stage!==`c5.ending.${s.ending}`)fail();
    if(stage.startsWith('c5.gaming.')&&s.ending!=='gaming')fail();
    if(stage==='c5.tone.friendly'&&s.bond!=='friendly'||stage==='c5.tone.open'&&s.bond==='friendly')fail();
    for(const [prefix,value] of [['c5.rain.',s.rainRoute],['c5.souvenir.',s.umbrella],['c5.cat.',s.catApproach],['c5.approach.',s.approach]])if(stage.startsWith(prefix!)&&stage!==prefix!+value)fail();
  }
  for(const e of arr(r.journal,150)){const j=obj(e);keys(j,['key','nodeId','speaker','text','emotion']);if(typeof j.key!=='string'||j.key.length>100||!chapter?.nodes[j.nodeId as keyof typeof chapter.nodes])fail();one(j.speaker,['narrator','vlad','heroine','nina']);if(typeof j.text!=='string'||j.text.length>2000)fail();if(j.emotion!==undefined)one(j.emotion,['neutral','smile','awkward','thinking','laugh','warm','surprised']);}
  const earned=arr(r.earned,1),achievement=['cat-supervisor','dry-plan','full-table','own-sky','five-meetings'][id-1];
  const gameResults=obj(r.results);
  const shouldEarn=id===1?!!s.catNoticed:id===2?s.umbrella==='patched':id===3?gameResults.kitchen!==undefined&&obj(gameResults.kitchen).served===9&&s.kitchenResult!=='skipped':id===4?gameResults.constellation!==undefined&&!obj(gameResults.constellation).usedPreset:false;
  earned.forEach(a=>one(a,[achievement]));if(earned.includes(achievement)!==shouldEarn)fail();
  return r as unknown as Run;
}
export function parseSave(raw:string):SaveV1{
  if(new TextEncoder().encode(raw).length>MAX_SAVE_BYTES)fail('Копия слишком большая. Максимум 256 КБ.');
  const s=obj(JSON.parse(raw,(key,value:unknown)=>{if(['__proto__','prototype','constructor'].includes(key))fail();return value;}));
  keys(s,['appId','schemaVersion','contentVersion','revision','updatedAt','settings','unlocked','campaign','trial','lastResult','collection','continuation']);
  if(s.appId!=='five-meetings')fail('Это сохранение другой игры.');
  if(s.schemaVersion!==1||![1,2,3,4,5].includes(s.contentVersion as number))fail('Эта копия создана другой версией игры. Текущий прогресс не изменён.');
  const maxChapter=s.contentVersion as number,chapterIds=Array.from({length:maxChapter},(_,i)=>i+1) as ChapterId[];
  integer(s.revision);if(typeof s.updatedAt!=='string'||s.updatedAt.length>40||!Number.isFinite(Date.parse(s.updatedAt)))fail();
  const settings=obj(s.settings);keys(settings,['sound','volume','textMode','motion']);one(settings.sound,[true,false]);one(settings.textMode,['instant','type']);one(settings.motion,['system','reduced','full']);if(typeof settings.volume!=='number'||!Number.isFinite(settings.volume)||settings.volume<0||settings.volume>1)fail();
  const unlocked=arr(s.unlocked,5);unlocked.forEach(n=>one(n,[1,2,3,4,5]));if(!unlocked.includes(1)||new Set(unlocked).size!==unlocked.length)fail();
  const c=obj(s.campaign);keys(c,['completed','startStates','records','active']);const done=arr(c.completed,maxChapter);done.forEach((id,i)=>{if(id!==i+1)fail();});
  const allowed=chapterIds.map(String);const starts=obj(c.startStates),records=obj(c.records);keys(starts,allowed);keys(records,allowed);
  if(starts['1']!==undefined&&Object.keys(story(starts['1'],1)).length)fail();
  for(const id of chapterIds){
    if(id>maxChapter)continue;
    if(done.includes(id)){
      const r=obj(records[id]);keys(r,['endingId','cardId','story','results']);const st=story(r.story,id,true),card=cardFromStory(st,id,r.results as Run['results']);
      if(r.cardId!==card.id||r.endingId!==card.id||!starts[id])fail();results(r.results,st,id);if(id===5&&obj(r.results).memories===undefined)fail();
      if(id>1)keepPrior(st,story(obj(records[id-1]).story,(id-1) as ChapterId,true));
    }else if(records[id]!==undefined)fail();
  }
  for(const id of chapterIds.filter(id=>id>1))if(starts[id]!==undefined){const prev=(id-1) as ChapterId;if(!done.includes(prev))fail();const prior=story(obj(records[prev]).story,prev,true);if(!sameStory(story(starts[id],prev,true),prior))fail();}
  if(c.active!==null){const run=validateRun(c.active,maxChapter);if(run.chapter!==done.length+1||!starts[run.chapter]||!unlocked.includes(run.chapter))fail();if(run.chapter>1)keepPrior(run.story,story(starts[run.chapter],(run.chapter-1) as ChapterId,true));}
  if(s.trial!==null){const t=obj(s.trial);keys(t,['chapter','run']);one(t.chapter,chapterIds);const run=validateRun(t.run,maxChapter);if(t.chapter!==run.chapter||!starts[run.chapter])fail();if(run.chapter>1)keepPrior(run.story,story(starts[run.chapter],(run.chapter-1) as ChapterId,true));}
  const collection=obj(s.collection);keys(collection,['cards','achievements']);const cs=arr(collection.cards,maxChapter===1?3:maxChapter===2?5:maxChapter===3?6:maxChapter===4?8:12),ids:string[]=[];
  for(const item of cs){const card=obj(item);keys(card,['id','chapter','endingId','variant','captionId',...(maxChapter>=3?['teamName']:[]),...(maxChapter>=4?['usedPreset']:[])]);if(typeof card.id!=='string'||!Object.hasOwn(cards,card.id))fail();const meta=cards[card.id as keyof typeof cards];if(card.endingId!==card.id||card.chapter!==meta.chapter||meta.chapter>maxChapter)fail();one(card.variant,meta.chapter===1?['tidy','detour','skipped']:meta.chapter===2?['patched','borrowed','skipped']:meta.chapter===3?['feast','snack','chaos','skipped']:meta.chapter===4?['cat','controllers','teapot']:['adventure','calm']);if(card.captionId!==`${card.id}.${card.variant}`)fail();if(meta.chapter===3)one(card.teamName,storyEnums.teamName);else if(card.teamName!==undefined)fail();if(meta.chapter===4){one(card.usedPreset,[true,false]);if(card.usedPreset&&card.variant!=='teapot')fail();}else if(card.usedPreset!==undefined)fail();ids.push(card.id);}
  if(new Set(ids).size!==ids.length)fail();const earned=arr(collection.achievements,maxChapter);earned.forEach(a=>one(a,['cat-supervisor','dry-plan','full-table','own-sky','five-meetings'].slice(0,maxChapter)));if(new Set(earned).size!==earned.length)fail();
  for(const id of done)if(!ids.includes(String(obj(records[id as string]).cardId)))fail();
  if(s.lastResult!==null){const r=obj(s.lastResult);keys(r,['chapter','cardId','source']);one(r.chapter,Array.from({length:maxChapter},(_,i)=>i+1));one(r.source,['campaign','trial']);if(!ids.includes(String(r.cardId))||cards[r.cardId as keyof typeof cards].chapter!==r.chapter)fail();if(r.source==='campaign'&&obj(records[r.chapter as string]).cardId!==r.cardId)fail();}
  if(earned.includes('five-meetings')&&!ids.some(id=>id.startsWith('c5.')))fail();
  if(done.includes(5)&&!earned.includes('five-meetings'))fail();
  one(s.continuation,maxChapter===5?[null,'game','movie','cafe','walk','decline','public','chat','later']:[null]);if(s.continuation!==null&&!done.includes(5))fail();
  // The envelope has not changed. Version 1 contains only chapter one; upgrading
  // its content version preserves every cursor, choice, card, setting and right.
  s.contentVersion=5;
  return s as unknown as SaveV1;
}
