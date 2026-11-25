import {useEffect,useId,useRef,useState} from 'react';
import {easterEggs} from '../content/easterEggs';
import {filmLeft} from '../persistence/photoSix';
import type {StoryState} from '../engine/types';
import {EasterReaction} from './SceneEasterEggs';

export function CameraArt({frames=12}:{frames?:number}){
 const uid=useId().replace(/:/g,'');
 const count=String(Math.max(0,Math.min(99,frames))).padStart(2,'0');
 return <svg viewBox="0 0 190 120" aria-hidden="true">
  <defs>
   <linearGradient id={`${uid}-metal`} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stopColor="#f2e4ce"/><stop offset=".35" stopColor="#e8dec6"/><stop offset=".75" stopColor="#cfc3a9"/><stop offset="1" stopColor="#b4a68b"/>
   </linearGradient>
   <linearGradient id={`${uid}-metal-h`} x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stopColor="#c9bea4"/><stop offset=".25" stopColor="#efe0cb"/><stop offset=".6" stopColor="#e5dac2"/><stop offset=".85" stopColor="#f7efe0"/><stop offset="1" stopColor="#beb298"/>
   </linearGradient>
   <linearGradient id={`${uid}-leather`} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stopColor="#89947c"/><stop offset=".5" stopColor="#586a5c"/><stop offset="1" stopColor="#465146"/>
   </linearGradient>
   <pattern id={`${uid}-grain`} width="4" height="4" patternUnits="userSpaceOnUse">
    <circle cx="1.2" cy="1.2" r=".75" fill="#37453b" opacity=".42"/>
    <circle cx="3.2" cy="3.2" r=".65" fill="#829686" opacity=".25"/>
   </pattern>
   <linearGradient id={`${uid}-shutter`} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stopColor="#df795e"/><stop offset=".55" stopColor="#b8523c"/><stop offset="1" stopColor="#873827"/>
   </linearGradient>
   <linearGradient id={`${uid}-flash`} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stopColor="#fffdf4"/><stop offset=".45" stopColor="#f7e7bf"/><stop offset="1" stopColor="#d7c296"/>
   </linearGradient>
   <radialGradient id={`${uid}-xenon`} cx="50%" cy="50%" r="55%">
    <stop offset="0" stopColor="#fffef5"/><stop offset=".5" stopColor="#ffe7a8" stopOpacity=".85"/><stop offset="1" stopColor="#d9b97c" stopOpacity="0"/>
   </radialGradient>
   <linearGradient id={`${uid}-barrel`} x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stopColor="#f7f0df"/><stop offset=".45" stopColor="#d4cab2"/><stop offset="1" stopColor="#9e947e"/>
   </linearGradient>
   <radialGradient id={`${uid}-glass`} cx="38%" cy="35%" r="65%">
    <stop offset="0" stopColor="#4e7985"/><stop offset=".35" stopColor="#284652"/><stop offset=".75" stopColor="#182b34"/><stop offset="1" stopColor="#0d181e"/>
   </radialGradient>
   <radialGradient id={`${uid}-coat`} cx="68%" cy="72%" r="48%">
    <stop offset="0" stopColor="#9a7eb8" stopOpacity=".55"/><stop offset=".6" stopColor="#4e8f8b" stopOpacity=".22"/><stop offset="1" stopColor="#000" stopOpacity="0"/>
   </radialGradient>
  </defs>
  <ellipse cx="92" cy="107" rx="74" ry="8" fill="#3a2314" opacity=".2"/>
  <ellipse cx="92" cy="105" rx="60" ry="4.5" fill="#3a2314" opacity=".18"/>
  <path d="M161 52c13-2 21 8 18 22c-3 14-14 23-24 19" fill="none" stroke="#8f674b" strokeWidth="5.5" strokeLinecap="round"/>
  <path d="M161 52c13-2 21 8 18 22c-3 14-14 23-24 19" fill="none" stroke="#c89e76" strokeWidth="2.2" strokeDasharray="4 3" strokeLinecap="round"/>
  <rect x="155" y="47" width="8" height="10" rx="2.5" fill={`url(#${uid}-metal)`} stroke="#554d42" strokeWidth="1.5"/>
  <g>
   <rect x="27" y="14" width="26" height="8" rx="2.5" fill="#464b44" stroke="#2d312c" strokeWidth="1.6"/>
   <path d="M31 14v8M35 14v8M39 14v8M43 14v8M47 14v8M50 14v8" stroke="#7d8479" strokeWidth="1.1"/>
   <rect x="103" y="15" width="16" height="6" rx="2" fill={`url(#${uid}-metal)`} stroke="#595044" strokeWidth="1.4"/>
   <rect x="123" y="15" width="23" height="6" rx="2" fill={`url(#${uid}-metal)`} stroke="#595044" strokeWidth="1.4"/>
   <g className="camera-shutter">
    <rect x="126" y="10.5" width="17" height="7" rx="3" fill={`url(#${uid}-shutter)`} stroke="#62291d" strokeWidth="1.5"/>
    <path d="M129 12.8h11" stroke="#f5b7a3" strokeWidth="1.6" strokeLinecap="round" opacity=".75"/>
   </g>
  </g>
  <rect x="18" y="20" width="142" height="82" rx="14" fill={`url(#${uid}-metal-h)`} stroke="#4d463c" strokeWidth="2.2"/>
  <path d="M23 26q0-4 7-4h118q7 0 7 4v2H23Z" fill="#f6e9d4" opacity=".75"/>
  <path d="M73 25l23-1m-27 11 23 1m34 58q12 2 24-1" stroke="#9a7f76" strokeWidth=".85" opacity=".56" strokeLinecap="round"/>
  <circle cx="24" cy="27" r="1.4" fill="#998f7a" stroke="#5e564a" strokeWidth=".7"/>
  <circle cx="154" cy="27" r="1.4" fill="#998f7a" stroke="#5e564a" strokeWidth=".7"/>
  <rect x="19.2" y="42" width="139.6" height="48" fill={`url(#${uid}-leather)`}/>
  <rect x="19.2" y="42" width="139.6" height="48" fill={`url(#${uid}-grain)`}/>
  <path d="M24 47q19-5 45-1m55 2q14-3 29 0m-129 37q21-1 36 0m69 0 24-4" stroke="#c2c8a5" strokeWidth="1.3" strokeLinecap="round" opacity=".58" fill="none"/>
  <rect x="19.2" y="38.5" width="139.6" height="3.6" fill="#d4a65e"/>
  <path d="M19.2 38.5h139.6" stroke="#f6d899" strokeWidth=".9"/>
  <path d="M19.2 42.1h139.6M19.2 90h139.6" stroke="#374239" strokeWidth="1.5"/>
  <rect x="24" y="46" width="21" height="40" rx="4" fill="#465549" stroke="#364239" strokeWidth="1.2"/>
  <g stroke="#6c7e70" strokeWidth="1.5" strokeLinecap="round" opacity=".8">
   <path d="M28.5 50v32M32.5 50v32M36.5 50v32M40.5 50v32"/>
  </g>
  <g>
   <rect x="27" y="23.5" width="32" height="12.5" rx="2.8" fill="#595044"/>
   <rect x="28.5" y="25" width="29" height="9.5" rx="2" fill={`url(#${uid}-flash)`}/>
   <ellipse cx="43" cy="29.8" rx="13" ry="4" fill={`url(#${uid}-xenon)`}/>
   <g stroke="#cbb68c" strokeWidth=".9" opacity=".85">
    <path d="M32 25v9.5M35.5 25v9.5M39 25v9.5M42.5 25v9.5M46 25v9.5M49.5 25v9.5M53 25v9.5"/>
    <path d="M28.5 29.8h29" opacity=".5"/>
   </g>
   <path d="M30 26l11 7.5M36 26l6 4" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" opacity=".75"/>
  </g>
  <circle cx="67" cy="29.5" r="3" fill="#4f352f"/>
  <circle cx="67" cy="29.5" r="2" fill="#e56248"/>
  <circle cx="66.3" cy="28.8" r=".7" fill="#ffd8cc"/>
  <rect x="102" y="24.5" width="17" height="10.5" rx="2.5" fill="#2d302c" stroke="#665d4f" strokeWidth="1.2"/>
  <text x="110.5" y="32.2" textAnchor="middle" fill="#f5deb0" fontFamily="monospace" fontSize="7.5" fontWeight="700">{count}</text>
  <g>
   <rect x="124" y="23.5" width="24" height="12.5" rx="3" fill="#3a3d39" stroke="#5c5346" strokeWidth="1.4"/>
   <rect x="126.5" y="25.5" width="19" height="8.5" rx="2" fill="#35525c"/>
   <rect x="129" y="27.2" width="14" height="5" rx="1" fill="none" stroke="#9fc4c9" strokeWidth=".7" opacity=".7"/>
   <path d="M128 26.5l5 6.5M133 26.5l3 4" stroke="#e2f6f8" strokeWidth="1.4" strokeLinecap="round" opacity=".65"/>
  </g>
  <g transform="translate(56 66)">
   <circle cy="1.2" r="6.5" fill="#2c362e" opacity=".45"/>
   <circle r="6.5" fill={`url(#${uid}-barrel)`} stroke="#4c473e" strokeWidth="1.3"/>
   <circle r="3.2" fill="#778477" stroke="#4f574f" strokeWidth=".9"/>
   <path d="M0-3.2V-6" stroke="#c85f46" strokeWidth="1.4" strokeLinecap="round"/>
  </g>
  <circle cx="96.5" cy="69" r="29.5" fill="#2c241d" opacity=".28"/>
  <g transform="translate(95 66)">
   <circle r="29.5" fill={`url(#${uid}-barrel)`} stroke="#474239" strokeWidth="2"/>
   <circle r="25.5" fill="#323836" stroke="#222726" strokeWidth="1.5"/>
   <circle r="23.5" fill="none" stroke="#6d7874" strokeWidth="2.2" strokeDasharray="1.8 2.2"/>
   <circle r="20.5" fill="#212625" stroke="#c9a15d" strokeWidth="1"/>
   <circle r="18" fill="#181d1d" stroke="#454f4d" strokeWidth="1"/>
   <circle r="15.2" fill={`url(#${uid}-glass)`}/>
   <circle r="15.2" fill={`url(#${uid}-coat)`}/>
   <polygon points="0,-7.5 6.5,-3.7 6.5,3.7 0,7.5 -6.5,3.7 -6.5,-3.7" fill="#0d161b" stroke="#28424d" strokeWidth=".9"/>
   <circle r="4.5" fill="#070d10"/>
   <path d="M-10.5-6.5a12 12 0 0 1 15-4.5" fill="none" stroke="#d5f2f5" strokeWidth="2.4" strokeLinecap="round" opacity=".82"/>
   <path d="M-8 9a11 11 0 0 0 14 1.5" fill="none" stroke="#b694d4" strokeWidth="1.8" strokeLinecap="round" opacity=".55"/>
   <ellipse cx="-5.5" cy="-5.5" rx="2.5" ry="1.55" transform="rotate(-32 -5.5 -5.5)" fill="#ffffff" opacity=".92"/>
   <circle cx="6.2" cy="5.8" r="2" fill="#8fd4cc" opacity=".6"/>
   <circle cx="9" cy="-3.5" r="1.1" fill="#fff6d9" opacity=".85"/>
   <circle cx="0" cy="-27.4" r="1.2" fill="#c95b43"/>
  </g>
  <rect x="131" y="69" width="22" height="12" rx="2.5" fill="#3b473d" stroke="#859486" strokeWidth="1"/>
  <text x="142" y="77.5" textAnchor="middle" fill="#f0e5ce" fontFamily="Georgia,serif" fontSize="6.8" letterSpacing=".5">35mm</text>
 </svg>;
}

export function PhotoCamera({story,visible,interactive,context,reduced,onShutter,flash,onDiscover}:{story:StoryState;visible:boolean;interactive:boolean;context:string;reduced:boolean;onShutter?:()=>void;flash:boolean;onDiscover:()=>boolean}){
 const [discovered,setDiscovered]=useState(false);
 const [reaction,setReaction]=useState<{context:string;albumFound:boolean}|null>(null);
 const trigger=useRef<HTMLButtonElement>(null);
 const ready=interactive&&!!onShutter;
 const active=interactive&&!ready&&reaction?.context===context;
 useEffect(()=>{setReaction(null);},[context,interactive]);
 const left=filmLeft(story);
 if(!visible||left===undefined)return null;
 return <div className="photo-camera-area" data-reduced={reduced}>
  <div className={`photo-camera${ready?' photo-camera-ready':''}`}>
   {interactive?<button ref={trigger} className="photo-camera-trigger" aria-label={ready?'Нажать спуск':easterEggs.camera.label} aria-expanded={ready?undefined:active} onClick={()=>{
    if(ready){onShutter?.();return;}
    if(active)return;
    setDiscovered(true);setReaction({context,albumFound:onDiscover()});
   }}>
    <span className="photo-camera-art"><CameraArt frames={left}/>
     {!ready&&!discovered&&<span className="easter-spark" aria-hidden="true">✧</span>}
     {flash&&<span className="photo-camera-flash photo-camera-exposure" aria-hidden="true"/>}
     {active&&<span className="photo-camera-flash" aria-hidden="true"/>}
    </span>
    {ready&&<span className="photo-camera-prompt">Нажать спуск <span aria-hidden="true">📷</span></span>}
   </button>:<CameraArt frames={left}/>}
   <span>Кадров осталось: <strong>{left}</strong></span>
  </div>
  {active&&<EasterReaction id="camera" albumFound={reaction?.albumFound} onDismiss={()=>{setReaction(null);trigger.current?.focus({preventScroll:true});}}/>}
 </div>;
}
