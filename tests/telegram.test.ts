import { describe,it,expect,vi } from 'vitest';
import type { CloudAPI } from '../src/telegram/bridge';
import { TelegramCloud,CloudSession,CloudConflict,cloudRaw,splitCloudText } from '../src/telegram/cloud';
import { initialState } from '../src/state/initialState';
import { reduceSave } from '../src/state/reducer';
import { finishFive } from './chapter5Helpers';
class FakeCloud implements CloudAPI {
  data=new Map<string,string>();failKey='';failReads=false;setCalls:string[]=[];
  getItem(key:string,done:(error:string|null,value:string)=>void){done(this.failReads?'offline':null,this.data.get(key)??'');}
  getItems(keys:string[],done:(error:string|null,values:Record<string,string>)=>void){done(this.failReads?'offline':null,Object.fromEntries(keys.map(k=>[k,this.data.get(k)??''])));}
  setItem(key:string,value:string,done:(error:string|null,stored:boolean)=>void){this.setCalls.push(key);if(key===this.failKey){done('offline',false);return;}expect(key).toMatch(/^[A-Za-z0-9_-]{1,128}$/);expect(value.length).toBeLessThanOrEqual(4096);this.data.set(key,value);done(null,true);}
}
const HEAD='five_meetings_v1_head';
describe('Telegram cloud snapshots',()=>{
  it('does not split an emoji into invalid Unicode at a native storage boundary',()=>{
    const text='я'.repeat(3499)+'💗'+'a'.repeat(3498)+'🙂';const chunks=splitCloudText(text);
    expect(chunks.join('')).toBe(text);for(const chunk of chunks){expect(chunk.length).toBeLessThanOrEqual(3500);expect(new TextDecoder().decode(new TextEncoder().encode(chunk))).toBe(chunk);}
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
      const api=new FakeCloud();api.getItem=()=>{};const read=new TelegramCloud(api).read();const rejected=expect(read).rejects.toThrow('вовремя');await vi.advanceTimersByTimeAsync(8001);await rejected;
    }finally{vi.useRealTimers();}
  });
  it('validates imports before sending bytes and bounds the cloud key count over repeated saves',async()=>{
    const api=new FakeCloud(),cloud=new TelegramCloud(api),save=finishFive();let head='';
    for(let i=0;i<8;i++)head=await cloud.write({...save,revision:save.revision+i},head);
    expect(api.data.size).toBeLessThan(155);expect(JSON.parse(cloudRaw(save)).continuation).toBeNull();
    await expect(cloud.write({...save,contentVersion:99} as unknown as typeof save,head)).rejects.toThrow();
  });
});
