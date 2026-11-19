import { expect,it } from 'vitest';
import { cardFromStory } from '../src/content/cards';
import { chapter3 as chapter4 } from '../src/content/chapters/ch03';
import { step } from '../src/engine/step';
import type { ConstellationResult } from '../src/engine/types';
import { validateContent } from '../src/engine/validateContent';
import { validateSave as parseSave } from '../src/persistence/validateSave';
import { initialState } from '../src/state/initialState';
import { reduceSave } from '../src/state/reducer';
import { completeTwo } from './chapter3Helpers';
import { skyCommand as command4,defaultSky as defaultFourth,finishSky as finishFour,skyCode as fourthCode,startSky as startFour } from './sky3Helpers';
it('has a complete fourth-chapter graph and explicit scene resources',()=>expect(validateContent(chapter4)).toEqual([]));
it('covers every distance, star result and wish before the game',()=>{
  let count=0;const endings=new Set();
  const results:ConstellationResult[]=['cat','controllers','teapot'].map(outcome=>({kind:'constellation',outcome:outcome as ConstellationResult['outcome'],usedPreset:false}));results.push({kind:'constellation',outcome:'teapot',usedPreset:true});
  {const base=completeTwo();
    for(const bench of ['near','space'] as const)for(const result of results)for(const wish of ['adventure','calm'] as const){
      const s=finishFour(base,{...defaultFourth,bench,result,wish},false,true);expect(s.campaign.completed).toEqual([1,2,3]);for(const id of [1,2] as const)expect(s.campaign.records[id]).toEqual(base.campaign.records[id]);
      expect(s.campaign.records[3]?.story).toMatchObject({bench,constellation:result.outcome,wish});expect(parseSave(JSON.stringify(s))).toEqual(s);expect(s.collection.achievements.includes('own-sky')).toBe(!result.usedPreset);endings.add(s.lastResult?.cardId);count++;
    }
  }expect(count).toBe(16);expect([...endings].sort()).toEqual(['c4.adventure','c4.calm']);
},20000);
it('waits for the fourth code and all three previous endings; old public code does not work',()=>{
  const empty=initialState(),early=reduceSave(empty,{type:'unlock',code:fourthCode});expect(early.unlocked).toContain(3);expect(reduceSave(early,{type:'start',chapter:3})).toBe(early);
  const base=completeTwo();expect(reduceSave(base,{type:'start',chapter:3})).toBe(base);expect(reduceSave(base,{type:'unlock',code:'ZVEZDY'})).toBe(base);
});
it('preserves canon and preset captions across trial; rewrites affect only the selected suffix',()=>{
  const main=finishFour(undefined,{...defaultFourth,result:{kind:'constellation',outcome:'teapot',usedPreset:true}});const replay=finishFour(main,defaultFourth,true,true);expect(replay.campaign).toEqual(main.campaign);
  expect(cardFromStory(replay.campaign.records[3]!.story,3,replay.campaign.records[3]!.results).usedPreset).toBe(true);expect(replay.collection.cards.find(c=>c.id==='c4.calm')?.usedPreset).toBe(false);
  const fourth=reduceSave(main,{type:'rewrite',chapter:3});expect(fourth.campaign.completed).toEqual([1,2]);expect(fourth.campaign.active?.story.bond).toBeUndefined();expect(fourth.campaign.records[2]).toEqual(main.campaign.records[2]);
  const third=reduceSave(main,{type:'rewrite',chapter:3});expect(third.campaign.records[3]).toBeUndefined();expect(third.collection).toEqual(main.collection);expect(third.unlocked).toContain(3);
});
it('rejects forged star presets, wrong games, stale commands and inconsistent inherited stories',()=>{
  let s=startFour();for(let i=0;i<180&&s.campaign.active?.nodeId!=='c3.stars';i++)s=reduceSave(s,{type:'command',target:'campaign',command:command4(s.campaign.active!)});
  const r=s.campaign.active!;expect(r.nodeId).toBe('c3.stars');expect(step(chapter4,r,{kind:'game-result',expectedTurn:r.turn,result:{kind:'constellation',outcome:'cat',usedPreset:true}}).kind).toBe('rejected');
  expect(step(chapter4,r,{kind:'game-result',expectedTurn:r.turn,result:{kind:'umbrella-patch',outcome:'patched'}}).kind).toBe('rejected');expect(step(chapter4,r,{...command4(r),expectedTurn:r.turn-1}).kind).toBe('rejected');
  const bad=structuredClone(s);bad.campaign.active!.story.teamName='accident';expect(()=>parseSave(JSON.stringify(bad))).toThrow();
});

it('offers all three goodbyes for all 16 bench/sky/wish combinations without changing their decisions',()=>{
  const base=completeTwo();let count=0;
  const results:ConstellationResult[]=[{kind:'constellation',outcome:'cat',usedPreset:false},{kind:'constellation',outcome:'controllers',usedPreset:false},{kind:'constellation',outcome:'teapot',usedPreset:false},{kind:'constellation',outcome:'teapot',usedPreset:true}];
  for(const bench of ['near','space'] as const)for(const result of results)for(const wish of ['adventure','calm'] as const){
    const path={...defaultFourth,bench,result,wish};let save=startFour(base);
    for(let i=0;i<180&&save.campaign.active?.nodeId!=='c3.goodbye';i++)save=reduceSave(save,{type:'command',target:'campaign',command:command4(save.campaign.active!,path)});
    expect(save.campaign.active?.nodeId).toBe('c3.goodbye');const run=save.campaign.active!,node=chapter4.nodes[run.nodeId];
    if(node.kind!=='choice')throw Error('Missing goodbye');expect(node.choices.map(option=>option.id)).toEqual(['accept','her','none']);expect(node.choices.every(option=>!option.when?.length)).toBe(true);
    const incomplete=structuredClone(save);delete incomplete.campaign.active!.story.wish;expect(()=>parseSave(JSON.stringify(incomplete))).toThrow();
    for(const goodbye of ['accept','her','none'] as const){
      let branch=reduceSave(save,{type:'command',target:'campaign',command:{kind:'choose',choiceId:goodbye,expectedTurn:run.turn}});
      expect(branch.campaign.active?.story).toEqual({...run.story,c4Goodbye:goodbye});
      for(let i=0;i<30&&branch.campaign.active;i++){
        expect(parseSave(JSON.stringify(branch))).toEqual(branch);
        branch=reduceSave(branch,{type:'command',target:'campaign',command:command4(branch.campaign.active,{...path,goodbye})});
      }
      expect(branch.campaign.completed).toEqual([1,2,3]);expect(branch.campaign.records[3]?.story).toEqual({...run.story,c4Goodbye:goodbye});expect(branch.lastResult?.cardId).toBe('c4.'+wish);expect(parseSave(JSON.stringify(branch))).toEqual(branch);count++;
    }
  }
  expect(count).toBe(48);
});
