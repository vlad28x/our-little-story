import { expect,it } from 'vitest';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { getChapter } from '../src/content/chapters';
import { chapter4 } from '../src/content/chapters/ch04';
import { chapter5 } from '../src/legacy/season1/ch05-v13';
import { parseSave } from '../src/persistence/validateSave';
import { reduceSave } from '../src/state/reducer';
import { cloudRaw } from '../src/telegram/cloud';
import { cardFromStory,archivedEpisodeCard } from '../src/content/cards';
import { continuationDraft,invitationConversation } from '../src/content/invitation';
import { finishThree } from './chapter3Helpers';
import { defaultFourth,finishFour,startFour } from './chapter4Helpers';
import { command5,finishFive,startFive } from './edition2FifthHelpers';
import { finishFour as oldFour,defaultFourth as oldFourth,startFour as startOldFour,command4 as oldCommand4 } from './legacy4Helpers';
import { finishFive as oldFive,startFive as startOldFive,command5 as oldCommand5 } from './legacy5Helpers';
import { finishR3 } from './r3Helpers';
import type { ConstellationResult } from '../src/engine/types';
import type { SaveV1 } from '../src/state/types';

const roundtrip=(s:SaveV1)=>expect(parseSave(cloudRaw(s))).toEqual(s);
it('new graphs contain neither a relationship menu nor fictional future choices',()=>{
  expect(Object.keys(chapter4.nodes).some(k=>k.startsWith('c4.bond'))).toBe(false);
  expect(Object.keys(chapter5.nodes).some(k=>/^c5\.(tone|ending|gaming)\./.test(k))).toBe(false);
  expect(Object.values(chapter5.nodes).filter(n=>n.kind==='end').map(n=>n.cardId)).toEqual(['c5.story']);
  expect(Object.values(chapter5.nodes).some(n=>n.kind==='choice')).toBe(false);
  for(const value of ['game','movie','cafe','walk'] as const)expect(continuationDraft(value)).not.toMatch(/свидани|люблю|пара|отношени/);
  expect(invitationConversation({ending:'romantic'})).toEqual(invitationConversation({ending:'friendly'}));
});
it('new fourth chapter covers both distances, all skies, wishes and goodbyes with no status',()=>{
  const base=finishThree();let count=0;
  const results:ConstellationResult[]=['cat','controllers','teapot'].map(outcome=>({kind:'constellation',outcome:outcome as ConstellationResult['outcome'],usedPreset:false}));
  results.push({kind:'constellation',outcome:'teapot',usedPreset:true});
  for(const bench of ['near','space'] as const)for(const result of results)for(const wish of ['adventure','calm'] as const)for(const goodbye of ['accept','her','none'] as const){
    const s=finishFour(base,{...defaultFourth,bench,result,wish,goodbye},false,true);
    expect(s.campaign.records[4]?.story).toMatchObject({c4Edition:2,bench,constellation:result.outcome,wish,c4Goodbye:goodbye});
    expect(s.campaign.records[4]?.story.bond).toBeUndefined();expect(s.campaign.records[4]?.story.ending).toBeUndefined();
    for(const id of [1,2,3] as const)expect(s.campaign.records[id]).toEqual(base.campaign.records[id]);roundtrip(s);count++;
  }
  expect(count).toBe(48);
},30000);
it('every new fifth ending is c5.story with precise goodbye memory and preserved prior records',()=>{
  for(const goodbye of ['accept','her','none'] as const)for(const wish of ['adventure','calm'] as const)for(const memory of ['viewed','skipped'] as const){
    const prior=finishFour(undefined,{...defaultFourth,goodbye,wish});let s=startFive(prior);const seen=new Set<string>();
    while(s.campaign.active){const r=s.campaign.active;seen.add(r.nodeId);roundtrip(s);s=reduceSave(s,{type:'command',target:'campaign',command:command5(r,{memory,ending:'romantic'})});}
    expect(seen.has('c5.hug.her')).toBe(goodbye==='her');expect(seen.has('c5.hug.accept')).toBe(goodbye==='accept');
    expect(s.campaign.records[5]?.story).toMatchObject({c4Edition:2,c5Edition:2,c4Goodbye:goodbye,wish});
    expect(s.campaign.records[5]?.story.bond).toBeUndefined();expect(s.campaign.records[5]?.story.ending).toBeUndefined();
    expect(s.lastResult?.cardId).toBe('c5.story');expect(s.collection.cards.filter(c=>c.chapter===5).map(c=>c.id)).toEqual(['c5.story']);
    for(const id of [1,2,3,4] as const)expect(s.campaign.records[id]).toEqual(prior.campaign.records[id]);roundtrip(s);
  }
},30000);
it('each old bond can lead into the new fifth without losing the old choice or inventing a hug',()=>{
  for(const bond of ['romantic','friendly','undecided'] as const){
    const prior=oldFour(undefined,{...oldFourth,bond});delete prior.campaign.records[4]!.story.c4Goodbye;
    let s=startFive(prior);const seen:string[]=[];
    while(s.campaign.active){const r=s.campaign.active;seen.push(r.nodeId);roundtrip(s);s=reduceSave(s,{type:'command',target:'campaign',command:command5(r)});}
    expect(seen.some(n=>n.startsWith('c5.hug.'))).toBe(false);expect(s.campaign.records[5]?.story.bond).toBe(bond);
    expect(s.campaign.records[5]?.story.c4Goodbye).toBeUndefined();expect(s.campaign.records[5]?.story.ending).toBeUndefined();roundtrip(s);
  }
});
it('preserves every V12 active and trial cursor while resuming the previous graphs',()=>{
  for(const id of [4,5] as const)for(const trial of [false,true]){
    let save=id===4?startOldFour(trial?oldFour():undefined,trial):startOldFive(trial?oldFive():undefined,trial);
    while(trial?save.trial:save.campaign.active){
      const serialized=JSON.stringify({...save,contentVersion:12}),loaded=parseSave(serialized);
      expect(loaded).toEqual(save);const r=(trial?loaded.trial?.run:loaded.campaign.active)!;
      expect(getChapter(id,r.story)?.firstSeasonEdition).toBeUndefined();
      save=reduceSave(loaded,{type:'command',target:trial?'trial':'campaign',command:id===4?oldCommand4(r):oldCommand5(r)});
    }
    roundtrip(save);
  }
});
it('new trials/rewrite preserve old archives and continuation until an explicit rewrite',()=>{
  let main=oldFive();for(const ending of ['romantic','comic','gaming','friendly'] as const)main=oldFive(main,{memory:'viewed',ending},true);
  main=reduceSave(main,{type:'continuation',value:'walk'});const copy=structuredClone(main);
  const trial=finishFive(main,{memory:'skipped',ending:'friendly'},true,true);
  expect(trial.campaign).toEqual(copy.campaign);expect(trial.continuation).toBe('walk');
  expect(trial.lastResult?.cardId).toBe('c5.story');
  for(const c of copy.collection.cards)expect(trial.collection.cards.find(card=>card.id===c.id)).toEqual(c);
  expect(['c5.romantic','c5.comic','c5.gaming','c5.friendly'].every(id=>archivedEpisodeCard(id as 'c5.romantic'))).toBe(true);
  const rewrite=reduceSave(trial,{type:'rewrite',chapter:5});expect(rewrite.continuation).toBeNull();expect(rewrite.collection).toEqual(trial.collection);
  expect(rewrite.campaign.active?.story.c5Edition).toBe(3);expect(rewrite.campaign.active?.story.ending).toBeUndefined();roundtrip(rewrite);
});
it('rejects forged new choices, early fields, old cursors with a new marker and format downgrade',()=>{
  const start=startFour(),complete=finishFive();
  const check=(save:SaveV1,change:(s:SaveV1)=>void)=>{const bad=structuredClone(save);change(bad);expect(()=>parseSave(JSON.stringify(bad))).toThrow();};
  check(start,s=>{s.campaign.active!.story.bond='friendly';});
  check(start,s=>{s.campaign.active!.story.wish='calm';});
  check(start,s=>{s.campaign.active!.turn++;});
  check(start,s=>{s.campaign.active!.nodeId='c4.bond';});
  check(complete,s=>{s.campaign.records[5]!.story.ending='friendly';});
  check(complete,s=>{s.campaign.records[5]!.cardId='c5.friendly';});
  check(complete,s=>{s.campaign.records[5]!.story.c4Goodbye='her';});
  expect(()=>parseSave(JSON.stringify({...complete,contentVersion:12}))).toThrow();
  check(complete,s=>{delete s.campaign.records[4]!.story.c4Edition;});
});
it('all real invitation values round-trip in cloud JSON and cannot alter completion or card',()=>{
  const main=finishFive();
  for(const value of [null,'game','movie','cafe','walk','decline','public','chat','later'] as const){const saved=reduceSave(main,{type:'continuation',value});roundtrip(saved);expect(saved.campaign).toEqual(main.campaign);expect(saved.collection).toEqual(main.collection);}
});
it('new prefix starts and completes unchanged R3 chapters6–10; all private text survives import/export',()=>{
  let s=finishFive();
  for(const chapter of [6,7,8,9,10] as const){s=finishR3(chapter,{note:'Сохранённая мысль '+chapter,check:true},s);expect(s.campaign.records[chapter]?.scriptRevision).toBe(3);}
  expect(s.campaign.records[10]?.story.bond).toBeUndefined();expect(s.campaign.records[10]?.story.ending).toBeUndefined();roundtrip(s);
  for(const id of [6,7,8,9,10] as const)expect(s.privateNotes[id]?.campaign?.text).toBe('Сохранённая мысль '+id);
  expect(cardFromStory(s.campaign.records[5]!.story,5,s.campaign.records[5]!.results).id).toBe('c5.story');
},60000);
it('retains frozen source hashes of the previous fourth and fifth chapters',()=>{
  const hashes=JSON.parse(readFileSync('tests/fixtures/season1-v12/hashes.json','utf8')) as Record<string,string>;
  for(const [file,hash] of Object.entries(hashes))expect(createHash('sha256').update(readFileSync(file)).digest('hex')).toBe(hash);
  const r3=JSON.parse(readFileSync('outputs/SEASON_02_R3_CONTENT.json','utf8')) as {chapters:unknown[]};
  for(const chapter of r3.chapters){const id=(chapter as {id:6|7|8|9|10}).id;expect(getChapter(id)).toEqual(chapter);}
});
it('reads the 24 frozen V12 campaign/trial checkpoints without changing decisions, cards or cursors',()=>{
  const fixtures=JSON.parse(readFileSync('tests/fixtures/season1-v12/states.json','utf8')) as SaveV1[];
  expect(fixtures).toHaveLength(24);
  for(const fixture of fixtures)expect(parseSave(JSON.stringify(fixture))).toEqual({...fixture,contentVersion:14});
});
