import { chapter5 } from '../src/legacy/season1/ch05';
import { chapters } from '../src/content/chapters/manifest';
import { reduceSave } from '../src/state/reducer';
import { parseSave } from '../src/persistence/validateSave';
import { finishFour } from './legacy4Helpers';
import type { Command,MemoriesResult,Run,StoryState } from '../src/engine/types';
export const fifthCode=chapters.find(c=>c.id===5)!.code!;
export type FifthPath={memory:MemoriesResult['outcome'];ending:NonNullable<StoryState['ending']>};
export const defaultFifth:FifthPath={memory:'viewed',ending:'friendly'};
export function command5(r:Run,p=defaultFifth):Command{
  const n=chapter5.nodes[r.nodeId];if(n.kind==='dialogue')return {kind:'advance',expectedTurn:r.turn};
  if(n.kind==='minigame')return {kind:'game-result',expectedTurn:r.turn,result:{kind:'memories',outcome:p.memory}};
  if(n.kind==='choice')return {kind:'choose',expectedTurn:r.turn,choiceId:p.ending};
  throw Error('Hidden node');
}
export function startFive(base=finishFour(),trial=false){
  const save=reduceSave(reduceSave(base,{type:'unlock',code:fifthCode}),{type:trial?'trial':'start',chapter:5});
  const run=trial?save.trial!.run:save.campaign.active!;delete run.story.c5Edition;
  return save;
}
export function finishFive(base=finishFour(),p=defaultFifth,trial=false,check=false){
  let s=startFive(base,trial);for(let i=0;i<180;i++){const r=trial?s.trial?.run:s.campaign.active;if(!r)return s;if(check)parseSave(JSON.stringify(s));s=reduceSave(s,{type:'command',target:trial?'trial':'campaign',command:command5(r,p)});}throw Error('Loop');
}
