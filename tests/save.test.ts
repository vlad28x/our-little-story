import { describe,it,expect } from 'vitest';
import { load,persist,type StorageLike } from '../src/persistence/storage';
import { parseSave } from '../src/persistence/validateSave';
import { initialState } from '../src/state/initialState';
import { reduceSave } from '../src/state/reducer';
import { chapter,commandFor,completeSave,defaultPath } from './helpers';
class MemoryStorage implements StorageLike { data=new Map<string,string>();getItem(k:string){return this.data.get(k)??null;}setItem(k:string,v:string){this.data.set(k,v);}removeItem(k:string){this.data.delete(k);}}
const key='test:save';
describe('save and restore',()=>{
  it('resumes the renamed Pages site without changing the old snapshot and writes subsequent progress to the new key',()=>{
    const s=new MemoryStorage(),oldKey='five-meetings:/little-projects/:save',newKey='five-meetings:/our-little-story/:save';
    const before=reduceSave(initialState(),{type:'start'}),raw=JSON.stringify(before);s.setItem(oldKey,raw);
    const loaded=load(s,newKey);expect(loaded.save).toEqual(before);expect(loaded.recovery).toBe(false);expect(s.getItem(newKey)).toBeNull();
    const after=reduceSave(loaded.save,{type:'command',target:'campaign',command:{kind:'advance',expectedTurn:0}});
    expect(persist(s,after,before.revision,newKey)).toBe('saved');expect(load(s,newKey).save).toEqual(after);expect(s.getItem(oldKey)).toBe(raw);
  });
  it('preserves old damaged data and backup recovery across the rename',()=>{
    const s=new MemoryStorage(),newKey='five-meetings:/our-little-story/:save',good=completeSave();
    s.setItem('five-meetings:/little-projects/:save','{broken');s.setItem('five-meetings:/little-projects/:backup',JSON.stringify(good));
    const result=load(s,newKey);expect(result.recovery).toBe(true);expect(result.backup).toEqual(good);expect(result.raw).toBe('{broken');expect(s.getItem(newKey)).toBeNull();
    s.removeItem('five-meetings:/little-projects/:save');expect(load(s,newKey).backup).toEqual(good);
  });
  it('prefers any existing new-site data and never imports legacy progress into another base or sandbox',()=>{
    const s=new MemoryStorage(),newKey='five-meetings:/our-little-story/:save',good=completeSave();
    s.setItem('five-meetings:/little-projects/:save',JSON.stringify(good));
    for(const other of ['five-meetings:/:save','five-meetings:/preview-test/:save','five-meetings:/our-little-story/:dev:save'])expect(load(s,other).save).toEqual({...initialState(),updatedAt:expect.any(String)});
    const fresh=initialState();s.setItem(newKey,JSON.stringify(fresh));expect(load(s,newKey).save).toEqual(fresh);
    s.setItem(newKey,'{broken');expect(load(s,newKey).recovery).toBe(true);expect(load(s,newKey).backup).toBeNull();
    s.removeItem(newKey);s.setItem(newKey.replace(':save',':backup'),JSON.stringify(fresh));expect(load(s,newKey).backup).toEqual(fresh);
  });
  it('every visible cursor round trips with consistent journal and effects',()=>{let s=reduceSave(initialState(),{type:'start'});let steps=0;while(s.campaign.active){expect(parseSave(JSON.stringify(s))).toEqual(s);expect(chapter.nodes[s.campaign.active.nodeId].kind).not.toBe('route');s=reduceSave(s,{type:'command',target:'campaign',command:commandFor(s.campaign.active,defaultPath)});if(++steps>180)throw Error('loop');}expect(steps).toBeGreaterThan(60);expect(parseSave(JSON.stringify(s))).toEqual(s);});
  it('stores one consistent envelope and rotates a valid previous snapshot',()=>{const storage=new MemoryStorage();const a=reduceSave(initialState(),{type:'start'});expect(persist(storage,a,0,key)).toBe('saved');const b=reduceSave(a,{type:'command',target:'campaign',command:{kind:'advance',expectedTurn:0}});expect(persist(storage,b,a.revision,key)).toBe('saved');expect(parseSave(storage.getItem('test:backup')!)).toEqual(a);expect(load(storage,key).save).toEqual(b);});
  it('keeps corrupt main intact and offers valid backup',()=>{const storage=new MemoryStorage();const good=completeSave();storage.setItem(key,'{broken');storage.setItem('test:backup',JSON.stringify(good));const result=load(storage,key);expect(result.recovery).toBe(true);expect(result.backup).toEqual(good);expect(storage.getItem(key)).toBe('{broken');});
  it('also recovers when main is missing but backup remains',()=>{const s=new MemoryStorage();s.setItem('test:backup',JSON.stringify(completeSave()));expect(load(s,key).recovery).toBe(true);});
  it('handles completely damaged storage without silently writing anything',()=>{const s=new MemoryStorage();s.setItem(key,'x');s.setItem('test:backup','y');expect(load(s,key).backup).toBeNull();expect(load(s,key).recovery).toBe(true);expect(s.getItem(key)).toBe('x');});
  it('blocked storage remains playable in memory and persistence reports failure',()=>{const blocked:StorageLike={getItem(){throw new Error('blocked');},setItem(){throw new Error('quota');},removeItem(){}};expect(load(blocked,key).error).toContain('не сохраняется');expect(()=>persist(blocked,initialState(),0,key)).toThrow();});
  it('detects cross-tab revision conflict rather than overwriting',()=>{const s=new MemoryStorage();const full=completeSave();s.setItem(key,JSON.stringify(full));expect(persist(s,initialState(),0,key)).toBe('conflict');expect(parseSave(s.getItem(key)!)).toEqual(full);});
  it.each(['future','foreign','cursor','ending','result','prototype','oversize','unknown'])('rejects %s import',kind=>{const s=completeSave();let raw='';switch(kind){case 'future':raw=JSON.stringify({...s,schemaVersion:99});break;case 'foreign':raw=JSON.stringify({...s,appId:'other'});break;case 'cursor':{const r=reduceSave(initialState(),{type:'start'});r.campaign.active!.nodeId='c1.unknown';raw=JSON.stringify(r);break;}case 'ending':s.campaign.records[1]!.cardId='c1.banter';raw=JSON.stringify(s);break;case 'result':s.campaign.records[1]!.story.catNoticed=true;raw=JSON.stringify(s);break;case 'prototype':raw=JSON.stringify(s).replace('"appId"','"__proto__":{},"appId"');break;case 'oversize':raw=' '.repeat(262145);break;default:raw=JSON.stringify({...s,unexpected:true});}expect(()=>parseSave(raw)).toThrow();});
  it('valid replacement advances local revision instead of trusting imported one',()=>{const current=completeSave();const imported=initialState();const s=reduceSave(current,{type:'replace',save:imported});expect(s.revision).toBe(current.revision+1);expect(s.campaign.completed).toEqual([]);});
});
