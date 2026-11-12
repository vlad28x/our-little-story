import {finishPhotoSix} from './photo6Helpers';
import {finishFive} from './chapter5Helpers';
import {getChapter} from '../src/content/chapters';
import {chapter6 as photo4} from '../src/legacy/local-photo4/ch06';
import {startRun} from '../src/engine/step';
import {reduceSave} from '../src/state/reducer';
import {chapters} from '../src/content/chapters/manifest';
import type {Command,Run,NodeId} from '../src/engine/types';
import type {SaveV1} from '../src/state/types';
export type GalleryPath={route:'together'|'apart';work:'blue'|'chip';gift:'blue'|'chip'|'none';frame:'vlad'|'her'|'both';farewell:'cheek'|'words'};
export const galleryPath:GalleryPath={route:'apart',work:'blue',gift:'none',frame:'both',farewell:'words'};
export function galleryCommand(run:Run,path:Partial<GalleryPath>={}):Command{
 const p={...galleryPath,...path},n=getChapter(7)!.nodes[run.nodeId];
 if(n.kind==='dialogue')return {kind:'advance',expectedTurn:run.turn};
 const choices:Record<string,string>={'c7.gallery.route':p.route,'c7.gallery.pick':p.work,'c7.gallery.card':p.gift,'c7.gallery.frame':p.frame,'c7.gallery.farewell':p.farewell};
 if(n.kind!=='choice'||!choices[n.id])throw Error('Unsupported gallery node '+n.id);
 return {kind:'choose',choiceId:choices[n.id],expectedTurn:run.turn};
}
export function startGallery(base=finishPhotoSix(),trial=false){let s=base;if(!trial)s=reduceSave(s,{type:'unlock',code:chapters.find(c=>c.id===7)!.code!});return reduceSave(s,{type:trial?'trial':'start',chapter:7,attemptId:trial?'gallery-trial':'gallery-main'});}
export function galleryAt(id:NodeId,path:Partial<GalleryPath>={},base?:SaveV1){let s=startGallery(base);for(let i=0;i<240&&s.campaign.active?.nodeId!==id;i++){if(!s.campaign.active)throw Error('Missing '+id);s=reduceSave(s,{type:'command',target:'campaign',command:galleryCommand(s.campaign.active,path)});}if(s.campaign.active?.nodeId!==id)throw Error('Missing '+id);return s;}
export function finishGallery(base?:SaveV1,path:Partial<GalleryPath>={},trial=false){let s=startGallery(base,trial);for(let i=0;i<240&&(trial?s.trial:s.campaign.active);i++){const r=(trial?s.trial?.run:s.campaign.active)!;s=reduceSave(s,{type:'command',target:trial?'trial':'campaign',command:galleryCommand(r,path)});}if(trial?s.trial:s.campaign.active)throw Error('Gallery did not finish');return s;}
// Synthetic November 3 graph. Never sourced from the player's browser.
export function oldPhoto4(direction:'friends'|'romance'='romance',target?:NodeId){
 let s=finishFive();const prior=s.campaign.records[5]!.story;s.unlocked.push(6);s.campaign.startStates[6]=structuredClone(prior);s.campaign.active=startRun(photo4,prior,'old-photo-four');
 for(let i=0;i<230&&s.campaign.active&&s.campaign.active.nodeId!==target;i++){
  const r=s.campaign.active,n=photo4.nodes[r.nodeId],choices:Record<string,string>={'c6.photo.direction':direction,'c6.photo.friends.choice':'goodbye','c6.photo.place':'water','c6.photo.subject':'her','c6.photo.touch':'none'};
  s=reduceSave(s,{type:'command',target:'campaign',command:n.kind==='dialogue'?{kind:'advance',expectedTurn:r.turn}:{kind:'choose',choiceId:choices[r.nodeId],expectedTurn:r.turn}});
 }
 return {...s,contentVersion:15} as unknown as SaveV1;
}
