import type { ConstellationResult } from '../engine/types';

// Keep the stored "controllers" ID: old saves and chapter routes remain valid.
export type SkyShape=ConstellationResult['outcome'];
export type SkyPoint=readonly [number,number];
type SkyStroke={name:string;points:readonly SkyPoint[];closed?:boolean};
type Drawing={label:string;name:string;description:string;strokes:readonly SkyStroke[];details:string};
export const constellationDrawings:Record<SkyShape,Drawing>={
  cat:{label:'Кот',name:'Пончик',description:'Кот с ушками и загнутым хвостом',strokes:[
    {name:'Силуэт',closed:true,points:[[88,108],[82,58],[112,76],[142,76],[172,58],[166,108],[153,130],[172,178],[170,210],[86,210],[84,178],[102,130]]},
    {name:'Хвост',points:[[170,210],[211,210],[232,182],[225,152],[204,148],[196,168]]}
  ],details:'M107 104h4 M143 104h4 M123 116L127 120L131 116 M127 120Q123 126 119 122 M127 120Q131 126 135 122 M112 175V209 M145 175V209'},
  controllers:{label:'Геймпад',name:'Наша команда',description:'Один геймпад с двумя ручками',strokes:[
    {name:'Корпус',closed:true,points:[[83,82],[205,82],[222,102],[242,177],[227,193],[204,186],[176,156],[112,156],[84,186],[61,193],[46,177],[64,102]]}
  ],details:'M82 121H102 M92 111V131 M191.1 110a3.1 3.1 0 1 0-6.2 0a3.1 3.1 0 1 0 6.2 0 M202.1 121a3.1 3.1 0 1 0-6.2 0a3.1 3.1 0 1 0 6.2 0 M191.1 132a3.1 3.1 0 1 0-6.2 0a3.1 3.1 0 1 0 6.2 0 M180.1 121a3.1 3.1 0 1 0-6.2 0a3.1 3.1 0 1 0 6.2 0 M128.5 142a5.5 5.5 0 1 0-11 0a5.5 5.5 0 1 0 11 0 M170.5 142a5.5 5.5 0 1 0-11 0a5.5 5.5 0 1 0 11 0'},
  teapot:{label:'Чайник',name:'Ещё по чашке?',description:'Чайник с носиком, ручкой и крышкой',strokes:[
    {name:'Корпус и носик',closed:true,points:[[92,105],[171,105],[187,137],[222,110],[238,116],[218,153],[191,171],[177,202],[102,202],[81,178],[73,145]]},
    {name:'Ручка',points:[[92,105],[56,101],[36,125],[38,169],[81,178]]},
    {name:'Крышка',points:[[92,105],[117,84],[147,84],[171,105]]}
  ],details:'M126 82V76Q132 69 138 76V82 M124 58Q114 51 124 43 M145 60Q155 51 145 40'}
};
export const constellationNames:Record<SkyShape,string>={cat:constellationDrawings.cat.name,controllers:constellationDrawings.controllers.name,teapot:constellationDrawings.teapot.name};
export const skyShapes=Object.keys(constellationDrawings) as SkyShape[];
const pointKey=(point:SkyPoint)=>point.join(',');
export function drawingStars(shape:SkyShape){
  const unique=new Map<string,{point:SkyPoint;stroke:number}>();
  constellationDrawings[shape].strokes.forEach((stroke,index)=>stroke.points.forEach(point=>{if(!unique.has(pointKey(point)))unique.set(pointKey(point),{point,stroke:index});}));
  return [...unique.values()].map((star,id)=>({...star,id}));
}
export function drawingSegments(shape:SkyShape,progress=drawingStars(shape).length){
  const visited=new Set(drawingStars(shape).slice(0,progress).map(star=>pointKey(star.point)));
  return constellationDrawings[shape].strokes.flatMap((stroke,index)=>{
    const points=stroke.closed?[...stroke.points,stroke.points[0]]:stroke.points;
    return points.slice(1).flatMap((to,i)=>visited.has(pointKey(points[i]))&&visited.has(pointKey(to))?[{from:points[i],to,stroke:index}]:[]);
  });
}
export type StarState={shape:SkyShape|null;progress:number};
export type StarAction={type:'shape';shape:SkyShape}|{type:'star';id:number}|{type:'undo'}|{type:'reset'};
export const initialStars:StarState={shape:null,progress:0};
export function starReduce(s:StarState,a:StarAction):StarState{
  if(a.type==='reset')return initialStars;
  if(a.type==='shape')return Object.hasOwn(constellationDrawings,a.shape)?a.shape===s.shape?s:{shape:a.shape,progress:0}:s;
  if(a.type==='undo')return s.progress?{...s,progress:s.progress-1}:s;
  if(!s.shape||!Number.isInteger(a.id)||a.id!==s.progress||s.progress>=drawingStars(s.shape).length)return s;
  return {...s,progress:s.progress+1};
}
export function starResult(s:StarState):ConstellationResult|null{
  return s.shape&&s.progress===drawingStars(s.shape).length?{kind:'constellation',outcome:s.shape,usedPreset:false}:null;
}
