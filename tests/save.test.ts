import { describe,it,expect } from 'vitest';
import { initialState } from '../src/state/initialState';
import { CONTENT_VERSION } from '../src/content/version';
import { reduceSave } from '../src/state/reducer';
import { parseSave,validateSave } from '../src/persistence/validateSave';
import { load,persist,type StorageLike } from '../src/persistence/storage';
import { defaultPath,commandFor,completeSave } from './helpers';
import { finishFive } from './chapter5Helpers';
import { startPhotoSix } from './photo6Helpers';
import { finishTravellers } from './travellers10Helpers';
class MemoryStorage implements StorageLike {
 data=new Map<string,string>();
 getItem(key:string){return this.data.get(key)??null;}
 setItem(key:string,value:string){this.data.set(key,value);}
 removeItem(key:string){this.data.delete(key);}
}
const key='test:save';
describe('current content save and restore',()=>{
 it.each(Array.from({length:23},(_,i)=>i+1))('restarts content%s once, keeping settings and code entitlements',contentVersion=>{
  const old=finishFive();old.settings={sound:true,volume:.6,textMode:'type',motion:'reduced'};old.unlocked=[1,2,3,4,5,6,7,8,9,10];old.continuation='cafe';
  const raw=JSON.stringify({...old,contentVersion}),next=parseSave(raw);
  expect(next).toEqual({...initialState(),settings:old.settings,unlocked:old.unlocked,revision:old.revision,updatedAt:old.updatedAt});
  expect(parseSave(JSON.stringify(next))).toEqual(next);
  expect(raw).toBe(JSON.stringify({...old,contentVersion}));
  const started=reduceSave(next,{type:'start'});expect(started.campaign.active?.nodeId).toBe('c1.prologue');expect(parseSave(JSON.stringify(started))).toEqual(started);
 });
 it('migrates content25 and content26 saves preserving chapters 1-7 and resetting at most chapters 8-10',()=>{
  const old=finishTravellers();old.settings={sound:true,volume:.6,textMode:'type',motion:'reduced'};old.unlocked=[1,2,3,4,5,6,7,8,9,10];old.continuation='cafe';old.continuation10='movie';
  for(const id of [5,6,7,8,9,10] as const){delete old.campaign.records[id]?.story.c5Feeling;delete old.campaign.startStates[id]?.c5Feeling;}
  for(const id of [6,7,8,9,10] as const){delete old.campaign.records[id]?.story.c6HerEscape;delete old.campaign.records[id]?.story.c6AskVlad;delete old.campaign.startStates[id]?.c6HerEscape;delete old.campaign.startStates[id]?.c6AskVlad;}
  old.campaign.records[6]!.scriptRevision=5;
  old.campaign.records[8]!.scriptRevision=7;
  old.campaign.records[10]!.scriptRevision=5;
  for(const legacyVersion of [25,26] as const){
   const legacy=structuredClone(old) as unknown as Record<string,unknown>;
   const legacyRecords=(legacy.campaign as Record<string,unknown>).records as Record<string,{story:Record<string,unknown>}>;
   if(legacyVersion===25){legacyRecords[6].story.c6HerEvening='cozyFood';legacyRecords[7].story.c6HerEvening='cozyFood';legacyRecords[7].story.herEscape='sea';}
   const migrated=parseSave(JSON.stringify({...legacy,contentVersion:legacyVersion}));
   expect(migrated.contentVersion).toBe(CONTENT_VERSION);
   expect(migrated.campaign.completed).toEqual([1,2,3,4,5,6,7]);
   expect(migrated.campaign.records[7]).toEqual(old.campaign.records[7]);
   expect(migrated.campaign.records[8]).toBeUndefined();
   expect(migrated.campaign.records[9]).toBeUndefined();
   expect(migrated.campaign.records[10]).toBeUndefined();
   expect(migrated.campaign.active).toBeNull();
   expect(migrated.unlocked).toEqual(old.unlocked);
   expect(migrated.settings).toEqual(old.settings);
   expect(migrated.continuation).toBe('cafe');
   expect(migrated.continuation10).toBeNull();
   expect(migrated.collection.cards.every(card=>card.chapter<=7)).toBe(true);
   const started8=reduceSave(migrated,{type:'start',chapter:8,attemptId:'migrated-supper'});
   expect(started8.campaign.active?.nodeId).toBe('c8.supper.entry');
   expect(parseSave(JSON.stringify(started8))).toEqual(started8);
  }
  const mid6=startPhotoSix(finishFive());
  const mid6Raw=structuredClone(mid6) as unknown as Record<string,unknown>;
  ((mid6Raw.campaign as Record<string,unknown>).active as Record<string,unknown>).scriptRevision=5;
  ((mid6Raw.campaign as Record<string,unknown>).active as Record<string,unknown>).nodeId='c6.photo.joyChoice';
  const migratedMid6=parseSave(JSON.stringify({...mid6Raw,contentVersion:25}));
  expect(migratedMid6.campaign.completed).toEqual([1,2,3,4,5]);
  expect(migratedMid6.campaign.active).toBeNull();
  expect(migratedMid6.unlocked).toEqual(mid6.unlocked);
 });
 it('round trips every visible first chapter cursor and canonical/trial results',()=>{
  let save=reduceSave(initialState(),{type:'start'});let count=0;
  while(save.campaign.active){expect(parseSave(JSON.stringify(save))).toEqual(save);save=reduceSave(save,{type:'command',target:'campaign',command:commandFor(save.campaign.active,defaultPath)});if(++count>200)throw Error('Loop');}
  expect(count).toBeGreaterThan(60);expect(parseSave(JSON.stringify(save))).toEqual(save);
  const trial=completeSave({...defaultPath,plan:'coop'},save,'trial');expect(trial.campaign).toEqual(save.campaign);expect(parseSave(JSON.stringify(trial))).toEqual(trial);
 });
 it.each(['cursor','line','history','journal'] as const)('restarts invalid current %s without losing codes or settings',kind=>{
  const save=kind==='history'?finishFive():reduceSave(initialState(),{type:'start'});save.settings.sound=true;save.unlocked=[1,2,3,4,5,6];
  if(kind==='cursor')save.campaign.active!.nodeId='c1.unknown';else if(kind==='line')save.campaign.active!.lineIndex=999;else if(kind==='journal')Object.assign(save.campaign.active!,{journal:[]});else save.campaign.records[5]!.story.wish='impossible' as never;
  expect(()=>validateSave(JSON.stringify(save))).toThrow();const reset=parseSave(JSON.stringify(save));expect(reset.campaign.completed).toEqual([]);expect(reset.campaign.active).toBeNull();expect(reset.unlocked).toEqual(save.unlocked);expect(reset.settings).toEqual(save.settings);
 });
 it.each(['future','foreign','prototype','oversize','unknown','settings','rights'] as const)('rejects an invalid %s envelope',kind=>{
  const save:Record<string,unknown>={...initialState()};let raw='';
  if(kind==='future')save.contentVersion=CONTENT_VERSION+1;if(kind==='foreign')save.appId='other';if(kind==='unknown')save.unexpected=true;if(kind==='settings')save.settings={sound:'yes'};if(kind==='rights')save.unlocked=[1,99];
  raw=kind==='oversize'?' '.repeat(262145):JSON.stringify(save);if(kind==='prototype')raw=raw.replace('"appId"','"__proto__":{},"appId"');expect(()=>parseSave(raw)).toThrow();
 });
 it('stores a consistent envelope, rotates the previous snapshot and rejects stale writes',()=>{
  const storage=new MemoryStorage(),first=reduceSave(initialState(),{type:'start'});expect(persist(storage,first,0,key)).toBe('saved');
  const next=reduceSave(first,{type:'command',target:'campaign',command:{kind:'advance',expectedTurn:0}});expect(persist(storage,next,first.revision,key)).toBe('saved');expect(parseSave(storage.getItem('test:backup')!)).toEqual(first);expect(load(storage,key).save).toEqual(next);expect(persist(storage,first,0,key)).toBe('conflict');
 });
 it('does not normalize broken internal progress into a destructive write',()=>{
  const storage=new MemoryStorage(),save=reduceSave(initialState(),{type:'start'});save.campaign.active!.lineIndex=999;expect(()=>persist(storage,save,0,key)).toThrow();expect(storage.getItem(key)).toBeNull();
 });
 it('keeps unreadable bytes intact and offers a valid backup',()=>{
  const storage=new MemoryStorage(),save=completeSave();storage.setItem(key,'broken');storage.setItem('test:backup',JSON.stringify(save));const result=load(storage,key);expect(result.recovery).toBe(true);expect(result.backup).toEqual(save);expect(storage.getItem(key)).toBe('broken');
 });
 it('remains playable in memory when storage is blocked',()=>{
  const blocked:StorageLike={getItem(){throw Error('blocked');},setItem(){throw Error('quota');},removeItem(){}};expect(load(blocked,key).error).toContain('не сохраняется');expect(()=>persist(blocked,initialState(),0,key)).toThrow();
 });
 it('advances the local revision when explicitly importing another save',()=>{const current=completeSave();const imported=reduceSave(current,{type:'replace',save:initialState()});expect(imported.revision).toBe(current.revision+1);expect(imported.campaign.completed).toEqual([]);});
});
