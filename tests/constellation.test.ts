import { it,expect } from 'vitest';
import { starReduce,starResult,type StarState } from '../src/minigames/constellationModel';
it('accepts all 24 orders and all three chosen shapes without an astronomy test',()=>{
  let count=0;for(let a=0;a<4;a++)for(let b=0;b<4;b++)for(let c=0;c<4;c++)for(let d=0;d<4;d++){
    if(new Set([a,b,c,d]).size!==4)continue;let s:StarState={order:[],shape:null};for(const id of [a,b,c,d])s=starReduce(s,{type:'star',id});
    for(const shape of ['cat','controllers','teapot'] as const){const named=starReduce(s,{type:'shape',shape});expect(starResult(named)).toEqual({kind:'constellation',outcome:shape,usedPreset:false});}count++;
  }expect(count).toBe(24);
});
it('ignores duplicates and invalid stars, supports undo, and requires an explicit shape',()=>{
  let s:StarState={order:[],shape:null};expect(starResult(s)).toBeNull();expect(starReduce(s,{type:'shape',shape:'cat'})).toEqual(s);
  for(const id of [-1,4,NaN,1.5])expect(starReduce(s,{type:'star',id})).toEqual(s);
  s=starReduce(s,{type:'star',id:2});expect(starReduce(s,{type:'star',id:2})).toEqual(s);
  for(const id of [0,3,1])s=starReduce(s,{type:'star',id});expect(starResult(s)).toBeNull();s=starReduce(s,{type:'shape',shape:'controllers'});s=starReduce(s,{type:'undo'});expect(s).toEqual({order:[2,0,3],shape:null});expect(starResult(s)).toBeNull();
});
