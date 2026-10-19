import { it,expect,vi } from 'vitest';
import fs from 'node:fs';
import { chapter6 } from '../src/content/chapters/ch06';
import { chapter5 } from '../src/content/chapters/ch05';
import { chapters } from '../src/content/chapters/manifest';
import { validateContent } from '../src/engine/validateContent';
import { reduceSave } from '../src/state/reducer';
import { initialState } from '../src/state/initialState';
import { parseSave } from '../src/persistence/validateSave';
import { cloudRaw } from '../src/telegram/cloud';
import { preserveLocalNotes,normalizeNote,noteLength } from '../src/persistence/notes';
import { step } from '../src/engine/step';
import { chapterFromRoute } from '../src/content/chapters/manifest';
import { finishFive } from './chapter5Helpers';
import { action6,defaultSixth,finishSix,sixAt,sixthCode,startSix } from './chapter6Helpers';
import type { EveningRouteResult } from '../src/engine/types';
import { load,persist,type StorageLike } from '../src/persistence/storage';
import { clearFinishedDraft,readNoteDraft,writeNoteDraft } from '../src/persistence/noteDraft';
class MemoryStorage implements StorageLike{data=new Map<string,string>();getItem(k:string){return this.data.get(k)??null;}setItem(k:string,v:string){this.data.set(k,v);}removeItem(k:string){this.data.delete(k);}}
it('ships exactly the approved graph and every authored line',()=>{
  const source=fs.readFileSync('outputs/CHAPTER_06_SCRIPT.md','utf8');
  const ids=[...source.matchAll(/^### `(c6\.[^`]+)`/gm)].map(m=>m[1]);expect(Object.keys(chapter6.nodes)).toEqual(ids);expect(ids).toHaveLength(61);
  const lines=[...source.matchAll(/^\d+\. \*\*(?:Н|В|Т|М|А|Д|МВ):\*\* (.+)$/gm)].map(m=>m[1].trim());
  expect(Object.values(chapter6.nodes).flatMap(n=>n.kind==='dialogue'?n.lines.map(l=>l.text):[])).toEqual(lines);expect(lines).toHaveLength(131);expect(validateContent(chapter6)).toEqual([]);
});
it('completes 216 paths without changing chapters one to five or gating any ending',()=>{
  const prior=finishFive();const routes:EveningRouteResult[]=[];for(const first of ['water','lights','window'] as const)for(const second of ['water','lights','window'] as const)if(first!==second)routes.push({kind:'evening-route',mode:'own',stops:[first,second]});routes.push({kind:'evening-route',mode:'shared',stops:['lights','water']},{kind:'evening-route',mode:'skipped',stops:[]});
  let count=0;const found=new Set();
  for(const guide of ['angel','devil','none'] as const)for(const route of routes)for(const contact of ['her','asked','none'] as const)for(const ending of ['hand','lap','home'] as const){
    const s=finishSix(prior,{...defaultSixth,guide,route,contact,ending});expect(s.campaign.completed).toEqual([1,2,3,4,5,6]);
    for(const id of [1,2,3,4,5] as const)expect(s.campaign.records[id]).toEqual(prior.campaign.records[id]);
    expect(s.campaign.records[6]?.episode?.sparks).toHaveLength(route.mode==='skipped'?2:3);expect(parseSave(JSON.stringify(s))).toEqual(s);found.add(s.lastResult!.cardId);count++;
  }
  expect(count).toBe(216);expect([...found].sort()).toEqual(['c6.hand','c6.home','c6.lap']);
},30000);
it('round-trips every visible cursor and keeps thoughts independent of spoken replies',()=>{
  for(const thought of ['linger','tease','quiet'] as const)for(const voice of ['stay','tease','quiet'] as const){
    let s=startSix();for(let i=0;i<350&&s.campaign.active;i++){expect(parseSave(JSON.stringify(s))).toEqual(s);s=reduceSave(s,action6(s.campaign.active,{...defaultSixth,thought,voice}));}
    expect(s.campaign.records[6]!.story).toMatchObject({c6Thought:thought,c6Voice:voice});
  }
},30000);
it('requires a code and completed fifth chapter and parses the full tenth chapter number',()=>{
  const early=reduceSave(initialState(),{type:'unlock',code:sixthCode});expect(early.unlocked).toContain(6);expect(reduceSave(early,{type:'start',chapter:6,attemptId:'early'})).toBe(early);
  expect(reduceSave(finishFive(),{type:'start',chapter:6,attemptId:'no-code'}).campaign.active).toBeNull();expect(chapterFromRoute('/play/10')).toBe(10);expect(chapterFromRoute('/play/61')).toBeUndefined();expect(chapterFromRoute('/play/6/trap')).toBeUndefined();
});
it('rejects duplicate commands, forged results and inconsistent episode imports',()=>{
  let s=sixAt('c6.map');let run=s.campaign.active!;const action=action6(run);s=reduceSave(s,action);expect(reduceSave(s,action)).toBe(s);
  run=s.campaign.active!;expect(step(chapter6,run,{kind:'game-result',expectedTurn:run.turn,result:{kind:'evening-route',mode:'shared',stops:['lights','water']}}).kind).toBe('rejected');
  for(const change of ['spark','bonus','thought','activity']){
    const bad=structuredClone(s);if(change==='spark')bad.campaign.active!.episode!.sparks.push('c6.spark.moment');if(change==='bonus')bad.campaign.active!.episode!.bonus='c6.bonus.devil';if(change==='thought')bad.campaign.active!.story.c6Contact='none';if(change==='activity')bad.campaign.active!.activity!.selected=['water','water'];expect(()=>parseSave(JSON.stringify(bad))).toThrow();
  }
});
it('saves the final local answer atomically and excludes all text from cloud snapshots',()=>{
  const s=sixAt('c6.note');const run=s.campaign.active!;expect(reduceSave(s,{type:'command',target:'campaign',command:{kind:'note-result',status:'saved',expectedTurn:run.turn},noteText:'   '})).toBe(s);
  const saved=reduceSave(s,{type:'command',target:'campaign',command:{kind:'note-result',status:'saved',expectedTurn:run.turn},noteText:'Мой <b>личный</b> ответ 🧡'});
  expect(saved.campaign.active!.story.c6Note).toBe('saved');expect(saved.privateNotes.campaign?.text).toContain('<b>');expect(cloudRaw(saved)).not.toContain('личный');expect(JSON.parse(cloudRaw(saved)).privateNotes).toEqual({});expect(parseSave(cloudRaw(saved)).campaign).toEqual(saved.campaign);
  expect(preserveLocalNotes(parseSave(cloudRaw(saved)),saved).privateNotes).toEqual(saved.privateNotes);
});
it('keeps trial notes and results separate, accumulates bonuses only on completion, and rewrites the proper suffix',()=>{
  const canonical=reduceSave(finishSix(),{type:'continuation',value:'movie'});let trial=startSix(canonical,true);
  expect(trial.privateNotes.campaign).toEqual(canonical.privateNotes.campaign);expect(reduceSave(trial,{type:'discard-trial'}).collection).toEqual(canonical.collection);
  const p={...defaultSixth,guide:'angel' as const,ending:'home' as const,note:'Заметка пробного варианта'};
  for(let i=0;i<350&&trial.trial;i++)trial=reduceSave(trial,action6(trial.trial.run,p,'trial'));
  expect(trial.campaign).toEqual(canonical.campaign);expect(trial.continuation).toBe('movie');expect(trial.privateNotes.campaign).toEqual(canonical.privateNotes.campaign);expect(trial.privateNotes.trial?.text).toBe(p.note);expect(trial.lastResult?.episodeRecord?.story.c6Guide).toBe('angel');expect(trial.collection.bonuses).toEqual(['c6.bonus.devil','c6.bonus.angel']);expect(parseSave(JSON.stringify(trial))).toEqual(trial);
  const rewritten=reduceSave(trial,{type:'rewrite',chapter:6,attemptId:'rewrite-six'});expect(rewritten.campaign.completed).toEqual([1,2,3,4,5]);expect(rewritten.continuation).toBe('movie');expect(rewritten.privateNotes).toEqual({});expect(parseSave(JSON.stringify(rewritten))).toEqual(rewritten);
  const fromThree=reduceSave(trial,{type:'rewrite',chapter:3});expect(fromThree.campaign.records[6]).toBeUndefined();expect(fromThree.continuation).toBeNull();expect(fromThree.privateNotes).toEqual({});
});
it('edits/deletes notes locally without mutating story, cloud revision, or a different attempt',()=>{
  const main=finishSix();const id=main.campaign.records[6]!.attemptId!;const edited=reduceSave(main,{type:'note-edit',target:'campaign',attemptId:id,text:'Другой ответ'});
  expect(edited.revision).toBe(main.revision);expect(edited.localNoteRevision).toBe(main.localNoteRevision+1);expect(edited.campaign).toEqual(main.campaign);expect(cloudRaw(edited)).toBe(cloudRaw(main));
  const deleted=reduceSave(edited,{type:'note-edit',target:'campaign',attemptId:id,remove:true});expect(deleted.privateNotes.campaign).toMatchObject({status:'deleted',text:''});expect(parseSave(JSON.stringify(deleted))).toEqual(deleted);expect(reduceSave(main,{type:'note-edit',target:'campaign',attemptId:'wrong',text:'hello'})).toBe(main);
  const storage=new MemoryStorage();expect(persist(storage,main,0,'t:save')).toBe('saved');expect(persist(storage,edited,main.revision,'t:save',main.localNoteRevision)).toBe('saved');expect(load(storage,'t:save').save).toEqual(edited);expect(persist(storage,main,main.revision,'t:save',main.localNoteRevision)).toBe('conflict');
});
it('bounds Unicode answers, rejects oversized import, and restores only the matching local draft',()=>{
  expect(noteLength('😈'.repeat(280))).toBe(280);expect(normalizeNote('e\u0301\r\n\u0000Привет')).toBe('é\nПривет');const s=finishSix();s.privateNotes.campaign!.text='😈'.repeat(280);expect(parseSave(JSON.stringify(s)).privateNotes.campaign!.text).toHaveLength(560);s.privateNotes.campaign!.text+='😈';expect(()=>parseSave(JSON.stringify(s))).toThrow();
  const storage=new MemoryStorage();writeNoteDraft(storage,'s',{attemptId:'campaign-six',questionId:'s2.q6',text:'Черновик'});expect(readNoteDraft(storage,'s','campaign-six')).toBe('Черновик');expect(readNoteDraft(storage,'s','trial-six')).toBe('');clearFinishedDraft(storage,'s',sixAt('c6.note'));expect(readNoteDraft(storage,'s','campaign-six')).toBe('Черновик');clearFinishedDraft(storage,'s',finishSix());expect(storage.getItem('s:note-draft')).toBeNull();
});

it('prepares the sixth-chapter developer preview in the isolated sandbox through valid story transitions',()=>{
  vi.stubEnv('DEV',true);
  try{
    const prior=finishFive().campaign.records[5]!.story;
    let s=reduceSave(initialState(),{type:'dev-jump',nodeId:'c5.ending.friendly',story:prior});const node=chapter5.nodes['c5.ending.friendly'];
    if(node.kind!=='dialogue')throw Error('Missing ending');
    for(let turn=0;turn<node.lines.length;turn++)s=reduceSave(s,{type:'command',target:'campaign',command:{kind:'advance',expectedTurn:turn}});
    s=reduceSave(s,{type:'unlock',code:chapters.find(c=>c.id===5)!.code!});s=reduceSave(s,{type:'unlock',code:sixthCode});s=reduceSave(s,{type:'start',chapter:6,attemptId:'developer-six'});
    expect(s.campaign.active?.nodeId).toBe('c6.entry');expect(parseSave(JSON.stringify(s))).toEqual(s);
  }finally{vi.unstubAllEnvs();}
});
