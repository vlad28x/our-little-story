import { describe,it,expect } from 'vitest';
import { initialKitchen,kitchenReduce as k,recipes,visibleOrders,kitchenResult,kitchenOutcome,type KitchenState } from '../src/minigames/kitchenModel';
function serve(s:KitchenState){const o=visibleOrders(s)[0];s=k(s,{type:'select',id:o.id});s=k(s,{type:'ingredient',ingredient:recipes[o.recipe].ingredients[0]});s=k(s,{type:'pass'});s=k(s,{type:'tick',ms:s.partner!.total});return k(s,{type:'serve'});}
function trained(style:'planner'|'improv'='planner'){let s=initialKitchen(style);s=serve(s);s=serve(s);expect(s.phase).toBe('ready');expect(s.served).toBe(0);return s;}
describe('deterministic kitchen',()=>{
  it('teaches two recipes without counting them, then serves all nine in either style and mode',()=>{
    for(const style of ['planner','improv'] as const)for(const mode of ['timed','calm'] as const){let s=k(trained(style),{type:'start',mode});for(let r=0;r<3;r++){expect(visibleOrders(s)).toHaveLength(2);for(let i=0;i<3;i++)s=serve(s);if(r<2)s=k(s,{type:'next'});}expect(s.phase).toBe('done');expect(kitchenResult(s)).toEqual({kind:'kitchen',outcome:'feast',served:9,mode});}
  });
  it('keeps independent plates, rejects hidden orders and double serve, and returns wrong products without penalty',()=>{
    let s=initialKitchen('planner');const original=s;
    s=k(s,{type:'ingredient',ingredient:'cucumber'});expect(s.orders).toEqual(original.orders);expect(s.served).toBe(0);
    s=k(s,{type:'ingredient',ingredient:'bread'});s=k(s,{type:'pass'});s=k(s,{type:'select',id:1});s=k(s,{type:'ingredient',ingredient:'tomato'});const p=s.partner;
    s=k(s,{type:'pass'});expect(s.partner).toEqual(p);expect(s.orders.map(o=>o.plate)).toEqual(['working','first']);
    s=k(s,{type:'tick',ms:2400});s=k(s,{type:'select',id:0});s=k(s,{type:'serve'});const once=s;s=k(s,{type:'serve'});expect(s.orders).toEqual(once.orders);
    s=k(trained(),{type:'start',mode:'calm'});expect(k(s,{type:'select',id:2})).toEqual(s);
  });
  it('pauses both time and partner; resume never counts the paused gap; calm cannot be switched back',()=>{
    let s=k(trained(),{type:'start',mode:'timed'});s=k(s,{type:'ingredient',ingredient:'bread'});s=k(s,{type:'pass'});s=k(s,{type:'tick',ms:1000});const left=s.left,work=s.partner!.left;
    s=k(s,{type:'pause'});expect(k(s,{type:'tick',ms:40000})).toEqual(s);s=k(s,{type:'calm'});s=k(s,{type:'resume'});s=k(s,{type:'tick',ms:work});expect(s.left).toBe(left);expect(s.orders[0].plate).toBe('ready');expect(k(s,{type:'start',mode:'timed'})).toEqual(s);
  });
  it('ends each timed round after 25s and allows calm rounds to end early without losing served dishes',()=>{
    let s=k(trained(),{type:'start',mode:'timed'});s=serve(s);s=k(s,{type:'tick',ms:25000});expect(s.phase).toBe('between');expect(s.served).toBe(1);s=k(s,{type:'calm'});s=k(s,{type:'next'});s=k(s,{type:'end-round'});s=k(s,{type:'next'});expect(s.lamp).toBe(false);s=k(s,{type:'lamp'});expect(s.lamp).toBe(true);s=k(s,{type:'end-round'});expect(s.phase).toBe('done');expect(kitchenResult(s).outcome).toBe('chaos');
  });
  it('uses documented partner delays and outcome boundaries',()=>{
    let s=initialKitchen('improv');s=k(s,{type:'ingredient',ingredient:'bread'});s=k(s,{type:'pass'});expect(s.partner?.total).toBe(1800);s=k(s,{type:'tick',ms:1800});s=k(s,{type:'serve'});s=k(s,{type:'ingredient',ingredient:'tomato'});s=k(s,{type:'pass'});expect(s.partner?.total).toBe(3000);
    expect([0,2,3,6,7,9].map(kitchenOutcome)).toEqual(['chaos','chaos','snack','snack','feast','feast']);expect(kitchenResult(s,true).outcome).toBe('skipped');
  });
});
