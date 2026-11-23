import type { ReactNode } from 'react';
import type { ScenePropId } from '../content/easterEggs';

// Rich original SVG scene props; no external files or duplicate SVG IDs.
export function SceneEasterPropArt({id,active}:{id:ScenePropId;active:boolean}){
  switch(id){
    case 'blanket':return active?<svg viewBox="0 0 100 80" aria-hidden="true"><g className="blanket-fold is-lifted">
      <path d="M5 38Q38 18 93 29L81 58Q39 36 8 53Z" fill="#d9ad82" stroke="#7d583c" strokeWidth="2.4" strokeLinejoin="round"/>
      <path d="M12 41Q42 26 85 35M14 48Q43 34 80 43" fill="none" stroke="#f6e3c6" strokeWidth="3" strokeLinecap="round"/>
      <path d="M24 31l-4 17M46 28l-4 17M68 30l-5 18" fill="none" stroke="#b9845a" strokeWidth="1.6" strokeDasharray="3 3" opacity=".8"/>
      <path d="M81 58l4 6M73 53l4 6M64 49l3 6" stroke="#c89b72" strokeWidth="2" strokeLinecap="round"/>
    </g></svg>:null;
    case 'tv':return active?<><svg viewBox="0 0 128 100" aria-hidden="true"><g className="tv-cat">
      <ellipse cx="64" cy="70" rx="28" ry="6" fill="#3a2314" opacity=".25"/>
      <path d="m38 40-4-20 18 10h24l18-10-4 20q11 31-26 31T38 40Z" fill="#dfb07c" stroke="#6d4b36" strokeWidth="2.4" strokeLinejoin="round"/>
      <path d="m41 32-2-10 10 6z m46 0 2-10-10 6z" fill="#e6a69c"/>
      <path d="M55 28l3 5l3-4l3 4l3-5" fill="none" stroke="#a67247" strokeWidth="1.8" strokeLinecap="round"/>
      <ellipse cx="64" cy="54" rx="11" ry="8" fill="#faf0df"/>
      <path d="M47 45q4-4 8 0m18 0q4-4 8 0" stroke="#4f372b" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <ellipse cx="46" cy="51" rx="3.8" ry="2" fill="#e69a94" opacity=".55"/>
      <ellipse cx="82" cy="51" rx="3.8" ry="2" fill="#e69a94" opacity=".55"/>
      <path d="M61 52h6l-3 3.5z" fill="#b46a64"/>
      <path d="M64 55.5q-3 4-7 2m7-2q3 4 7 2" stroke="#5d4234" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M46 53l-11-1m11 4l-10 2m36-5l11-1m-11 4l10 2" stroke="#6d4b36" strokeWidth="1.3" strokeLinecap="round"/>
    </g></svg><span className="tv-player" aria-hidden="true">Игрок 3 подключился</span></>:null;
    case 'mug':return active?<svg viewBox="0 0 80 100" aria-hidden="true">
      <path className="tea-heart" d="M39 42C8 27 14 6 28 10q9 0 11 9 4-9 12-9c15 0 18 18-12 32Z" fill="#fff6e533" stroke="#fff7e8" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>:null;
    case 'star':return <svg viewBox="0 0 80 80" aria-hidden="true"><g className={active?'wish-star is-falling':'wish-star'}>
      <circle cx="40" cy="40" r="28" fill="#ffe7a8" opacity=".24"/>
      <circle cx="40" cy="40" r="16" fill="#fff1c4" opacity=".36"/>
      <path d="m40 12 6.5 21.5L68 40l-21.5 6.5L40 68l-6.5-21.5L12 40l21.5-6.5Z" fill="#ffe699" stroke="#b38239" strokeWidth="1.6" strokeLinejoin="round"/>
      <circle cx="40" cy="40" r="7.5" fill="#fffaf0"/>
      {active&&<><path d="M44 36 74 6" stroke="#ffe7a8" strokeWidth="3.6" strokeLinecap="round"/><path d="M49 39 71 17" stroke="#fff7e2" strokeWidth="1.8" strokeLinecap="round" opacity=".75"/></>}
    </g></svg>;
    case 'sign':return <svg viewBox="0 0 160 80" aria-hidden="true">
      <path d="M29 25 38 3m93 22L122 3" stroke="#785842" strokeWidth="2.4" strokeLinecap="round"/>
      <rect x="4" y="23" width="152" height="52" rx="9" fill="#6b4f3d" stroke="#473329" strokeWidth="2.2"/>
      <rect x="9" y="28" width="142" height="42" rx="5" fill="#f5e3c2" stroke="#c8ab82" strokeWidth="1.4"/>
      <circle cx="15" cy="34" r="1.8" fill="#9c7a56"/><circle cx="145" cy="34" r="1.8" fill="#9c7a56"/>
      <circle cx="15" cy="64" r="1.8" fill="#9c7a56"/><circle cx="145" cy="64" r="1.8" fill="#9c7a56"/>
      <text x="80" y="55" textAnchor="middle" fill="#6a3e56" fontFamily="Georgia,serif" fontWeight="600" fontSize="19" className={active?'sign-normal is-replaced':'sign-normal'}>Пауза</text>
      {active&&<text x="80" y="54" textAnchor="middle" fill="#6a3e56" fontFamily="Georgia,serif" fontWeight="600" fontSize="15.5" className="sign-secret">Продолжение</text>}
    </svg>;
    default:return active?<svg className="season-egg-art" viewBox="0 0 80 80" aria-hidden="true">{sceneDetail(id)}</svg>:null;
  }
}

const gold='#ffe29a',cream='#fff8e6',brown='#5e4234',dark='#3e2a21',rose='#e696a4',green='#6d8c78',amber='#e0a652';

function Spark({x,y,size=9}:{x:number;y:number;size?:number}){
  return <g>
    <circle cx={x} cy={y} r={size*.75} fill={gold} opacity=".28"/>
    <path d={`M${x} ${y-size}l${size*.26} ${size*.74} ${size*.74} ${size*.26}-${size*.74} ${size*.26}-${size*.26} ${size*.74}-${size*.26}-${size*.74}-${size*.74}-${size*.26} ${size*.74}-${size*.26}Z`} fill={cream} stroke={gold} strokeWidth=".8"/>
  </g>;
}

function Heart({x=40,y=34,scale=1}:{x?:number;y?:number;scale?:number}){
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d="M0 15C-26-2-12-18 0-6C12-18 26-2 0 15Z" fill={rose} stroke={dark} strokeWidth="2"/>
    <path d="M-8-5q3-4 6-1" fill="none" stroke="#ffeef2" strokeWidth="2.2" strokeLinecap="round" opacity=".85"/>
  </g>;
}

function CatFace({y=0}:{y?:number}){
  return <g transform={`translate(0 ${y})`}>
    <path d="M16 42 13 15l18 11h18l18-11-3 27q0 17-24 17T16 42Z" fill="#e5b884" stroke={dark} strokeWidth="2.4" strokeLinejoin="round"/>
    <path d="M18 32 16 20l10 6z M62 32 64 20l-10 6z" fill="#eaaba2"/>
    <path d="M35 28l2.5 4.5 2.5-3.5 2.5 3.5 2.5-4.5" fill="none" stroke="#a67247" strokeWidth="1.6" strokeLinecap="round"/>
    <ellipse cx="40" cy="44" rx="10" ry="7" fill={cream}/>
    <path d="M25 39q4-5 8 0m14 0q4-5 8 0" fill="none" stroke={dark} strokeWidth="2.4" strokeLinecap="round"/>
    <ellipse cx="25" cy="44" rx="3.4" ry="1.8" fill={rose} opacity=".55"/>
    <ellipse cx="55" cy="44" rx="3.4" ry="1.8" fill={rose} opacity=".55"/>
    <path d="M37 42h6l-3 3.5Z" fill="#b46a64"/>
    <path d="M23 44l-9-1M23 47l-8 2M57 44l9-1M57 47l8 2" stroke={brown} strokeWidth="1.2" strokeLinecap="round"/>
  </g>;
}

function Tag({text,fill=brown,y=28,fontSize=9.5}:{text:string;fill?:string;y?:number;fontSize?:number}){
  return <g>
    <rect x="2" y={y+2} width="76" height="22" rx="6" fill={dark} opacity=".35"/>
    <rect x="2" y={y} width="76" height="22" rx="6" fill={fill} stroke={gold} strokeWidth="1.8"/>
    <rect x="4.5" y={y+2.5} width="71" height="17" rx="4" fill="none" stroke={cream} strokeWidth=".8" strokeDasharray="3 2.5" opacity=".45"/>
    <text x="40" y={y+14.5} fill={cream} textAnchor="middle" fontSize={fontSize} fontWeight="650" fontFamily="system-ui,sans-serif">{text}</text>
  </g>;
}

function sceneDetail(id:ScenePropId):ReactNode{
  switch(id){
    case 'kiosk6':return <g className="egg-rise">
      <rect x="9" y="23" width="62" height="40" rx="8" fill={green} stroke={dark} strokeWidth="2.4"/>
      <rect x="11" y="25" width="58" height="12" rx="5" fill="#e9dec7"/>
      <rect x="15" y="27" width="14" height="7" rx="2" fill={cream} stroke={brown} strokeWidth="1.4"/>
      <rect x="52" y="18" width="12" height="6" rx="2" fill="#c95b45" stroke={dark} strokeWidth="1.6"/>
      <rect x="10" y="38" width="60" height="4" fill={amber}/>
      <circle cx="43" cy="48" r="14" fill="#efe6d1" stroke={dark} strokeWidth="2.2"/>
      <circle cx="43" cy="48" r="9" fill="#2c4852" stroke={dark} strokeWidth="1.6"/>
      <circle cx="40" cy="45" r="2.4" fill={cream} opacity=".9"/>
      <Spark x={67} y={16} size={10}/>
    </g>;
    case 'waterWindow6':return <g className="egg-ripple" fill="none" strokeLinecap="round">
      <ellipse cx="40" cy="44" rx="14" ry="5.5" stroke={cream} strokeWidth="2.6"/>
      <ellipse cx="40" cy="44" rx="25" ry="11" stroke={gold} strokeWidth="2.4" opacity=".9"/>
      <ellipse cx="40" cy="44" rx="36" ry="17" stroke={gold} strokeWidth="2" strokeDasharray="9 5" opacity=".75"/>
      <Spark x={22} y={32} size={8}/><Spark x={59} y={53} size={7}/>
    </g>;
    case 'leaves6':return <g className="egg-drift">
      {[[18,22,-18,'#e6b655','#8f6523'],[52,20,24,'#d97c46','#7d3e1e'],[36,52,12,'#c45d52','#6e2b25']].map(([x,y,rot,fill,st],i)=>(
        <g key={i} transform={`translate(${x} ${y}) rotate(${rot}) scale(1.25)`}>
          <path fill={fill as string} stroke={st as string} strokeWidth="1.4" strokeLinejoin="round" d="M0 16 1 9-10 10l4-5-6-6 8 1 3-9 4 9 8-2-6 7 4 4-9 1Z"/>
          <path d="M0 14V-5M0 4l-5-3M0 4l5-3" stroke={cream} strokeWidth=".9" opacity=".6"/>
        </g>
      ))}
    </g>;
    case 'lantern6':
    case 'lamp8':
    case 'floorLamp10':return <g className="egg-glow">
      <circle cx="40" cy="40" r="36" fill={gold} opacity=".28"/>
      <circle cx="40" cy="40" r="25" fill={gold} opacity=".45"/>
      <ellipse cx="40" cy="40" rx="14" ry="17" fill={cream} opacity=".72"/>
      <Spark x={40} y={40} size={17}/>
      <Spark x={20} y={24} size={7}/><Spark x={61} y={54} size={7}/>
    </g>;
    case 'cafeSign6':return <g className="egg-swing">
      <path d="M40 6v12" stroke={gold} strokeWidth="2.6" strokeLinecap="round"/>
      <circle cx="40" cy="44" r="26" fill={brown} stroke={gold} strokeWidth="2.6"/>
      <circle cx="40" cy="44" r="21" fill="none" stroke={cream} strokeWidth="1" strokeDasharray="3 3" opacity=".55"/>
      <path d="M27 36h21v10q0 10-10.5 10T27 46Zm21 2h4q7 0 2 8h-6M25 60h28" fill="none" stroke={cream} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M33 30q-3-4 1-7M42 30q-3-4 1-7" fill="none" stroke={gold} strokeWidth="2" strokeLinecap="round"/>
    </g>;
    case 'noPhoto7':return <g className="egg-swing">
      <circle cx="40" cy="40" r="28" fill={brown} stroke={cream} strokeWidth="2.4"/>
      <circle cx="40" cy="40" r="23" fill="#4f372c" stroke={gold} strokeWidth="1.2" opacity=".7"/>
      <rect x="24" y="30" width="32" height="22" rx="4" fill="#d9cfb8" stroke={dark} strokeWidth="2"/>
      <circle cx="40" cy="41" r="6.5" fill="#3a5661" stroke={dark} strokeWidth="1.6"/>
      <path d="m21 21 38 38" stroke="#d95f6d" strokeWidth="4.5" strokeLinecap="round"/>
      <circle cx="62" cy="19" r="6" fill={rose} stroke={cream} strokeWidth="1.6"/>
    </g>;
    case 'poster7':return <g className="egg-sweep">
      <path d="m6 62 49-46 13 2-52 48Z" fill={cream} opacity=".78"/>
      <path d="m22 68 51-48 6 2-51 48Z" fill={gold} opacity=".48"/>
      <Spark x={54} y={28} size={13}/><Spark x={28} y={54} size={9}/>
    </g>;
    case 'handle7':return <g className="egg-glow">
      <circle cx="40" cy="40" r="24" fill={gold} opacity=".28"/>
      <Spark x={40} y={40} size={22}/>
      <path d="M16 24q-12 16 0 32m48-32q12 16 0 32" fill="none" stroke={gold} strokeWidth="2.8" strokeLinecap="round"/>
    </g>;
    case 'spots7':return <g className="egg-glow">
      <path d="M34 22h12l32 52H2Z" fill={gold} opacity=".42"/>
      <path d="M37 22h6l18 52H19Z" fill={cream} opacity=".34"/>
      <ellipse cx="40" cy="21" rx="13" ry="6" fill={cream} stroke={brown} strokeWidth="2"/>
      <Spark x={40} y={46} size={11}/>
    </g>;
    case 'bench7':return <g className="egg-rise">
      <Tag text="Для двоих" y={28} fontSize={10.5}/>
      <Heart x={66} y={20} scale={.55}/><Spark x={14} y={20} size={8}/>
    </g>;
    case 'window7':return <g className="egg-sweep">
      <path d="M10 46q18-16 29-5q12-16 31-9q-20 6-26 19q-11-11-34-5Z" fill={cream} stroke={brown} strokeWidth="1.8" strokeLinejoin="round"/>
      <Spark x={62} y={22} size={10}/><Spark x={22} y={28} size={7}/>
    </g>;
    case 'kettle8':return <g className="egg-rise">
      <path d="M18 68c26-10 9-23 26-29" fill="none" stroke={cream} strokeWidth="4.2" strokeLinecap="round"/>
      <path d="M28 70c18-7 8-16 19-21" fill="none" stroke={gold} strokeWidth="2.2" strokeLinecap="round" opacity=".8"/>
      <Heart x={54} y={25} scale={1.08}/>
      <Spark x={24} y={32} size={8}/>
    </g>;
    case 'utensils8':return <g className="egg-swing">
      <g fill="#f0d399" stroke={dark} strokeWidth="2.2" strokeLinejoin="round">
        <path d="M23 12h7v34h-7Z"/><ellipse cx="26.5" cy="54" rx="11" ry="15"/>
        <path d="M47 14h7v30h-7Z"/><path d="M42 44h17v13q0 8-8.5 8T42 57Z"/>
      </g>
      <path d="M47 46v13M54 46v13" stroke={dark} strokeWidth="1.6"/>
      <Spark x={65} y={26} size={10}/>
    </g>;
    case 'sugar8':return <g>
      <path d="M18 46h44l-5 20H23Z" fill={cream} stroke={dark} strokeWidth="2.2" strokeLinejoin="round"/>
      <path d="M24 53h32" stroke="#d9b4be" strokeWidth="3" strokeLinecap="round"/>
      <g className="egg-rise">
        <path d="M15 43q25-18 50 0Z" fill="#f7ead2" stroke={dark} strokeWidth="2.2" strokeLinejoin="round"/>
        <circle cx="40" cy="30" r="5" fill={gold} stroke={dark} strokeWidth="1.8"/>
      </g>
      <Spark x={20} y={20} size={8}/><Spark x={42} y={12} size={9}/><Spark x={63} y={24} size={8}/>
    </g>;
    case 'fridge8':return <g className="egg-rise">
      <path d="M14 34V14l18 12h16l18-12v20l5 16H9Z" fill="#e9be72" stroke={dark} strokeWidth="2.2" strokeLinejoin="round"/>
      <path d="M29 28q3-3 6 0m10 0q3-3 6 0" fill="none" stroke={dark} strokeWidth="2" strokeLinecap="round"/>
      <Tag text="Без пожара" fill="#4f6d63" y={44} fontSize={10}/>
    </g>;
    case 'blankets9':
    case 'sofaBlanket10':return <g className="egg-fold">
      <path d="M5 42q24-25 70-10l-7 28q-34-16-61 3Z" fill="#d49e84" stroke={dark} strokeWidth="2.4" strokeLinejoin="round"/>
      <path d="M12 44q22-16 57-8M14 53q22-15 53-9" fill="none" stroke={cream} strokeWidth="2.8" strokeLinecap="round"/>
      <path d="M26 32l-4 22M48 31l-4 21" fill="none" stroke="#99644c" strokeWidth="1.6" strokeDasharray="3 3"/>
    </g>;
    case 'garland9':return <g>
      <path d="M4 28q36 28 72-8" fill="none" stroke={gold} strokeWidth="2.6" strokeLinecap="round"/>
      {[10,25,40,55,70].map((x,i)=>{
        const cy=[32,40,42,38,27][i];
        return <g key={x} className="egg-glow" style={{animationDelay:`${i*.12}s`}}>
          <circle cx={x} cy={cy} r="9" fill={gold} opacity=".38"/>
          <circle cx={x} cy={cy} r="5" fill={cream} stroke={amber} strokeWidth="1.4"/>
        </g>;
      })}
    </g>;
    case 'archChairs9':return <g className="egg-rise">
      <CatFace y={4}/>
      <rect x="6" y="59" width="68" height="10" rx="4" fill="#9c6f52" stroke={dark} strokeWidth="2.2"/>
    </g>;
    case 'bakery9':return <g className="egg-rise" fill="none" strokeLinecap="round">
      <path d="M24 64c-15-15 15-18 0-38m29 31c-15-15 15-18 0-38" stroke={gold} strokeWidth="4.6"/>
      <path d="M24 64c-15-15 15-18 0-38m29 31c-15-15 15-18 0-38" stroke={cream} strokeWidth="2"/>
      <Spark x={42} y={18} size={9}/>
    </g>;
    case 'bookcase9':return <g className="egg-drift">
      <g transform="rotate(14 40 40)">
        <path d="M27 11h26v58l-13-9-13 9Z" fill={gold} stroke={dark} strokeWidth="2.4" strokeLinejoin="round"/>
        <path d="M32 16h16v43l-8-6-8 6Z" fill="none" stroke={cream} strokeWidth="1.2" strokeDasharray="3 3"/>
        <circle cx="40" cy="23" r="3" fill={brown}/>
      </g>
      <Spark x={56} y={24} size={10}/>
    </g>;
    case 'dropbox9':return <g className="egg-rise">
      <rect x="10" y="21" width="60" height="41" rx="5" fill={cream} stroke={dark} strokeWidth="2.4"/>
      <path d="m12 23 28 21 28-21" fill="#f2e2c4" stroke={dark} strokeWidth="2.2" strokeLinejoin="round"/>
      <Heart x={40} y={44} scale={.62}/>
      <Spark x={65} y={14} size={8}/>
    </g>;
    case 'traffic9':return <g className="egg-glow">
      <circle cx="40" cy="40" r="30" fill="#a8e07b" opacity=".28"/>
      <circle cx="40" cy="40" r="18" fill={gold} opacity=".5"/>
      <circle cx="40" cy="40" r="11" fill="#d9f29e" stroke="#4f7539" strokeWidth="2"/>
      <Spark x={40} y={40} size={10}/>
    </g>;
    case 'cafeLamp10':return <g className="egg-swing">
      <path d="M40 6v14" stroke={dark} strokeWidth="2.8" strokeLinecap="round"/>
      <path d="M12 48L26 20h28l14 28Z" fill={gold} stroke={dark} strokeWidth="2.4" strokeLinejoin="round"/>
      <path d="M24 48h32l12 22H12Z" fill={gold} opacity=".28"/>
      <Spark x={24} y={56} size={8}/><Spark x={40} y={64} size={10}/><Spark x={56} y={56} size={8}/>
    </g>;
    case 'cafeShelf10':return <g className="egg-rise">
      <circle cx="40" cy="42" r="24" fill="#eab95c" stroke={dark} strokeWidth="2.4"/>
      <circle cx="40" cy="42" r="18" fill="#f7da8f" stroke="#b5832d" strokeWidth="1.5" strokeDasharray="3.5 3"/>
      <circle cx="33" cy="42" r="3.4" fill={brown}/><circle cx="47" cy="42" r="3.4" fill={brown}/>
      <Spark x={58} y={20} size={11}/>
    </g>;
    case 'cat10':return <g className="egg-rise">
      <Heart x={42} y={32} scale={1.15}/>
      <Spark x={18} y={44} size={9}/><Spark x={64} y={40} size={10}/>
    </g>;
    case 'tv10':return <g className="egg-glow">
      <g transform="translate(8 -6) scale(.8)"><CatFace/></g>
      <Tag text="Кооператив пройден" y={50} fontSize={7.8}/>
    </g>;
    case 'glasses10':return <g className="egg-glow">
      <Spark x={26} y={44} size={14}/><Spark x={54} y={34} size={14}/>
      <path d="M11 33q-9 10-2 22m58-34q9 10 5 22" fill="none" stroke={gold} strokeWidth="2.8" strokeLinecap="round"/>
    </g>;
    case 'morningWindow10':return <g className="egg-sweep">
      <path d="m8 10 12 3 34 56-16-6Zm18 3 10 3 41 50-17-4Zm19 3 10 2 22 30-14-8Z" fill={gold} opacity=".72"/>
      <Spark x={22} y={22} size={10}/><Spark x={54} y={48} size={9}/>
    </g>;
  }
}
