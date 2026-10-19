import { chapter6 } from '../content/chapters/ch06';
import { startRun,step } from '../engine/step';
import type { Command, EpisodeProgress, Run, StoryState } from '../engine/types';
import { validRouteResult } from '../minigames/eveningRouteModel';

export function sameValue(a:unknown,b:unknown):boolean{
  if(a===b)return true;
  if(!a||!b||typeof a!=='object'||typeof b!=='object'||Array.isArray(a)!==Array.isArray(b))return false;
  const left=a as Record<string,unknown>,right=b as Record<string,unknown>;
  const keys=Object.keys(left).sort();return keys.length===Object.keys(right).length&&keys.every(k=>Object.hasOwn(right,k)&&sameValue(left[k],right[k]));
}
// Replay the bounded authored graph to validate stage-dependent facts. This
// avoids a second, divergent set of hand-written c6 stage/flag conditions.
export function reachableEpisode(data:{attemptId:string;story:StoryState;results:Run['results'];episode:EpisodeProgress},cursor?:Pick<Run,'nodeId'|'lineIndex'|'turn'>):boolean{
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
