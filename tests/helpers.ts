import { chapter1 } from '../src/content/chapters/ch01';
import { step, startRun } from '../src/engine/step';
import { reduceSave } from '../src/state/reducer';
import { initialState } from '../src/state/initialState';
import type { Chapter, Command, Run, SearchResult, StoryState } from '../src/engine/types';
import type { SaveV1 } from '../src/state/types';
export const chapter:Chapter=chapter1;
export type Path={approach:NonNullable<StoryState['approach']>;pace:NonNullable<StoryState['pace']>;detail:'box'|'cat'|'window';plan:NonNullable<StoryState['plan']>;search:SearchResult};
export const defaultPath:Path={approach:'space',pace:'quiet',detail:'window',plan:'tea',search:{kind:'token-search',outcome:'skipped',catNoticed:false}};
export function commandFor(run:Run,p:Path=defaultPath):Command {
  const n=chapter.nodes[run.nodeId];
  if(n.kind==='dialogue')return {kind:'advance',expectedTurn:run.turn};
  if(n.kind==='minigame')return {kind:'game-result',result:p.search,expectedTurn:run.turn};
  if(n.kind==='choice'){const key=n.id.split('.').at(-1) as 'approach'|'pace'|'detail'|'plan';return{kind:'choose',choiceId:p[key],expectedTurn:run.turn};}
  throw Error('Non-interactive node');
}
export function runTo(id:string,p:Path=defaultPath):Run {let run=startRun(chapter);for(let i=0;i<180;i++){if(run.nodeId===id)return run;const r=step(chapter,run,commandFor(run,p));if(r.kind!=='ready')throw Error('Node not reached '+id);run=r.run;}throw Error('loop');}
export function completeSave(p:Path=defaultPath,save:SaveV1=initialState(),target:'campaign'|'trial'='campaign'):SaveV1{
  let s=reduceSave(save,{type:target==='trial'?'trial':'start'});
  for(let i=0;i<180;i++){const run=target==='trial'?s.trial?.run:s.campaign.active;if(!run)return s;s=reduceSave(s,{type:'command',target,command:commandFor(run,p)});}
  throw Error('loop');
}
