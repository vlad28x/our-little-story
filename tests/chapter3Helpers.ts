import { chapter2 } from '../src/content/chapters/ch02';
import { chapter3 } from '../src/content/chapters/ch03';
import { chapters } from '../src/content/chapters/manifest';
import { reduceSave } from '../src/state/reducer';
import { parseSave } from '../src/persistence/validateSave';
import type { Command,KitchenResult,Run,StoryState } from '../src/engine/types';
import type { SaveV1 } from '../src/state/types';
import { completeSave } from './helpers';
export const thirdCode=chapters.find(c=>c.id===3)!.code!;
export function completeTwo(mood:'quiet'|'playful'='quiet',base=completeSave(),details:{rain?:'shelter'|'arcade';cat?:'wait'|'help';umbrella?:'patched'|'borrowed'|'skipped'}={}):SaveV1{
  let s=reduceSave(base,{type:'unlock',code:chapters.find(c=>c.id===2)!.code!});s=reduceSave(s,{type:'start',chapter:2});
  for(let i=0;i<180;i++){const r=s.campaign.active;if(!r)return s;const n=chapter2.nodes[r.nodeId];let command:Command;
    if(n.kind==='dialogue')command={kind:'advance',expectedTurn:r.turn};
    else if(n.kind==='minigame')command={kind:'game-result',expectedTurn:r.turn,result:{kind:'umbrella-patch',outcome:details.umbrella??'patched'}};
    else if(n.kind==='choice')command={kind:'choose',expectedTurn:r.turn,choiceId:n.id==='c2.rain'?(details.rain??'shelter'):n.id==='c2.cat'?(details.cat??'wait'):mood};
    else throw Error('Hidden node');s=reduceSave(s,{type:'command',target:'campaign',command});
  }throw Error('Loop');
}
export type ThirdPath={reaction:NonNullable<StoryState['controllerReaction']>;team:NonNullable<StoryState['teamName']>;style:NonNullable<StoryState['kitchenStyle']>;result:KitchenResult;after:NonNullable<StoryState['gameAftercare']>};
export const defaultThird:ThirdPath={reaction:'help',team:'calm',style:'planner',result:{kind:'kitchen',outcome:'feast',served:9,mode:'calm'},after:'team'};
export function command3(r:Run,p=defaultThird):Command{
  const n=chapter3.nodes[r.nodeId];if(n.kind==='dialogue')return {kind:'advance',expectedTurn:r.turn};
  if(n.kind==='minigame')return {kind:'game-result',result:p.result,expectedTurn:r.turn};
  if(n.kind==='choice')return {kind:'choose',expectedTurn:r.turn,choiceId:n.id==='c3.pad.press'?'press':n.id==='c3.pad.reaction'?p.reaction:n.id==='c3.team'?p.team:n.id==='c3.role'?p.style:p.after};
  throw Error('Hidden node');
}
export function finishThree(base=completeTwo(),p=defaultThird,trial=false,check=false){
  let s=reduceSave(base,{type:'unlock',code:thirdCode});s=reduceSave(s,{type:trial?'trial':'start',chapter:3});
  for(let i=0;i<180;i++){const r=trial?s.trial?.run:s.campaign.active;if(!r)return s;if(check)parseSave(JSON.stringify(s));s=reduceSave(s,{type:'command',target:trial?'trial':'campaign',command:command3(r,p)});}
  throw Error('Loop');
}
