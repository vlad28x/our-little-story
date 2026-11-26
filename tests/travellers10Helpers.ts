import {finishCourtyard,courtyardCommand,type CourtyardPath} from './courtyard9Helpers';
import {chapter10} from '../src/content/chapters/ch10';
import {chapters} from '../src/content/chapters/manifest';
import {reduceSave} from '../src/state/reducer';
import type {Command,NodeId,Run} from '../src/engine/types';
import type {SaveV1} from '../src/state/types';
export type TravellersPath={river:'ford'|'bridge'|'help';quarry:'tunnel'|'contour'|'help';arrival:'marsh'|'upper'|'help';continuation:'cafe'|'home';goodbye:'kiss'|'hug'|'words';tender:'kiss'|'hug'|'near';afterFirstKiss:'closer'|'shoulder';finale:'leave'|'sleep'};
export const travellersPath:TravellersPath={river:'ford',quarry:'tunnel',arrival:'marsh',continuation:'cafe',goodbye:'words',tender:'near',afterFirstKiss:'shoulder',finale:'leave'};
export function travellersCommand(run:Run,path:Partial<TravellersPath>={}):Command{
 const p={...travellersPath,...path},node=chapter10.nodes[run.nodeId];
 if(node.kind==='dialogue')return {kind:'advance',expectedTurn:run.turn};
 const choices:Record<string,string>={riverChoice:p.river,quarryChoice:p.quarry,catChoice:p.arrival,arrivedChoice:p.continuation,cafeGoodbyeChoice:p.goodbye,homeChoice:p.tender,homeKissFirstChoice:p.afterFirstKiss,lateChoice:p.finale==='leave'?'lateLeave':p.finale};
 if(node.kind!=='choice'||!choices[node.id.split('.').at(-1)!])throw Error('Unsupported travellers scene '+node.id);
 return {kind:'choose',choiceId:choices[node.id.split('.').at(-1)!],expectedTurn:run.turn};
}
export function startTravellers(base=finishCourtyard(),trial=false){
 let s=base;if(!trial)s=reduceSave(s,{type:'unlock',code:chapters.find(c=>c.id===10)!.code!});
 s=reduceSave(s,{type:trial?'trial':'start',chapter:10,attemptId:trial?'travellers-trial':'travellers-main'});
 if(!(trial?s.trial?.run:s.campaign.active))throw Error('Travellers did not start');return s;
}
export function travellersAt(id:NodeId,path:Partial<TravellersPath>={},base?:SaveV1){
 let s=startTravellers(base);
 for(let i=0;i<300&&s.campaign.active?.nodeId!==id;i++){
  if(!s.campaign.active)throw Error('Missing scene '+id);
  s=reduceSave(s,{type:'command',target:'campaign',command:travellersCommand(s.campaign.active,path)});
 }
 if(s.campaign.active?.nodeId!==id)throw Error('Missing scene '+id);return s;
}
export function finishTravellers(path:Partial<TravellersPath>={},base?:SaveV1,trial=false){
 let s=startTravellers(base,trial);
 for(let i=0;i<300&&(trial?s.trial:s.campaign.active);i++){
  const r=(trial?s.trial?.run:s.campaign.active)!;
  const next=reduceSave(s,{type:'command',target:trial?'trial':'campaign',command:travellersCommand(r,path)});
  if(next===s)throw Error('Rejected at '+r.nodeId);s=next;
 }
 if(trial?s.trial:s.campaign.active)throw Error('Travellers did not finish');return s;
}
export {courtyardCommand};export type {CourtyardPath};
