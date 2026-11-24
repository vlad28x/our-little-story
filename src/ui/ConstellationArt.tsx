import { useId } from 'react';
import { constellationDrawings, drawingStars, drawingSegments, type SkyShape } from '../minigames/constellationModel';

export function ConstellationArt({ shape, progress, label, ink = false, className = '', viewport }: { shape: SkyShape; progress?: number; label?: string; ink?: boolean; className?: string; viewport?: { x:number; y:number; width:number; height:number } }) {
  const id = useId().replace(/:/g, '');
  const stars = drawingStars(shape);
  const count = progress ?? stars.length;
  const complete = count === stars.length;
  const color = ink ? '#754e60' : '#ffe4a5';
  return <svg className={`constellation-art ${complete ? 'is-complete' : ''} ${className}`} viewBox={ink ? '24 32 240 190' : '0 0 288 264'} {...viewport} overflow={viewport?'hidden':undefined} style={{color,width:viewport?.width,height:viewport?.height}} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
    <defs>
      <radialGradient id={`${id}-halo`}><stop stopColor="#ffe1a0" stopOpacity=".55"/><stop offset="1" stopColor="#d49b9d" stopOpacity="0"/></radialGradient>
      <linearGradient id={`${id}-light`} gradientUnits="userSpaceOnUse" x1="36" y1="42" x2="238" y2="218"><stop stopColor="#fff3ca"/><stop offset=".57" stopColor="#e6bd80"/><stop offset="1" stopColor="#d3a2ae"/></linearGradient>
    </defs>
    <g className="sky-lines" fill="none" stroke={ink ? 'currentColor' : `url(#${id}-light)`} strokeWidth={ink ? 4 : 2.2} strokeLinecap="round" strokeLinejoin="round">
      {drawingSegments(shape,count).map((segment,i)=><line key={i} x1={segment.from[0]} y1={segment.from[1]} x2={segment.to[0]} y2={segment.to[1]} />)}
    </g>
    {complete && <path className="sky-details" d={constellationDrawings[shape].details} fill="none" stroke="currentColor" strokeWidth={ink ? 2.9 : 1.6} strokeLinecap="round" strokeLinejoin="round"/>}
    <g fill="currentColor">{stars.map(({ id: starId, point: [x,y] }) => <g key={starId} opacity={starId < count ? 1 : .24}>
      {!ink && starId < count && <circle className="sky-star-halo" cx={x} cy={y} r="9" style={{ fill: `url(#${id}-halo)`, opacity: .9, filter: "none" }}/>}
      <circle cx={x} cy={y} r={starId < count ? (ink ? 4 : 3.2) : 2.5}/>
    </g>)}</g>
  </svg>;
}