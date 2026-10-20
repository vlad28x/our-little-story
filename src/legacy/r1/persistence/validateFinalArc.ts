import { getChapter } from '../content/chapters';
import { startRun,step } from '../engine/step';
import type { Command,EpisodeProgress,Run,StoryState,EpisodeChapter } from '../engine/types';
import { sameValue } from './validateEpisode';
import { validDessertDraft,validDessertResult } from '../minigames/dessertModel';
import { validMovieDraft,validMovieResult } from '../minigames/movieSetupModel';
import { validLightDraft,validLightResult } from '../minigames/eveningLightModel';
// Replay authored choices. Preview edits can add turns; they cannot add plot facts.
export function reachableFinalArc(data:{chapter:EpisodeChapter;attemptId:string;story:StoryState;results:Run['results'];episode:EpisodeProgress;activity?:Run['activity']},cursor?:Pick<Run,'nodeId'|'lineIndex'|'turn'>){
 const chapter=getChapter(data.chapter);if(!chapter||data.chapter<8)return false;
 const prior=Object.fromEntries(Object.entries(data.story).filter(([key])=>!key.startsWith(`c${data.chapter}`))) as StoryState;
 const stack:{run:Run;flex:boolean}[]=[{run:startRun(chapter,prior,data.attemptId),flex:false}];let visits=0;
 const agrees=(r:Run)=>sameValue(r.story,data.story)&&sameValue(r.results,data.results)&&sameValue(r.episode,data.episode)&&sameValue(r.activity,data.activity);
 const compatible=(r:Run)=>Object.entries(r.story).every(([k,v])=>data.story[k as keyof StoryState]===v)&&Object.entries(r.results).every(([k,v])=>sameValue(data.results[k as keyof Run['results']],v))&&r.episode!.sparks.every(s=>data.episode.sparks.includes(s))&&(!r.episode?.bonus||r.episode.bonus===data.episode.bonus);
 while(stack.length&&visits++<600){
  const {run,flex}=stack.pop()!;if(!compatible(run))continue;
  const node=chapter.nodes[run.nodeId];
  if(cursor&&node.kind!=='minigame'&&run.nodeId===cursor.nodeId&&run.lineIndex===cursor.lineIndex&&agrees(run)&&(flex?run.turn<=cursor.turn:run.turn===cursor.turn))return true;
  const enqueue=(command:Command,current=run,nextFlex=flex)=>{const update=step(chapter,current,command);if(update.kind==='complete'){return !cursor&&agrees(update.run);}if(update.kind==='ready')stack.push({run:update.run,flex:nextFlex});return false;};
  if(node.kind==='dialogue'){if(enqueue({kind:'advance',expectedTurn:run.turn}))return true;}
  else if(node.kind==='choice'){for(const choice of node.choices)if(enqueue({kind:'choose',choiceId:choice.id,expectedTurn:run.turn}))return true;}
  else if(node.kind==='note'){const status=data.story[`c${data.chapter}Note`];if(status&&enqueue({kind:'note-result',status,expectedTurn:run.turn}))return true;}
  else if(node.kind==='label'){const status=data.story.c8Word==='custom'?'saved':data.story.c8Word==='none'?'skipped':null;if(status&&enqueue({kind:'label-result',status,expectedTurn:run.turn}))return true;}
  else if(node.kind==='minigame'){
   const active=cursor?.nodeId===node.id;const desired=active?data.activity:data.results[node.game];let configured=run;
   const apply=(command:Command)=>{const update=step(chapter,configured,{...command,expectedTurn:configured.turn});if(update.kind!=='ready')return false;configured=update.run;return true;};
   if(node.game==='dessert'){
    if(!(active?validDessertDraft(desired):validDessertResult(desired)))continue;
    const d=desired as import('../engine/types').DessertDraft|import('../engine/types').DessertResult;
    if(d.topping&&!apply({kind:'game-action',game:'dessert',action:{kind:'set-topping',value:d.topping},expectedTurn:0}))continue;
    if(d.mark&&!apply({kind:'game-action',game:'dessert',action:{kind:'set-mark',value:d.mark},expectedTurn:0}))continue;
   }else if(node.game==='movie-setup'){
    if(!(active?validMovieDraft(desired):validMovieResult(desired)))continue;
    const d=desired as import('../engine/types').MovieSetupDraft|import('../engine/types').MovieSetupResult;
    if(d.seat&&!apply({kind:'game-action',game:'movie-setup',action:{kind:'set-seat',value:d.seat},expectedTurn:0}))continue;
    if(d.light&&!apply({kind:'game-action',game:'movie-setup',action:{kind:'set-light',value:d.light},expectedTurn:0}))continue;
    if(d.drink&&!apply({kind:'game-action',game:'movie-setup',action:{kind:'set-drink',value:d.drink},expectedTurn:0}))continue;
   }else if(node.game==='evening-light'){
    if(!(active?validLightDraft(desired):validLightResult(desired)))continue;
    const d=desired as import('../engine/types').EveningLightDraft|import('../engine/types').EveningLightResult;
    if(d.level&&!apply({kind:'game-action',game:'evening-light',action:{kind:'select',level:d.level},expectedTurn:0}))continue;
   }else continue;
   if(active){
    const a=configured.activity;const empty=a?.kind==='dessert'?a.topping===null&&a.mark===null:a?.kind==='movie-setup'?a.seat===null&&a.light===null&&a.drink===null:a?.kind==='evening-light'&&a.level===null;
    const delta=cursor!.turn-configured.turn;
    if(agrees(configured)&&delta>=0&&(!empty||a?.kind==='evening-light'?(!empty||delta===0):delta!==1))return true;
   }else{
    // Shared/skipped can be confirmed from the initial draft, independent of preview.
    const result=desired as import('../engine/types').GameResult;
    const current='mode' in result&&result.mode!=='completed'?run:configured;
    if(enqueue({kind:'game-result',result,expectedTurn:current.turn},current,true))return true;
   }
  }
 }
 return false;
}
