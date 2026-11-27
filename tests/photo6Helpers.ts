import {finishFive} from './chapter5Helpers';
import {reduceSave} from '../src/state/reducer';
import {getChapter} from '../src/content/chapters';
import {chapters} from '../src/content/chapters/manifest';
import type {Run,Command,NodeId} from '../src/engine/types';
import type {SaveV1} from '../src/state/types';
export type PhotoPath={place:'upper'|'water';subject:'vlad'|'her'|'place';escape:'sea'|'oldtown'|'cabin';gesture:'hand'|'hug'|'none';ask:'game'|'routine'|'quirk'};
export const photoPath:PhotoPath={place:'water',subject:'place',escape:'cabin',gesture:'none',ask:'game'};
export function startPhotoSix(base=finishFive(),trial=false){let s=base;if(!trial)s=reduceSave(s,{type:'unlock',code:chapters.find(c=>c.id===6)!.code!});return reduceSave(s,{type:trial?'trial':'start',chapter:6,attemptId:trial?'photo-trial':'photo-main'});}
export function photoCommand(run:Run,path:Partial<PhotoPath>={}):Command{
 const p={...photoPath,...path},node=getChapter(6)!.nodes[run.nodeId];
 if(node.kind==='dialogue')return {kind:'advance',expectedTurn:run.turn};
 const choices:Record<string,string>={'c6.photo.place':p.place,'c6.photo.subject':p.subject,'c6.photo.escape':p.escape,'c6.photo.touch':p.gesture,'c6.photo.askVlad':p.ask};
 if(node.kind!=='choice'||!choices[node.id])throw Error('Unsupported photo node '+node.id);
 return {kind:'choose',choiceId:choices[node.id],expectedTurn:run.turn};
}
export function finishPhotoSix(base?:SaveV1,path:Partial<PhotoPath>={},trial=false){let s=startPhotoSix(base,trial);for(let i=0;i<200&&(trial?s.trial:s.campaign.active);i++){const r=(trial?s.trial?.run:s.campaign.active)!;s=reduceSave(s,{type:'command',target:trial?'trial':'campaign',command:photoCommand(r,path)});}if(trial?s.trial:s.campaign.active)throw Error('Photo did not finish');return s;}
export function photoAt(id:NodeId,path:Partial<PhotoPath>={},base?:SaveV1){let s=startPhotoSix(base);for(let i=0;i<200&&s.campaign.active?.nodeId!==id;i++){if(!s.campaign.active)throw Error('Missing node '+id);s=reduceSave(s,{type:'command',target:'campaign',command:photoCommand(s.campaign.active,path)});}if(s.campaign.active?.nodeId!==id)throw Error('Missing node '+id);return s;}
