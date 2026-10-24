import { chapter4 } from '../src/legacy/season1/ch04';
import { chapters } from '../src/content/chapters/manifest';
import { reduceSave } from '../src/state/reducer';
import { parseSave } from '../src/persistence/validateSave';
import { finishThree } from './chapter3Helpers';
import type { Command,ConstellationResult,Run,StoryState } from '../src/engine/types';
export const fourthCode=chapters.find(c=>c.id===4)!.code!;
export type FourthPath={bench:NonNullable<StoryState['bench']>;result:ConstellationResult;bond:NonNullable<StoryState['bond']>;wish:NonNullable<StoryState['wish']>;goodbye?:'accept'|'her'|'none'};
export const defaultFourth:FourthPath={bench:'space',result:{kind:'constellation',outcome:'teapot',usedPreset:false},bond:'friendly',wish:'calm'};
export function command4(r:Run,p=defaultFourth):Command{
  const n=chapter4.nodes[r.nodeId];if(n.kind==='dialogue')return {kind:'advance',expectedTurn:r.turn};
  if(n.kind==='minigame')return {kind:'game-result',expectedTurn:r.turn,result:p.result};
  if(n.kind==='choice')return {kind:'choose',expectedTurn:r.turn,choiceId:n.id==='c4.distance'?p.bench:n.id==='c4.bond'?p.bond:n.id==='c4.goodbye'?p.goodbye??'none':p.wish};
  throw Error('Hidden node');
}
export function startFour(base=finishThree(),trial=false){
  const save=reduceSave(reduceSave(base,{type:'unlock',code:fourthCode}),{type:trial?'trial':'start',chapter:4});
  const run=trial?save.trial!.run:save.campaign.active!;delete run.story.c4Edition;
  return save;
}
export function finishFour(base=finishThree(),p=defaultFourth,trial=false,check=false){
  let s=startFour(base,trial);for(let i=0;i<180;i++){const r=trial?s.trial?.run:s.campaign.active;if(!r)return s;if(check)parseSave(JSON.stringify(s));s=reduceSave(s,{type:'command',target:trial?'trial':'campaign',command:command4(r,p)});}throw Error('Loop');
}
