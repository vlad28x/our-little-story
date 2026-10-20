import { legacyContent } from './legacySave';
import { it,expect } from 'vitest';
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
    else expect(parseSave(JSON.stringify(legacyContent(s,4)))).toEqual(s);
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
