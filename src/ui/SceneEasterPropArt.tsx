import { useId, type CSSProperties, type ReactNode } from 'react';
import type { ScenePropId, SeasonSceneryId } from '../content/easterEggs';

type SeasonReactionId=SeasonSceneryId|'cat10';

// The scene props follow the materials and light of the background.
export function SceneEasterPropArt({id,active,paintedSeason=false}:{id:ScenePropId;active:boolean;paintedSeason?:boolean}){
  switch(id){
    case 'blanket':return active?<BlanketFold painted={paintedSeason}/>:null;
    case 'tv':return active?<svg viewBox="0 0 128 100" aria-hidden="true">
      <g className="tv-cat"><TvPonchik/></g>
      <rect x="22" y="78" width="84" height="13" rx="2.5" fill="#554652" fillOpacity=".93"/>
      <text x="64" y="87.2" textAnchor="middle" fill="#fff7ed" fontSize="8.3">Игрок 3 подключился</text>
    </svg>:null;
    case 'mug':return active?<svg viewBox="0 0 80 100" aria-hidden="true">
      <path className="tea-heart" d="M39 42C8 27 14 6 28 10q9 0 11 9 4-9 12-9c15 0 18 18-12 32Z" fill={paintedSeason?"#f6d9bd44":"#fff6e533"} stroke={paintedSeason?"#ffebce":"#fff7e8"} strokeWidth="3.1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>:null;
    case 'star':return <svg viewBox="0 0 80 80" aria-hidden="true"><g className={active?'wish-star is-falling':'wish-star'}>
      <circle cx="40" cy="40" r="28" fill="#ffe7a8" opacity=".24"/>
      <circle cx="40" cy="40" r="16" fill="#fff1c4" opacity=".36"/>
      {paintedSeason&&<path d="M27 24l-2-2m31 31 3 3m-6-32 2-3M24 56l2-2" stroke="#ffe4ad" strokeWidth="1.4" opacity=".8" strokeLinecap="round"/>}
      <path d="m40 12 6.5 21.5L68 40l-21.5 6.5L40 68l-6.5-21.5L12 40l21.5-6.5Z" fill="#ffe699" stroke="#b38239" strokeWidth="1.6" strokeLinejoin="round"/>
      <circle cx="40" cy="40" r="7.5" fill="#fffaf0"/>
      {active&&<><path d="M44 36 74 6" stroke="#ffe7a8" strokeWidth="3.6" strokeLinecap="round"/><path d="M49 39 71 17" stroke="#fff7e2" strokeWidth="1.8" strokeLinecap="round" opacity=".75"/></>}
    </g></svg>;
    case 'sign':return <svg viewBox="0 0 160 80" aria-hidden="true">
      <path d="M29 25 38 3m93 22L122 3" stroke="#785842" strokeWidth="2.4" strokeLinecap="round"/>
      <rect x="4" y="23" width="152" height="52" rx="9" fill="#6b4f3d" stroke="#473329" strokeWidth="2.2"/>
      <rect x="9" y="28" width="142" height="42" rx="5" fill="#f5e3c2" stroke="#c8ab82" strokeWidth="1.4"/>
      {paintedSeason&&<path d="M11 29q19-5 32-2m80 41q15 1 27-5M16 61l23-2m92-22 11 2" fill="none" stroke="#b68866" strokeWidth="1" strokeLinecap="round" opacity=".56"/>}
      <circle cx="15" cy="34" r="1.8" fill="#9c7a56"/><circle cx="145" cy="34" r="1.8" fill="#9c7a56"/>
      <circle cx="15" cy="64" r="1.8" fill="#9c7a56"/><circle cx="145" cy="64" r="1.8" fill="#9c7a56"/>
      <text x="80" y="55" textAnchor="middle" fill="#6a3e56" fontFamily="Georgia,serif" fontWeight="600" fontSize="19" className={active?'sign-normal is-replaced':'sign-normal'}>Пауза</text>
      {active&&<text x="80" y="54" textAnchor="middle" fill="#6a3e56" fontFamily="Georgia,serif" fontWeight="600" fontSize="15.5" className="sign-secret">Продолжение</text>}
    </svg>;
    default:return active?<SeasonReactionArt id={id}/>:null;
  }
}

const reactionPaint={
  ceramic:['#fff3dd','#e4cab6','#ae8c88'],
  wood:['#cc9c71','#9e6e55','#6a4944'],
  sage:['#bcc098','#839277','#53695e'],
  copper:['#efd19a','#c29267','#926754'],
  paper:['#fff1d6','#ead0b4','#c39b86'],
  plum:['#a58798','#785567','#52404d'],
  rose:['#f0bdad','#cf8694','#9e5a6d'],
  glass:['#91aca6','#557984','#3a4e63'],
  ochre:['#f2ca83','#cc995c','#98694d'],
  orange:['#edb681','#ca8455','#934e40'],
} as const;

function SeasonReactionArt({id}:{id:SeasonReactionId}){
  const prefix=`${useId().replace(/:/g,'')}-egg`;
  const pigments=Object.entries(reactionPaint);
  const style={
    ...Object.fromEntries(pigments.map(([name])=>[`--egg-${name}`,`url(#${prefix}-${name})`])),
    '--egg-knit':`url(#${prefix}-knit)`,
    '--egg-light':`url(#${prefix}-light)`,
  } as CSSProperties;
  return <svg className="season-egg-art" viewBox="0 0 80 80" style={style} aria-hidden="true">
    <defs>
      {pigments.map(([name,[light,middle,shade]])=><linearGradient key={name} id={`${prefix}-${name}`} x2=".75" y2="1">
        <stop stopColor={light}/><stop offset=".62" stopColor={middle}/><stop offset="1" stopColor={shade}/>
      </linearGradient>)}
      <radialGradient id={`${prefix}-light`}>
        <stop stopColor="#fff6de"/><stop offset=".52" stopColor="#f9d897" stopOpacity=".68"/>
        <stop offset="1" stopColor="#e8a86a" stopOpacity="0"/>
      </radialGradient>
      <pattern id={`${prefix}-knit`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(11)">
        <path d="M1 1q0 2.5 2 3 2-.5 2-3" fill="none" stroke="#f0d9c4" strokeWidth=".85" opacity=".48"/>
        <path d="M1 2q.4 2 2 3" fill="none" stroke="#594350" strokeWidth=".7" opacity=".35"/>
      </pattern>
    </defs>
    {sceneDetail(id)}
  </svg>;
}

function TvPonchik(){
  const coat=useId().replace(/:/g,'')+'-tv-coat';
  return <>
    <defs>
      <linearGradient id={coat} x2=".72" y2="1">
        <stop stopColor="#fff0d8"/><stop offset=".64" stopColor="#f1d5b4"/><stop offset="1" stopColor="#dbb79d"/>
      </linearGradient>
    </defs>
    <path d="M32 42q-2-11-1-19 .3-5 4-4l18 10q10-4 22 0l18-10q4-1 4 4 .5 9-2 18 6 10 4 19-4 13-35 13-31 0-35-13-3-9 3-18Z" fill={`url(#${coat})`} stroke="#765a54" strokeWidth="2" strokeLinejoin="round"/>
    <path d="m37 34-1-9 13 7m42 2 1-9-13 7" fill="#cf9b99" opacity=".82"/>
    <path d="M52 31q5 1 8 8-5-2-9-6zm10-2h4l-1 11q-3-2-3-11Zm11 1 6 2q-5 2-8 6l-2-1Z" fill="#b77e58" opacity=".8"/>
    <path d="M33 43q6 0 10 5l-10-2Zm62 0q-6 0-10 5l10-2Z" fill="#c78f66" opacity=".72"/>
    <path d="M37 58q6 10 26 10 17 0 25-9" fill="none" stroke="#fff3de" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M49 55q2-5 9-5 4 0 6 2 2-2 6-2 7 0 9 5-1 8-15 8t-15-8Z" fill="#fff1db"/>
    <path d="M45 46q4-5 9 0m19 0q4-5 9 0" fill="none" stroke="#4c393a" strokeWidth="2.5" strokeLinecap="round"/>
    <ellipse cx="44" cy="53" rx="4.2" ry="2.2" fill="#d19aa0" opacity=".7"/><ellipse cx="84" cy="53" rx="4.2" ry="2.2" fill="#d19aa0" opacity=".7"/>
    <path d="M61 51q3-1 6 0l-3 3.6Z" fill="#9f686f"/>
    <path d="M64 55q-2 3.7-5 2m5-2q2 3.7 5 2m-33-2-5-1m60 1 5-1" fill="none" stroke="#6a5050" strokeWidth="1.6" strokeLinecap="round"/>
  </>;
}

function ReactionPonchik({x,y,width,height}:{x:number;y:number;width:number;height:number}){
  return <svg x={x} y={y} width={width} height={height} viewBox="24 16 80 59">
    <TvPonchik/>
  </svg>;
}

export function CookiePlateArt({taken}:{taken:boolean}){
  const id=useId().replace(/:/g,'');
  const cookies=[{x:54,y:37,angle:22},{x:33,y:56,angle:-17},{x:74,y:54,angle:5}];
  return <svg viewBox="0 0 110 80" aria-hidden="true">
    <defs>
      <linearGradient id={`${id}-ceramic`} x2=".8" y2="1">
        <stop stopColor="#fff0d3"/><stop offset=".66" stopColor="#e9d5b9"/><stop offset="1" stopColor="#b9958e"/>
      </linearGradient>
      <radialGradient id={`${id}-dough`} cx="36%" cy="28%" r="76%">
        <stop stopColor="#ecc98a"/><stop offset=".54" stopColor="#d9a66b"/><stop offset=".86" stopColor="#b98152"/><stop offset="1" stopColor="#9f6348"/>
      </radialGradient>
    </defs>
    <ellipse cx="55" cy="67" rx="49" ry="10" fill="#5c3829" opacity=".25"/>
    <ellipse cx="55" cy="61" rx="50" ry="14" fill={`url(#${id}-ceramic)`} stroke="#9b796c" strokeWidth="1.2"/>
    <ellipse cx="55" cy="60" rx="45" ry="10.8" fill="none" stroke="#9a7180" strokeWidth="1.6" opacity=".82"/>
    <path d="M10 57q13-8 33-8m23 20q21-1 33-8" fill="none" stroke="#fff1d8" strokeWidth="1.7" strokeLinecap="round"/>
    <g>{cookies.slice(taken?1:0).map(({x,y,angle})=><g key={x} transform={`translate(${x} ${y}) rotate(${angle}) scale(1 .88)`}>
      <ellipse cy="10" rx="18" ry="7" fill="#684137" opacity=".24"/>
      <circle r="17" fill={`url(#${id}-dough)`} stroke="#a56d4f" strokeWidth="1.2"/>
      <path d="M-13-7q6-10 16-8M-14 7q5 8 15 7M4 15q8-2 11-9" fill="none" stroke="#f5d395" strokeWidth="1.6" strokeLinecap="round" opacity=".6"/>
      <path d="M-10-5l4-4 4 2-1 4-5 1zm10 5 4-3 5 3-2 4-5 1zM-6 7l4-2 3 3-2 4-5-1zm14-15 3-2 3 3-1 2-4 0z" fill="#734738"/>
      <path d="M-9-5l2-2M2 1l2-2M-5 8l2-1m2-5 1-.5m6 9 1-.5m-15-1 1-.5" stroke="#f3c287" strokeWidth="1" strokeLinecap="round" opacity=".72"/>
    </g>)}</g>
    <path d="m18 65 2-.5 1 1.3-2 1zm38-2 2-.8 1 1.6-2 1zm30 2 2-.7 1 1.4-2 1z" fill="#ab7651" opacity=".8"/>
  </svg>;
}

function BlanketFold({painted}:{painted:boolean}){
  const id=useId().replace(/:/g,'');
  return <svg viewBox="0 0 100 80" aria-hidden="true"><defs>
    <linearGradient id={`${id}-wool`} x2=".75" y2="1">
      <stop stopColor={painted?"#efd7b0":"#f1d4a8"}/><stop offset=".6" stopColor="#d4b28b"/><stop offset="1" stopColor="#aa7960"/>
    </linearGradient>
    <pattern id={`${id}-stitches`} width="9" height="11" patternUnits="userSpaceOnUse" patternTransform="rotate(-16)">
      <path d="M1 3q0 3 3.5 5Q8 6 8 3" fill="none" stroke="#9f765c" strokeWidth="1.3" opacity=".55"/>
      <path d="M1.5 2.2q-.2 3.1 3 4.6Q7.6 5.3 7.7 2" fill="none" stroke="#f7dfb8" strokeWidth="1.4" opacity=".91"/>
    </pattern>
  </defs><g className="blanket-fold is-lifted">
    <path d="M7 48q19-18 46-19 20-1 39 2l-9 31q-18 3-32-5-22-12-43 1Z" fill="#654638" opacity=".3"/>
    <path d="M6 45q18-19 45-20 18 0 42 4-7 9-11 26-19 4-32-4-22-12-43 4Z" fill={`url(#${id}-wool)`} stroke="#a17a61" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M8 45q17-17 44-19 20 1 39 3-7 12-10 25-18 3-30-4-22-12-43 3Z" fill={`url(#${id}-stitches)`}/>
    <path d="M8 48q21-17 44-4 14 8 29 5m-66-9q20-12 37-11 15-.4 31 2" fill="none" stroke="#f1d3a9" strokeWidth="2" strokeLinecap="round" opacity=".85"/>
    <path d="M28 45l-3 8m13-6-1 9m11-6 1 8m10-4 2 8m8-6 4 7m7-7 4 6" stroke="#d7b487" strokeWidth="2.6" strokeLinecap="round"/>
  </g></svg>;
}

const gold='#efd096',cream='#f9ecda',brown='#695148',dark='#48363b',amber='#ca9b62';

function Spark({x,y,size=9}:{x:number;y:number;size?:number}){
  return <g>
    <circle cx={x} cy={y} r={size*.96} fill="var(--egg-light)" opacity=".56"/>
    <path d={`M${x} ${y-size}l${size*.26} ${size*.74} ${size*.74} ${size*.26}-${size*.74} ${size*.26}-${size*.26} ${size*.74}-${size*.26}-${size*.74}-${size*.74}-${size*.26} ${size*.74}-${size*.26}Z`} fill={cream} stroke={gold} strokeWidth=".8"/>
  </g>;
}

function Heart({x=40,y=34,scale=1}:{x?:number;y?:number;scale?:number}){
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d="M0 15C-26-2-12-18 0-6C12-18 26-2 0 15Z" fill="var(--egg-rose)" stroke="#86586a" strokeWidth="1.45"/>
    <path d="M-9-5q3-4 7-1m7 11 4-4" fill="none" stroke="#ffebd8" strokeWidth="1.55" strokeLinecap="round" opacity=".85"/>
  </g>;
}

function Tag({text,fill='var(--egg-plum)',y=28,fontSize=9.5}:{text:string;fill?:string;y?:number;fontSize?:number}){
  return <g>
    <rect x="2" y={y+2} width="76" height="22" rx="6" fill={dark} opacity=".35"/>
    <rect x="2" y={y} width="76" height="22" rx="6" fill={fill} stroke={gold} strokeWidth="1.8"/>
    <rect x="4.5" y={y+2.5} width="71" height="17" rx="4" fill="none" stroke={cream} strokeWidth=".8" strokeDasharray="3 2.5" opacity=".45"/>
    <text x="40" y={y+14.5} fill={cream} textAnchor="middle" fontSize={fontSize} fontWeight="650" fontFamily="system-ui,sans-serif">{text}</text>
  </g>;
}

function sceneDetail(id:SeasonReactionId):ReactNode{
  switch(id){
    case 'kiosk6':return <g className="egg-rise">
      <rect x="9" y="23" width="62" height="40" rx="8" fill="var(--egg-sage)" stroke="#596451" strokeWidth="1.9"/>
      <rect x="11" y="25" width="58" height="12" rx="5" fill="var(--egg-copper)"/>
      <rect x="15" y="27" width="14" height="7" rx="2" fill={cream} stroke={brown} strokeWidth="1.4"/>
      <path d="M14 42q9-2 18-1m26 15 7-1" stroke="#e4ca9d" fill="none" strokeWidth="1.4" strokeLinecap="round" opacity=".64"/>
      <rect x="52" y="18" width="12" height="6" rx="2" fill="var(--egg-rose)" stroke="#825c63" strokeWidth="1.35"/>
      <rect x="10" y="38" width="60" height="4" fill={amber}/>
      <circle cx="43" cy="48" r="14" fill="var(--egg-ceramic)" stroke="#775d55" strokeWidth="1.9"/>
      <circle cx="43" cy="48" r="9" fill="var(--egg-glass)" stroke="#554f58" strokeWidth="1.6"/>
      <circle cx="40" cy="45" r="2.4" fill={cream} opacity=".9"/>
      <path d="M16 31l8-1m-7 24 9 2m12 8 19-1" fill="none" stroke="#e3d5b2" strokeWidth="1.25" strokeLinecap="round" opacity=".62"/>
      <Spark x={67} y={16} size={10}/>
    </g>;
    case 'waterWindow6':return <g className="egg-ripple" fill="none" strokeLinecap="round">
      <ellipse cx="40" cy="44" rx="32" ry="14" fill="var(--egg-light)" opacity=".45"/>
      <ellipse cx="40" cy="44" rx="14" ry="5.5" stroke={cream} strokeWidth="2.6"/>
      <ellipse cx="40" cy="44" rx="25" ry="11" stroke={gold} strokeWidth="2.4" opacity=".9"/>
      <ellipse cx="40" cy="44" rx="36" ry="17" stroke={gold} strokeWidth="2" strokeDasharray="9 5" opacity=".75"/>
      <Spark x={22} y={32} size={8}/><Spark x={59} y={53} size={7}/>
    </g>;
    case 'leaves6':return <g className="egg-drift">
      {([[18,22,-18,'ochre','#8f6523'],[52,20,24,'orange','#884d39'],[36,52,12,'rose','#884644']] as const).map(([x,y,rot,fill,stroke])=>(
        <g key={x} transform={`translate(${x} ${y}) rotate(${rot}) scale(1.25)`}>
          <path fill={`var(--egg-${fill})`} stroke={stroke} strokeWidth="1.4" strokeLinejoin="round" d="M0 16 1 9-10 10l4-5-6-6 8 1 3-9 4 9 8-2-6 7 4 4-9 1Z"/>
          <path d="M0 14V-5M0 4l-5-3M0 4l5-3" stroke={cream} strokeWidth=".9" opacity=".6"/>
        </g>
      ))}
    </g>;
    case 'lantern6':
    case 'lamp8':
    case 'floorLamp10':return <g className="egg-glow">
      <circle cx="40" cy="40" r="38" fill="var(--egg-light)"/>
      <Spark x={40} y={40} size={17}/>
      <Spark x={20} y={24} size={7}/><Spark x={61} y={54} size={7}/>
    </g>;
    case 'cafeSign6':return <g className="egg-swing">
      <path d="M40 6v12" stroke={gold} strokeWidth="2.6" strokeLinecap="round"/>
      <circle cx="40" cy="44" r="26" fill="var(--egg-wood)" stroke={gold} strokeWidth="2.25"/>
      <path d="M21 36q10-10 23-8m-22 28 7 3m15 5 12-5" fill="none" stroke="#f4d4a5" strokeWidth="1" opacity=".55"/>
      <circle cx="40" cy="44" r="21" fill="none" stroke={cream} strokeWidth="1" strokeDasharray="3 3" opacity=".55"/>
      <path d="M27 36h21v10q0 10-10.5 10T27 46Zm21 2h4q7 0 2 8h-6M25 60h28" fill="none" stroke={cream} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M33 30q-3-4 1-7M42 30q-3-4 1-7" fill="none" stroke={gold} strokeWidth="2" strokeLinecap="round"/>
    </g>;
    case 'noPhoto7':return <g className="egg-swing">
      <circle cx="40" cy="40" r="28" fill="var(--egg-wood)" stroke={cream} strokeWidth="2.1"/>
      <circle cx="40" cy="40" r="23" fill="var(--egg-plum)" stroke={gold} strokeWidth="1.2" opacity=".85"/>
      <rect x="24" y="30" width="32" height="22" rx="4" fill="var(--egg-ceramic)" stroke="#705858" strokeWidth="1.8"/>
      <circle cx="40" cy="41" r="6.5" fill="var(--egg-glass)" stroke={dark} strokeWidth="1.6"/>
      <path d="m21 21 38 38" stroke="#d95f6d" strokeWidth="4.5" strokeLinecap="round"/>
      <circle cx="62" cy="19" r="6" fill="var(--egg-rose)" stroke={cream} strokeWidth="1.6"/>
    </g>;
    case 'poster7':return <g className="egg-sweep">
      <path d="m6 62 49-46 13 2-52 48Z" fill="var(--egg-paper)" opacity=".78"/>
      <path d="m22 68 51-48 6 2-51 48Z" fill={gold} opacity=".48"/>
      <Spark x={54} y={28} size={13}/><Spark x={28} y={54} size={9}/>
    </g>;
    case 'handle7':return <g className="egg-glow">
      <circle cx="40" cy="40" r="30" fill="var(--egg-light)" opacity=".8"/>
      <Spark x={40} y={40} size={22}/>
      <path d="M16 24q-12 16 0 32m48-32q12 16 0 32" fill="none" stroke={gold} strokeWidth="2.8" strokeLinecap="round"/>
    </g>;
    case 'spots7':return <g className="egg-glow">
      <path d="M34 22h12l32 52H2Z" fill={gold} opacity=".42"/>
      <path d="M37 22h6l18 52H19Z" fill={cream} opacity=".34"/>
      <ellipse cx="40" cy="21" rx="13" ry="6" fill="var(--egg-copper)" stroke={brown} strokeWidth="1.6"/>
      <Spark x={40} y={46} size={11}/>
    </g>;
    case 'bench7':return <g className="egg-rise">
      <Tag text="Для двоих" y={28} fontSize={10.5}/>
      <Heart x={66} y={20} scale={.55}/><Spark x={14} y={20} size={8}/>
    </g>;
    case 'window7':return <g className="egg-sweep">
      <path d="M10 46q18-16 29-5q12-16 31-9q-20 6-26 19q-11-11-34-5Z" fill="var(--egg-paper)" stroke="#97746b" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M16 43q11-7 23-1m4 1q7-9 17-11" fill="none" stroke="#fff4dc" strokeLinecap="round" opacity=".9"/>
      <Spark x={62} y={22} size={10}/><Spark x={22} y={28} size={7}/>
    </g>;
    case 'kettle8':return <g className="egg-rise">
      <path d="M18 68c26-10 9-23 26-29" fill="none" stroke={cream} strokeWidth="4.2" strokeLinecap="round"/>
      <path d="M28 70c18-7 8-16 19-21" fill="none" stroke={gold} strokeWidth="2.2" strokeLinecap="round" opacity=".8"/>
      <Heart x={54} y={25} scale={1.08}/>
      <Spark x={24} y={32} size={8}/>
    </g>;
    case 'utensils8':return <g className="egg-swing">
      <g fill="var(--egg-wood)" stroke="#7d5441" strokeWidth="1.75" strokeLinejoin="round">
        <path d="M23 12h7v34h-7Z"/><ellipse cx="26.5" cy="54" rx="11" ry="15"/>
        <path d="M47 14h7v30h-7Z"/><path d="M42 44h17v13q0 8-8.5 8T42 57Z"/>
      </g>
      <path d="M25 16v24m24-22v23M20 48q-4 7 1 12m26-11v10m7-10v10" fill="none" stroke="#f5d6ac" strokeWidth="1.35" strokeLinecap="round" opacity=".8"/>
      <Spark x={65} y={26} size={10}/>
    </g>;
    case 'sugar8':return <g>
      <path d="M18 46h44l-5 20H23Z" fill="var(--egg-ceramic)" stroke="#8a6b62" strokeWidth="1.7" strokeLinejoin="round"/>
      <path d="M25 50q15 3 30 0m-26 11q8 2 19 0" fill="none" stroke="#fff2db" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M24 55q16 3 32 0" fill="none" stroke="#af8394" strokeWidth="2" strokeLinecap="round"/>
      <g className="egg-rise">
        <path d="M15 43q25-18 50 0Z" fill="var(--egg-ceramic)" stroke="#8a6b62" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M22 41q15-8 27-4" fill="none" stroke="#fff3da" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="40" cy="30" r="5" fill="var(--egg-copper)" stroke="#946c58" strokeWidth="1.45"/>
      </g>
      <Spark x={20} y={20} size={8}/><Spark x={42} y={12} size={9}/><Spark x={63} y={24} size={8}/>
    </g>;
    case 'fridge8':return <g className="egg-rise">
      <ReactionPonchik x={9} y={3} width={62} height={46}/>
      <Tag text="Без пожара" fill="#52695e" y={48} fontSize={10}/>
    </g>;
    case 'blankets9':
    case 'sofaBlanket10':return <g className="egg-fold">
      <path d="M5 42q24-25 70-10l-7 28q-34-16-61 3Z" fill="var(--egg-plum)" stroke="#785b69" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M6 42q24-24 68-10l-7 27q-34-15-59 3Z" fill="var(--egg-knit)"/>
      <path d="M12 44q22-16 57-8M14 53q22-15 53-9" fill="none" stroke={cream} strokeWidth="2.8" strokeLinecap="round"/>
      <path d="M26 32l-4 22M48 31l-4 21M11 57q27-13 49-2" fill="none" stroke="#937083" strokeWidth="1.6" strokeDasharray="3 3"/>
    </g>;
    case 'garland9':return <g>
      <path d="M4 28q36 28 72-8" fill="none" stroke={gold} strokeWidth="2.6" strokeLinecap="round"/>
      {[10,25,40,55,70].map((x,i)=>{
        const cy=[32,40,42,38,27][i];
        return <g key={x} className="egg-glow" style={{animationDelay:`${i*.12}s`}}>
          <circle cx={x} cy={cy} r="11" fill="var(--egg-light)"/>
          <circle cx={x} cy={cy} r="4.6" fill="var(--egg-ceramic)" stroke={amber} strokeWidth="1.25"/>
        </g>;
      })}
    </g>;
    case 'archChairs9':return <g className="egg-rise">
      <ReactionPonchik x={2} y={8} width={76} height={56}/>
      <rect x="6" y="59" width="68" height="10" rx="4" fill="var(--egg-wood)" stroke="#795346" strokeWidth="1.6"/>
      <path d="M12 63q16-2 31 0m5 0 19-1" fill="none" stroke="#ebbd8e" strokeLinecap="round" opacity=".75"/>
    </g>;
    case 'bakery9':return <g className="egg-rise" fill="none" strokeLinecap="round">
      <path d="M24 64c-15-15 15-18 0-38m29 31c-15-15 15-18 0-38" stroke="var(--egg-copper)" strokeWidth="4.6"/>
      <path d="M24 64c-15-15 15-18 0-38m29 31c-15-15 15-18 0-38" stroke={cream} strokeWidth="2"/>
      <Spark x={42} y={18} size={9}/>
    </g>;
    case 'bookcase9':return <g className="egg-drift">
      <g transform="rotate(14 40 40)">
        <path d="M27 11h26v58l-13-9-13 9Z" fill="var(--egg-ochre)" stroke="#8e664c" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M30 14h20v51l-10-7-10 7Z" fill="var(--egg-knit)" opacity=".65"/>
        <path d="M32 16h16v43l-8-6-8 6Z" fill="none" stroke={cream} strokeWidth="1.2" strokeDasharray="3 3"/>
        <circle cx="40" cy="23" r="3" fill={brown}/>
      </g>
      <Spark x={56} y={24} size={10}/>
    </g>;
    case 'dropbox9':return <g className="egg-rise">
      <rect x="10" y="21" width="60" height="41" rx="5" fill="var(--egg-paper)" stroke="#89695c" strokeWidth="1.8"/>
      <path d="m12 23 28 21 28-21" fill="var(--egg-ceramic)" stroke="#89695c" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M15 48l12-9m39 10-14-10" fill="none" stroke="#af8d7d" strokeWidth="1" strokeLinecap="round"/>
      <Heart x={40} y={44} scale={.62}/>
      <Spark x={65} y={14} size={8}/>
    </g>;
    case 'traffic9':return <g className="egg-glow">
      <circle cx="40" cy="40" r="28" fill="var(--egg-light)"/>
      <circle cx="40" cy="40" r="11" fill="var(--egg-sage)" stroke="#667054" strokeWidth="1.5"/>
      <Spark x={40} y={40} size={10}/>
    </g>;
    case 'cafeLamp10':return <g className="egg-swing">
      <path d="M40 6v14" stroke={dark} strokeWidth="2.8" strokeLinecap="round"/>
      <path d="M12 48L26 20h28l14 28Z" fill="var(--egg-copper)" stroke="#86624f" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M30 23l-9 22m14-22-4 22m13-22 4 22m5-22 10 22" stroke="#f5d7a9" strokeWidth="1.2" strokeLinecap="round" opacity=".72"/>
      <path d="M24 48h32l12 22H12Z" fill={gold} opacity=".28"/>
      <Spark x={24} y={56} size={8}/><Spark x={40} y={64} size={10}/><Spark x={56} y={56} size={8}/>
    </g>;
    case 'cafeShelf10':return <g className="egg-rise">
      <circle cx="40" cy="42" r="24" fill="var(--egg-ochre)" stroke="#896448" strokeWidth="1.9"/>
      <circle cx="40" cy="42" r="18" fill="var(--egg-copper)" stroke="#a7774b" strokeWidth="1.5" strokeDasharray="3.5 3"/>
      <path d="M21 37q5-12 19-14m3 35q9-2 15-10" fill="none" stroke="#f7dda6" strokeLinecap="round" strokeWidth="1.4"/>
      <circle cx="33" cy="42" r="3.4" fill={brown}/><circle cx="47" cy="42" r="3.4" fill={brown}/>
      <Spark x={58} y={20} size={11}/>
    </g>;
    case 'cat10':return <g className="egg-rise">
      <Heart x={42} y={32} scale={1.15}/>
      <Spark x={18} y={44} size={9}/><Spark x={64} y={40} size={10}/>
    </g>;
    case 'tv10':return <g className="egg-glow">
      <ReactionPonchik x={6} y={0} width={68} height={50}/>
      <Tag text="Кооператив пройден" y={50} fontSize={7.4}/>
    </g>;
    case 'glasses10':return <g className="egg-glow">
      <Spark x={26} y={44} size={14}/><Spark x={54} y={34} size={14}/>
      <path d="M11 33q-9 10-2 22m58-34q9 10 5 22" fill="none" stroke={gold} strokeWidth="2.8" strokeLinecap="round"/>
    </g>;
    case 'morningWindow10':return <g className="egg-sweep">
      <path d="m8 10 12 3 34 56-16-6Zm18 3 10 3 41 50-17-4Zm19 3 10 2 22 30-14-8Z" fill="var(--egg-paper)" opacity=".72"/>
      <Spark x={22} y={22} size={10}/><Spark x={54} y={48} size={9}/>
    </g>;
  }
}
