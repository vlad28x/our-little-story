import {finishSupper} from './supperHelpers';
import {chapter9} from '../src/content/chapters/ch09';
import {chapters} from '../src/content/chapters/manifest';
import {reduceSave} from '../src/state/reducer';
import type {Command,NodeId,Run} from '../src/engine/types';
import type {SaveV1} from '../src/state/types';
export type CourtyardPath={frame:'vlad'|'seats'|'yard';rain:'canopy'|'arch'|'leave';hoodie:'keep'|'return';bet:'together'|'alone'|'skip';goodbye:'kiss'|'hug'|'words'};
export const courtyardPath:CourtyardPath={frame:'yard',rain:'canopy',hoodie:'return',bet:'skip',goodbye:'words'};
export function courtyardCommand(run:Run,path:Partial<CourtyardPath>={}):Command{
 const p={...courtyardPath,...path},n=chapter9.nodes[run.nodeId];
 if(n.kind==='dialogue')return {kind:'advance',expectedTurn:run.turn};
 const choices:Record<string,string>={'c9.courtyard.frameChoice':p.frame,'c9.courtyard.rainChoice':p.rain,'c9.courtyard.hoodieChoice':p.hoodie,'c9.courtyard.hoodieChoiceLeave':p.hoodie,'c9.courtyard.betChoice':p.bet,'c9.courtyard.goodbyeChoice':p.goodbye};
 if(n.kind!=='choice'||!choices[n.id])throw Error('Unsupported courtyard scene '+n.id);
 return {kind:'choose',expectedTurn:run.turn,choiceId:choices[n.id]};
}
export function startCourtyard(base=finishSupper(),trial=false){
 let s=base;if(!trial)s=reduceSave(s,{type:'unlock',code:chapters.find(c=>c.id===9)!.code!});
 s=reduceSave(s,{type:trial?'trial':'start',chapter:9,attemptId:trial?'courtyard-trial':'courtyard-main'});
 if(!(trial?s.trial?.run:s.campaign.active))throw Error('Courtyard failed to start');return s;
}
export function courtyardAt(id:NodeId,path:Partial<CourtyardPath>={},base?:SaveV1){
 let s=startCourtyard(base);
 for(let i=0;i<240&&s.campaign.active?.nodeId!==id;i++){
  if(!s.campaign.active)throw Error('Missing scene '+id);
  s=reduceSave(s,{type:'command',target:'campaign',command:courtyardCommand(s.campaign.active,path)});
 }
 if(s.campaign.active?.nodeId!==id)throw Error('Missing scene '+id);return s;
}
export function finishCourtyard(base?:SaveV1,path:Partial<CourtyardPath>={},trial=false){
 let s=startCourtyard(base,trial);
 for(let i=0;i<240&&(trial?s.trial:s.campaign.active);i++){
  const r=(trial?s.trial?.run:s.campaign.active)!;
  s=reduceSave(s,{type:'command',target:trial?'trial':'campaign',command:courtyardCommand(r,path)});
 }
 if(trial?s.trial:s.campaign.active)throw Error('Courtyard did not finish');return s;
}
