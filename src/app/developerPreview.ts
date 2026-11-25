import {initialState} from '../state/initialState';
import {reduceSave,type Action} from '../state/reducer';
import {getChapter} from '../content/chapters';
import {chapters} from '../content/chapters/manifest';
import {validateSave} from '../persistence/validateSave';
import type {NodeId,StoryState} from '../engine/types';
// Synthetic prefix in ?dev=1 only. Never read or replace the ordinary save.
export function previewPhotoSix(target:NodeId='c6.photo.entry'){
 let save=initialState();
 const apply=(action:Action)=>{const next=reduceSave(save,action);if(next===save)throw Error('Не удалось подготовить тестовую встречу');save=next;};
 const story:StoryState={approach:'help',searchResult:'skipped',catNoticed:false,pace:'quiet',plan:'tea',rainRoute:'shelter',catApproach:'wait',umbrella:'patched',herRecharge:'cozy',herTrust:'careful',eveningMood:'quiet',controllerReaction:'help',teamName:'calm',kitchenStyle:'planner',kitchenResult:'skipped',gameAftercare:'team',bench:'space',constellation:'teapot',wish:'calm',c5FirstTaste:'compare',c5Recommendation:'fresh'};
 apply({type:'dev-jump',nodeId:'c5.close',story});
 for(let i=0;i<50&&save.campaign.active;i++){const r=save.campaign.active;apply({type:'command',target:'campaign',command:{kind:'advance',expectedTurn:r.turn}});}
 apply({type:'unlock',code:chapters.find(c=>c.id===6)!.code!});
 apply({type:'start',chapter:6,attemptId:'developer-photo-six'});
 for(let i=0;i<200&&save.campaign.active?.nodeId!==target;i++){
  const r=save.campaign.active;if(!r)throw Error('Тестовая сцена не найдена');
  const n=getChapter(6)!.nodes[r.nodeId];
  if(n.kind==='dialogue')apply({type:'command',target:'campaign',command:{kind:'advance',expectedTurn:r.turn}});
  else if(n.kind==='choice')apply({type:'command',target:'campaign',command:{kind:'choose',choiceId:n.choices[0].id,expectedTurn:r.turn}});
  else throw Error('Тестовая сцена недоступна');
 }
 if(save.campaign.active?.nodeId!==target)throw Error('Тестовая сцена не найдена');
 return validateSave(JSON.stringify(save));
}
export function previewGallery(target:NodeId='c7.gallery.entry'){
 let save=previewPhotoSix('c6.photo.touch');
 for(let i=0;i<70&&save.campaign.active;i++){const r=save.campaign.active,n=getChapter(6)!.nodes[r.nodeId];save=reduceSave(save,{type:'command',target:'campaign',command:n.kind==='choice'?{kind:'choose',choiceId:'none',expectedTurn:r.turn}:{kind:'advance',expectedTurn:r.turn}});}
 save=reduceSave(save,{type:'unlock',code:chapters.find(c=>c.id===7)!.code!});save=reduceSave(save,{type:'start',chapter:7,attemptId:'developer-gallery-seven'});
 for(let i=0;i<240&&save.campaign.active?.nodeId!==target;i++){const r=save.campaign.active;if(!r)throw Error('Тестовая сцена не найдена');const n=getChapter(7)!.nodes[r.nodeId];save=reduceSave(save,{type:'command',target:'campaign',command:n.kind==='choice'?{kind:'choose',choiceId:n.choices[0].id,expectedTurn:r.turn}:{kind:'advance',expectedTurn:r.turn}});}
 if(save.campaign.active?.nodeId!==target)throw Error('Тестовая сцена не найдена');return validateSave(JSON.stringify(save));
}
export function previewSupper(target:NodeId='c8.supper.entry'){
 let save=previewGallery();
 for(let i=0;i<240&&save.campaign.active;i++){const r=save.campaign.active,n=getChapter(7)!.nodes[r.nodeId];save=reduceSave(save,{type:'command',target:'campaign',command:n.kind==='choice'?{kind:'choose',choiceId:n.choices[0].id,expectedTurn:r.turn}:{kind:'advance',expectedTurn:r.turn}});}
 save=reduceSave(save,{type:'unlock',code:chapters.find(c=>c.id===8)!.code!});save=reduceSave(save,{type:'start',chapter:8,attemptId:'developer-supper-eight'});
 for(let i=0;i<240&&save.campaign.active?.nodeId!==target;i++){const r=save.campaign.active;if(!r)throw Error('Тестовая сцена не найдена');const n=getChapter(8)!.nodes[r.nodeId];save=reduceSave(save,{type:'command',target:'campaign',command:n.kind==='choice'?{kind:'choose',choiceId:n.choices[0].id,expectedTurn:r.turn}:{kind:'advance',expectedTurn:r.turn}});}
 if(save.campaign.active?.nodeId!==target)throw Error('Тестовая сцена не найдена');return validateSave(JSON.stringify(save));
}
export function previewCourtyard(target:NodeId='c9.courtyard.entry'){
 let save=previewSupper();
 for(let i=0;i<240&&save.campaign.active;i++){
  const r=save.campaign.active,n=getChapter(8)!.nodes[r.nodeId];
  const picks:Record<string,string>={'c8.supper.hoodieChoice':'borrow','c8.supper.reply':'danceOn'};
  save=reduceSave(save,{type:'command',target:'campaign',command:n.kind==='choice'?{kind:'choose',choiceId:picks[n.id]??n.choices[0].id,expectedTurn:r.turn}:{kind:'advance',expectedTurn:r.turn}});
 }
 save=reduceSave(save,{type:'unlock',code:chapters.find(c=>c.id===9)!.code!});
 save=reduceSave(save,{type:'start',chapter:9,attemptId:'developer-courtyard-nine'});
 for(let i=0;i<240&&save.campaign.active?.nodeId!==target;i++){
  const r=save.campaign.active;if(!r)throw Error('Тестовая сцена не найдена');const n=getChapter(9)!.nodes[r.nodeId];
  save=reduceSave(save,{type:'command',target:'campaign',command:n.kind==='choice'?{kind:'choose',choiceId:n.id==='c9.courtyard.rainChoice'&&target==='c9.courtyard.earlyWalk'?'leave':n.choices[0].id,expectedTurn:r.turn}:{kind:'advance',expectedTurn:r.turn}});
 }
 if(save.campaign.active?.nodeId!==target)throw Error('Тестовая сцена не найдена');return validateSave(JSON.stringify(save));
}
export function previewTravellers(target:NodeId='c10.travellers.entry'){
 let save=previewCourtyard();
 const firstKiss=target.startsWith('c10.travellers.homeKissFirst');
 for(let i=0;i<260&&save.campaign.active;i++){
  const r=save.campaign.active,n=getChapter(9)!.nodes[r.nodeId];
  save=reduceSave(save,{type:'command',target:'campaign',command:n.kind==='choice'?{kind:'choose',choiceId:(firstKiss||target.includes('private'))&&n.id==='c9.courtyard.goodbyeChoice'?'words':n.choices[0].id,expectedTurn:r.turn}:{kind:'advance',expectedTurn:r.turn}});
 }
 save=reduceSave(save,{type:'unlock',code:chapters.find(c=>c.id===10)!.code!});save=reduceSave(save,{type:'start',chapter:10,attemptId:'developer-travellers-ten'});
 const home=/home|late|sleep|private/.test(target),night=target.endsWith('upperNight');
 for(let i=0;i<300&&save.campaign.active?.nodeId!==target;i++){
  const r=save.campaign.active;if(!r)throw Error('Тестовая сцена не найдена');const n=getChapter(10)!.nodes[r.nodeId];
  const picks:Record<string,string>={riverChoice:'ford',quarryChoice:night?'contour':'tunnel',catChoice:night?'upper':'marsh',arrivedChoice:home?'home':'cafe',homeChoice:firstKiss?'kiss':'near',homeKissFirstChoice:target.endsWith('Soft')?'shoulder':'closer',lateChoice:target.includes('private')?'private':target.includes('sleep')?'sleep':'lateLeave',cafeGoodbyeChoice:'words'};
  save=reduceSave(save,{type:'command',target:'campaign',command:n.kind==='choice'?{kind:'choose',choiceId:picks[n.id.split('.').at(-1)!]??n.choices[0].id,expectedTurn:r.turn}:{kind:'advance',expectedTurn:r.turn}});
 }
 if(save.campaign.active?.nodeId!==target)throw Error('Тестовая сцена не найдена');return validateSave(JSON.stringify(save));
}
export function recoveryPreview(chapter:6|7|8|9|10){if(chapter===10)return previewTravellers();if(chapter===9)return previewCourtyard();if(chapter===8)return previewSupper();if(chapter===7)return previewGallery();if(chapter!==6)throw Error('Новая встреча ещё готовится');return previewPhotoSix();}
