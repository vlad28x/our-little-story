import { legacyContent } from './legacySave';
import { chapters as chapterManifest } from '../src/content/chapters/manifest';
const chapterTwoCode=chapterManifest.find(c=>c.id===2)!.code!;
import { describe,it,expect } from 'vitest';
import { chapter2 } from '../src/content/chapters/ch02';
import { step } from '../src/engine/step';
import { reduceSave } from '../src/state/reducer';
import { initialState } from '../src/state/initialState';
import { parseSave } from '../src/persistence/validateSave';
import { validateContent } from '../src/engine/validateContent';
import { completeSave,defaultPath,commandFor } from './helpers';
import type { Command,Run,StoryState,UmbrellaResult } from '../src/engine/types';
import type { SaveV1 } from '../src/state/types';
type Route2={rain:NonNullable<StoryState['rainRoute']>;cat:NonNullable<StoryState['catApproach']>;umbrella:UmbrellaResult['outcome'];mood:NonNullable<StoryState['eveningMood']>};
const default2:Route2={rain:'shelter',cat:'wait',umbrella:'patched',mood:'quiet'};
function command2(run:Run,path:Route2):Command{
  const n=chapter2.nodes[run.nodeId];
  if(n.kind==='dialogue')return {kind:'advance',expectedTurn:run.turn};
  if(n.kind==='minigame')return {kind:'game-result',expectedTurn:run.turn,result:{kind:'umbrella-patch',outcome:path.umbrella}};
  if(n.kind==='choice')return {kind:'choose',expectedTurn:run.turn,choiceId:n.id==='c2.rain'?path.rain:n.id==='c2.cat'?path.cat:path.mood};
  throw new Error('Non-interactive cursor');
}
function finish2(base:SaveV1,path:Route2=default2,trial=false,validateEveryStep=false){
  let s=reduceSave(base,{type:'unlock',code:chapterTwoCode});s=reduceSave(s,{type:trial?'trial':'start',chapter:2});
  for(let i=0;i<180;i++){
    const r=trial?s.trial?.run:s.campaign.active;if(!r)return s;
    if(r.chapter!==2)throw new Error('Wrong active chapter');
    if(validateEveryStep)expect(parseSave(JSON.stringify(s))).toEqual(s);
    s=reduceSave(s,{type:'command',target:trial?'trial':'campaign',command:command2(r,path)});
  }
  throw new Error('Loop');
}
describe('chapter two',()=>{
  it('ignores wrong and obsolete codes without writing progress; normalizes the current code',()=>{
    const s=completeSave();
    for(const code of ['', 'DOZHD', 'wrong-code'])expect(reduceSave(s,{type:'unlock',code})).toBe(s);
    const opened=reduceSave(s,{type:'unlock',code:` ${chapterTwoCode.toLowerCase()} `});
    expect(opened.unlocked).toEqual([1,2]);expect(opened.campaign).toEqual(s.campaign);
    expect(parseSave(JSON.stringify(opened)).unlocked).toContain(2);
    expect(reduceSave(opened,{type:'unlock',code:chapterTwoCode})).toBe(opened);
  });
  it('has a complete graph and only existing scene assets',()=>expect(validateContent(chapter2)).toEqual([]));
  it('covers 432 combinations of inherited memories and new choices',()=>{
    const endings=new Set<string>();let count=0;
    for(const plan of ['tea','banter','coop'] as const)for(const pace of ['quiet','playful','flirt'] as const)for(const noticed of [false,true]){
      const first=completeSave({...defaultPath,plan,pace,search:{kind:'token-search',outcome:noticed?'detour':'skipped',catNoticed:noticed}});
      for(const rain of ['shelter','arcade'] as const)for(const cat of ['wait','help'] as const)for(const umbrella of ['patched','borrowed','skipped'] as const)for(const mood of ['quiet','playful'] as const){
        const s=finish2(first,{rain,cat,umbrella,mood});expect(s.campaign.completed).toEqual([1,2]);expect(s.campaign.records[1]).toEqual(first.campaign.records[1]);
        expect(s.campaign.records[2]?.story).toEqual({...first.campaign.records[1]!.story,rainRoute:rain,catApproach:cat,umbrella,eveningMood:mood});
        expect(parseSave(JSON.stringify(s))).toEqual(s);endings.add(s.lastResult!.cardId);count++;
      }
    }
    expect(count).toBe(432);expect([...endings].sort()).toEqual(['c2.arcade','c2.shelter']);
  },20000);
  it('all visible cursors serialize and recover after each action',()=>{finish2(completeSave(),default2,false,true);finish2(completeSave(),{rain:'arcade',cat:'help',umbrella:'borrowed',mood:'playful'},false,true);});
  it('requires both entitlement and the canonical previous ending',()=>{let s=initialState();expect(reduceSave(s,{type:'start',chapter:2})).toEqual(s);s=reduceSave(s,{type:'unlock',code:chapterTwoCode});expect(s.unlocked).toContain(2);expect(reduceSave(s,{type:'start',chapter:2})).toEqual(s);const first=completeSave();expect(reduceSave(first,{type:'start',chapter:2})).toEqual(first);s=reduceSave(first,{type:'unlock',code:chapterTwoCode});expect(reduceSave(s,{type:'start',chapter:2}).campaign.active?.chapter).toBe(2);});
  it('does not unlock unavailable future chapters',()=>{const s=completeSave();expect(reduceSave(s,{type:'unlock',code:'ZVEZDY'})).toEqual(s);});
  it('trial adds its ending and achievement without modifying either canonical chapter',()=>{
    const main=finish2(completeSave(),{...default2,umbrella:'skipped'});const replay=finish2(main,{rain:'arcade',cat:'help',umbrella:'patched',mood:'playful'},true,true);
    expect(replay.campaign).toEqual(main.campaign);expect(replay.collection.cards.some(c=>c.id==='c2.arcade')).toBe(true);expect(replay.collection.achievements).toContain('dry-plan');expect(replay.lastResult?.source).toBe('trial');
  });
  it('rewriting chapter two retains the first; rewriting one removes subsequent canonical results',()=>{
    const main=finish2(completeSave());const second=reduceSave(main,{type:'rewrite',chapter:2});expect(second.campaign.records[1]).toEqual(main.campaign.records[1]);expect(second.campaign.completed).toEqual([1]);expect(second.campaign.active?.story).toEqual(main.campaign.records[1]?.story);expect(second.campaign.records[2]).toBeUndefined();expect(parseSave(JSON.stringify(second))).toEqual(second);
    const first=reduceSave(main,{type:'rewrite',chapter:1});expect(first.campaign.completed).toEqual([]);expect(first.campaign.records).toEqual({});expect(first.collection).toEqual(main.collection);expect(first.unlocked).toContain(2);expect(first.campaign.startStates[2]).toBeUndefined();
  });
  it('migrates every first chapter cursor and its completed/trial state without changing progress',()=>{
    let s=reduceSave(initialState(),{type:'start'});
    for(let i=0;i<180;i++){
      const legacy=legacyContent(s,1);expect(parseSave(JSON.stringify(legacy))).toEqual(s);
      if(!s.campaign.active)break;s=reduceSave(s,{type:'command',target:'campaign',command:commandFor(s.campaign.active)});
    }
    s=reduceSave(s,{type:'trial'});expect(parseSave(JSON.stringify(legacyContent(s,1)))).toEqual(s);
  });
  it('rejects contradictory inherited decisions and forged completed prefixes',()=>{
    const main=finish2(completeSave());const wrong=structuredClone(main);wrong.campaign.records[2]!.story.plan='coop';expect(()=>parseSave(JSON.stringify(wrong))).toThrow();const prefix=structuredClone(main);prefix.campaign.completed=[2];expect(()=>parseSave(JSON.stringify(prefix))).toThrow();
    const fakeLegacy=legacyContent(main,1);expect(()=>parseSave(JSON.stringify(fakeLegacy))).toThrow();
  });
  it('rejects a result from the wrong game without changing the run',()=>{let s=reduceSave(reduceSave(completeSave(),{type:'unlock',code:chapterTwoCode}),{type:'start',chapter:2});for(let i=0;i<150&&s.campaign.active?.nodeId!=='c2.umbrella';i++){const r=s.campaign.active!;s=reduceSave(s,{type:'command',target:'campaign',command:command2(r,default2)});}const r=s.campaign.active!;expect(step(chapter2,r,{kind:'game-result',expectedTurn:r.turn,result:{kind:'token-search',outcome:'skipped',catNoticed:false}}).kind).toBe('rejected');});
});
