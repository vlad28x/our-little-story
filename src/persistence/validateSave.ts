import {initialState} from '../state/initialState';
import {travellerFields,replayTravellers,completedCourtyard} from './travellers';
import {replayPhotoSix,replayGallery,replaySupper,replayCourtyard,completedWalk,completedGallery,completedSupper,galleryFields,supperFields,courtyardFields} from './photoSix';
import { replayFirstSeason } from './replayFirstSeason';
import { getChapter } from '../content/chapters';
import { CONTENT_VERSION } from '../content/version';
import { kitchenOutcome } from '../minigames/kitchenModel';
import { cards,cardFromStory } from '../content/cards';
import type { ChapterId,Run,StoryState,EpisodeChapter } from '../engine/types';
import type { SaveV1 } from '../state/types';
import { normalizeWord,validWord } from './words';
import { episodeStart } from '../content/season2';
export const MAX_SAVE_BYTES=256*1024;
function fail(message='Файл сохранения повреждён или не соответствует этой версии игры.'):never{throw new Error(message);}
function obj(x:unknown):Record<string,unknown>{if(!x||typeof x!=='object'||Array.isArray(x))fail();return x as Record<string,unknown>;}
function keys(x:Record<string,unknown>,allowed:string[]){if(Object.keys(x).some(k=>!allowed.includes(k)))fail();}
function arr(x:unknown,max:number):unknown[]{if(!Array.isArray(x)||x.length>max)fail();return x;}
function integer(x:unknown,max=1000000){if(typeof x!=='number'||!Number.isSafeInteger(x)||x<0||x>max)fail();}
function one(x:unknown,values:readonly unknown[]){if(!values.includes(x))fail();}
const firstFields=['approach','searchResult','catNoticed','pace','plan'];
const secondFields=['rainRoute','catApproach','umbrella','eveningMood'];
const thirdFields=['c4Edition','bench','constellation','wish','c4Goodbye'];
const fourthFields=['controllerReaction','teamName','kitchenStyle','kitchenResult','gameAftercare'];
const sixthFields=['c6Edition','c6PhotoPlace','c6PhotoSubject','c6Gesture','c6Film','c6CameraHolder'];
const seventhFields=galleryFields;
const eighthFields=supperFields;
const ninthFields=courtyardFields;
const tenthFields=travellerFields;
const fields=(id:ChapterId)=>[firstFields,secondFields,thirdFields,fourthFields,['c5Edition','c5FirstTaste','c5Recommendation'],sixthFields,seventhFields,eighthFields,ninthFields,tenthFields].slice(0,id).flat();
const storyEnums={"approach":["joke","help","space"],"searchResult":["tidy","detour","skipped"],"catNoticed":[true,false],"pace":["quiet","playful","flirt"],"plan":["tea","banter","coop"],"rainRoute":["shelter","arcade"],"catApproach":["wait","help"],"umbrella":["patched","borrowed","skipped"],"eveningMood":["quiet","playful"],"c4Edition":[2],"bench":["near","space"],"constellation":["cat","controllers","teapot"],"wish":["adventure","calm"],"c4Goodbye":["accept","her","none"],"controllerReaction":["tease","help","absurd"],"teamName":["dumpling","calm","accident"],"kitchenStyle":["planner","improv"],"kitchenResult":["feast","snack","chaos","skipped"],"gameAftercare":["team","rematch"],"c5Edition":[3],"c5FirstTaste":["vanilla","sweet","compare"],"c5Recommendation":["vanilla","fresh","both"],"c6Edition":[5],"c6PhotoPlace":["upper","water"],"c6PhotoSubject":["vlad","her","place"],"c6Gesture":["hand","hug","none"],"c6Film":["loaded","key","accidental","six"],"c6CameraHolder":["her","vlad"],"c7GalleryRoute":["together","apart"],"c7GalleryWork":["blue","chip"],"c7GalleryGift":["chip","blue","none"],"c7GalleryFrame":["vlad","her","both"],"c7GalleryFarewell":["cheek","words"],"c7Cheek":[true],"c7Film":["key","six"],"c7CameraHolder":["her","vlad"],"c8Place":["home","cafe"],"c8Filling":["pepper","mushroom","mix","simple"],"c8Shape":["fold","open"],"c8Frame":["foodHer","foodVlad","boardHer","boardVlad"],"c8Film":["key","nine"],"c8Step":["follow","lead","play","sit"],"c8LipKiss":["no","yes"],"c8Hoodie":["borrowed","evening","none"],"c9Place":["home","courtyard"],"c9Frame":["vlad","seats","yard"],"c9Film":["key","rain","empty","submitted"],"c9Rain":["canopy","arch","leave"],"c9Bet":["together","alone","skip"],"c9Goodbye":["kiss","hug","words"],"c9LipKiss":["no","yes"],"c9Hoodie":["returned"],"c10Edition":[5],"c10River":["ford","bridge"],"c10Quarry":["tunnel","contour"],"c10Arrival":["marsh","upper"],"c10RiverHelp":[true],"c10QuarryHelp":[true],"c10ArrivalHelp":[true],"c10Continuation":["cafe","home"],"c10CafeGoodbye":["kiss","hug","words"],"c10HomeTender":["kiss","hug","near"],"c10Finale":["cafe","lateLeave","morning","private"],"c10LipKiss":["no","yes"]};
function requireFields(s:StoryState,required:string[]){if(required.some(k=>s[k as keyof StoryState]===undefined))fail();}
function story(x:unknown,id:ChapterId,complete=false):StoryState{
  const o=obj(x);keys(o,fields(id));
  for(const [k,v]of Object.entries(o))one(v,storyEnums[k as keyof typeof storyEnums]);
  const s=o as StoryState;if(complete)requireFields(s,fields(id).filter(k=>!/^c(?:6|7|8|9|10)/.test(k)));
  if((s.searchResult===undefined)!==(s.catNoticed===undefined)||(s.searchResult==='tidy'&&s.catNoticed))fail();
  return s;
}
function sameStory(a:StoryState,b:StoryState){return Object.keys(a).length===Object.keys(b).length&&Object.keys(a).every(k=>a[k as keyof StoryState]===b[k as keyof StoryState]);}
function keepPrior(s:StoryState,prior:StoryState){if(Object.keys(prior).some(k=>s[k as keyof StoryState]!==prior[k as keyof StoryState]))fail('Копия содержит противоречащие друг другу решения глав.');}
function keepPrefix(s:StoryState,prior:StoryState,id:ChapterId){
  keepPrior(s,prior);
  for(const k of fields(id))if(s[k as keyof StoryState]!==prior[k as keyof StoryState])fail('Копия содержит противоречащие друг другу решения глав.');
}
function results(x:unknown,s:StoryState,id:ChapterId){
  const o=obj(x);
  if(id===8||id===9){keys(o,[]);return;}
  if(id===10){keys(o,[]);return;}
  if(id===7){keys(o,[]);return;}
  if(id===6){keys(o,[]);return;}
  if(id===5){keys(o,['memories']);if(o.memories!==undefined){const r=obj(o.memories);keys(r,['kind','outcome']);one(r.kind,['memories']);one(r.outcome,['viewed','skipped']);}return;}
  const game=id===1?'token-search':id===2?'umbrella-patch':id===4?'kitchen':'constellation',outcome=id===1?s.searchResult:id===2?s.umbrella:id===4?s.kitchenResult:s.constellation;
  keys(o,[game]);if(outcome===undefined){if(o[game]!==undefined)fail();return;}
  const r=obj(o[game]);keys(r,id===1?['kind','outcome','catNoticed']:id===2?['kind','outcome']:id===4?['kind','outcome','served','mode']:['kind','outcome','usedPreset']);
  if(id===4){integer(r.served,9);one(r.mode,['timed','calm']);if(r.outcome!=='skipped'&&r.outcome!==kitchenOutcome(r.served as number))fail();}
  if(id===3){one(r.usedPreset,[true,false]);if(r.usedPreset&&r.outcome!=='teapot')fail();}
  if(r.kind!==game||r.outcome!==outcome||(id===1&&r.catNoticed!==s.catNoticed))fail();
}
function attemptId(x:unknown):asserts x is string {if(typeof x!=='string'||!x.length||x.length>64||!/^[a-zA-Z0-9_-]+$/.test(x))fail();}
function record(x:unknown,id:ChapterId){
  const r=obj(x);keys(r,['endingId','cardId','story','results',...(id>=6?['scriptRevision','attemptId','episode']:[])]);
  const st=story(r.story,id,true);results(r.results,st,id);
  if(id===3&&!replayFirstSeason(3,st,r.results as Run['results']))fail();
  if((id===4||id===5)&&!replayFirstSeason(id,st,r.results as Run['results']))fail();
  const card=cardFromStory(st,id,r.results as Run['results']);if(r.cardId!==card.id||r.endingId!==card.id)fail();
  if(id===5&&obj(r.results).memories===undefined)fail();
  if(id===6){one(r.scriptRevision,[st.c6Edition===5?5:4]);attemptId(r.attemptId);if(r.episode!==undefined||!replayPhotoSix(st))fail();}
  if(id===7){one(r.scriptRevision,[5]);attemptId(r.attemptId);if(r.episode!==undefined||!completedWalk(st)||!replayGallery(st))fail();}
  if(id===8){one(r.scriptRevision,[getChapter(8)?.scriptRevision]);attemptId(r.attemptId);if(r.episode!==undefined||!completedGallery(st)||!replaySupper(st))fail();}
  if(id===9){one(r.scriptRevision,[5]);attemptId(r.attemptId);if(r.episode!==undefined||!completedSupper(st)||!replayCourtyard(st))fail();}
  if(id===10){one(r.scriptRevision,[5]);attemptId(r.attemptId);if(r.episode!==undefined||!completedCourtyard(st)||!replayTravellers(st))fail();}
  return r;
}
export function validateRun(x:unknown,maxChapter=10):Run{
  const r=obj(x);one(r.chapter,Array.from({length:maxChapter},(_,i)=>i+1));
  keys(r,['chapter','nodeId','lineIndex','turn','story','results','earned',...(Number(r.chapter)>=6?['scriptRevision','attemptId','episode','activity']:[])]);
  const id=r.chapter as ChapterId,chapter=getChapter(id,obj(r.story) as StoryState),node=chapter?.nodes[r.nodeId as keyof typeof chapter.nodes];
  if(!node||node.kind==='end'||node.kind==='route')fail('Сцена этой копии недоступна. Восстановите резервную копию или начните главу заново.');
  integer(r.lineIndex,node.kind==='dialogue'?node.lines.length-1:0);integer(r.turn);
  const s=story(r.story,id);results(r.results,s,id);const stage=String(r.nodeId);
  if(id===1){
    if(!['c1.prologue','c1.before','c1.entry','c1.door','c1.approach'].includes(stage)&&!s.approach)fail();
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
  if(id===3&&s.bond!==undefined)fail();
  if(id===3||id===4){requireFields(s,fields((id-1) as ChapterId));if(!replayFirstSeason(id,s,r.results as Run['results'],{nodeId:r.nodeId as Run['nodeId'],lineIndex:r.lineIndex as number,turn:r.turn as number}))fail('Решения этой встречи противоречат сцене.');}
  if(id===5)requireFields(s,fields(4));
  if(id===5&&!replayFirstSeason(id,s,r.results as Run['results'],{nodeId:r.nodeId as Run['nodeId'],lineIndex:r.lineIndex as number,turn:r.turn as number}))fail('Решения этой встречи противоречат сцене. Исходная копия сохранена.');
  if(id===6){requireFields(s,fields(5));one(r.scriptRevision,[s.c6Edition===5?5:4]);attemptId(r.attemptId);if(r.episode!==undefined||r.activity!==undefined||!replayPhotoSix(s,{nodeId:r.nodeId as Run['nodeId'],lineIndex:r.lineIndex as number,turn:r.turn as number}))fail('Решения этой встречи противоречат сцене.');}
  if(id===7){requireFields(s,fields(5));one(r.scriptRevision,[5]);attemptId(r.attemptId);if(r.episode!==undefined||r.activity!==undefined||!completedWalk(s)||!replayGallery(s,{nodeId:r.nodeId as Run['nodeId'],lineIndex:r.lineIndex as number,turn:r.turn as number}))fail('Решения галереи противоречат сцене.');}
  if(id===8){requireFields(s,fields(5));one(r.scriptRevision,[chapter.scriptRevision]);attemptId(r.attemptId);if(r.episode!==undefined||r.activity!==undefined||!completedGallery(s)||!replaySupper(s,{nodeId:r.nodeId as Run['nodeId'],lineIndex:r.lineIndex as number,turn:r.turn as number}))fail('Решения ужина противоречат сцене.');}
  if(id===9){requireFields(s,fields(5));one(r.scriptRevision,[5]);attemptId(r.attemptId);if(r.episode!==undefined||r.activity!==undefined||!completedSupper(s)||!replayCourtyard(s,{nodeId:r.nodeId as Run['nodeId'],lineIndex:r.lineIndex as number,turn:r.turn as number}))fail('Решения кинодворика противоречат сцене.');}
  if(id===10){requireFields(s,fields(5));one(r.scriptRevision,[5]);attemptId(r.attemptId);if(r.episode!==undefined||r.activity!==undefined||!completedCourtyard(s)||!replayTravellers(s,{nodeId:r.nodeId as Run['nodeId'],lineIndex:r.lineIndex as number,turn:r.turn as number}))fail('Решения путешественников противоречат сцене.');}
  const earned=arr(r.earned,1),achievement=['cat-supervisor','dry-plan','own-sky','full-table','five-meetings'][id-1];
  const gameResults=obj(r.results);
  const shouldEarn=id===1?!!s.catNoticed:id===2?s.umbrella==='patched':id===4?gameResults.kitchen!==undefined&&obj(gameResults.kitchen).served===9&&s.kitchenResult!=='skipped':id===3?gameResults.constellation!==undefined&&!obj(gameResults.constellation).usedPreset:false;
  earned.forEach(a=>one(a,[achievement]));if(earned.includes(achievement)!==shouldEarn)fail();
  return r as unknown as Run;
}
export function validateSave(raw:string):SaveV1{
  if(new TextEncoder().encode(raw).length>MAX_SAVE_BYTES)fail('Копия слишком большая. Максимум 256 КБ.');
  const s=obj(JSON.parse(raw,(key,value:unknown)=>{if(['__proto__','prototype','constructor'].includes(key))fail();return value;}));
  keys(s,['appId','schemaVersion','contentVersion','revision','updatedAt','settings','unlocked','campaign','trial','lastResult','collection','continuation','continuation10','privateNotes','localNoteRevision','privateWords']);
  if(s.appId!=='five-meetings')fail('Это сохранение другой игры.');
  if(s.schemaVersion!==1||s.contentVersion!==CONTENT_VERSION)fail('Эта копия создана другой версией игры. Обновите страницу или сохраните исходную копию. Текущий прогресс не изменён.');
  const maxChapter=10,chapterIds=Array.from({length:maxChapter},(_,i)=>i+1) as ChapterId[];
  integer(s.revision);if(typeof s.updatedAt!=='string'||s.updatedAt.length>40||!Number.isFinite(Date.parse(s.updatedAt)))fail();
  const settings=obj(s.settings);keys(settings,['sound','volume','textMode','motion']);one(settings.sound,[true,false]);one(settings.textMode,['instant','type']);one(settings.motion,['system','reduced','full']);if(typeof settings.volume!=='number'||!Number.isFinite(settings.volume)||settings.volume<0||settings.volume>1)fail();
  const unlocked=arr(s.unlocked,10);unlocked.forEach(n=>one(n,[1,2,3,4,5,6,7,8,9,10]));if(!unlocked.includes(1)||new Set(unlocked).size!==unlocked.length)fail();
  const c=obj(s.campaign);keys(c,['completed','startStates','records','active']);const done=arr(c.completed,maxChapter);done.forEach((id,i)=>{if(id!==i+1)fail();});
  const allowed=chapterIds.map(String);const starts=obj(c.startStates),records=obj(c.records);keys(starts,allowed);keys(records,allowed);
  if(starts['1']!==undefined&&Object.keys(story(starts['1'],1)).length)fail();
  for(const id of chapterIds){
    if(id>maxChapter)continue;
    if(done.includes(id)){
      const r=record(records[id],id);const st=r.story as StoryState;
      if(!starts[id])fail();
      if(id>1)keepPrefix(st,story(obj(records[id-1]).story,(id-1) as ChapterId,true),(id-1) as ChapterId);
    }else if(records[id]!==undefined)fail();
  }
  for(const id of chapterIds.filter(id=>id>1))if(starts[id]!==undefined){const prev=(id-1) as ChapterId;if(!done.includes(prev))fail();const prior=episodeStart(id,story(obj(records[prev]).story,prev,true),obj(records[prev]).results as Run['results']);const start=story(starts[id],id===7?7:prev);requireFields(start,fields(prev).filter(k=>!/^c(?:6|7|8|9|10)/.test(k)));if(!sameStory(start,prior))fail();}
  if(c.active!==null){const run=validateRun(c.active,maxChapter);if(run.chapter!==done.length+1||!starts[run.chapter]||!unlocked.includes(run.chapter))fail();if(run.chapter>1)keepPrefix(run.story,story(starts[run.chapter],run.chapter===7?7:(run.chapter-1) as ChapterId),(run.chapter-1) as ChapterId);}
  if(s.trial!==null){const t=obj(s.trial);keys(t,['chapter','run']);one(t.chapter,chapterIds);const run=validateRun(t.run,maxChapter);if(t.chapter!==run.chapter||!starts[run.chapter]||run.chapter>=6&&(!done.includes(run.chapter)||run.attemptId===obj(records[run.chapter]).attemptId))fail();if(run.chapter>1)keepPrefix(run.story,story(starts[run.chapter],run.chapter===7?7:(run.chapter-1) as ChapterId),(run.chapter-1) as ChapterId);}
  const collection=obj(s.collection);keys(collection,['cards','achievements',...(maxChapter>=6?['memories','secrets']:[])]);const cs=arr(collection.cards,35),ids:string[]=[];
  for(const item of cs){const card=obj(item);keys(card,['c5Edition','id','chapter','endingId','variant','captionId',...(maxChapter>=3?['teamName']:[]),...(maxChapter>=4?['usedPreset']:[]),...(maxChapter>=8?['venue']:[])]);if(typeof card.id!=='string'||!Object.hasOwn(cards,card.id))fail();if(card.c5Edition!==undefined&&(card.c5Edition!==3||card.id!=='c5.story'))fail();const meta=cards[card.id as keyof typeof cards];if(meta.chapter===6&&!['c6.photo.friends','c6.photo.romance','c6.photo.walk'].includes(String(card.id)))fail();if(meta.chapter===7&&card.id!=='c7.gallery')fail();if(meta.chapter===8&&(card.id!=='c8.supper'||card.venue!=='home'))fail();if(meta.chapter===9&&(card.id!=='c9.courtyard'||card.venue!=='courtyard'))fail();if(card.endingId!==card.id||card.chapter!==meta.chapter||meta.chapter>maxChapter)fail();if(meta.chapter===10&&(card.id!=='c10.travellers'||card.venue!==(card.variant==='cafe'?'cafe':'home')))fail();one(card.variant,card.id==='c10.travellers'?['cafe','lateLeave','morning','private']:meta.chapter===1?['tidy','detour','skipped']:meta.chapter===2?['patched','borrowed','skipped']:meta.chapter===4?['feast','snack','chaos','skipped']:meta.chapter===3?['cat','controllers','teapot']:card.id==='c10.overnight'?['morning']:card.id==='c6.photo.friends'?['walk','goodbye']:['c6.photo.romance','c6.photo.walk'].includes(String(card.id))?['upper','water']:card.id==='c7.gallery'?['together','apart']:card.id==='c8.supper'?['fold','open']:card.id==='c9.courtyard'?['canopy','arch','leave']:meta.chapter>=6?['evening']:['adventure','calm']);if(card.captionId!==`${card.id}.${card.variant}`)fail();if(meta.chapter===4)one(card.teamName,storyEnums.teamName);else if(card.teamName!==undefined)fail();if(meta.chapter===3){one(card.usedPreset,[true,false]);if(card.usedPreset&&card.variant!=='teapot')fail();}else if(card.usedPreset!==undefined)fail();if(meta.chapter>=8)one(card.venue,meta.chapter===8?['home','cafe']:meta.chapter===9?['home','courtyard']:['home','cafe']);else if(card.venue!==undefined)fail();if((card.id==='c10.private'||card.id==='c10.overnight')&&card.venue!=='home')fail();ids.push(card.id);}
  if(new Set(ids).size!==ids.length)fail();const earned=arr(collection.achievements,maxChapter);earned.forEach(a=>one(a,['cat-supervisor','dry-plan','full-table','own-sky','five-meetings'].slice(0,maxChapter)));if(new Set(earned).size!==earned.length)fail();
  for(const id of done)if(!ids.includes(String(obj(records[id as string]).cardId)))fail();
  if(s.lastResult!==null){const r=obj(s.lastResult);keys(r,['chapter','cardId','source',...(maxChapter>=6?['episodeRecord']:[])]);one(r.chapter,Array.from({length:maxChapter},(_,i)=>i+1));one(r.source,['campaign','trial']);if(!ids.includes(String(r.cardId))||cards[r.cardId as keyof typeof cards].chapter!==r.chapter)fail();if(r.source==='campaign'&&obj(records[r.chapter as string]).cardId!==r.cardId)fail();
    if(Number(r.chapter)>=6&&r.source==='trial'){
      const rec=record(r.episodeRecord,r.chapter as EpisodeChapter);if(rec.cardId!==r.cardId||rec.attemptId===obj(records[r.chapter as string]).attemptId||!done.includes(r.chapter))fail();
      keepPrior(rec.story as StoryState,story(starts[r.chapter as string],r.chapter===7?7:(Number(r.chapter)-1) as ChapterId));
    }else if(r.episodeRecord!==undefined)fail();
  }
  if(earned.includes('five-meetings')&&!ids.some(id=>id.startsWith('c5.')))fail();
  if(done.includes(5)&&!earned.includes('five-meetings'))fail();
  one(s.continuation,maxChapter>=5?[null,'game','movie','cafe','walk','decline','public','chat','later']:[null]);if(s.continuation!==null&&!done.includes(5))fail();
  if(arr(collection.memories,0).length||arr(collection.secrets,0).length||Object.keys(obj(s.privateNotes)).length||Object.keys(obj(s.privateWords)).length)fail();integer(s.localNoteRevision);
  if(maxChapter>=8){const words=obj(s.privateWords);keys(words,['campaign','trial']);for(const value of Object.values(words)){const w=obj(value);keys(w,['chapter','labelId','attemptId','status','text']);one(w.chapter,[8]);one(w.labelId,['s2.word8']);attemptId(w.attemptId);one(w.status,['saved','deleted']);if(typeof w.text!=='string'||normalizeWord(w.text)!==w.text||w.status==='deleted'&&w.text!==''||w.status==='saved'&&!validWord(w.text))fail();}}else s.privateWords={};
  one(s.continuation10,[null,'game','movie','cook','out','decline']);if(s.continuation10!==null&&!done.includes(10))fail();
  s.contentVersion=CONTENT_VERSION;
  return s as unknown as SaveV1;
}

// The new supper has different dialogue cursors. Keep the prefix and restart at eight.
function discardPreviousSupper(save:Record<string,unknown>):boolean{
 const campaign=obj(save.campaign),records=obj(campaign.records);
 const active=campaign.active===null?null:obj(campaign.active);
 const supper=records[8]===undefined?null:obj(records[8]);
 if(supper?.scriptRevision!==5&&!(active?.chapter===8&&active.scriptRevision===5))return false;
 const affected=[8,9,10];
 const fromSupper=(chapter:unknown)=>typeof chapter==='number'&&affected.includes(chapter);
 const completed=arr(campaign.completed,10);
 if(!completed.includes(7))fail();
 campaign.completed=completed.filter(chapter=>!fromSupper(chapter));
 const starts=obj(campaign.startStates);
 for(const chapter of affected){delete records[chapter];delete starts[chapter];}
 if(fromSupper(active?.chapter))campaign.active=null;
 if(save.trial!==null&&fromSupper(obj(save.trial).chapter))save.trial=null;
 if(save.lastResult!==null&&fromSupper(obj(save.lastResult).chapter))save.lastResult=null;
 const collection=obj(save.collection);
 collection.cards=arr(collection.cards,35).filter(card=>!fromSupper(obj(card).chapter));
 save.continuation10=null;
 return true;
}

// Older content versions restart once; no legacy graph or cursor migration is loaded.
export function parseSave(raw:string):SaveV1{
 if(new TextEncoder().encode(raw).length>MAX_SAVE_BYTES)fail('Копия слишком большая. Максимум 256 КБ.');
 const header=obj(JSON.parse(raw,(key,value:unknown)=>{if(['__proto__','prototype','constructor'].includes(key))fail();return value;}));
 keys(header,['appId','schemaVersion','contentVersion','revision','updatedAt','settings','unlocked','campaign','trial','lastResult','collection','continuation','continuation10','privateNotes','privateWords','localNoteRevision']);
 if(header.appId!=='five-meetings'||header.schemaVersion!==1)fail('Это сохранение другой игры или неподдерживаемого формата.');
 integer(header.contentVersion,CONTENT_VERSION);if(Number(header.contentVersion)<1)fail();
 integer(header.revision);if(typeof header.updatedAt!=='string'||header.updatedAt.length>40||!Number.isFinite(Date.parse(header.updatedAt)))fail();
 const settings=obj(header.settings);keys(settings,['sound','volume','textMode','motion']);one(settings.sound,[true,false]);one(settings.textMode,['instant','type']);one(settings.motion,['system','reduced','full']);if(typeof settings.volume!=='number'||!Number.isFinite(settings.volume)||settings.volume<0||settings.volume>1)fail();
 const unlocked=arr(header.unlocked,10);unlocked.forEach(id=>one(id,[1,2,3,4,5,6,7,8,9,10]));if(!unlocked.includes(1)||new Set(unlocked).size!==unlocked.length)fail();
 const fresh:SaveV1={...initialState(),settings:settings as SaveV1['settings'],unlocked:unlocked as ChapterId[],revision:header.revision as number,updatedAt:header.updatedAt};
 if(Number(header.contentVersion)<CONTENT_VERSION)return fresh;
 try{return validateSave(discardPreviousSupper(header)?JSON.stringify(header):raw);}catch{return fresh;}
}
