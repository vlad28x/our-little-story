import { getChapter } from '../src/content/chapters';
import { chapters } from '../src/content/chapters/manifest';
import { reduceSave } from '../src/state/reducer';
import { parseSave } from '../src/persistence/validateSave';
import { completeTwo } from './chapter3Helpers';
import type { Command,ConstellationResult,Run,StoryState } from '../src/engine/types';
export const skyCode=chapters.find(c=>c.id===3)!.code!;
export type SkyPath={bench:NonNullable<StoryState['bench']>;result:ConstellationResult;bond:NonNullable<StoryState['bond']>;trust?:NonNullable<StoryState['herTrust']>;wish:NonNullable<StoryState['wish']>;goodbye?:'accept'|'her'|'none'};
export const defaultSky:SkyPath={bench:'space',result:{kind:'constellation',outcome:'teapot',usedPreset:false},bond:'friendly',trust:'careful',wish:'calm'};
export function skyCommand(r:Run,p=defaultSky):Command{
  const n=getChapter(3,r.story)!.nodes[r.nodeId];if(n.kind==='dialogue')return {kind:'advance',expectedTurn:r.turn};
  if(n.kind==='minigame')return {kind:'game-result',expectedTurn:r.turn,result:p.result};
  if(n.kind==='choice')return {kind:'choose',expectedTurn:r.turn,choiceId:n.id==='c3.distance'?p.bench:n.id==='c3.bond'?p.bond:n.id==='c3.trust'?(p.trust??'careful'):n.id==='c3.goodbye'?p.goodbye??'none':p.wish};
  throw Error('Hidden node');
}
export function startSky(base=completeTwo(),trial=false){return reduceSave(reduceSave(base,{type:'unlock',code:skyCode}),{type:trial?'trial':'start',chapter:3});}
export function finishSky(base=completeTwo(),p=defaultSky,trial=false,check=false){
  let s=startSky(base,trial);for(let i=0;i<180;i++){const r=trial?s.trial?.run:s.campaign.active;if(!r)return s;if(check)parseSave(JSON.stringify(s));s=reduceSave(s,{type:'command',target:trial?'trial':'campaign',command:skyCommand(r,p)});}throw Error('Loop');
}
