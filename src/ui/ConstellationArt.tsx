import { constellationDrawings,drawingStars,drawingSegments,type SkyShape } from '../minigames/constellationModel';
export function ConstellationArt({shape,progress,label}:{shape:SkyShape;progress?:number;label?:string}){
  const stars=drawingStars(shape),count=progress??stars.length,complete=count===stars.length;
  return <svg className={`constellation-art ${complete?'is-complete':''}`} viewBox="0 0 288 264" role={label?'img':undefined} aria-label={label} aria-hidden={label?undefined:true}>
    <g className="sky-lines" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">{drawingSegments(shape,count).map((segment,i)=><line key={i} x1={segment.from[0]} y1={segment.from[1]} x2={segment.to[0]} y2={segment.to[1]}/>)}</g>
    {complete&&<path className="sky-details" d={constellationDrawings[shape].details} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>}
    <g fill="currentColor">{stars.map(star=><g key={star.id} opacity={star.id<count?1:.24}>{star.id<count&&<circle className="sky-star-halo" cx={star.point[0]} cy={star.point[1]} r="7.5"/>}<circle cx={star.point[0]} cy={star.point[1]} r={star.id<count?3.2:2.5}/></g>)}</g>
  </svg>;
}
