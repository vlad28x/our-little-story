import { describe,it,expect,vi } from 'vitest';
import type { CloudAPI } from '../src/telegram/bridge';
import { TelegramCloud,CloudSession,CloudConflict,cloudRaw,splitCloudText,cloudErrorText } from '../src/telegram/cloud';
import { initialState } from '../src/state/initialState';
import { reduceSave } from '../src/state/reducer';
import { finishFive } from './chapter5Helpers';
import { runTo } from './helpers';
import { createHash } from 'node:crypto';
import { withLegacyJournal,legacyCloudData } from './legacySave';
class FakeCloud implements CloudAPI {
  data=new Map<string,string>();failKey='';failReads=false;setCalls:string[]=[];
  getItem(key:string,done:(error:string|null,value:string)=>void){done(this.failReads?'offline':null,this.data.get(key)??'');}
  getItems(keys:string[],done:(error:string|null,values:Record<string,string>)=>void){expect(Buffer.byteLength(JSON.stringify({keys}),'utf8')).toBeLessThanOrEqual(4096);done(this.failReads?'offline':null,Object.fromEntries(keys.map(k=>[k,this.data.get(k)??''])));}
  setItem(key:string,value:string,done:(error:string|null,stored:boolean)=>void){this.setCalls.push(key);if(key===this.failKey){done('offline',false);return;}expect(key).toMatch(/^[A-Za-z0-9_-]{1,128}$/);if(Buffer.byteLength(JSON.stringify({key,value}),'utf8')>4096){done('DATA_TOO_LONG',false);return;}this.data.set(key,value);done(null,true);}
}
const HEAD='five_meetings_v1_head';
describe('Telegram cloud snapshots',()=>{
  it('does not split an emoji into invalid Unicode at a native storage boundary',()=>{
    const text='я'.repeat(3499)+'💗'+'a'.repeat(3498)+'🙂'+'\\"\n\u0000\ud800'.repeat(400);const chunks=splitCloudText(text);
    expect(chunks.join('')).toBe(text);for(const chunk of chunks){expect(Buffer.byteLength(JSON.stringify(chunk),'utf8')).toBeLessThanOrEqual(3000);expect(chunk.endsWith('\ud83d')).toBe(false);}
  });
  it('reproduces DATA_TOO_LONG with the old Cyrillic chunk and saves the same active chapter with byte-sized chunks',async()=>{
    const api=new FakeCloud(),cloud=new TelegramCloud(api),base=reduceSave(initialState(),{type:'start'}),save={...base,campaign:{...base.campaign,active:runTo('c1.plan')}};
    const legacy=withLegacyJournal(save),raw=JSON.stringify(legacy);expect(raw.length).toBeGreaterThan(3500);
    await new Promise<void>(resolve=>api.setItem('old_chunk',raw.slice(0,3500),error=>{expect(error).toBe('DATA_TOO_LONG');resolve();}));
    await cloud.write(legacy,'');expect((await cloud.read()).save).toEqual(save);expect(cloudRaw(legacy)).not.toContain('journal');
  });
  it('reads legacy 3500-unit banks, preserves them on interrupted migration and commits a new bank without losing progress',async()=>{
    const api=new FakeCloud(),cloud=new TelegramCloud(api),base=reduceSave(initialState(),{type:'start'}),save={...base,campaign:{...base.campaign,active:runTo('c1.plan')}};
    for(const [key,value] of Object.entries(legacyCloudData(save)))api.data.set(key,value);
    const head=api.data.get(HEAD)!,part=JSON.parse(head).current;
    expect(await cloud.read()).toMatchObject({save,needsRewrite:true});const original=new Map(api.data),next={...save,revision:save.revision+1};
    api.failKey=HEAD;await expect(cloud.write(next,head)).rejects.toThrow();expect(api.data.get(HEAD)).toBe(head);expect((await cloud.read()).save).toEqual(save);for(const [key,value] of original)expect(api.data.get(key)).toBe(value);
    api.failKey='';await cloud.write(next,head);expect((await cloud.read()).save).toEqual(next);expect(JSON.parse(api.data.get(HEAD)!).previous).toEqual(part);
  });
  it('reads a large legacy journal in bounded batches, then writes only the compact progress',async()=>{
    const api=new FakeCloud(),cloud=new TelegramCloud(api),base=reduceSave(initialState(),{type:'start'});
    const journal=Array.from({length:100},(_,i)=>({key:`large-import:${i}`,nodeId:'c1.entry' as const,speaker:'narrator' as const,text:'"\\'.repeat(500)}));
    const save={...base,campaign:{...base.campaign,active:{...base.campaign.active!,journal}}};
    const raw=JSON.stringify(save),chunks=splitCloudText(raw);chunks.forEach((value,i)=>api.data.set(`five_meetings_v1_a_${i}`,value));
    const head=JSON.stringify({version:1,current:{slot:'a',count:chunks.length,length:raw.length,hash:createHash('sha256').update(raw).digest('hex')},previous:null});api.data.set(HEAD,head);
    expect(chunks.length).toBeGreaterThan(32);expect(await cloud.read()).toMatchObject({save:base,needsRewrite:true});
    const next={...base,revision:base.revision+1};await cloud.write(next,head);expect(await cloud.read()).toMatchObject({save:next,needsRewrite:false});expect(api.data.size).toBeLessThanOrEqual(353);
  });
  it('round trips the entire five-chapter story in legal chunks without the real-life preference',async()=>{
    const api=new FakeCloud(),cloud=new TelegramCloud(api),save=reduceSave(finishFive(),{type:'continuation',value:'game'});
    expect((await cloud.read()).save).toBeNull();const head=await cloud.write(save,'');const loaded=await cloud.read();
    expect(head).toBe(api.data.get(HEAD));expect(loaded.save).toEqual({...save,continuation:null});expect(loaded.damaged).toBe(false);expect(api.data.size).toBeGreaterThan(2);expect(api.setCalls.at(-1)).toBe(HEAD);
  });
  it('keeps the committed story after a partial write and recovers its previous bank after corruption',async()=>{
    const api=new FakeCloud(),cloud=new TelegramCloud(api),a=initialState(),b=reduceSave(a,{type:'start'});
    const first=await cloud.write(a,'');api.failKey='five_meetings_v1_b_0';await expect(cloud.write(b,first)).rejects.toThrow();expect((await cloud.read()).save).toEqual(a);
    api.failKey='';await cloud.write(b,first);api.data.set('five_meetings_v1_b_0','broken');const loaded=await cloud.read();expect(loaded.save).toBeNull();expect(loaded.backup).toEqual(a);expect(loaded.damaged).toBe(true);
    // Interrupted recovery must preserve the good previous bank as well.
    api.failKey=HEAD;await expect(cloud.write(a,loaded.head)).rejects.toThrow();expect((await cloud.read()).backup).toEqual(a);
    api.failKey='';await cloud.write(a,loaded.head);expect((await cloud.read()).save).toEqual(a);
  });
  it('does not treat offline reads or unknown metadata as an empty cloud',async()=>{
    const api=new FakeCloud(),cloud=new TelegramCloud(api);api.failReads=true;await expect(cloud.read()).rejects.toThrow();api.failReads=false;
    api.data.set(HEAD,'{broken');expect(await cloud.read()).toMatchObject({damaged:true,save:null});expect(api.setCalls).toEqual([]);
    api.data.set(HEAD,JSON.stringify({version:99}));expect((await cloud.read()).damaged).toBe(true);
  });
  it('refuses stale-device writes before changing any chunk',async()=>{
    const api=new FakeCloud(),one=new TelegramCloud(api),two=new TelegramCloud(api),a=initialState();const head=await one.write(a,'');
    await one.write(reduceSave(a,{type:'start'}),head);const count=api.setCalls.length;await expect(two.write(a,head)).rejects.toBeInstanceOf(CloudConflict);expect(api.setCalls).toHaveLength(count);
  });
  it('serializes rapid actions and detects later remote changes even if revision numbers match',async()=>{
    const api=new FakeCloud(),cloud=new TelegramCloud(api),a=initialState(),session=new CloudSession(cloud,'',null);
    const b=reduceSave(a,{type:'start'});await Promise.all([session.push(a),session.push(b)]);expect((await cloud.read()).save).toEqual(b);
    const count=api.setCalls.length;await session.push(b);expect(api.setCalls).toHaveLength(count);
    const other={...b,settings:{...b.settings,sound:true}};await cloud.write(other,session.head);await expect(session.check()).rejects.toBeInstanceOf(CloudConflict);await expect(session.push(a)).rejects.toThrow();
  });
  it('times out an unresponsive client rather than hanging on startup',async()=>{
    vi.useFakeTimers();try{
      const api=new FakeCloud();api.getItem=()=>{};const read=new TelegramCloud(api).read();const rejected=expect(read).rejects.toThrow('вовремя');await vi.advanceTimersByTimeAsync(20001);await rejected;
    }finally{vi.useRealTimers();}
  });
  it('accepts a native response slower than eight seconds without retrying or clearing the cloud',async()=>{
    vi.useFakeTimers();try{
      const api=new FakeCloud();let calls=0;api.getItem=(_key,done)=>{calls++;setTimeout(()=>done(null,''),12000);};
      const read=new TelegramCloud(api).read();await vi.advanceTimersByTimeAsync(12001);expect(await read).toMatchObject({head:'',damaged:false});expect(calls).toBe(1);expect(api.setCalls).toEqual([]);
    }finally{vi.useRealTimers();}
  });
  it('reports the failed write phase and safe native code, never arbitrary error payloads',async()=>{
    const api=new FakeCloud();api.setItem=(_key,_value,done)=>done('STORAGE_VALUE_TOO_LONG',false);
    const error=await new TelegramCloud(api).write(initialState(),'').catch(e=>e);expect(cloudErrorText(error)).toContain('Запись части сохранения');expect(cloudErrorText(error)).toContain('STORAGE_VALUE_TOO_LONG');expect(api.data.has(HEAD)).toBe(false);
    api.setItem=(_key,_value,done)=>done('private user=42 initData=secret',false);
    const privateError=await new TelegramCloud(api).write(initialState(),'').catch(e=>e);expect(cloudErrorText(privateError)).toContain('API_ERROR');expect(cloudErrorText(privateError)).not.toMatch(/private|42|secret|initData/);
    expect(cloudErrorText(new Error('private token'))).toContain('CHECK_FAILED');expect(cloudErrorText(new Error('private token'))).not.toContain('private');
  });
  it('does not label a committed snapshot as damaged when the WebView cannot hash it',async()=>{
    const api=new FakeCloud(),cloud=new TelegramCloud(api);await cloud.write(initialState(),'');const data=new Map(api.data),calls=api.setCalls.length;
    vi.stubGlobal('crypto',{subtle:undefined});try{
      const error=await cloud.read().catch(e=>e);expect(cloudErrorText(error)).toContain('HASH_UNAVAILABLE');expect(api.data).toEqual(data);expect(api.setCalls).toHaveLength(calls);
    }finally{vi.unstubAllGlobals();}
  });
  it('validates imports before sending bytes and bounds the cloud key count over repeated saves',async()=>{
    const api=new FakeCloud(),cloud=new TelegramCloud(api),save=finishFive();let head='';
    for(let i=0;i<8;i++)head=await cloud.write({...save,revision:save.revision+i},head);
    expect(api.data.size).toBeLessThan(155);expect(JSON.parse(cloudRaw(save)).continuation).toBeNull();
    await expect(cloud.write({...save,contentVersion:99} as unknown as typeof save,head)).rejects.toThrow();
  });
});
