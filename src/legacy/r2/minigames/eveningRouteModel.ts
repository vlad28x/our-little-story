import type { EveningRouteResult, RouteAction, RouteDraft, RouteStop } from '../engine/types';

export const routeStops:RouteStop[]=['water','lights','window'];
export const routeLabels:Record<RouteStop,{title:string;description:string}>={
  water:{title:'К воде',description:'Тихая пауза у парапета'},
  lights:{title:'Под фонари',description:'Пройтись под тёплыми огнями'},
  window:{title:'К витрине',description:'Познакомиться с очень занятым котом'},
};
export function initialRoute():RouteDraft{return {kind:'evening-route',phase:'select',selected:[]};}
export function routeReduce(current:RouteDraft,action:RouteAction):RouteDraft{
  if(action.kind==='show-suggestion')return current.phase==='suggestion'?current:{...current,phase:'suggestion'};
  if(action.kind==='back-to-select')return current.phase==='select'?current:{...current,phase:'select'};
  if(current.phase!=='select')return current;
  if(action.kind==='reset')return current.selected.length?{...current,selected:[]}:current;
  if(action.kind!=='toggle-stop'||!routeStops.includes(action.stop))return current;
  if(current.selected.includes(action.stop))return {...current,selected:current.selected.filter(s=>s!==action.stop)};
  return current.selected.length<2?{...current,selected:[...current.selected,action.stop]}:current;
}
export function validRouteResult(value:unknown):value is EveningRouteResult{
  if(!value||typeof value!=='object')return false;
  const r=value as Record<string,unknown>;
  if(Object.keys(r).some(k=>!['kind','mode','stops'].includes(k))||r.kind!=='evening-route'||!Array.isArray(r.stops))return false;
  if(r.mode==='skipped')return r.stops.length===0;
  if(!['own','shared'].includes(String(r.mode))||r.stops.length!==2||r.stops[0]===r.stops[1]||!r.stops.every(s=>routeStops.includes(s)))return false;
  return r.mode!=='shared'||r.stops[0]==='lights'&&r.stops[1]==='water';
}
export function acceptsRouteResult(draft:RouteDraft,r:EveningRouteResult){
  return validRouteResult(r)&&(r.mode==='skipped'||r.mode==='shared'&&draft.phase==='suggestion'||r.mode==='own'&&draft.phase==='select'&&r.stops.every((s,i)=>s===draft.selected[i])&&draft.selected.length===2);
}
