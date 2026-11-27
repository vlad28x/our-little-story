import { useId, type CSSProperties, type ReactNode } from 'react';
import type { ScenePropId, SeasonSceneryId } from '../content/easterEggs';

type SeasonReactionId=SeasonSceneryId|'cat10'|'envelope10'|'secondBlanket10';

// The scene props follow the materials and light of the background.
export function SceneEasterPropArt({id,active,paintedSeason=false}:{id:ScenePropId;active:boolean;paintedSeason?:boolean}){
  switch(id){
    case 'blanket':return active?<BlanketFold painted={paintedSeason}/>:null;
    case 'tv':return active?<svg viewBox="0 0 128 100" aria-hidden="true">
      <g className="tv-cat"><TvPonchik/></g>
      <rect x="22" y="78" width="84" height="13" rx="2.5" fill="#554652" fillOpacity=".93"/>
      <text x="64" y="87.2" textAnchor="middle" fill="#fff7ed" fontSize="8.3">Игрок 3 подключился</text>
    </svg>:null;
    case 'tvSleep':return active?<svg viewBox="0 0 128 100" aria-hidden="true">
      <rect x="4" y="6" width="120" height="88" rx="6" fill="#231c2e" fillOpacity=".88" stroke="#6f5a79" strokeWidth="1.4"/>
      <g className="tv-dvd-ponchik">
        <g transform="translate(26 16) scale(.62)">
          <TvPonchik sleeping/>
        </g>
        <text x="86" y="34" fill="#ffe7a8" fontSize="9" fontWeight="700" opacity=".9">z</text>
        <text x="93" y="27" fill="#ffe7a8" fontSize="11" fontWeight="700" opacity=".78">z</text>
        <text x="101" y="19" fill="#ffe7a8" fontSize="13" fontWeight="700" opacity=".62">Z</text>
        <rect x="29" y="63" width="70" height="13" rx="3" fill="#473a58" stroke="#c8ab82" strokeWidth=".9"/>
        <text x="64" y="72" textAnchor="middle" fill="#fff7ed" fontSize="7.6" fontWeight="600">Режим сна · zZz</text>
      </g>
    </svg>:null;
    case 'mug':return active?<svg viewBox="0 0 80 100" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <g className="tea-heart">
        {/* Soft rising aromatic tea steam */}
        <path d="M40 92c-9-11 8-19-2-31" fill="none" stroke={paintedSeason?"#ffebce":"#fff7e8"} strokeWidth="3.4" opacity=".45"/>
        <path d="M40 90c-7-10 6-18-1-29" fill="none" stroke="#fff8ea" strokeWidth="1.6" opacity=".82"/>
        <path d="M29 85c-5-8 4-15-2-23m24 22c5-8-4-14 2-22" fill="none" stroke={paintedSeason?"#f5d7b0":"#fff3de"} strokeWidth="1.8" opacity=".48"/>
        {/* Warm glow aura behind steam heart */}
        <circle cx="40" cy="36" r="24" fill="#ffe7b6" opacity=".2"/>
        {/* Soft vapor heart curled from steam wisps */}
        <path d="M40 58C13 43 16 18 30 20c6 1 9 5 10 10 1-5 4-9 10-10 14-2 17 23-10 38Z" fill={paintedSeason?"#f7d9bd4d":"#fff6e53d"} stroke={paintedSeason?"#ffebce":"#fff7e8"} strokeWidth="3" />
        <path d="M26 30q3-7 9-5m8 22q9-7 11-16" fill="none" stroke="#fffaf0" strokeWidth="1.6" opacity=".82"/>
        <path d="M20 20l1.4 3.6 3.6 1.4-3.6 1.4-1.4 3.6-1.4-3.6-3.6-1.4 3.6-1.4Z" fill="#fff4d8" opacity=".85"/>
        <path d="M62 17l1 2.6 2.6 1-2.6 1-1 2.6-1-2.6-2.6-1 2.6-1Z" fill="#ffe6ae" opacity=".8"/>
      </g>
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

function TvPonchik({sleeping=false}:{sleeping?:boolean}={}){
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
    <path d={sleeping?'M45 45q4 4.5 9 0m19 0q4 4.5 9 0':'M45 46q4-5 9 0m19 0q4-5 9 0'} fill="none" stroke="#4c393a" strokeWidth="2.5" strokeLinecap="round"/>
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

export function ReserveRemoteArt(){
  const id=useId().replace(/:/g,'');
  return <svg viewBox="0 0 116 74" aria-hidden="true">
    <defs>
      <linearGradient id={`${id}-saucer`} x2=".8" y2="1">
        <stop stopColor="#fff0d3"/><stop offset=".66" stopColor="#e9d5b9"/><stop offset="1" stopColor="#b9958e"/>
      </linearGradient>
      <linearGradient id={`${id}-body`} x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#65596a"/><stop offset=".55" stopColor="#4c4150"/><stop offset="1" stopColor="#352c39"/>
      </linearGradient>
      <linearGradient id={`${id}-side`} x1="0" y1="0" x2="1" y2="0">
        <stop stopColor="#3a313e"/><stop offset="1" stopColor="#261f29"/>
      </linearGradient>
    </defs>
    {/* Contact shadow on wooden tabletop */}
    <ellipse cx="58" cy="56" rx="48" ry="11.5" fill="#5c3829" opacity=".28"/>
    {/* Ceramic saucer matching CookiePlateArt */}
    <ellipse cx="58" cy="50" rx="49" ry="14" fill={`url(#${id}-saucer)`} stroke="#9b796c" strokeWidth="1.2"/>
    <ellipse cx="58" cy="49" rx="43.5" ry="10.8" fill="none" stroke="#9a7180" strokeWidth="1.5" opacity=".78"/>
    <ellipse cx="58" cy="49.5" rx="28" ry="6.2" fill="#dcc4ab" opacity=".32"/>
    <path d="M13 46q12-7.5 31-7.5m22 19.5q20-1 31-7.5" fill="none" stroke="#fff2db" strokeWidth="1.6" strokeLinecap="round"/>
    {/* Remote cast shadow on saucer */}
    <g transform="translate(58 43) rotate(-13)">
      <rect x="-38" y="-3" width="76" height="22" rx="8" fill="#4f3738" opacity=".3"/>
    </g>
    {/* Detailed TV remote resting across the saucer */}
    <g transform="translate(58 39) rotate(-13)">
      {/* 3D lower body thickness */}
      <rect x="-39" y="-9" width="78" height="24" rx="8.5" fill={`url(#${id}-side)`}/>
      {/* Main top face */}
      <rect x="-39" y="-12" width="78" height="22" rx="8" fill={`url(#${id}-body)`} stroke="#7d6e82" strokeWidth="1.15"/>
      {/* Subtle gouache top highlight */}
      <path d="M-31-10.2h62" stroke="#9c8da2" strokeWidth="1.1" strokeLinecap="round" opacity=".55"/>
      {/* IR sensor tip on left */}
      <circle cx="-36.5" cy="-1" r="1.4" fill="#231c26" stroke="#6d5d73" strokeWidth=".6"/>
      {/* Red power button + tiny mute/source */}
      <circle cx="-28.5" cy="-5.2" r="2.7" fill="#d9645e" stroke="#8f3838" strokeWidth=".8"/>
      <circle cx="-28.8" cy="-5.7" r=".8" fill="#ffb8ae" opacity=".7"/>
      <rect x="-30.8" y="1.4" width="4.6" height="3.2" rx="1.2" fill="#8b7d91"/>
      {/* 3x3 numeric keypad */}
      {[-19.5,-13.5,-7.5].map(x=>[-6.8,-2.2,2.4].map(y=>(
        <rect key={`${x}-${y}`} x={x} y={y} width="4.2" height="2.7" rx="1" fill="#8f8196" stroke="#3c3340" strokeWidth=".45"/>
      )))}
      {/* Navigation D-pad ring + OK center */}
      <circle cx="8" cy="-1" r="7.4" fill="#6f6275" stroke="#3a303d" strokeWidth=".9"/>
      <circle cx="8" cy="-1" r="6.2" fill="none" stroke="#9d8ea3" strokeWidth=".7" opacity=".55"/>
      <circle cx="8" cy="-1" r="3" fill="#b4a4b8" stroke="#473c4a" strokeWidth=".7"/>
      <circle cx="7.4" cy="-1.6" r=".85" fill="#eee3ee" opacity=".7"/>
      {/* Volume & channel rockers on right */}
      <rect x="19.5" y="-7.2" width="5.2" height="12.4" rx="2.4" fill="#827488" stroke="#3b313f" strokeWidth=".7"/>
      <path d="M21.1-4h2m-1-1v2m-1 5.2h2" stroke="#f0e4ec" strokeWidth=".8" strokeLinecap="round"/>
      <rect x="27.2" y="-7.2" width="5.2" height="12.4" rx="2.4" fill="#827488" stroke="#3b313f" strokeWidth=".7"/>
      <path d="M28.6-3.2l1.2-1.5 1.2 1.5m-2.4 4.8l1.2 1.5 1.2-1.5" fill="none" stroke="#f0e4ec" strokeWidth=".8" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
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
      <circle cx="40" cy="40" r="37" fill="var(--egg-light)"/>
      <circle cx="40" cy="40" r="24" fill="none" stroke={gold} strokeWidth="1.2" strokeDasharray="3 4" opacity=".62"/>
      {/* Warm vintage filament bulb silhouette */}
      <path d="M35 20h10v6H35Z" fill="var(--egg-copper)" stroke={brown} strokeWidth="1.3"/>
      <path d="M31 38c0-6 4-11 9-11s9 5 9 11c0 4-2.5 7-4.5 10h-9c-2-3-4.5-6-4.5-10Z" fill="#fff3d1" stroke={amber} strokeWidth="1.5"/>
      <path d="M37 46v-8q3-3 6 0v8" fill="none" stroke="#d98b43" strokeWidth="1.3" strokeLinecap="round"/>
      <Spark x={40} y={37} size={13}/>
      <Spark x={19} y={24} size={7}/><Spark x={61} y={53} size={7.5}/><Spark x={22} y={58} size={5.5}/>
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
      {/* Mini gallery poster card catching a golden light sweep */}
      <rect x="16" y="10" width="48" height="60" rx="4" fill="var(--egg-paper)" stroke="#8b6b5d" strokeWidth="1.7"/>
      <rect x="21" y="15" width="38" height="38" rx="1.5" fill="var(--egg-glass)" stroke="#62717a" strokeWidth="1"/>
      <path d="M27 53V34q13-12 26 0v19Z" fill="var(--egg-ochre)" opacity=".65"/>
      <path d="M24 60h32M30 64h20" stroke="#85655c" strokeWidth="1.5" strokeLinecap="round" opacity=".7"/>
      <path d="m14 58 43-44 10 2-44 45Z" fill={cream} opacity=".58"/>
      <path d="m26 65 40-41 5 2-41 42Z" fill={gold} opacity=".45"/>
      <Spark x={57} y={21} size={11}/><Spark x={24} y={54} size={8}/>
    </g>;
    case 'handle7':return <g className="egg-glow">
      <circle cx="40" cy="40" r="32" fill="var(--egg-light)" opacity=".75"/>
      {/* Sleek curved brass gallery door pull */}
      <rect x="33" y="14" width="14" height="52" rx="7" fill="var(--egg-wood)" stroke="#5c4138" strokeWidth="1.5" opacity=".88"/>
      <path d="M40 21v38" stroke="var(--egg-copper)" strokeWidth="7.5" strokeLinecap="round"/>
      <path d="M40 21v38" stroke="#f8e3b3" strokeWidth="2.2" strokeLinecap="round" opacity=".85"/>
      <circle cx="40" cy="21" r="4" fill="var(--egg-ochre)" stroke={brown} strokeWidth="1.2"/>
      <circle cx="40" cy="59" r="4" fill="var(--egg-ochre)" stroke={brown} strokeWidth="1.2"/>
      <path d="M20 26q-9 14 0 28m40-28q9 14 0 28" fill="none" stroke={gold} strokeWidth="2.2" strokeLinecap="round" opacity=".85"/>
      <Spark x={40} y={40} size={15}/>
    </g>;
    case 'spots7':return <g className="egg-glow">
      {/* Gallery track bar & angled brass spotlight casting layered light */}
      <path d="M10 12h60" stroke={brown} strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M36 12v8l4 4" fill="none" stroke={brown} strokeWidth="2.4" strokeLinecap="round"/>
      <path d="M31 28h18l28 46H3Z" fill="var(--egg-light)" opacity=".55"/>
      <path d="M35 28h10l16 46H19Z" fill={cream} opacity=".34"/>
      <rect x="30" y="17" width="20" height="14" rx="5" fill="var(--egg-copper)" stroke={brown} strokeWidth="1.6"/>
      <path d="M34 21h12" stroke="#f7e2b8" strokeWidth="1.3" strokeLinecap="round" opacity=".75"/>
      <ellipse cx="40" cy="30" rx="9" ry="3.2" fill="#fff3ca" stroke={amber} strokeWidth="1.2"/>
      <circle cx="29" cy="54" r="1.5" fill={cream} opacity=".7"/><circle cx="51" cy="60" r="1.3" fill={cream} opacity=".65"/>
      <Spark x={40} y={48} size={11}/><Spark x={26} y={64} size={6}/>
    </g>;
    case 'bench7':return <g className="egg-rise">
      {/* Gallery oak bench silhouette underneath the plaque */}
      <ellipse cx="40" cy="69" rx="33" ry="4.5" fill={dark} opacity=".22"/>
      <path d="M17 57l-3 11m49-11l3 11M18 63h44" stroke="#6a4944" strokeWidth="3.2" strokeLinecap="round"/>
      <rect x="9" y="49" width="62" height="9" rx="3" fill="var(--egg-wood)" stroke="#6a4944" strokeWidth="1.6"/>
      <path d="M14 52.5h52" stroke="#f0cca1" strokeWidth="1.4" strokeLinecap="round" opacity=".72"/>
      <Tag text="Для двоих" y={20} fontSize={10.5}/>
      <Heart x={66} y={14} scale={.54}/><Spark x={14} y={14} size={8}/>
    </g>;
    case 'window7':return <g className="egg-sweep">
      {/* Arched gallery window looking onto the dusk embankment */}
      <path d="M14 66V36a26 26 0 0 1 52 0v30Z" fill="var(--egg-glass)" stroke="#6d5552" strokeWidth="2.1"/>
      <path d="M18 62V36a22 22 0 0 1 44 0v26Z" fill="#5e7f8c" opacity=".55"/>
      {/* Dusk embankment glow & water reflections */}
      <path d="M18 48q22-4 44 0v14H18Z" fill="#41586a" opacity=".78"/>
      <circle cx="30" cy="42" r="5" fill="var(--egg-light)"/><circle cx="30" cy="42" r="1.8" fill={cream}/>
      <circle cx="51" cy="41" r="4.5" fill="var(--egg-light)"/><circle cx="51" cy="41" r="1.6" fill={cream}/>
      <path d="M26 53h9m11 1h10m-25 4h14" stroke={gold} strokeWidth="1.5" strokeLinecap="round" opacity=".82"/>
      {/* Window mullions & wooden sill */}
      <path d="M40 14v50M16 40h48" stroke="#ebd4ba" strokeWidth="1.7" opacity=".85"/>
      <rect x="10" y="63" width="60" height="6" rx="2.5" fill="var(--egg-wood)" stroke="#624640" strokeWidth="1.5"/>
      {/* Breeze wisp */}
      <path d="M12 28q13-7 25-1t24-3" fill="none" stroke={cream} strokeWidth="2.1" strokeLinecap="round" opacity=".82"/>
      <Spark x={62} y={20} size={9}/><Spark x={20} y={22} size={6.5}/>
    </g>;
    case 'kettle8':return <g className="egg-rise">
      <path d="M18 68c26-10 9-23 26-29" fill="none" stroke={cream} strokeWidth="4.2" strokeLinecap="round"/>
      <path d="M28 70c18-7 8-16 19-21" fill="none" stroke={gold} strokeWidth="2.2" strokeLinecap="round" opacity=".8"/>
      <Heart x={54} y={25} scale={1.08}/>
      <Spark x={24} y={32} size={8}/>
    </g>;
    case 'utensils8':return <g className="egg-swing" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="40" cy="69" rx="24" ry="4.5" fill={dark} opacity=".2"/>
      {/* Crossed carved wooden spatula */}
      <g transform="rotate(26 40 42)">
        <path d="M37 11h6l1 33h-8Z" fill="var(--egg-wood)" stroke="#6e4a3b" strokeWidth="1.5"/>
        <circle cx="40" cy="15" r="1.4" fill={cream}/>
        <path d="M31 43h18l2 17q0 6-11 6t-11-6Z" fill="var(--egg-copper)" stroke="#6e4a3b" strokeWidth="1.55"/>
        <path d="M35.5 48v11M40 48v12M44.5 48v11" stroke="#6e4a3b" strokeWidth="1.7"/>
        <path d="M38.5 19v19" stroke="#f5d7ac" strokeWidth="1.1" opacity=".72"/>
      </g>
      {/* Crossed carved wooden spoon */}
      <g transform="rotate(-26 40 42)">
        <path d="M37 11h6l1 31h-8Z" fill="var(--egg-wood)" stroke="#6e4a3b" strokeWidth="1.5"/>
        <circle cx="40" cy="15" r="1.4" fill={cream}/>
        <ellipse cx="40" cy="54" rx="10.5" ry="14" fill="var(--egg-copper)" stroke="#6e4a3b" strokeWidth="1.6"/>
        <ellipse cx="40" cy="54.5" rx="6.5" ry="9.5" fill="#9c6c52" opacity=".42"/>
        <path d="M34 49q-2 7 3 11m1.5-41v18" fill="none" stroke="#f7dfb8" strokeWidth="1.35" opacity=".82"/>
      </g>
      {/* Cozy linen kitchen ribbon bow at intersection */}
      <path d="M34 38q6 3 12 0" fill="none" stroke="var(--egg-rose)" strokeWidth="3.4"/>
      <circle cx="40" cy="39" r="3" fill="var(--egg-rose)" stroke="#86586a" strokeWidth="1.1"/>
      <Spark x={65} y={20} size={9.5}/>
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
    case 'secondBlanket10':return <g className="egg-fold">
      <path d="M5 42q24-25 70-10l-7 28q-34-16-61 3Z" fill="var(--egg-paper)" stroke="#8c7258" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M6 42q24-24 68-10l-7 27q-34-15-59 3Z" fill="var(--egg-knit)"/>
      <path d="M12 44q22-16 57-8M14 53q22-15 53-9" fill="none" stroke={cream} strokeWidth="2.8" strokeLinecap="round"/>
      <path d="M26 32l-4 22M48 31l-4 21M11 57q27-13 49-2" fill="none" stroke="#a6896b" strokeWidth="1.6" strokeDasharray="3 3"/>
      <Spark x={60} y={18} size={9}/>
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
    case 'bakery9':return <g className="egg-rise" strokeLinecap="round" strokeLinejoin="round">
      {/* Warm freshly baked cinnamon roll with rising aromatic steam */}
      <ellipse cx="40" cy="65" rx="28" ry="6.5" fill={dark} opacity=".22"/>
      <ellipse cx="40" cy="62" rx="27" ry="7" fill="var(--egg-paper)" stroke="#b89882" strokeWidth="1.2"/>
      {/* Golden pastry bun body */}
      <path d="M16 55c-1-12 9-22 24-22s25 10 24 22c-1 8-11 11-24 11S17 63 16 55Z" fill="var(--egg-ochre)" stroke="#7f513b" strokeWidth="1.75"/>
      {/* Cinnamon swirl ridges */}
      <path d="M24 52c0-8 7-13 16-13 8 0 14 5 14 11 0 5-5 9-12 9-6 0-10-3-10-7 0-3 3-5 7-5 3 0 5 2 4 4" fill="none" stroke="#854b35" strokeWidth="2.3"/>
      {/* Warm cream glaze drizzle */}
      <path d="M24 44q6 5 12 1t12 2q5 3 9-1" fill="none" stroke={cream} strokeWidth="2.6" opacity=".88"/>
      <path d="M29 53q8 4 19 1" fill="none" stroke="#fff4de" strokeWidth="1.4" opacity=".7"/>
      {/* Rising cinnamon aroma steam */}
      <path d="M29 30c-6-6 6-10 0-17m20 15c-5-6 5-10 0-17" fill="none" stroke={cream} strokeWidth="2.2" opacity=".82"/>
      <Spark x={59} y={18} size={8.5}/>
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
    case 'traffic9':return <g className="egg-glow" strokeLinecap="round" strokeLinejoin="round">
      {/* Wet-evening green traffic light housing & glowing lens */}
      <circle cx="40" cy="46" r="32" fill="var(--egg-light)" opacity=".8"/>
      <path d="M40 6v8" stroke="#534250" strokeWidth="3.5"/>
      <rect x="20" y="13" width="40" height="54" rx="10" fill="var(--egg-plum)" stroke="#3e303c" strokeWidth="2"/>
      <path d="M22 25q18-11 36 0" fill="#3e303c" opacity=".65"/>
      {/* Dim upper waiting lens */}
      <circle cx="40" cy="26" r="7" fill="#463a47" stroke="#6f5a6d" strokeWidth="1.2"/>
      {/* Glowing emerald-sage green lens with rain visor */}
      <circle cx="40" cy="48" r="14" fill="#a7dba0" opacity=".32"/>
      <circle cx="40" cy="48" r="11" fill="var(--egg-sage)" stroke="#4c6449" strokeWidth="1.6"/>
      <circle cx="40" cy="48" r="8" fill="#a7dca0" opacity=".78"/>
      <path d="M35 44q3-4 8-2" fill="none" stroke="#f4ffef" strokeWidth="2" opacity=".9"/>
      <path d="M25 39q15-7 30 0" fill="none" stroke="#3b2d39" strokeWidth="3.2"/>
      <Spark x={40} y={48} size={9}/><Spark x={63} y={24} size={7}/>
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
      {/* Warm purr waves, tiny paw prints & floating double hearts */}
      <path d="M16 54q-5-6 0-12m48 12q5-6 0-12" fill="none" stroke={gold} strokeWidth="2" strokeLinecap="round" opacity=".75"/>
      <g fill="var(--egg-copper)" opacity=".72">
        <ellipse cx="23" cy="61" rx="4.2" ry="3.2"/><circle cx="19" cy="56" r="1.4"/><circle cx="23" cy="54.5" r="1.4"/><circle cx="27" cy="56" r="1.4"/>
        <ellipse cx="57" cy="61" rx="4.2" ry="3.2"/><circle cx="53" cy="56" r="1.4"/><circle cx="57" cy="54.5" r="1.4"/><circle cx="61" cy="56" r="1.4"/>
      </g>
      <Heart x={40} y={32} scale={1.12}/>
      <Heart x={57} y={20} scale={.48}/>
      <Spark x={19} y={28} size={8}/><Spark x={63} y={38} size={8.5}/>
    </g>;
    case 'envelope10':return <g className="egg-rise" strokeLinecap="round" strokeLinejoin="round">
      {/* Warm darkroom glow behind an unrolling 35mm film strip */}
      <circle cx="40" cy="36" r="30" fill="var(--egg-light)" opacity=".88"/>
      <g transform="rotate(-8 40 38)">
        <rect x="7" y="21" width="66" height="32" rx="3.5" fill="#4f352f" stroke="#2f1e1b" strokeWidth="1.7"/>
        {/* Top & bottom 35mm sprocket holes */}
        {[12,20,28,36,44,52,60,68].map(x=><g key={x} fill="#f7e2be" opacity=".88">
          <rect x={x-2} y="23.5" width="4" height="2.4" rx=".6"/>
          <rect x={x-2} y="48" width="4" height="2.4" rx=".6"/>
        </g>)}
        {/* Three sunlit amber negative frames: water reflection, warm heart, evening roof */}
        <rect x="11" y="28" width="17" height="17.5" rx="1.5" fill="var(--egg-ochre)" stroke="#7c523c" strokeWidth="1"/>
        <path d="M12.5 39q4.5-4 8.5-1t5.5-2v8h-14Z" fill="#7c5560" opacity=".7"/>
        <circle cx="16.5" cy="33" r="2.2" fill="#fff5d6"/>
        <rect x="31.5" y="28" width="17" height="17.5" rx="1.5" fill="var(--egg-rose)" stroke="#7c523c" strokeWidth="1"/>
        <Heart x={40} y={37.5} scale={.45}/>
        <rect x="52" y="28" width="17" height="17.5" rx="1.5" fill="var(--egg-copper)" stroke="#7c523c" strokeWidth="1"/>
        <path d="M54 43l5-7 4 4 4-5v8Z" fill="#5e4147" opacity=".75"/>
        <circle cx="63.5" cy="32.5" r="2" fill="#fff5d6"/>
      </g>
      <Tag text="12 / 12 проявлено" fill="#6b4450" y={57} fontSize={6.2}/>
      <Spark x={15} y={16} size={9}/><Spark x={66} y={14} size={10}/><Spark x={69} y={50} size={7}/>
    </g>;
    case 'tv10':return <g className="egg-glow">
      {/* Cozy retro TV screen frame so Ponchik & badge read cleanly without overflow */}
      <rect x="7" y="4" width="66" height="44" rx="7" fill="#3a2f44" stroke={gold} strokeWidth="1.6"/>
      <rect x="11" y="8" width="58" height="36" rx="4" fill="#524360" opacity=".68"/>
      <ReactionPonchik x={14} y={5} width={52} height={39}/>
      <Spark x={67} y={10} size={7}/>
      <Tag text="Кооператив пройден" y={52} fontSize={5.8}/>
    </g>;
    case 'glasses10':return <g className="egg-glow" strokeLinecap="round" strokeLinejoin="round">
      {/* Two sunlit morning water tumblers clinking softly */}
      <ellipse cx="40" cy="68" rx="30" ry="5" fill={dark} opacity=".2"/>
      {/* Left glass tumbler */}
      <g transform="rotate(-7 26 46)">
        <path d="M14 25h23l-3 38q-8.5 3.5-17 0Z" fill="var(--egg-glass)" fillOpacity=".58" stroke="#dbece8" strokeWidth="1.6"/>
        <path d="M16 40q9.5 3 19 0l-2 21q-7.5 3-15 0Z" fill="#a8c9c4" opacity=".62"/>
        <ellipse cx="25.5" cy="25" rx="11.5" ry="3.2" fill="#e6f3f0" fillOpacity=".5" stroke="#fff7e4" strokeWidth="1.2"/>
        <path d="M18 30l1.5 26" stroke="#ffffff" strokeWidth="1.8" opacity=".78"/>
      </g>
      {/* Right glass tumbler */}
      <g transform="rotate(8 54 44)">
        <path d="M43 22h23l-3 38q-8.5 3.5-17 0Z" fill="var(--egg-glass)" fillOpacity=".64" stroke="#dbece8" strokeWidth="1.6"/>
        <path d="M45 36q9.5 3 19 0l-2 22q-7.5 3-15 0Z" fill="var(--egg-ochre)" opacity=".6"/>
        <ellipse cx="54.5" cy="22" rx="11.5" ry="3.2" fill="#fff1d8" fillOpacity=".55" stroke="#fff7e4" strokeWidth="1.2"/>
        <path d="M48 27l1.5 26" stroke="#ffffff" strokeWidth="1.8" opacity=".82"/>
      </g>
      <Spark x={40} y={17} size={10}/><Spark x={24} y={46} size={7.5}/><Spark x={58} y={42} size={8}/>
    </g>;
    case 'morningWindow10':return <g className="egg-sweep" strokeLinecap="round" strokeLinejoin="round">
      {/* Sunlit morning window frame with fluttering sheer curtain & warm shafts */}
      <path d="M12 10h42v40H12Z" fill="#fce9bf" fillOpacity=".32" stroke="#d9bc9c" strokeWidth="1.8"/>
      <path d="M33 10v40M12 30h42" stroke="#ebd4ba" strokeWidth="1.6"/>
      {/* Diagonal warm morning sunbeams */}
      <path d="M14 12l16 3 34 55-22-4Z" fill="var(--egg-paper)" opacity=".55"/>
      <path d="M34 12l18 2 22 48-18-3Z" fill={gold} opacity=".4"/>
      {/* Fluttering sheer morning curtain on left */}
      <path d="M10 8h13c-2 15-4 32 2 48-7 2-12 0-16-4 3-14 2-28 1-44Z" fill={cream} fillOpacity=".82" stroke="#c8ab96" strokeWidth="1.3"/>
      <path d="M15 12c-1 13-1 26 2 39" fill="none" stroke="#e2c8b0" strokeWidth="1.1"/>
      <circle cx="48" cy="48" r="1.6" fill={cream} opacity=".85"/><circle cx="38" cy="59" r="1.4" fill={cream} opacity=".78"/>
      <Spark x={27} y={21} size={9.5}/><Spark x={56} y={42} size={9}/><Spark x={44} y={62} size={6.5}/>
    </g>;
  }
}
