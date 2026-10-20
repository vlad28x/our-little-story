import { reachableFinalArc } from './validateFinalArc';
import { chapter7 } from '../content/chapters/ch07';
import { chapter6 } from '../content/chapters/ch06';
import { startRun,step } from '../engine/step';
import type { Command, EpisodeProgress, Run, StoryState } from '../engine/types';
import { validCouncilDraft } from '../minigames/betweenLinesModel';
import { validRouteResult } from '../minigames/eveningRouteModel';

export function sameValue(a:unknown,b:unknown):boolean{
  if(a===b)return true;
  if(!a||!b||typeof a!=='object'||typeof b!=='object'||Array.isArray(a)!==Array.isArray(b))return false;
  const left=a as Record<string,unknown>,right=b as Record<string,unknown>;
  const keys=Object.keys(left).sort();return keys.length===Object.keys(right).length&&keys.every(k=>Object.hasOwn(right,k)&&sameValue(left[k],right[k]));
}
// Replay the bounded authored graph to validate stage-dependent facts. This
// avoids a second, divergent set of hand-written c6 stage/flag conditions.
export function reachableEpisode(data:{attemptId:string;story:StoryState;results:Run['results'];episode:EpisodeProgress;chapter?:import('../engine/types').EpisodeChapter;activity?:Run['activity']},cursor?:Pick<Run,'nodeId'|'lineIndex'|'turn'>):boolean{
  if(data.chapter&&data.chapter>=8)return reachableFinalArc({...data,chapter:data.chapter},cursor);
  if(data.chapter===7)return reachableSeventh(data,cursor);
  const prior=Object.fromEntries(Object.entries(data.story).filter(([key])=>!key.startsWith('c6'))) as StoryState;
  let run=startRun(chapter6,prior,data.attemptId);
  const agrees=(candidate:Run)=>sameValue(candidate.story,data.story)&&sameValue(candidate.results,data.results)&&sameValue(candidate.episode,data.episode);
  for(let count=0;count<350;count++){
    if(cursor&&run.nodeId===cursor.nodeId&&run.lineIndex===cursor.lineIndex)return run.turn<=cursor.turn&&agrees(run);
    const node=chapter6.nodes[run.nodeId];
    let command:Command;
    if(node.kind==='dialogue')command={kind:'advance',expectedTurn:run.turn};
    else if(node.kind==='choice'){
      const choices:Record<string,string|undefined>={
        'c6.guide':data.story.c6Guide,'c6.thought':data.story.c6Thought,'c6.voice':data.story.c6Voice,
        'c6.gesture':data.story.c6Contact,'c6.envelope.offer':data.episode.bonus?'open':'later','c6.ending':data.story.c6Ending,
      };
      const choiceId=choices[node.id];if(!choiceId)return false;
      command={kind:'choose',choiceId,expectedTurn:run.turn};
    }else if(node.kind==='minigame'){
      const result=data.results['evening-route'];if(!validRouteResult(result))return false;
      const actions=result.mode==='own'?result.stops.map(stop=>({kind:'toggle-stop' as const,stop})):result.mode==='shared'?[{kind:'show-suggestion' as const}]:[];
      for(const action of actions){const update=step(chapter6,run,{kind:'game-action',game:'evening-route',action,expectedTurn:run.turn});if(update.kind!=='ready')return false;run=update.run;}
      command={kind:'game-result',result,expectedTurn:run.turn};
    }else if(node.kind==='note'){
      if(!data.story.c6Note)return false;
      command={kind:'note-result',status:data.story.c6Note,expectedTurn:run.turn};
    }else return false;
    const result=step(chapter6,run,command);
    if(result.kind==='complete')return !cursor&&agrees(result.run);
    if(result.kind!=='ready')return false;run=result.run;
  }
  return false;
}

function reachableSeventh(data:{attemptId:string;story:StoryState;results:Run['results'];episode:EpisodeProgress;activity?:Run['activity']},cursor?:Pick<Run,'nodeId'|'lineIndex'|'turn'>):boolean{
 const prior=Object.fromEntries(Object.entries(data.story).filter(([k])=>!k.startsWith('c7')||k==='c7PreviousStop')) as StoryState;
 let run=startRun(chapter7,prior,data.attemptId);
 const agrees=(r:Run)=>sameValue(r.story,data.story)&&sameValue(r.results,data.results)&&sameValue(r.episode,data.episode)&&sameValue(r.activity,data.activity);
 for(let i=0;i<600;i++){
  if(cursor&&run.nodeId===cursor.nodeId&&run.lineIndex===cursor.lineIndex&&run.turn===cursor.turn)return agrees(run);
  if(cursor&&run.turn>=cursor.turn)return false;
  const node=chapter7.nodes[run.nodeId];let command:Command;
  if(node.kind==='dialogue')command={kind:'advance',expectedTurn:run.turn};
  else if(node.kind==='choice'){
   const choices:Record<string,string|undefined>={'c7.guide':data.story.c7Guide,'c7.thought':data.story.c7Thought,'c7.distance':data.story.c7Distance,'c7.envelope.offer':data.episode.bonus?'open':'later','c7.ending':data.story.c7Ending};
   const choiceId=choices[node.id];if(!choiceId)return false;command={kind:'choose',choiceId,expectedTurn:run.turn};
  }else if(node.kind==='note'){
   if(!data.story.c7Note)return false;command={kind:'note-result',status:data.story.c7Note,expectedTurn:run.turn};
  }else if(node.kind==='minigame'){
   if(!validCouncilDraft(run.activity))return false;
   const desired=data.results['between-lines'];const answers=desired?.answers??(data.activity?.kind==='between-lines'?data.activity.answers:[]);
   if(run.activity.phase==='choose'){
    const answer=answers.at(run.activity.answers.length);
    if(answer)command={kind:'game-action',game:'between-lines',action:{kind:'answer',answer},expectedTurn:run.turn};
    else if(desired?.outcome==='skipped')command={kind:'game-result',result:desired,expectedTurn:run.turn};
    else return false;
   }else if(run.activity.phase==='reply')command={kind:'game-action',game:'between-lines',action:{kind:'next-line'},expectedTurn:run.turn};
   else if(desired?.outcome==='completed')command={kind:'game-result',result:desired,expectedTurn:run.turn};
   else return false;
  }else return false;
  const update=step(chapter7,run,command);
  if(update.kind==='complete')return !cursor&&agrees(update.run);
  if(update.kind!=='ready')return false;run=update.run;
 }
 return false;
}
