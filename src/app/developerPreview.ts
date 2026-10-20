import { matches } from '../engine/step';
import type { SaveV1 } from '../state/types';
import { initialState } from '../state/initialState';
import { reduceSave,type Action } from '../state/reducer';
import { chapters } from '../content/chapters/manifest';
import { getChapter } from '../content/chapters';
import { parseSave } from '../persistence/validateSave';
import type { StoryState } from '../engine/types';
// Called only by DeveloperPanel in the separate ?dev=1 save scope.
export function previewSeventh(){
 let save=initialState();const apply=(a:Action)=>{const next=reduceSave(save,a);if(next===save)throw Error('Не удалось подготовить тестовую встречу');save=next;};
 const story:StoryState={approach:'help',searchResult:'skipped',catNoticed:false,pace:'quiet',plan:'tea',rainRoute:'shelter',catApproach:'wait',umbrella:'patched',eveningMood:'quiet',controllerReaction:'help',teamName:'calm',kitchenStyle:'planner',kitchenResult:'skipped',gameAftercare:'team',bench:'space',constellation:'teapot',bond:'friendly',wish:'calm',ending:'friendly'};
 apply({type:'dev-jump',nodeId:'c5.ending.friendly',story});
 let run=save.campaign.active!;const chapter5=getChapter(5)!;const node=chapter5.nodes[run.nodeId];if(node.kind!=='dialogue')throw Error('Не найдена сцена');
 for(let i=0;i<node.lines.length;i++){run=save.campaign.active!;apply({type:'command',target:'campaign',command:{kind:'advance',expectedTurn:run.turn}});}
 apply({type:'unlock',code:chapters.find(c=>c.id===6)!.code!});apply({type:'start',chapter:6,attemptId:'developer-six'});
 save=finishPreview(save);
 apply({type:'unlock',code:chapters.find(c=>c.id===7)!.code!});apply({type:'start',chapter:7,attemptId:'developer-seven'});
 return parseSave(JSON.stringify(save));
}
export function previewFinal(chapter:8|9|10){
 let save=previewSeventh();
 for(let id=7;id<chapter;id++){
  save=finishPreview(save);
  const next=(id+1) as 8|9|10;
  save=reduceSave(save,{type:'unlock',code:chapters.find(c=>c.id===next)!.code!});
  save=reduceSave(save,{type:'start',chapter:next,attemptId:'developer-'+next});
 }
 return parseSave(JSON.stringify(save));
}
function finishPreview(initial:SaveV1){
 let save=initial;
 const choices:Record<string,string>={'c6.r3.voice':'quiet','c6.r3.moment':'walk','c6.r3.ending':'lap','c7.r3.aside.reply':'ignore','c7.r3.gesture':'space','c7.r3.ending':'calm','c8.r3.place':'cafe','c8.r3.word':'minute','c8.r3.dance':'playful','c8.r3.gesture':'playful','c8.r3.playful.continue':'tea','c8.r3.late':'story','c8.r3.ending':'tea','c9.r3.place':'courtyard','c9.r3.closeness':'separate','c9.r3.second':'watch','c9.r3.ending':'credits'};
 for(let i=0;i<1200&&save.campaign.active;i++){
  const r=save.campaign.active,n=getChapter(r.chapter)!.nodes[r.nodeId],expectedTurn=r.turn;
  let action:Action;
  if(n.kind==='dialogue')action={type:'command',target:'campaign',command:{kind:'advance',expectedTurn}};
  else if(n.kind==='choice')action={type:'command',target:'campaign',command:{kind:'choose',choiceId:choices[n.id]??n.choices.find(c=>matches(r.story,c.when,r))!.id,expectedTurn}};
  else if(n.kind==='note')action={type:'command',target:'campaign',command:{kind:'note-result',status:'skipped',expectedTurn}};
  else if(n.kind==='label')action={type:'command',target:'campaign',command:{kind:'label-result',status:'skipped',expectedTurn}};
  else if(n.kind==='minigame')action={type:'command',target:'campaign',command:{kind:'game-result',result:r.chapter===6?{kind:'evening-route',mode:'skipped',stops:[]}:r.chapter===7?{kind:'between-lines',outcome:'skipped',answers:[]}:r.chapter===8?{kind:'dessert',mode:'shared',topping:'berry',mark:'star'}:{kind:'movie-setup',mode:'shared',seat:'space',light:'warm',drink:'tea'},expectedTurn}};
  else throw Error('Тестовая сцена недоступна');
  const next=reduceSave(save,action);if(next===save)throw Error('Не удалось подготовить '+n.id);save=next;
 }
 if(save.campaign.active)throw Error('Слишком длинный тестовый префикс');
 return save;
}

// Rebuild only the isolated sandbox; also usable while its old save cannot load.
export function recoveryPreview(chapter:6|7|8|9|10){
 if(chapter>=8)return previewFinal(chapter as 8|9|10);
 const seventh=previewSeventh();
 return chapter===7?seventh:parseSave(JSON.stringify(reduceSave(seventh,{type:'rewrite',chapter:6,attemptId:'developer-six-recovery'})));
}
