import { getChapter } from '../content/chapters';
import { matches,startRun,step } from '../engine/step';
import type { Command,Run,StoryState } from '../engine/types';
import { sameValue } from './sameValue';

const skyFields=['c4Edition','bench','constellation','wish','c4Goodbye'];
const gameFields=['controllerReaction','teamName','kitchenStyle','kitchenResult','gameAftercare'];
const own5=['c5Edition','c5FirstTaste','c5Recommendation'];
// Replaying the canonical first-season graphs checks early/future fields
// and the exact saved action count. Fifth-chapter imports retain their existing contract.
export function replayFirstSeason(id:3|4|5,story:StoryState,results:Run['results'],cursor?:{nodeId:Run['nodeId'];lineIndex:number;turn?:number}):Run|null{
  const chapter=getChapter(id,story)!;
  const own=id===3?skyFields:id===4?gameFields:own5;
  const prior=Object.fromEntries(Object.entries(story).filter(([key])=>!own.includes(key))) as StoryState;
  const stack=[startRun(chapter,prior)];
  while(stack.length){
    const run=stack.pop()!;
    if(Object.entries(run.story).some(([k,v])=>story[k as keyof StoryState]!==v))continue;
    if(cursor?.turn!==undefined&&run.turn>cursor.turn)continue;
    if(cursor&&run.nodeId===cursor.nodeId&&run.lineIndex===cursor.lineIndex&&
       (cursor.turn===undefined||cursor.turn===run.turn)&&sameValue(story,run.story)&&sameValue(results,run.results))return run;
    const n=chapter.nodes[run.nodeId];
    const commands:Command[]=n.kind==='dialogue'?[{kind:'advance',expectedTurn:run.turn}]:
      n.kind==='choice'?n.choices.filter(c=>matches(run.story,c.when,run)).map(c=>({kind:'choose',choiceId:c.id,expectedTurn:run.turn})):
      n.kind==='minigame'&&results[n.game]?[{kind:'game-result',result:results[n.game]!,expectedTurn:run.turn}]:[];
    for(const command of commands){
      const next=step(chapter,run,command);
      if(next.kind==='ready')stack.push(next.run);
      else if(next.kind==='complete'&&!cursor&&sameValue(story,next.run.story)&&sameValue(results,next.run.results))return next.run;
    }
  }
  return null;
}
