import { legacyContent,prePolishSnapshot } from './legacySave';
import { it,expect } from 'vitest';
import { chapter4 } from '../src/legacy/season1/ch04';
import { validateContent } from '../src/engine/validateContent';
import { reduceSave } from '../src/state/reducer';
import { parseSave } from '../src/persistence/validateSave';
import { step } from '../src/engine/step';
import { cardFromStory } from '../src/content/cards';
import { initialState } from '../src/state/initialState';
import { completeTwo,defaultThird,finishThree,command3,thirdCode } from './chapter3Helpers';
import { command4,defaultFourth,finishFour,startFour,fourthCode } from './legacy4Helpers';
import type { ConstellationResult } from '../src/engine/types';
import beforeHug from './fixtures/chapter4-before-hug.json' with {type:'json'};
it('has a complete fourth-chapter graph and explicit scene resources',()=>expect(validateContent(chapter4)).toEqual([]));
it('covers 288 paths across inherited team/aftercare, bench, star result, bond and wish',()=>{
  let count=0;const endings=new Set();
  const results:ConstellationResult[]=['cat','controllers','teapot'].map(outcome=>({kind:'constellation',outcome:outcome as ConstellationResult['outcome'],usedPreset:false}));results.push({kind:'constellation',outcome:'teapot',usedPreset:true});
  for(const team of ['dumpling','calm','accident'] as const)for(const after of ['team','rematch'] as const){const base=finishThree(completeTwo(),{...defaultThird,team,after});
    for(const bench of ['near','space'] as const)for(const result of results)for(const bond of ['romantic','friendly','undecided'] as const)for(const wish of ['adventure','calm'] as const){
      const s=finishFour(base,{bench,result,bond,wish},false,true);expect(s.campaign.completed).toEqual([1,2,3,4]);for(const id of [1,2,3] as const)expect(s.campaign.records[id]).toEqual(base.campaign.records[id]);
      expect(s.campaign.records[4]?.story).toMatchObject({bench,constellation:result.outcome,bond,wish});expect(parseSave(JSON.stringify(s))).toEqual(s);expect(s.collection.achievements.includes('own-sky')).toBe(!result.usedPreset);endings.add(s.lastResult?.cardId);count++;
    }
  }expect(count).toBe(288);expect([...endings].sort()).toEqual(['c4.adventure','c4.calm']);
},20000);
it('waits for the fourth code and all three previous endings; old public code does not work',()=>{
  const empty=initialState(),early=reduceSave(empty,{type:'unlock',code:fourthCode});expect(early.unlocked).toContain(4);expect(reduceSave(early,{type:'start',chapter:4})).toBe(early);
  const base=finishThree();expect(reduceSave(base,{type:'start',chapter:4})).toBe(base);expect(reduceSave(base,{type:'unlock',code:'ZVEZDY'})).toBe(base);
});
it('migrates every chapter-three campaign/trial cursor without changing it and rejects new data labelled as old',()=>{
  for(const trial of [false,true]){
    let s=trial?reduceSave(finishThree(),{type:'trial',chapter:3}):reduceSave(reduceSave(completeTwo(),{type:'unlock',code:thirdCode}),{type:'start',chapter:3});
    for(let i=0;i<180;i++){expect(parseSave(JSON.stringify(legacyContent(s,3)))).toEqual(prePolishSnapshot(s));const r=trial?s.trial?.run:s.campaign.active;if(!r)break;s=reduceSave(s,{type:'command',target:trial?'trial':'campaign',command:command3(r)});}
  }
  expect(()=>parseSave(JSON.stringify(legacyContent(finishFour(),3)))).toThrow();
});
it('preserves canon and preset captions across trial; rewrites affect only the selected suffix',()=>{
  const main=finishFour(undefined,{...defaultFourth,result:{kind:'constellation',outcome:'teapot',usedPreset:true}});const replay=finishFour(main,defaultFourth,true,true);expect(replay.campaign).toEqual(main.campaign);
  expect(cardFromStory(replay.campaign.records[4]!.story,4,replay.campaign.records[4]!.results).usedPreset).toBe(true);expect(replay.collection.cards.find(c=>c.id==='c4.calm')?.usedPreset).toBe(false);
  const fourth=reduceSave(main,{type:'rewrite',chapter:4});expect(fourth.campaign.completed).toEqual([1,2,3]);expect(fourth.campaign.active?.story.bond).toBeUndefined();expect(fourth.campaign.records[3]).toEqual(main.campaign.records[3]);
  const third=reduceSave(main,{type:'rewrite',chapter:3});expect(third.campaign.records[4]).toBeUndefined();expect(third.collection).toEqual(main.collection);expect(third.unlocked).toContain(4);
});
it('rejects forged star presets, wrong games, stale commands and inconsistent inherited stories',()=>{
  let s=startFour();for(let i=0;i<180&&s.campaign.active?.nodeId!=='c4.stars';i++)s=reduceSave(s,{type:'command',target:'campaign',command:command4(s.campaign.active!)});
  const r=s.campaign.active!;expect(r.nodeId).toBe('c4.stars');expect(step(chapter4,r,{kind:'game-result',expectedTurn:r.turn,result:{kind:'constellation',outcome:'cat',usedPreset:true}}).kind).toBe('rejected');
  expect(step(chapter4,r,{kind:'game-result',expectedTurn:r.turn,result:{kind:'umbrella-patch',outcome:'patched'}}).kind).toBe('rejected');expect(step(chapter4,r,{...command4(r),expectedTurn:r.turn-1}).kind).toBe('rejected');
  const bad=structuredClone(s);bad.campaign.active!.story.teamName='accident';expect(()=>parseSave(JSON.stringify(bad))).toThrow();
});

it('offers all three goodbyes for all 48 bench/sky/bond/wish combinations without changing their decisions',()=>{
  const base=finishThree();let count=0;
  const results:ConstellationResult[]=[{kind:'constellation',outcome:'cat',usedPreset:false},{kind:'constellation',outcome:'controllers',usedPreset:false},{kind:'constellation',outcome:'teapot',usedPreset:false},{kind:'constellation',outcome:'teapot',usedPreset:true}];
  for(const bench of ['near','space'] as const)for(const result of results)for(const bond of ['romantic','friendly','undecided'] as const)for(const wish of ['adventure','calm'] as const){
    const path={bench,result,bond,wish};let save=startFour(base);
    for(let i=0;i<180&&save.campaign.active?.nodeId!=='c4.goodbye';i++)save=reduceSave(save,{type:'command',target:'campaign',command:command4(save.campaign.active!,path)});
    expect(save.campaign.active?.nodeId).toBe('c4.goodbye');const run=save.campaign.active!,node=chapter4.nodes[run.nodeId];
    if(node.kind!=='choice')throw Error('Missing goodbye');expect(node.choices.map(option=>option.id)).toEqual(['accept','her','none']);expect(node.choices.every(option=>!option.when?.length)).toBe(true);
    const incomplete=structuredClone(save);delete incomplete.campaign.active!.story.wish;expect(()=>parseSave(JSON.stringify(incomplete))).toThrow();
    for(const goodbye of ['accept','her','none'] as const){
      let branch=reduceSave(save,{type:'command',target:'campaign',command:{kind:'choose',choiceId:goodbye,expectedTurn:run.turn}});
      expect(branch.campaign.active?.story).toEqual({...run.story,c4Goodbye:goodbye});
      for(let i=0;i<30&&branch.campaign.active;i++){
        expect(parseSave(JSON.stringify(branch))).toEqual(branch);
        branch=reduceSave(branch,{type:'command',target:'campaign',command:command4(branch.campaign.active,{...path,goodbye})});
      }
      expect(branch.campaign.completed).toEqual([1,2,3,4]);expect(branch.campaign.records[4]?.story).toEqual({...run.story,c4Goodbye:goodbye});expect(branch.lastResult?.cardId).toBe('c4.'+wish);expect(parseSave(JSON.stringify(branch))).toEqual(branch);count++;
    }
  }
  expect(count).toBe(144);
});

it('keeps all frozen old final-dialogue cursors and the old completed fourth chapter readable',()=>{
  expect(parseSave(JSON.stringify(beforeHug.completed))).toEqual({...beforeHug.completed,contentVersion:14});
  for(const old of beforeHug.active){
    let save=parseSave(JSON.stringify(old));expect(save).toEqual({...old,contentVersion:14});
    for(let i=0;i<100&&save.campaign.active;i++)save=reduceSave(save,{type:'command',target:'campaign',command:command4(save.campaign.active)});
    const record=structuredClone(save.campaign.records[4]!);expect(record.story.c4Goodbye).toBe('none');delete record.story.c4Goodbye;
    expect(record).toEqual(beforeHug.completed.campaign.records[4]);expect(save.campaign.completed).toEqual([1,2,3,4]);expect(parseSave(JSON.stringify(save))).toEqual(save);
  }
});
