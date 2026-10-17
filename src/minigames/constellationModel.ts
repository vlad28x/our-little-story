import type { ConstellationResult } from '../engine/types';
export const constellationNames={cat:'Кот с большим планом',controllers:'Два геймпада',teapot:'Чайник'};
export const starPoints=[[18,67],[37,24],[65,31],[82,70]] as const;
export const constellationPaths={cat:'M20 70L25 25L42 40L58 40L75 25L80 70L65 80L35 80Z',controllers:'M10 66L20 35L40 35L48 66L35 57L23 57Z M52 66L60 35L82 35L92 66L79 57L65 57Z',teapot:'M25 48Q15 85 52 85Q85 85 75 48Z M28 48L22 28L48 48 M75 50Q104 42 90 66L78 67 M35 43H67 M46 35H56'};
export type StarState={order:number[];shape:ConstellationResult['outcome']|null};
export type StarAction={type:'star';id:number}|{type:'undo'}|{type:'shape';shape:ConstellationResult['outcome']};
export function starReduce(s:StarState,a:StarAction):StarState{
  if(a.type==='undo')return {order:s.order.slice(0,-1),shape:null};
  if(a.type==='star')return Number.isInteger(a.id)&&a.id>=0&&a.id<4&&!s.order.includes(a.id)?{...s,order:[...s.order,a.id]}:s;
  return s.order.length===4&&Object.hasOwn(constellationNames,a.shape)?{...s,shape:a.shape}:s;
}
export function starResult(s:StarState):ConstellationResult|null{return s.order.length===4&&s.shape?{kind:'constellation',outcome:s.shape,usedPreset:false}:null;}
