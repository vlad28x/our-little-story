import { it,expect } from 'vitest';
import { acceptsRouteResult,initialRoute,routeReduce,validRouteResult } from '../src/minigames/eveningRouteModel';
it('selects two distinct stops, removes/reorders them and ignores a third',()=>{
  let r=initialRoute();r=routeReduce(r,{kind:'toggle-stop',stop:'window'});r=routeReduce(r,{kind:'toggle-stop',stop:'water'});
  expect(r.selected).toEqual(['window','water']);expect(routeReduce(r,{kind:'toggle-stop',stop:'lights'})).toBe(r);
  r=routeReduce(r,{kind:'toggle-stop',stop:'window'});expect(r.selected).toEqual(['water']);
  r=routeReduce(r,{kind:'toggle-stop',stop:'lights'});expect(r.selected).toEqual(['water','lights']);expect(routeReduce(r,{kind:'reset'}).selected).toEqual([]);
});
it('restores the own draft after a shared suggestion and only confirms matching results',()=>{
  let r=routeReduce(initialRoute(),{kind:'toggle-stop',stop:'window'});r=routeReduce(r,{kind:'show-suggestion'});
  expect(routeReduce(r,{kind:'toggle-stop',stop:'water'})).toBe(r);expect(acceptsRouteResult(r,{kind:'evening-route',mode:'shared',stops:['lights','water']})).toBe(true);
  r=routeReduce(r,{kind:'back-to-select'});expect(r.selected).toEqual(['window']);expect(acceptsRouteResult(r,{kind:'evening-route',mode:'own',stops:['window','water']})).toBe(false);
  expect(acceptsRouteResult(r,{kind:'evening-route',mode:'skipped',stops:[]})).toBe(true);
});
it('rejects duplicate, foreign, malformed and forged shared routes',()=>{
  for(const value of [{kind:'evening-route',mode:'own',stops:['water','water']},{kind:'evening-route',mode:'shared',stops:['window','water']},{kind:'evening-route',mode:'skipped',stops:['lights']},{kind:'evening-route',mode:'own',stops:['unknown','water']},{kind:'evening-route',mode:'own',stops:['water','lights'],text:'unexpected'}])expect(validRouteResult(value)).toBe(false);
});
