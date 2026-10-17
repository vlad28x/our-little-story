import { describe,it,expect } from 'vitest';
import { step } from '../src/engine/step';
import { reduceSave } from '../src/state/reducer';
import { parseSave } from '../src/persistence/validateSave';
import { chapter,completeSave,defaultPath,runTo,type Path } from './helpers';
describe('chapter one story engine',()=>{
  it('all 405 choice/result combinations end without dead ends and validate',()=>{
    const paths:Path['search'][]=[{kind:'token-search',outcome:'tidy',catNoticed:false},{kind:'token-search',outcome:'detour',catNoticed:false},{kind:'token-search',outcome:'detour',catNoticed:true},{kind:'token-search',outcome:'skipped',catNoticed:false},{kind:'token-search',outcome:'skipped',catNoticed:true}];
    const endings=new Set<string>();let count=0;
    for(const approach of ['joke','help','space'] as const)for(const pace of ['quiet','playful','flirt'] as const)for(const detail of ['box','cat','window'] as const)for(const plan of ['tea','banter','coop'] as const)for(const search of paths){const save=completeSave({approach,pace,detail,plan,search});expect(save.campaign.records[1]?.story).toEqual({approach,pace,plan,searchResult:search.outcome,catNoticed:search.catNoticed});endings.add(save.lastResult!.cardId);expect(parseSave(JSON.stringify(save))).toEqual(save);count++;}
    expect(count).toBe(405);expect([...endings].sort()).toEqual(['c1.banter','c1.coop','c1.tea']);
  });
  it('does not mutate input and rejects a second stale click',()=>{const run=runTo('c1.approach');const before=structuredClone(run);const command={kind:'choose' as const,choiceId:'help',expectedTurn:run.turn};const first=step(chapter,run,command);expect(run).toEqual(before);expect(first.kind).toBe('ready');if(first.kind==='ready'){expect(step(chapter,first.run,command).kind).toBe('rejected');expect(first.run.story.approach).toBe('help');}});
  it('rejects commands for the wrong type of scene and unknown choices',()=>{const run=runTo('c1.approach');expect(step(chapter,run,{kind:'advance',expectedTurn:run.turn}).kind).toBe('rejected');expect(step(chapter,run,{kind:'choose',choiceId:'missing',expectedTurn:run.turn}).kind).toBe('rejected');});
  it('secret survives skipping after finding the cat',()=>{const s=completeSave({...defaultPath,search:{kind:'token-search',outcome:'skipped',catNoticed:true}});expect(s.collection.achievements).toEqual(['cat-supervisor']);});
  it('rejects impossible tidy plus cat result',()=>{const r=runTo('c1.search');expect(step(chapter,r,{kind:'game-result',expectedTurn:r.turn,result:{kind:'token-search',outcome:'tidy',catNoticed:true}}).kind).toBe('rejected');});
  it('trial changes collection but never canonical progress',()=>{const base=completeSave();const trial=completeSave({...defaultPath,plan:'coop',search:{kind:'token-search',outcome:'detour',catNoticed:true}},base,'trial');expect(trial.campaign).toEqual(base.campaign);expect(trial.collection.cards).toHaveLength(2);expect(trial.lastResult?.source).toBe('trial');expect(trial.trial).toBeNull();expect(parseSave(JSON.stringify(trial))).toEqual(trial);});
  it('rewrite resets current decisions while retaining collection and rights',()=>{const old=completeSave();const next=reduceSave(old,{type:'rewrite'});expect(next.campaign.active?.story).toEqual({});expect(next.campaign.records).toEqual({});expect(next.campaign.completed).toEqual([]);expect(next.collection).toEqual(old.collection);expect(next.unlocked).toEqual(old.unlocked);});
  it('trial can also run while canonical chapter is unfinished',()=>{let s=reduceSave(completeSave(),{type:'rewrite'});const canonical=structuredClone(s.campaign);s=completeSave({...defaultPath,plan:'banter'},s,'trial');expect(s.campaign).toEqual(canonical);expect(s.lastResult?.cardId).toBe('c1.banter');});
});
