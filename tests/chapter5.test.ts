import { legacyContent,prePolishSnapshot } from './legacySave';
import { it,expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { chapter5 } from '../src/content/chapters/ch05';
import { validateContent } from '../src/engine/validateContent';
import { step } from '../src/engine/step';
import { reduceSave } from '../src/state/reducer';
import { initialState } from '../src/state/initialState';
import { parseSave } from '../src/persistence/validateSave';
import { memoriesFor } from '../src/content/memories';
import { continuationDraft,continuationOptions,invitationEcho,invitationConversation,invitationReplies } from '../src/content/invitation';
import { completeTwo,defaultThird,finishThree } from './chapter3Helpers';
import { defaultFourth,command4,startFour,finishFour } from './chapter4Helpers';
import { command5,finishFive,startFive,fifthCode } from './chapter5Helpers';
it('has a complete fifth graph with four equal endings',()=>expect(validateContent(chapter5)).toEqual([]));
it.each(['her','accept','none',undefined] as const)('uses only remembered goodbye4=%s for the fifth-chapter callback',goodbye=>{
  const prior=finishFour(undefined,{...defaultFourth,goodbye:goodbye??'none'});
  if(goodbye===undefined)delete prior.campaign.records[4]!.story.c4Goodbye;
  let save=startFive(prior);const seen=new Set<string>();
  for(let i=0;i<35;i++){
    const run=save.campaign.active!;seen.add(run.nodeId);
    expect(parseSave(JSON.stringify(save))).toEqual(save);
    if(run.nodeId==='c5.rain.shelter'||run.nodeId==='c5.rain.arcade')break;
    save=reduceSave(save,{type:'command',target:'campaign',command:command5(run)});
  }
  expect(seen.has('c5.hug.her')).toBe(goodbye==='her');expect(seen.has('c5.hug.accept')).toBe(goodbye==='accept');
  const returned=chapter5.nodes['c5.return'];if(returned.kind!=='dialogue')throw Error('Missing arrival');
  expect(returned.next).toBe('c5.hug.route');
  const route=chapter5.nodes[returned.next];if(route.kind!=='route')throw Error('Missing callback route');
  expect(route.fallback).toBe('c5.rain.route');
});
it('accepts old R1/R2 snapshots without adding goodbye4 or rewriting their first five records',()=>{
  for(const family of ['r1','r2'])for(const name of family==='r1'?['firstFive','six','seven','eight','nine','ten','activeEight']:['6','7','8','9','10','active8']){
    const raw=readFileSync(`tests/fixtures/${family}/${name}.json`,'utf8'),old=JSON.parse(raw),parsed=parseSave(raw);
    for(const id of [1,2,3,4,5] as const){expect(parsed.campaign.records[id]).toEqual(old.campaign.records[id]);expect(parsed.campaign.records[id]?.story.c4Goodbye).toBeUndefined();}
  }
  const old=parseSave(readFileSync('tests/fixtures/r1/firstFive.json','utf8'));
  expect(parseSave(JSON.stringify(old))).toEqual(old);
});
it('validates old normal and trial goodbye cursors without inventing a memory',()=>{
  for(const trial of [false,true])for(const goodbye of ['accept','her','none'] as const){
    let save=startFour(trial?finishFour():undefined,trial);let sawHug=false;
    for(let i=0;i<180;i++){
      const run=trial?save.trial?.run:save.campaign.active;if(!run)break;
      if(run.nodeId.startsWith('c4.goodbye')){
        const old=structuredClone(save),oldRun=trial?old.trial!.run:old.campaign.active!;delete oldRun.story.c4Goodbye;
        expect(parseSave(JSON.stringify(old))).toEqual(old);if(run.nodeId==='c4.goodbye.hug')sawHug=true;
      }
      save=reduceSave(save,{type:'command',target:trial?'trial':'campaign',command:command4(run,{...defaultFourth,goodbye})});
    }
    expect(sawHug).toBe(goodbye!=='none');
  }
});
it('rejects invalid goodbye enums and contradictory fifth-chapter callback scenes',()=>{
  const bad=finishFour();Object.assign(bad.campaign.records[4]!.story,{c4Goodbye:'invented'});expect(()=>parseSave(JSON.stringify(bad))).toThrow();
  const save=startFive(finishFour());save.campaign.active!.nodeId='c5.hug.her';expect(()=>parseSave(JSON.stringify(save))).toThrow();
});
it('keeps the canonical goodbye callback after a trial with a different goodbye',()=>{
  const main=finishFour(undefined,{...defaultFourth,goodbye:'her'});
  const replay=finishFour(main,{...defaultFourth,goodbye:'accept'},true,true);
  expect(replay.campaign).toEqual(main.campaign);expect(replay.campaign.records[4]!.story.c4Goodbye).toBe('her');
  let save=startFive(replay);for(let i=0;i<20&&save.campaign.active?.nodeId!=='c5.hug.her';i++)save=reduceSave(save,{type:'command',target:'campaign',command:command5(save.campaign.active!)});
  expect(save.campaign.active?.nodeId).toBe('c5.hug.her');expect(parseSave(JSON.stringify(save))).toEqual(save);
});
it('covers 144 ending paths for every prior bond, wish, controller reaction and memory option',()=>{
  let count=0;const endings=new Set();
  for(const reaction of ['help','tease','absurd'] as const)for(const bond of ['romantic','friendly','undecided'] as const)for(const wish of ['adventure','calm'] as const){
    const prior=finishFour(finishThree(completeTwo(),{...defaultThird,reaction}),{...defaultFourth,bond,wish});
    for(const memory of ['viewed','skipped'] as const)for(const ending of ['romantic','comic','gaming','friendly'] as const){
      const s=finishFive(prior,{memory,ending},false,true);expect(s.campaign.completed).toEqual([1,2,3,4,5]);for(const id of [1,2,3,4] as const)expect(s.campaign.records[id]).toEqual(prior.campaign.records[id]);expect(s.campaign.records[5]?.story).toMatchObject({bond,wish,controllerReaction:reaction,ending});expect(s.continuation).toBeNull();expect(s.collection.achievements).toContain('five-meetings');expect(parseSave(JSON.stringify(s))).toEqual(s);endings.add(s.lastResult?.cardId);count++;
    }
  }expect(count).toBe(144);expect([...endings].sort()).toEqual(['c5.comic','c5.friendly','c5.gaming','c5.romantic']);
},20000);
it('accepts each local continuation only after the canonical ending and keeps it independent of trial and PNG',()=>{
  const empty=initialState();expect(reduceSave(empty,{type:'continuation',value:'game'})).toBe(empty);const main=finishFive();
  for(const value of ['game','movie','cafe','walk','decline','public','chat','later'] as const){const s=reduceSave(main,{type:'continuation',value});expect(s.campaign).toEqual(main.campaign);expect(s.collection).toEqual(main.collection);expect(parseSave(JSON.stringify(s)).continuation).toBe(value);expect(reduceSave(s,{type:'continuation',value})).toBe(s);}
  expect(continuationOptions.map(o=>o.value)).toEqual(['game','movie','cafe','walk','decline']);
  const drafts=['game','movie','cafe','walk'].map(value=>continuationDraft(value as 'game'|'movie'|'cafe'|'walk'));expect(new Set(drafts).size).toBe(4);for(const draft of drafts)expect(draft).toContain('свидание');
  const trial=startFive(main,true);expect(reduceSave(trial,{type:'continuation',value:'game'})).toBe(trial);expect(continuationDraft('decline')).toBe('Спасибо за историю 😊 Пока воздержусь от встречи, но было приятно пройти её.');expect(continuationDraft('later')).toBe('');expect(continuationDraft(null)).toBe('');expect(Object.keys(invitationEcho).sort()).toEqual(['absurd','help','tease']);
});
it('uses canonical chapter memories and makes all callback variants readable',()=>{
  const base=finishFour().campaign.records[4]!.story;
  for(const plan of ['tea','banter','coop'] as const)for(const result of ['feast','snack','chaos','skipped'] as const){const story={...base,plan,kitchenResult:result};const text=memoriesFor(story).flatMap(m=>m.lines.map(l=>l.text)).join(' ');expect(text.length).toBeGreaterThan(150);expect(text).not.toContain('undefined');expect(text).not.toContain('батарей');}
  const friendly=chapter5.nodes['c5.tone.friendly'];expect(friendly.kind).toBe('choice');if(friendly.kind==='choice'){expect(friendly.choices).toHaveLength(4);expect(friendly.choices[0].text).toBe('Кажется, сейчас я хочу попробовать свидание');}
});
it('migrates old fourth-chapter cursors and refuses new goodbye scenes mislabeled as the old format',()=>{
  for(const trial of [false,true]){let s=trial?startFour(finishFour(),true):startFour();for(let i=0;i<180;i++){
    expect(parseSave(JSON.stringify(s))).toEqual(s);const r=trial?s.trial?.run:s.campaign.active;
    if(r?.nodeId.startsWith('c4.goodbye'))expect(()=>parseSave(JSON.stringify(legacyContent(s,4)))).toThrow();
    else expect(parseSave(JSON.stringify(legacyContent(s,4)))).toEqual(prePolishSnapshot(s));
    if(!r)break;s=reduceSave(s,{type:'command',target:trial?'trial':'campaign',command:command4(r)});
  }}
  expect(()=>parseSave(JSON.stringify(legacyContent(finishFive(),4)))).toThrow();
});
it('keeps the final and continuation through trial; rewrite clears only the required suffix and preference',()=>{
  const main=reduceSave(finishFive(),{type:'continuation',value:'public'}),replay=finishFive(main,{memory:'skipped',ending:'romantic'},true,true);expect(replay.campaign).toEqual(main.campaign);expect(replay.continuation).toBe('public');expect(replay.lastResult?.source).toBe('trial');
  const fifth=reduceSave(main,{type:'rewrite',chapter:5});expect(fifth.campaign.completed).toEqual([1,2,3,4]);expect(fifth.campaign.active?.story.ending).toBeUndefined();expect(fifth.continuation).toBeNull();expect(fifth.collection).toEqual(main.collection);
  const fourth=reduceSave(main,{type:'rewrite',chapter:4});expect(fourth.campaign.records[5]).toBeUndefined();expect(fourth.continuation).toBeNull();expect(fourth.unlocked).toContain(5);
});
it('requires the fifth code and four previous endings and rejects fake results or imported preferences',()=>{
  const early=reduceSave(initialState(),{type:'unlock',code:fifthCode});expect(reduceSave(early,{type:'start',chapter:5})).toBe(early);const before=finishFour();expect(reduceSave(before,{type:'unlock',code:'DALSHE'})).toBe(before);expect(reduceSave(before,{type:'start',chapter:5})).toBe(before);
  let s=startFive();for(let i=0;i<180&&s.campaign.active?.nodeId!=='c5.album';i++)s=reduceSave(s,{type:'command',target:'campaign',command:command5(s.campaign.active!)});const r=s.campaign.active!;expect(r.nodeId).toBe('c5.album');expect(step(chapter5,r,{kind:'game-result',expectedTurn:r.turn,result:{kind:'constellation',outcome:'teapot',usedPreset:true}}).kind).toBe('rejected');expect(step(chapter5,r,{...command5(r),expectedTurn:r.turn-1}).kind).toBe('rejected');
  const bad=structuredClone(before) as unknown as {continuation:string};bad.continuation='game';expect(()=>parseSave(JSON.stringify(bad))).toThrow();const ending=finishFive();delete ending.campaign.records[5]!.results.memories;expect(()=>parseSave(JSON.stringify(ending))).toThrow();
});

it('leads every ending into the same five meeting choices and gives a respectful distinct response',()=>{
  for(const ending of ['romantic','comic','gaming','friendly'] as const){const pages=invitationConversation({ending,controllerReaction:'help'});expect(pages).toHaveLength(3);expect(pages.flat().join(' ')).toContain('настоящую встречу');expect(pages[1].join(' ')).toContain('проверил оба');expect(pages[2].join(' ')).toContain('воздержаться');}
  expect(new Set(Object.values(invitationReplies).map(r=>r.vlad)).size).toBe(5);expect(invitationReplies.decline.vlad).toBe('хорошо, не торопимся. спасибо, что прошла эту историю.');
});
