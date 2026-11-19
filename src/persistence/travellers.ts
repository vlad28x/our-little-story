import {chapter10} from '../content/chapters/ch10';
import {startRun,step} from '../engine/step';
import type {Command,Run,StoryState} from '../engine/types';
import {completedSupper} from './photoSix';
import {sameValue} from './sameValue';

export const travellerFields=['c10Edition','c10River','c10Quarry','c10Arrival','c10RiverHelp','c10QuarryHelp','c10ArrivalHelp','c10Continuation','c10CafeGoodbye','c10HomeTender','c10Finale','c10LipKiss'];
export function completedCourtyard(s?:StoryState){return completedSupper(s)&&s?.c9Film==='submitted'&&!!s.c9Frame&&!!s.c9Rain&&!!s.c9Goodbye&&!!s.c7GalleryFrame&&!!s.c7GalleryGift&&(s.c9LipKiss==='yes'||s.c9LipKiss==='no');}
export function replayTravellers(story:StoryState,cursor?:Pick<Run,'nodeId'|'lineIndex'|'turn'>):Run|null{
 if(!completedCourtyard(story))return null;
 const prior=Object.fromEntries(Object.entries(story).filter(([key])=>!travellerFields.includes(key))) as StoryState;
 const stack=[startRun(chapter10,prior,'travellers-replay')];
 while(stack.length){
  const run=stack.pop()!;
  if(Object.entries(run.story).some(([key,value])=>story[key as keyof StoryState]!==value))continue;
  if(cursor&&run.turn>cursor.turn)continue;
  if(cursor&&run.nodeId===cursor.nodeId&&run.lineIndex===cursor.lineIndex&&run.turn===cursor.turn&&sameValue(run.story,story))return run;
  const node=chapter10.nodes[run.nodeId];
  const commands:Command[]=node.kind==='dialogue'?[{kind:'advance',expectedTurn:run.turn}]:node.kind==='choice'?node.choices.map(c=>({kind:'choose',choiceId:c.id,expectedTurn:run.turn})):[];
  for(const command of commands){const next=step(chapter10,run,command);if(next.kind==='ready')stack.push(next.run);else if(next.kind==='complete'&&!cursor&&sameValue(next.run.story,story))return next.run;}
 }
 return null;
}
