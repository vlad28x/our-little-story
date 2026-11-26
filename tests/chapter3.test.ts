import { expect,it } from 'vitest';
import { chapter4 as chapter3 } from '../src/content/chapters/ch04';
import { step } from '../src/engine/step';
import { validateContent } from '../src/engine/validateContent';
import { validateSave as parseSave } from '../src/persistence/validateSave';
import { initialState } from '../src/state/initialState';
import { reduceSave } from '../src/state/reducer';
import { command3,completeTwo,defaultThird,finishThree,thirdCode } from './chapter3Helpers';
import { finishSky } from './sky3Helpers';
it('gaming fourth chapter has no broken or unreachable nodes',()=>expect(validateContent(chapter3)).toEqual([]));
it('round-trips representative game paths with both moods and all four kitchen outcomes',()=>{
  const bases={quiet:finishSky(completeTwo('quiet')),playful:finishSky(completeTwo('playful'))};
  const paths=[
    ['quiet','tease','dumpling','planner','feast','team'],
    ['quiet','help','calm','improv','snack','rematch'],
    ['quiet','absurd','accident','planner','chaos','team'],
    ['quiet','help','dumpling','improv','skipped','rematch'],
    ['playful','help','accident','improv','feast','rematch'],
    ['playful','absurd','dumpling','planner','snack','team'],
    ['playful','tease','calm','improv','chaos','rematch'],
    ['playful','absurd','accident','planner','skipped','team'],
  ] as const;
  for(const [mood,reaction,team,style,outcome,after] of paths){
    const base=bases[mood];
    const result={kind:'kitchen' as const,outcome,served:outcome==='feast'?9:outcome==='snack'?4:0,mode:'calm' as const};
    const finished=finishThree(base,{reaction,team,style,result,after},false,true);
    expect(finished.campaign.completed).toEqual([1,2,3,4]);
    for(const previous of [1,2,3] as const)expect(finished.campaign.records[previous]).toEqual(base.campaign.records[previous]);
    expect(finished.campaign.records[4]?.story).toMatchObject({eveningMood:mood,controllerReaction:reaction,teamName:team,kitchenStyle:style,kitchenResult:outcome,gameAftercare:after});
    expect(parseSave(JSON.stringify(finished))).toEqual(finished);
  }
});
it('gates gaming fourth chapter by its own code and both previous endings',()=>{
  const fresh=initialState(),early=reduceSave(fresh,{type:'unlock',code:thirdCode});expect(early.unlocked).toContain(4);expect(reduceSave(early,{type:'start',chapter:4})).toBe(early);
  const base=finishSky();expect(reduceSave(base,{type:'start',chapter:4})).toBe(base);expect(reduceSave(base,{type:'unlock',code:'COOP'})).toBe(base);
});
it('keeps canon through trial; rewriting three preserves two, rewriting two clears three but retains rights and album',()=>{
  const main=finishThree();const replay=finishThree(main,{...defaultThird,reaction:'absurd',result:{kind:'kitchen',outcome:'skipped',served:0,mode:'timed'}},true,true);expect(replay.campaign).toEqual(main.campaign);expect(replay.lastResult?.source).toBe('trial');
  const third=reduceSave(main,{type:'rewrite',chapter:4});expect(third.campaign.completed).toEqual([1,2,3]);expect(third.campaign.records[2]).toEqual(main.campaign.records[2]);expect(third.campaign.active?.story.controllerReaction).toBeUndefined();
  const second=reduceSave(main,{type:'rewrite',chapter:2});expect(second.campaign.completed).toEqual([1]);expect(second.campaign.records[3]).toBeUndefined();expect(second.collection).toEqual(main.collection);expect(second.unlocked).toContain(3);
});
it('rejects forged kitchen totals/outcomes and stale turns, and validates inherited state and game records',()=>{
  let s=reduceSave(reduceSave(finishSky(),{type:'unlock',code:thirdCode}),{type:'start',chapter:4});for(let i=0;i<180&&s.campaign.active?.nodeId!=='c4.kitchen';i++){s=reduceSave(s,{type:'command',target:'campaign',command:command3(s.campaign.active!)});}
  const r=s.campaign.active!;expect(r.nodeId).toBe('c4.kitchen');
  for(const result of [{kind:'kitchen',outcome:'feast',served:1,mode:'timed'},{kind:'kitchen',outcome:'snack',served:10,mode:'calm'},{kind:'kitchen',outcome:'chaos',served:0,mode:'invalid'}])expect(step(chapter3,r,{kind:'game-result',expectedTurn:r.turn,result} as Parameters<typeof step>[2]).kind).toBe('rejected');
  expect(step(chapter3,r,{...command3(r),expectedTurn:r.turn-1}).kind).toBe('rejected');
  const wrong=structuredClone(s);wrong.campaign.active!.story.eveningMood='playful';expect(()=>parseSave(JSON.stringify(wrong))).toThrow();
  const done=finishThree();done.campaign.records[4]!.results.kitchen!.served=0;expect(()=>parseSave(JSON.stringify(done))).toThrow();
});
