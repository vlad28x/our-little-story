import firstFive from './fixtures/r1/firstFive.json' with {type:'json'};
import { parseSave } from '../src/persistence/validateSave';
import { getChapter } from '../src/content/chapters';
import { chapters } from '../src/content/chapters/manifest';
import { matches } from '../src/engine/step';
import type { EpisodeChapter,Run } from '../src/engine/types';
import { reduceSave,type Action } from '../src/state/reducer';
import type { SaveV1 } from '../src/state/types';
export type R3Path={choices?:Record<string,string>;note?:string;word?:string;results?:Run['results'];check?:boolean};
export function priorR3(){return parseSave(JSON.stringify(firstFive));}
const quiet:Record<string,string>={
'c6.r3.voice':'quiet','c6.r3.moment':'walk','c6.r3.ending':'lap',
'c7.r3.aside.reply':'ignore','c7.r3.gesture':'space','c7.r3.ending':'calm',
'c8.r3.place':'cafe','c8.r3.word':'minute','c8.r3.dance':'playful','c8.r3.gesture':'playful','c8.r3.playful.continue':'tea','c8.r3.late':'story','c8.r3.ending':'tea',
'c9.r3.place':'courtyard','c9.r3.closeness':'separate','c9.r3.second':'watch','c9.r3.ending':'credits',
'c10.r3.place':'home','c10.r3.memory':'none','c10.r3.aside.reply':'self','c10.r3.moment':'talk','c10.r3.ending.home':'goodnight','c10.r3.ending.terrace':'goodnight'};
export function r3Action(r:Run,p:R3Path={},target:'campaign'|'trial'='campaign'):Action{
 const node=getChapter(r.chapter)!.nodes[r.nodeId],expectedTurn=r.turn,base={type:'command' as const,target};
 if(node.kind==='dialogue')return {...base,command:{kind:'advance',expectedTurn}};
 if(node.kind==='note')return {...base,noteText:p.note,command:{kind:'note-result',status:p.note?'saved':'skipped',expectedTurn}};
 if(node.kind==='label')return {...base,wordText:p.word,command:{kind:'label-result',status:p.word?'saved':'skipped',expectedTurn}};
 if(node.kind==='choice'){
  const id=p.choices?.[node.id]??quiet[node.id]??node.choices.find(c=>matches(r.story,c.when,r))?.id;
  return {...base,command:{kind:'choose',choiceId:id!,expectedTurn}};
 }
 if(node.kind==='minigame'){
  const desired=p.results?.[node.game];const a=r.activity;
  if(a?.kind==='evening-route'){
   const result=desired?.kind==='evening-route'?desired:{kind:'evening-route' as const,mode:'skipped' as const,stops:[] as []};
   if(result.mode==='own'&&a.selected.length<2)return {...base,command:{kind:'game-action',game:'evening-route',action:{kind:'toggle-stop',stop:result.stops[a.selected.length]},expectedTurn}};
   if(result.mode==='shared'&&a.phase!=='suggestion')return {...base,command:{kind:'game-action',game:'evening-route',action:{kind:'show-suggestion'},expectedTurn}};
   return {...base,command:{kind:'game-result',result,expectedTurn}};
  }
  if(a?.kind==='between-lines'){
   const result=desired?.kind==='between-lines'?desired:{kind:'between-lines' as const,outcome:'skipped' as const,answers:[] as []};
   if(a.phase==='reply')return {...base,command:{kind:'game-action',game:'between-lines',action:{kind:'next-line'},expectedTurn}};
   if(a.phase==='choose'&&a.answers.length<result.answers.length)return {...base,command:{kind:'game-action',game:'between-lines',action:{kind:'answer',answer:result.answers.at(a.answers.length)!},expectedTurn}};
   return {...base,command:{kind:'game-result',result,expectedTurn}};
  }
  if(a?.kind==='dessert'){
   const result=desired?.kind==='dessert'?desired:{kind:'dessert' as const,mode:'shared' as const,topping:'berry' as const,mark:'star' as const};
   if(result.mode==='completed'){
    if(a.topping!==result.topping)return {...base,command:{kind:'game-action',game:'dessert',action:{kind:'set-topping',value:result.topping},expectedTurn}};
    if(a.mark!==result.mark)return {...base,command:{kind:'game-action',game:'dessert',action:{kind:'set-mark',value:result.mark},expectedTurn}};
   }
   return {...base,command:{kind:'game-result',result,expectedTurn}};
  }
  if(a?.kind==='movie-setup'){
   const result=desired?.kind==='movie-setup'?desired:{kind:'movie-setup' as const,mode:'shared' as const,seat:'space' as const,light:'warm' as const,drink:'tea' as const};
   if(result.mode==='completed'){
    if(a.seat!==result.seat)return {...base,command:{kind:'game-action',game:'movie-setup',action:{kind:'set-seat',value:result.seat},expectedTurn}};
    if(a.light!==result.light)return {...base,command:{kind:'game-action',game:'movie-setup',action:{kind:'set-light',value:result.light},expectedTurn}};
    if(a.drink!==result.drink)return {...base,command:{kind:'game-action',game:'movie-setup',action:{kind:'set-drink',value:result.drink},expectedTurn}};
   }
   return {...base,command:{kind:'game-result',result,expectedTurn}};
  }
  if(a?.kind==='evening-light'){
   const result=desired?.kind==='evening-light'?desired:{kind:'evening-light' as const,level:'unchanged' as const};
   if(a.level!==result.level)return {...base,command:{kind:'game-action',game:'evening-light',action:{kind:'select',level:result.level},expectedTurn}};
   return {...base,command:{kind:'game-result',result,expectedTurn}};
  }
 }
 throw Error(`No action at ${node.id}`);
}
export function startR3(chapter:EpisodeChapter,base?:SaveV1,trial=false){
 const prior=base??(chapter===6?priorR3():finishR3((chapter-1) as EpisodeChapter));
 const unlocked=reduceSave(prior,{type:'unlock',code:chapters.find(c=>c.id===chapter)!.code!});
 return reduceSave(unlocked,{type:trial?'trial':'start',chapter,attemptId:`r3-${chapter}-${trial?'trial':'campaign'}`});
}
export function finishR3(chapter:EpisodeChapter,p:R3Path={},base?:SaveV1,trial=false){
 let save=startR3(chapter,base,trial);
 for(let i=0;i<1200;i++){
  const run=trial?save.trial?.run:save.campaign.active;if(!run)return save;
  const next=reduceSave(save,r3Action(run,p,trial?'trial':'campaign'));
  if(next===save)throw Error(`No progress at ${run.nodeId}`);
  save=p.check?parseSave(JSON.stringify(next)):next;
 }
 throw Error('R3 loop');
}
export function r3At(chapter:EpisodeChapter,id:string,p:R3Path={},base?:SaveV1){
 let save=startR3(chapter,base);
 for(let i=0;i<1200;i++){
  const run=save.campaign.active;if(!run)throw Error(`Ended before ${id}`);
  if(run.nodeId===id)return save;
  const next=reduceSave(save,r3Action(run,p));if(next===save)throw Error(`No progress at ${run.nodeId}`);save=next;
 }
 throw Error('R3 loop');
}
