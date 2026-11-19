import { describe,it,expect } from 'vitest';
import { initialState } from '../src/state/initialState';
import { CONTENT_VERSION } from '../src/content/version';
import { reduceSave } from '../src/state/reducer';
import { parseSave,validateSave } from '../src/persistence/validateSave';
import { load,persist,type StorageLike } from '../src/persistence/storage';
import { defaultPath,commandFor,completeSave } from './helpers';
import { finishFive } from './chapter5Helpers';
class MemoryStorage implements StorageLike {
 data=new Map<string,string>();
 getItem(key:string){return this.data.get(key)??null;}
 setItem(key:string,value:string){this.data.set(key,value);}
 removeItem(key:string){this.data.delete(key);}
}
const key='test:save';
describe('current content save and restore',()=>{
 it.each(Array.from({length:CONTENT_VERSION-1},(_,i)=>i+1))('restarts content%s once, keeping settings and code entitlements',contentVersion=>{
  const old=finishFive();old.settings={sound:true,volume:.6,textMode:'type',motion:'reduced'};old.unlocked=[1,2,3,4,5,6,7,8,9,10];old.continuation='cafe';
  const raw=JSON.stringify({...old,contentVersion}),next=parseSave(raw);
  expect(next).toEqual({...initialState(),settings:old.settings,unlocked:old.unlocked,revision:old.revision,updatedAt:old.updatedAt});
  expect(parseSave(JSON.stringify(next))).toEqual(next);
  expect(raw).toBe(JSON.stringify({...old,contentVersion}));
  const started=reduceSave(next,{type:'start'});expect(started.campaign.active?.nodeId).toBe('c1.prologue');expect(parseSave(JSON.stringify(started))).toEqual(started);
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
