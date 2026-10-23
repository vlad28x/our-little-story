import { legacyContent,prePolishSnapshot } from './legacySave';
import { it,expect } from 'vitest';
import { chapter3 } from '../src/content/chapters/ch03';
import { chapter2 } from '../src/content/chapters/ch02';
import type { Command } from '../src/engine/types';
import { validateContent } from '../src/engine/validateContent';
import { parseSave } from '../src/persistence/validateSave';
import { reduceSave } from '../src/state/reducer';
import { step } from '../src/engine/step';
import { initialState } from '../src/state/initialState';
import { command3,completeTwo,defaultThird,finishThree,thirdCode } from './chapter3Helpers';
it('chapter three has no broken or unreachable nodes',()=>expect(validateContent(chapter3)).toEqual([]));
it('covers 288 third-chapter paths with every inherited mood, reaction, team, style and dinner result',()=>{
  let count=0;const branches=new Set();
  for(const mood of ['quiet','playful'] as const){const base=completeTwo(mood);
    for(const reaction of ['tease','help','absurd'] as const)for(const team of ['dumpling','calm','accident'] as const)for(const style of ['planner','improv'] as const)for(const outcome of ['feast','snack','chaos','skipped'] as const)for(const after of ['team','rematch'] as const){
      const result={kind:'kitchen' as const,outcome,served:outcome==='feast'?9:outcome==='snack'?4:0,mode:'calm' as const};
      const s=finishThree(base,{reaction,team,style,result,after},false,true);expect(s.campaign.completed).toEqual([1,2,3]);expect(s.campaign.records[1]).toEqual(base.campaign.records[1]);expect(s.campaign.records[2]).toEqual(base.campaign.records[2]);expect(s.campaign.records[3]?.story).toMatchObject({controllerReaction:reaction,teamName:team,kitchenStyle:style,kitchenResult:outcome,gameAftercare:after});expect(parseSave(JSON.stringify(s))).toEqual(s);branches.add(outcome);count++;
    }
  }expect(count).toBe(288);expect(branches.size).toBe(4);
},20000);
it('gates chapter three by its own code and both previous endings',()=>{
  const fresh=initialState(),early=reduceSave(fresh,{type:'unlock',code:thirdCode});expect(early.unlocked).toContain(3);expect(reduceSave(early,{type:'start',chapter:3})).toBe(early);
  const base=completeTwo();expect(reduceSave(base,{type:'start',chapter:3})).toBe(base);expect(reduceSave(base,{type:'unlock',code:'COOP'})).toBe(base);
});
it('migrates old chapter-two saves at every cursor, including trials and completed snapshots',()=>{
  const base=completeTwo();expect(parseSave(JSON.stringify(legacyContent(base,2)))).toEqual(prePolishSnapshot(base));
  for(const target of ['campaign','trial'] as const){
    let s=reduceSave(base,{type:target==='trial'?'trial':'rewrite',chapter:2});
    for(let i=0;i<180;i++){
      expect(parseSave(JSON.stringify(legacyContent(s,2)))).toEqual(prePolishSnapshot(s));
      const r=target==='trial'?s.trial?.run:s.campaign.active;if(!r)break;
      const n=chapter2.nodes[r.nodeId];let command:Command;
      if(n.kind==='dialogue')command={kind:'advance',expectedTurn:r.turn};
      else if(n.kind==='minigame')command={kind:'game-result',expectedTurn:r.turn,result:{kind:'umbrella-patch',outcome:'skipped'}};
      else if(n.kind==='choice')command={kind:'choose',expectedTurn:r.turn,choiceId:n.id==='c2.rain'?'arcade':n.id==='c2.cat'?'help':'playful'};
      else throw Error('Hidden node');s=reduceSave(s,{type:'command',target,command});
    }
  }
  const invalid=finishThree(base);expect(()=>parseSave(JSON.stringify(legacyContent(invalid,2)))).toThrow();
});
it('keeps canon through trial; rewriting three preserves two, rewriting two clears three but retains rights and album',()=>{
  const main=finishThree();const replay=finishThree(main,{...defaultThird,reaction:'absurd',result:{kind:'kitchen',outcome:'skipped',served:0,mode:'timed'}},true,true);expect(replay.campaign).toEqual(main.campaign);expect(replay.lastResult?.source).toBe('trial');
  const third=reduceSave(main,{type:'rewrite',chapter:3});expect(third.campaign.completed).toEqual([1,2]);expect(third.campaign.records[2]).toEqual(main.campaign.records[2]);expect(third.campaign.active?.story.controllerReaction).toBeUndefined();
  const second=reduceSave(main,{type:'rewrite',chapter:2});expect(second.campaign.completed).toEqual([1]);expect(second.campaign.records[3]).toBeUndefined();expect(second.collection).toEqual(main.collection);expect(second.unlocked).toContain(3);
});
it('rejects forged kitchen totals/outcomes and stale turns, and validates inherited state and game records',()=>{
  let s=reduceSave(reduceSave(completeTwo(),{type:'unlock',code:thirdCode}),{type:'start',chapter:3});for(let i=0;i<180&&s.campaign.active?.nodeId!=='c3.kitchen';i++){s=reduceSave(s,{type:'command',target:'campaign',command:command3(s.campaign.active!)});}
  const r=s.campaign.active!;expect(r.nodeId).toBe('c3.kitchen');
  for(const result of [{kind:'kitchen',outcome:'feast',served:1,mode:'timed'},{kind:'kitchen',outcome:'snack',served:10,mode:'calm'},{kind:'kitchen',outcome:'chaos',served:0,mode:'invalid'}])expect(step(chapter3,r,{kind:'game-result',expectedTurn:r.turn,result} as Parameters<typeof step>[2]).kind).toBe('rejected');
  expect(step(chapter3,r,{...command3(r),expectedTurn:r.turn-1}).kind).toBe('rejected');
  const wrong=structuredClone(s);wrong.campaign.active!.story.eveningMood='playful';expect(()=>parseSave(JSON.stringify(wrong))).toThrow();
  const done=finishThree();done.campaign.records[3]!.results.kitchen!.served=0;expect(()=>parseSave(JSON.stringify(done))).toThrow();
});
