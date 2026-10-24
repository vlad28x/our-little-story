import { replayFirstSeason,firstSeasonEdition } from './replayFirstSeason';
import { parseSave as parseR2Save } from '../legacy/r2/persistence/validateSave';
import { parseSave as parseLegacySave } from '../legacy/r1/persistence/validateSave';
import { getChapter } from '../content/chapters';
import { kitchenOutcome } from '../minigames/kitchenModel';
import { cards,cardFromStory } from '../content/cards';
import type { ChapterId,Run,StoryState,EpisodeChapter } from '../engine/types';
import type { SaveV1 } from '../state/types';
import { validRouteResult } from '../minigames/eveningRouteModel';
import { validCouncilResult } from '../minigames/betweenLinesModel';
import { validDessertResult } from '../minigames/dessertModel';
import { validMovieResult } from '../minigames/movieSetupModel';
import { validLightResult } from '../minigames/eveningLightModel';
import { normalizeWord,validWord } from './words';
import { episodeChapters,episodeStart,memoryRegistry,secretRegistry } from '../content/season2';
import { noteLength,normalizeNote,validNote } from './notes';
import { reachableEpisode } from './validateEpisode';
import type { EpisodeProgress } from '../engine/types';
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
const fourthFields=['c4Edition','bench','constellation','bond','wish','c4Goodbye'];
const sixthFields=["c6Voice", "c6Moment", "c6Note", "c6Ending", "c6Keepsake"];
const seventhFields=["c7Aside", "c7Moment", "c7Reply", "c7Note", "c7Ending", "c7Story", "c7Rain"];
const eighthFields=["c8Place", "c8Word", "c8Dance", "c8Tender", "c8Hoodie", "c8Note", "c8Approach", "c8Ending", "c8Cheek", "c8LipKiss", "c8FirstGesture", "c8LateMode", "c8LateTender", "c8Close"];
const ninthFields=["c9Place", "c9Hoodie", "c9Moment", "c9Note", "c9Approach", "c9Ending", "c9LipKiss", "c9Closeness", "c9Break", "c9SecondMoment", "c9Close"];
const tenthFields=["c10Place", "c10Venue", "c10Memory", "c10Aside", "c10Note", "c10Intent", "c10Ending", "c10Move", "c10Affection", "c10Morning", "c10LipKiss", "c10EveningKiss", "c10MorningPreference", "c10Talk", "c10EveningMoment", "c10Night"];
const fields=(id:ChapterId)=>[firstFields,secondFields,thirdFields,fourthFields,['c5Edition','ending','c5FirstTaste','c5Recommendation'],sixthFields,seventhFields,eighthFields,ninthFields,tenthFields].slice(0,id).flat();
const storyEnums={c4Edition:[2],c5Edition:[2,3],c5FirstTaste:['vanilla','sweet','compare'],c5Recommendation:['vanilla','fresh','both'],"approach": ["joke", "help", "space"], "searchResult": ["tidy", "detour", "skipped"], "catNoticed": [true, false], "pace": ["quiet", "playful", "flirt"], "plan": ["tea", "banter", "coop"], "rainRoute": ["shelter", "arcade"], "catApproach": ["wait", "help"], "umbrella": ["patched", "borrowed", "skipped"], "eveningMood": ["quiet", "playful"], "controllerReaction": ["tease", "help", "absurd"], "teamName": ["dumpling", "calm", "accident"], "kitchenStyle": ["planner", "improv"], "kitchenResult": ["feast", "snack", "chaos", "skipped"], "gameAftercare": ["team", "rematch"], "bench": ["near", "space"], "constellation": ["cat", "controllers", "teapot"], "bond": ["romantic", "friendly", "undecided"], "wish": ["adventure", "calm"], "c4Goodbye": ["accept", "her", "none"], "ending": ["romantic", "comic", "gaming", "friendly"], "c6Voice": ["tease", "lead", "quiet"], "c6Moment": ["hug", "hand", "talk", "walk"], "c6Note": ["saved", "skipped"], "c6Ending": ["hand", "lap", "home"], "c7Aside": ["hush", "joke", "ignore"], "c7Moment": ["cheek", "collar", "near", "space"], "c7Reply": ["kind", "hand", "pause"], "c7Note": ["saved", "skipped"], "c7Ending": ["open", "promise", "calm"], "c8Place": ["home", "cafe"], "c8Word": ["minute", "slow", "taks", "none", "custom"], "c8Dance": ["close", "lead", "playful"], "c8Tender": ["curls", "hair", "cheek", "neck", "dance"], "c8Hoodie": ["borrowed", "evening", "none"], "c8Note": ["saved", "skipped"], "c8Approach": ["her", "ask", "none"], "c8Ending": ["kiss", "near", "tea"], "c9Place": ["home", "courtyard"], "c9Hoodie": ["returned", "kept"], "c9Moment": ["pause", "shoulder", "banter", "watch"], "c9Note": ["saved", "skipped"], "c9Approach": ["her", "ask", "none"], "c9Ending": ["kiss", "hug", "film"], "c10Place": ["home", "terrace"], "c10Venue": ["home", "terrace"], "c10Memory": ["pause", "laugh", "initiative", "none"], "c10Aside": ["self", "last", "quiet"], "c10Note": ["saved", "skipped"], "c10Intent": ["private", "overnight", "stay", "goodnight"], "c10Ending": ["stay", "goodnight", "private", "overnight"], "c10Move": ["home", "stay"], "c10Affection": ["her", "ask", "none", "hug"], "c10Morning": ["hug", "breakfast", "coffee"], "c6Keepsake": ["cat", "house", "cup"], "c7Story": ["weekend", "awkward", "hobby"], "c7Rain": ["sit", "out", "art"], "c8Cheek": ["no", "yes"], "c8LipKiss": ["no", "yes"], "c8FirstGesture": ["curls", "shoulder", "playful"], "c8LateMode": ["dance", "seated", "story"], "c8LateTender": ["neck", "hair", "hold", "step"], "c8Close": ["dance", "tea", "next"], "c9LipKiss": ["no", "yes"], "c9Closeness": ["shoulder", "near", "separate"], "c9Break": ["stretch", "drink", "watch"], "c9SecondMoment": ["hug", "banter", "watch"], "c9Close": ["talk", "quiet", "credits"], "c10LipKiss": ["no", "yes"], "c10EveningKiss": ["no", "yes"], "c10MorningPreference": ["breakfast", "quiet", "company"], "c10Talk": ["kind", "plain", "funny"], "c10EveningMoment": ["hug", "kiss", "talk"], "c10Night": ["hug", "kiss", "talk"]};
// Added on 2026-10-23: older saves have no goodbye memory, including cursors
// inside c4.goodbye.hug. Validate its enum when present, never require it.
function requireFields(s:StoryState,fields:string[]){if(fields.some(k=>!['c4Goodbye','c4Edition','c5Edition'].includes(k)&&!(k==='bond'&&s.c4Edition===2)&&!(k==='ending'&&!!s.c5Edition)&&!(['c5FirstTaste','c5Recommendation'].includes(k)&&s.c5Edition!==3)&&s[k as keyof StoryState]===undefined))fail();}
function story(x:unknown,id:ChapterId,complete=false):StoryState{
  const o=obj(x);keys(o,fields(id));
  for(const [k,v]of Object.entries(o))one(v,storyEnums[k as keyof typeof storyEnums]);
  const s=o as StoryState;if(s.c4Edition===2&&s.bond!==undefined||!!s.c5Edition&&s.ending!==undefined||s.c4Edition===2&&id>=5&&!s.c5Edition||s.c5Edition!==3&&(s.c5FirstTaste!==undefined||s.c5Recommendation!==undefined))fail();if(complete)requireFields(s,fields(id).filter(k=>!/^c(?:6|7|8|9|10)/.test(k)));
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
  if(id>=8){const game=id===8?'dessert':id===9?'movie-setup':'evening-light';keys(o,[game]);if(o[game]!==undefined&&!(id===8?validDessertResult(o[game]):id===9?validMovieResult(o[game]):validLightResult(o[game])))fail();return;}
  if(id===7){keys(o,['between-lines']);if(o['between-lines']!==undefined&&!validCouncilResult(o['between-lines']))fail();return;}
  if(id===6){keys(o,['evening-route']);if(o['evening-route']!==undefined&&!validRouteResult(o['evening-route']))fail();return;}
  if(id===5){keys(o,['memories']);if(o.memories!==undefined){const r=obj(o.memories);keys(r,['kind','outcome']);one(r.kind,['memories']);one(r.outcome,['viewed','skipped']);}return;}
  const game=id===1?'token-search':id===2?'umbrella-patch':id===3?'kitchen':'constellation',outcome=id===1?s.searchResult:id===2?s.umbrella:id===3?s.kitchenResult:s.constellation;
  keys(o,[game]);if(outcome===undefined){if(o[game]!==undefined)fail();return;}
  const r=obj(o[game]);keys(r,id===1?['kind','outcome','catNoticed']:id===2?['kind','outcome']:id===3?['kind','outcome','served','mode']:['kind','outcome','usedPreset']);
  if(id===3){integer(r.served,9);one(r.mode,['timed','calm']);if(r.outcome!=='skipped'&&r.outcome!==kitchenOutcome(r.served as number))fail();}
  if(id===4){one(r.usedPreset,[true,false]);if(r.usedPreset&&r.outcome!=='teapot')fail();}
  if(r.kind!==game||r.outcome!==outcome||(id===1&&r.catNoticed!==s.catNoticed))fail();
}
function attemptId(x:unknown):asserts x is string {if(typeof x!=='string'||!x.length||x.length>64||!/^[a-zA-Z0-9_-]+$/.test(x))fail();}
function episode(x:unknown,id:EpisodeChapter=6):EpisodeProgress{
  const p=obj(x);keys(p,['memory','secret']);if(p.memory!==undefined)one(p.memory,Object.keys(memoryRegistry).filter(k=>memoryRegistry[k as keyof typeof memoryRegistry].chapter===id));if(p.secret!==undefined)one(p.secret,[`c${id}.r3.secret`]);return p as EpisodeProgress;
}
function record(x:unknown,id:ChapterId){
  const r=obj(x);keys(r,['endingId','cardId','story','results',...(id>=6?['scriptRevision','attemptId','episode']:[])]);
  const st=story(r.story,id,true);results(r.results,st,id);
  if((id===4||id===5)&&!!firstSeasonEdition(st,id)&&!replayFirstSeason(id,st,r.results as Run['results']))fail();
  const card=cardFromStory(st,id,r.results as Run['results']);if(r.cardId!==card.id||r.endingId!==card.id)fail();
  if(id===5&&obj(r.results).memories===undefined)fail();
  if(id>=6){one(r.scriptRevision,[3]);attemptId(r.attemptId);const p=episode(r.episode,id as EpisodeChapter);if(!reachableEpisode({chapter:id as EpisodeChapter,attemptId:r.attemptId,episode:p,story:st,results:r.results as Run['results']}))fail();}
  return r;
}
export function validateRun(x:unknown,maxChapter=10):Run{
  const r=obj(x);one(r.chapter,Array.from({length:maxChapter},(_,i)=>i+1));
  keys(r,['chapter','nodeId','lineIndex','turn','story','journal','results','earned',...(Number(r.chapter)>=6?['scriptRevision','attemptId','episode','activity']:[])]);
  const id=r.chapter as ChapterId,chapter=getChapter(id,obj(r.story) as StoryState),node=chapter?.nodes[r.nodeId as keyof typeof chapter.nodes];
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
    if(stage.startsWith('c4.goodbye'))requireFields(s,fourthFields);
    const beforeBench=['c4.walk','c4.team.dumpling','c4.team.calm','c4.team.accident','c4.after.team','c4.after.rematch','c4.distance'];
    if(!beforeBench.includes(stage)&&!s.bench)fail();
    if((['c4.stars.cat','c4.stars.controllers','c4.stars.teapot','c4.honest','c4.bond'].includes(stage)||stage.startsWith('c4.bond.')||stage.startsWith('c4.wish')||stage==='c4.end')&&!s.constellation)fail();
    if(s.c4Edition!==2&&(stage.startsWith('c4.bond.')||stage.startsWith('c4.wish')||stage==='c4.end')&&!s.bond)fail();
    if((['c4.wish.adventure','c4.wish.calm','c4.end'].includes(stage))&&!s.wish)fail();
    for(const [prefix,value] of [['c4.distance.',s.bench],['c4.bond.',s.bond],['c4.stars.',s.constellation],['c4.wish.',s.wish]]){
      const suffix=stage.slice(prefix!.length);if(stage.startsWith(prefix!)&&suffix!=='intro'&&stage!==prefix!+value)fail();
    }
  }
  if(id===5){
    requireFields(s,fields(4));
    if(stage.startsWith('c5.hug.')&&stage!==`c5.hug.${s.c4Goodbye}`)fail();
    const afterAlbum=stage==='c5.close'||stage==='c5.letter'||stage.startsWith('c5.tone.')||stage.startsWith('c5.ending.')||stage.startsWith('c5.gaming.');
    if(afterAlbum&&obj(r.results).memories===undefined)fail();
    if((stage.startsWith('c5.ending.')||stage.startsWith('c5.gaming.'))&&!s.ending)fail();
    if(stage.startsWith('c5.ending.')&&stage!==`c5.ending.${s.ending}`)fail();
    if(stage.startsWith('c5.gaming.')&&s.ending!=='gaming')fail();
    if(stage==='c5.tone.friendly'&&s.bond!=='friendly'||stage==='c5.tone.open'&&s.bond==='friendly')fail();
    for(const [prefix,value] of [['c5.rain.',s.rainRoute],['c5.souvenir.',s.umbrella],['c5.cat.',s.catApproach],['c5.approach.',s.approach]])if(stage.startsWith(prefix!)&&stage!==prefix!+value)fail();
  }
  if((id===4||id===5)&&!!firstSeasonEdition(s,id)&&!replayFirstSeason(id,s,r.results as Run['results'],{nodeId:r.nodeId as Run['nodeId'],lineIndex:r.lineIndex as number,turn:r.turn as number}))fail('Решения этой встречи противоречат сцене. Исходная копия сохранена.');
  if(id>=6){
    requireFields(s,fields(5));one(r.scriptRevision,[3]);attemptId(r.attemptId);const progress=episode(r.episode,id as EpisodeChapter);
    if(node.kind!=='minigame'&&r.activity!==undefined)fail();
    if(!reachableEpisode({chapter:id as EpisodeChapter,attemptId:r.attemptId,story:s,results:r.results as Run['results'],episode:progress,activity:r.activity as Run['activity']},{nodeId:r.nodeId as Run['nodeId'],lineIndex:r.lineIndex as number,turn:r.turn as number}))fail('Решения этой встречи противоречат сцене. Исходная копия сохранена.');
  }
  // Legacy saves may carry the removed reading journal. Validate its old bounded
  // format, then discard only that optional field; all progress stays unchanged.
  if(Object.hasOwn(r,'journal')){
    for(const e of arr(r.journal,150)){const j=obj(e);keys(j,['key','nodeId','speaker','text','emotion']);if(typeof j.key!=='string'||j.key.length>100||!chapter?.nodes[j.nodeId as keyof typeof chapter.nodes])fail();one(j.speaker,['narrator','vlad','heroine','nina']);if(typeof j.text!=='string'||j.text.length>2000)fail();if(j.emotion!==undefined)one(j.emotion,['neutral','smile','awkward','thinking','laugh','warm','surprised']);}
    delete r.journal;
  }
  const earned=arr(r.earned,1),achievement=['cat-supervisor','dry-plan','full-table','own-sky','five-meetings'][id-1];
  const gameResults=obj(r.results);
  const shouldEarn=id===1?!!s.catNoticed:id===2?s.umbrella==='patched':id===3?gameResults.kitchen!==undefined&&obj(gameResults.kitchen).served===9&&s.kitchenResult!=='skipped':id===4?gameResults.constellation!==undefined&&!obj(gameResults.constellation).usedPreset:false;
  earned.forEach(a=>one(a,[achievement]));if(earned.includes(achievement)!==shouldEarn)fail();
  return r as unknown as Run;
}
function parseCurrentSave(raw:string,version:12|13|14=14):SaveV1{
  if(new TextEncoder().encode(raw).length>MAX_SAVE_BYTES)fail('Копия слишком большая. Максимум 256 КБ.');
  const s=obj(JSON.parse(raw,(key,value:unknown)=>{if(['__proto__','prototype','constructor'].includes(key))fail();return value;}));
  keys(s,['appId','schemaVersion','contentVersion','revision','updatedAt','settings','unlocked','campaign','trial','lastResult','collection','continuation',...(Number(s.contentVersion)>=6?['privateNotes','localNoteRevision']:[]),...(Number(s.contentVersion)>=8?['privateWords']:[])]);
  if(s.appId!=='five-meetings')fail('Это сохранение другой игры.');
  if(s.schemaVersion!==1||s.contentVersion!==version)fail('Эта копия создана другой версией игры. Обновите страницу или сохраните исходную копию. Текущий прогресс не изменён.');
  if(version===12&&/"c[45]Edition"\s*:/.test(raw))fail();
  if(version===13&&/"c5Edition"\s*:\s*3\b/.test(raw))fail();
  const maxChapter=Number(10),chapterIds=Array.from({length:maxChapter},(_,i)=>i+1) as ChapterId[];
  integer(s.revision);if(typeof s.updatedAt!=='string'||s.updatedAt.length>40||!Number.isFinite(Date.parse(s.updatedAt)))fail();
  const settings=obj(s.settings);keys(settings,['sound','volume','textMode','motion']);one(settings.sound,[true,false]);one(settings.textMode,['instant','type']);one(settings.motion,['system','reduced','full']);if(typeof settings.volume!=='number'||!Number.isFinite(settings.volume)||settings.volume<0||settings.volume>1)fail();
  const unlocked=arr(s.unlocked,maxChapter>=6?maxChapter:5);unlocked.forEach(n=>one(n,maxChapter>=6?chapterIds:[1,2,3,4,5]));if(!unlocked.includes(1)||new Set(unlocked).size!==unlocked.length)fail();
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
  if(s.trial!==null){const t=obj(s.trial);keys(t,['chapter','run']);one(t.chapter,chapterIds);const run=validateRun(t.run,maxChapter);if(t.chapter!==run.chapter||!starts[run.chapter])fail();if(run.chapter>1)keepPrefix(run.story,story(starts[run.chapter],run.chapter===7?7:(run.chapter-1) as ChapterId),(run.chapter-1) as ChapterId);}
  const collection=obj(s.collection);keys(collection,['cards','achievements',...(maxChapter>=6?['memories','secrets']:[])]);const cs=arr(collection.cards,maxChapter===1?3:maxChapter===2?5:maxChapter===3?6:maxChapter===4?8:maxChapter===5?13:35),ids:string[]=[];
  for(const item of cs){const card=obj(item);keys(card,['c5Edition','id','chapter','endingId','variant','captionId',...(maxChapter>=3?['teamName']:[]),...(maxChapter>=4?['usedPreset']:[]),...(maxChapter>=8?['venue']:[])]);if(typeof card.id!=='string'||!Object.hasOwn(cards,card.id)||version===12&&card.id==='c5.story')fail();if(card.c5Edition!==undefined&&(card.c5Edition!==3||card.id!=='c5.story'||version!==14))fail();const meta=cards[card.id as keyof typeof cards];if(card.endingId!==card.id||card.chapter!==meta.chapter||meta.chapter>maxChapter)fail();one(card.variant,meta.chapter===1?['tidy','detour','skipped']:meta.chapter===2?['patched','borrowed','skipped']:meta.chapter===3?['feast','snack','chaos','skipped']:meta.chapter===4?['cat','controllers','teapot']:card.id==='c10.overnight'?['morning']:meta.chapter>=6?['evening']:['adventure','calm']);if(card.captionId!==`${card.id}.${card.variant}`)fail();if(meta.chapter===3)one(card.teamName,storyEnums.teamName);else if(card.teamName!==undefined)fail();if(meta.chapter===4){one(card.usedPreset,[true,false]);if(card.usedPreset&&card.variant!=='teapot')fail();}else if(card.usedPreset!==undefined)fail();if(meta.chapter>=8)one(card.venue,meta.chapter===8?['home','cafe']:meta.chapter===9?['home','courtyard']:['home','terrace']);else if(card.venue!==undefined)fail();if((card.id==='c10.private'||card.id==='c10.overnight')&&card.venue!=='home')fail();ids.push(card.id);}
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
  if(maxChapter>=6){
    const memories=arr(collection.memories,19),secrets=arr(collection.secrets,10);
    memories.forEach(v=>one(v,Object.keys(memoryRegistry)));secrets.forEach(v=>one(v,Object.keys(secretRegistry)));
    if(new Set(memories).size!==memories.length||new Set(secrets).size!==secrets.length)fail();
    for(const id of episodeChapters){
      if(records[id]){const progress=obj(obj(records[id]).episode);if(!memories.includes(progress.memory)||!secrets.includes(progress.secret))fail();}
      if(s.trial!==null&&obj(s.trial).chapter===id&&(!done.includes(id)||obj(obj(s.trial).run).attemptId===obj(records[id]).attemptId))fail();
    }
    if(s.lastResult!==null){const last=obj(s.lastResult);if(last.episodeRecord){const progress=obj(obj(last.episodeRecord).episode);if(!memories.includes(progress.memory)||!secrets.includes(progress.secret))fail();}}
    const notes=obj(s.privateNotes);keys(notes,maxChapter===6?['campaign','trial']:episodeChapters.filter(n=>n<=maxChapter).map(String));integer(s.localNoteRevision);
    const groups=maxChapter===6?[{id:6,notes}]:Object.entries(notes).map(([id,value])=>({id:Number(id),notes:obj(value)}));
    for(const group of groups){
      keys(group.notes,['campaign','trial']);
      for(const value of Object.values(group.notes)){
        const n=obj(value);keys(n,['chapter','questionId','attemptId','status','text']);one(n.chapter,[group.id]);one(n.questionId,[`s2.r3.q${group.id}`]);attemptId(n.attemptId);one(n.status,['saved','deleted']);
        if(typeof n.text!=='string'||noteLength(n.text)>280||normalizeNote(n.text)!==n.text||n.status==='deleted'&&n.text!==''||n.status==='saved'&&!validNote(n.text))fail();
      }
    }
    if(maxChapter===6)s.privateNotes=Object.keys(notes).length?{6:notes}:{};
  }else{collection.memories=[];collection.secrets=[];s.privateNotes={};s.localNoteRevision=0;}
  // The envelope has not changed. Version 1 contains only chapter one; upgrading
  // its content version preserves every cursor, choice, card, setting and right.
  if(maxChapter>=8){const words=obj(s.privateWords);keys(words,['campaign','trial']);for(const value of Object.values(words)){const w=obj(value);keys(w,['chapter','labelId','attemptId','status','text']);one(w.chapter,[8]);one(w.labelId,['s2.word8']);attemptId(w.attemptId);one(w.status,['saved','deleted']);if(typeof w.text!=='string'||normalizeWord(w.text)!==w.text||w.status==='deleted'&&w.text!==''||w.status==='saved'&&!validWord(w.text))fail();}}else s.privateWords={};
  s.contentVersion=14;
  return s as unknown as SaveV1;
}

// A converted legacy preview is deliberately not written or synced until the
// owner of that save confirms restarting its old second season.
const legacySources=new WeakMap<SaveV1,string>();
export function legacySource(save:SaveV1):string|null{return legacySources.get(save)??null;}
export function parseSave(raw:string):SaveV1{
 if(new TextEncoder().encode(raw).length>MAX_SAVE_BYTES)fail('Копия слишком большая. Максимум 256 КБ.');
 const header=obj(JSON.parse(raw));
 if(header.contentVersion===14)return parseCurrentSave(raw);
 if(header.contentVersion===13)return parseCurrentSave(raw,13);
 if(header.contentVersion===12)return parseCurrentSave(raw,12);
 const fromR2=header.contentVersion===11;
 const old=fromR2?parseR2Save(raw):parseLegacySave(raw);
 const hadSecondSeason=old.campaign.completed.some(n=>n>=6)||(old.campaign.active?.chapter??0)>=6||(old.trial?.chapter??0)>=6||old.collection.cards.some(c=>c.chapter>=6)||Object.keys(old.privateNotes).length>0||Object.keys(old.privateWords).length>0;
 const next=structuredClone(old) as unknown as SaveV1;
 next.contentVersion=14;
 const collection=next.collection as unknown as Record<string,unknown>;delete collection.bonuses;if(!fromR2){next.collection.memories=[];next.collection.secrets=[];}
 if(hadSecondSeason){
  next.campaign.completed=next.campaign.completed.filter(n=>n<=5);
  for(const id of [6,7,8,9,10] as const){delete next.campaign.records[id];delete next.campaign.startStates[id];}
  if(next.campaign.active&&next.campaign.active.chapter>=6)next.campaign.active=null;
  if(next.trial&&next.trial.chapter>=6)next.trial=null;
  if(next.lastResult&&next.lastResult.chapter>=6)next.lastResult=null;
  if(!fromR2)next.collection.cards=next.collection.cards.filter(c=>c.chapter<=5);next.privateNotes={};next.privateWords={};
 }
 const validated=parseCurrentSave(JSON.stringify(next));
 if(hadSecondSeason)legacySources.set(validated,raw);
 return validated;
}
