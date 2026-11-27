import {finishGallery} from './gallery7Helpers';
import {getChapter} from '../src/content/chapters';
import {chapters} from '../src/content/chapters/manifest';
import {reduceSave} from '../src/state/reducer';
import type {Command,NodeId,Run} from '../src/engine/types';
import type {SaveV1} from '../src/state/types';
export type SupperPath={filling:'pepper'|'mushroom'|'mix'|'simple';shape:'fold'|'open';frame:'foodHer'|'foodVlad'|'boardHer'|'boardVlad';step:'follow'|'lead'|'play'|'sit';kiss:boolean;gentle?:'sitCheek'|'sitQuiet'|'sitHand';hoodie:'wear'|'borrow'|'pass'};
export const supperPath:SupperPath={filling:'pepper',shape:'fold',frame:'foodHer',step:'follow',kiss:false,hoodie:'pass'};
export function supperCommand(run:Run,path:Partial<SupperPath>={}):Command{
 const p={...supperPath,...path},node=getChapter(8)!.nodes[run.nodeId];
 if(node.kind==='dialogue')return {kind:'advance',expectedTurn:run.turn};
 const choices:Record<string,string>={'c8.supper.fillChoice':p.filling,'c8.supper.shapeChoice':p.shape,'c8.supper.frameChoice':p.frame,'c8.supper.danceChoice':p.step,'c8.supper.reply':p.kiss?'kissYes':'danceOn','c8.supper.initiative':p.kiss?'kiss':p.step+'Quiet','c8.supper.sitGentle':p.gentle??'sitQuiet','c8.supper.hoodieChoice':p.hoodie};
 if(node.kind!=='choice'||!choices[node.id])throw Error('Unsupported supper node '+node.id);
 return {kind:'choose',choiceId:choices[node.id],expectedTurn:run.turn};
}
export function startSupper(base=finishGallery(),trial=false){let s=base;if(!trial)s=reduceSave(s,{type:'unlock',code:chapters.find(c=>c.id===8)!.code!});const next=reduceSave(s,{type:trial?'trial':'start',chapter:8,attemptId:trial?'supper-trial':'supper-main'});if(!(trial?next.trial?.run:next.campaign.active))throw Error('Supper failed to start');return next;}
export function supperAt(id:NodeId,path:Partial<SupperPath>={},base?:SaveV1){let s=startSupper(base);for(let i=0;i<200&&s.campaign.active?.nodeId!==id;i++){if(!s.campaign.active)throw Error('Missing '+id);s=reduceSave(s,{type:'command',target:'campaign',command:supperCommand(s.campaign.active,path)});}if(s.campaign.active?.nodeId!==id)throw Error('Missing '+id);return s;}
export function finishSupper(base?:SaveV1,path:Partial<SupperPath>={},trial=false){let s=startSupper(base,trial);for(let i=0;i<200&&(trial?s.trial:s.campaign.active);i++){const r=(trial?s.trial?.run:s.campaign.active)!;s=reduceSave(s,{type:'command',target:trial?'trial':'campaign',command:supperCommand(r,path)});}if(trial?s.trial:s.campaign.active)throw Error('Supper did not finish');return s;}
