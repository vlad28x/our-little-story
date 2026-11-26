import {useId} from 'react';
import type {Run,StoryState} from '../engine/types';
import {travellerView,travellerResources} from '../content/travellers';
import {assetUrl} from '../content/assetManifest';
import {firstSeasonBackground,firstSeasonCat,firstSeasonVlad} from '../content/firstSeasonArt';
import {SupperArt} from './SupperArt';

export function FeetPrint(){
 const uid=useId().replace(/:/g,'');
 return <svg viewBox="0 0 180 110" role="img" aria-label="Косой отпечаток: земля и две пары обуви">
  <defs>
   <linearGradient id={`${uid}-ground`} x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stopColor="#b9a196"/><stop offset="1" stopColor="#8a7978"/>
   </linearGradient>
   <radialGradient id={`${uid}-vig`} cx="50%" cy="50%" r="72%">
    <stop offset=".6" stopColor="#2c2017" stopOpacity="0"/><stop offset="1" stopColor="#2c2017" stopOpacity=".28"/>
   </radialGradient>
  </defs>
  <rect width="180" height="110" fill={`url(#${uid}-ground)`}/>
  {/* Park stone pavement seams */}
  <path d="M0 32L180 78M58 0L24 110M148 0L116 110M0 78L180 28" stroke="#7d6f5f" strokeWidth="1.6" opacity=".65"/>
  <path d="M2 34L180 80M60 0L26 110" stroke="#cfc1ad" strokeWidth="1" opacity=".35"/>
  <path d="M8 20l14 4m44-11 17 6m35-4 14 2m23 39 17 1M3 64l20 9m46 26 12 2m60-18 15 4" stroke="#e5c9aa" strokeWidth="1.2" strokeLinecap="round" opacity=".6"/>
  {/* Small fallen autumn leaves on pavement */}
  <g opacity=".85">
   <path d="M16 86q7-7 13-1q-6 6-13 1Z" fill="#c97a4b" stroke="#7c4729" strokeWidth=".8"/>
   <path d="M150 22q6-5 11 1q-5 5-11-1Z" fill="#d9a152" stroke="#855d28" strokeWidth=".8"/>
   <circle cx="90" cy="96" r="2.2" fill="#9a8874"/>
  </g>
  {/* Pair 1: Dark denim trousers + navy canvas sneakers */}
  <g transform="translate(46 44) rotate(-14)">
   <ellipse cx="-2" cy="24" rx="14" ry="18" fill="#3a2f27" opacity=".26"/>
   <ellipse cx="27" cy="25" rx="14" ry="18" fill="#3a2f27" opacity=".26"/>
   <path d="M-15-48H4L8 12H-13Z" fill="#344552" stroke="#222e38" strokeWidth="1.4"/>
   <path d="M13-48H32L35 12H16Z" fill="#3c4f5d" stroke="#222e38" strokeWidth="1.4"/>
   <path d="M-13 8H8v5H-13ZM16 8H35v5H16Z" fill="#4f6473"/>
   {/* Left sneaker */}
   <path d="M-13 11Q-20 32-11 38Q-2 41 7 37L8 11Z" fill="#393439" stroke="#ebe0ce" strokeWidth="2.2" strokeLinejoin="round"/>
   <path d="M-10 31q7 5 14 0" fill="none" stroke="#f0e6d5" strokeWidth="2.4" strokeLinecap="round"/>
   <path d="M-9 18h11M-9 23h11M-8 27h9" stroke="#e8dcc8" strokeWidth="1.5" strokeLinecap="round"/>
   {/* Right sneaker */}
   <path d="M16 11Q14 32 22 38Q32 41 40 36Q43 26 34 11Z" fill="#393439" stroke="#ebe0ce" strokeWidth="2.2" strokeLinejoin="round"/>
   <path d="M21 31q8 5 15 0" fill="none" stroke="#f0e6d5" strokeWidth="2.4" strokeLinecap="round"/>
   <path d="M20 18h11M21 23h11M22 27h9" stroke="#e8dcc8" strokeWidth="1.5" strokeLinecap="round"/>
  </g>
  {/* Pair 2: Warm taupe trousers + cream/caramel suede boots */}
  <g transform="translate(114 43) rotate(12)">
   <ellipse cx="-2" cy="24" rx="14" ry="18" fill="#3a2f27" opacity=".24"/>
   <ellipse cx="27" cy="25" rx="14" ry="18" fill="#3a2f27" opacity=".24"/>
   <path d="M-15-48H4L8 12H-13Z" fill="#6d605b" stroke="#473e3b" strokeWidth="1.4"/>
   <path d="M13-48H32L35 12H16Z" fill="#786a64" stroke="#473e3b" strokeWidth="1.4"/>
   {/* Left boot */}
   <path d="M-13 10Q-19 31-10 37Q-1 40 7 36L8 10Z" fill="#dfc2a3" stroke="#856953" strokeWidth="1.8" strokeLinejoin="round"/>
   <path d="M-11 33q8 5 16 0" fill="none" stroke="#f5ead8" strokeWidth="2.2" strokeLinecap="round"/>
   <path d="M-8 17h10M-8 22h10" stroke="#99795e" strokeWidth="1.4" strokeLinecap="round"/>
   {/* Right boot */}
   <path d="M16 10Q14 31 22 37Q32 40 39 35Q42 25 33 10Z" fill="#dfc2a3" stroke="#856953" strokeWidth="1.8" strokeLinejoin="round"/>
   <path d="M20 33q9 5 16-1" fill="none" stroke="#f5ead8" strokeWidth="2.2" strokeLinecap="round"/>
   <path d="M20 17h10M21 22h10" stroke="#99795e" strokeWidth="1.4" strokeLinecap="round"/>
  </g>
  <rect width="180" height="110" fill={`url(#${uid}-vig)`}/>
 </svg>;
}

export function TravellersBoard({state,position,night=false}:{state:ReturnType<typeof travellerResources>;position?:string;night?:boolean}){
 const uid=useId().replace(/:/g,'');
 const point=({start:[70,218],river:[211,204],quarry:[349,177],last:[476,106],house:[496,146]} as Record<string,number[]>)[position??state.position]??[70,218];
 const charged=state.lantern==='charged';
 return <svg className="travellers-board" viewBox="0 0 600 340" role="img" aria-label={`Два путешественника: ${position==='last'?'последний шаг':({start:'на старте',river:'за рекой',quarry:'за карьером',house:'у домика'} as Record<string,string>)[state.position]}. Солнц: ${state.suns}. Мостик: ${state.bridge==='carried'?'с собой':state.bridge==='river'?'у реки':'у болота'}. Фонарь ${charged?'заряжен':'пуст'}.`}>
  <defs>
   <linearGradient id={`${uid}-wood`} x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stopColor={night?'#7c5b43':'#ad8662'}/><stop offset=".5" stopColor={night?'#5f4432':'#967050'}/><stop offset="1" stopColor={night?'#463124':'#69472b'}/>
   </linearGradient>
   <radialGradient id={`${uid}-paper`} cx="46%" cy="38%" r="68%">
    <stop offset="0" stopColor={night?'#7a7494':'#fcf4de'}/><stop offset=".65" stopColor={night?'#6b6682':'#f0e2bd'}/><stop offset="1" stopColor={night?'#9a9186':'#dbc798'}/>
   </radialGradient>
   <linearGradient id={`${uid}-river`} x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stopColor={night?'#385e6b':'#4e8490'}/><stop offset=".5" stopColor={night?'#4f7b87':'#7da5ad'}/><stop offset="1" stopColor={night?'#345966':'#4b808c'}/>
   </linearGradient>
   <radialGradient id={`${uid}-glow`} cx="50%" cy="50%" r="50%">
    <stop offset="0" stopColor="#ffea99" stopOpacity=".9"/><stop offset=".55" stopColor="#ffd570" stopOpacity=".32"/><stop offset="1" stopColor="#ffd570" stopOpacity="0"/>
   </radialGradient>
   <radialGradient id={`${uid}-night`} cx="50%" cy="50%" r="50%">
    <stop offset="0" stopColor="#ffe599" stopOpacity=".9"/><stop offset=".5" stopColor="#ffcf75" stopOpacity=".38"/><stop offset="1" stopColor="#ffcf75" stopOpacity="0"/>
   </radialGradient>
   <linearGradient id={`${uid}-coin`} x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stopColor="#fff0a6"/><stop offset=".45" stopColor="#eab952"/><stop offset="1" stopColor="#b8842c"/>
   </linearGradient>
   <linearGradient id={`${uid}-roof`} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stopColor={night?'#9d5a4b':'#c9745d'}/><stop offset="1" stopColor={night?'#6c3930':'#8f4a3c'}/>
   </linearGradient>
   <clipPath id={`${uid}-clip`}><rect x="17" y="16" width="566" height="307" rx="7"/></clipPath>
  </defs>
  <rect x="6" y="9" width="588" height="327" rx="14" fill="#2e1a0d" opacity=".24"/>
  <rect x="5" y="5" width="590" height="328" rx="14" fill={`url(#${uid}-wood)`} stroke="#4f331e" strokeWidth="2.2"/>
  <path d="M26 10h240M330 10h240M26 329h548" stroke="#c49a6c" strokeWidth="1" opacity=".42"/>
  <g fill="#ddb468" stroke="#755526" strokeWidth="1.2">
   <path d="M6 21V11q0-5 5-5h12v5H11v10Z"/><path d="M594 21V11q0-5-5-5h-12v5h12v10Z"/>
   <path d="M6 317v10q0 5 5 5h12v-5H11v-10Z"/><path d="M594 317v10q0 5-5 5h-12v-5h12v-10Z"/>
  </g>
  <rect x="17" y="16" width="566" height="307" rx="7" fill={`url(#${uid}-paper)`} stroke="#6d533b" strokeWidth="2"/>
  <g clipPath={`url(#${uid}-clip)`}>
   <path d="M17 242 Q125 205 245 236 T583 222 V323 H17 Z" fill={night?'#697566':'#c7ce96'} opacity=".5"/>
   <path d="M17 264 Q180 234 345 266 T583 254 V323 H17 Z" fill={night?'#576558':'#a6ab82'} opacity=".55"/>
   <ellipse cx="495" cy="144" rx="86" ry="42" fill={night?'#687564':'#cdd49e'} opacity=".55"/>
   <g fill="none" stroke={night?'#9a94a8':'#b9a579'} strokeWidth="1" opacity=".38">
    <ellipse cx="82" cy="150" rx="52" ry="28"/><ellipse cx="82" cy="150" rx="34" ry="17"/>
    <ellipse cx="496" cy="138" rx="68" ry="30"/><path d="M230 50q65-22 135 5"/>
   </g>
   <path d="M20 239q43-19 68-14m-51 44q43-12 87-9m245-22q23-11 44-8m54 30q60-10 109-27M27 302q72-16 123-3m256 5q57-15 172-12" fill="none" stroke={night?'#a9a9ad':'#f8e4b1'} strokeWidth="3" strokeLinecap="round" strokeDasharray="13 4 5 7" opacity=".45"/>
   <rect x="298" y="16" width="3" height="307" fill="#5e4a38" opacity=".18"/>
   <rect x="301" y="16" width="2" height="307" fill="#fffaf0" opacity=".35"/>
   <g transform="translate(58 55)" opacity={night?.35:.45}>
    <circle r="21" fill="none" stroke={night?'#d9d0c0':'#85684a'} strokeWidth="1"/>
    <circle r="16.5" fill="none" stroke={night?'#d9d0c0':'#85684a'} strokeWidth=".7" strokeDasharray="2 2"/>
    <path d="M0-20L3.5-3.5L20 0L3.5 3.5L0 20L-3.5 3.5L-20 0L-3.5-3.5Z" fill={night?'#cfc5b4':'#85684a'}/>
    <path d="M0-20L3.5-3.5L0 0Z M20 0L3.5 3.5L0 0Z M0 20L-3.5 3.5L0 0Z M-20 0L-3.5-3.5L0 0Z" fill="#d8c096"/>
    <circle r="2.2" fill="#fcf4de" stroke="#85684a" strokeWidth="1"/>
   </g>
   <path d="M164 8 C126 70 179 124 156 178 C139 220 153 248 148 275" fill="none" stroke={night?'#7c7682':'#cfb989'} strokeWidth="46" strokeLinecap="round"/>
   <path d="M164 8 C126 70 179 124 156 178 C139 220 153 248 148 275" fill="none" stroke={`url(#${uid}-river)`} strokeWidth="34" strokeLinecap="round"/>
   <path d="M161 10 C125 70 175 124 154 178 C138 218 151 246 146 273" fill="none" stroke="#97cad0" strokeWidth="12" strokeLinecap="round" opacity=".36"/>
   <g fill="none" stroke="#eaf7f5" strokeWidth="1.8" strokeLinecap="round" opacity={night?.55:.82}>
    <path d="M156 28q-6 18 3 34M166 104q6 18-5 35M148 198q-5 15 4 28M158 242q-2 10 2 18"/>
   </g>
   <g fill="#b5a387" stroke="#7d6d58" strokeWidth=".9" opacity={night?.7:1}>
    <ellipse cx="136" cy="76" rx="4.5" ry="2.8"/><ellipse cx="141" cy="82" rx="3" ry="2"/>
    <ellipse cx="177" cy="186" rx="4.5" ry="2.6"/><ellipse cx="129" cy="236" rx="4" ry="2.5"/>
   </g>
   <g>
    <ellipse cx="432" cy="216" rx="51" ry="28" fill={night?'#4d6b66':'#6f9588'} stroke="#425d56" strokeWidth="1.8"/>
    <ellipse cx="424" cy="212" rx="36" ry="18" fill={night?'#5f7f79':'#89ada0'} opacity=".68"/>
    <ellipse cx="445" cy="224" rx="22" ry="10" fill="#4f7066" opacity=".6"/>
    <path d="M412 208a6 4 0 1 0 9 2l-4.5-2Z" fill="#7da068" stroke="#4f6c41" strokeWidth=".9"/>
    <path d="M446 218a6 4 0 1 0 8 2l-4-2Z" fill="#7da068" stroke="#4f6c41" strokeWidth=".9"/>
    <circle cx="416" cy="206" r="2.2" fill="#f7dce0"/>
    <g stroke="#3e614e" strokeWidth="2" strokeLinecap="round">
     <path d="M398 224l4-19M404 227l2-15M426 234l3-21M451 226l5-19M458 222l4-14"/>
    </g>
    <ellipse cx="402" cy="204" rx="2.2" ry="4.8" fill="#6e4834"/>
    <ellipse cx="429" cy="212" rx="2.2" ry="4.8" fill="#6e4834"/>
    <ellipse cx="456" cy="206" rx="2.2" ry="4.8" fill="#6e4834"/>
   </g>
   <g fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M70 218Q108 186 143 164Q178 184 211 204Q254 182 292 162Q322 169 349 177Q388 202 420 220Q460 186 496 146 M70 218Q112 246 154 247Q186 232 211 204 M211 204Q238 118 273 72Q322 72 367 86Q360 132 349 177 M349 177Q368 112 392 78Q432 64 466 74Q486 108 496 146" stroke={night?'#7c757f':'#b9a276'} strokeWidth="17"/>
    <path d="M70 218Q108 186 143 164Q178 184 211 204Q254 182 292 162Q322 169 349 177Q388 202 420 220Q460 186 496 146 M70 218Q112 246 154 247Q186 232 211 204 M211 204Q238 118 273 72Q322 72 367 86Q360 132 349 177 M349 177Q368 112 392 78Q432 64 466 74Q486 108 496 146" stroke={night?'#d5ccb9':'#fff6de'} strokeWidth="11.5"/>
    <path d="M70 218Q108 186 143 164Q178 184 211 204Q254 182 292 162Q322 169 349 177Q388 202 420 220Q460 186 496 146" stroke="#c89e66" strokeWidth="1.5" strokeDasharray="3 6.5"/>
   </g>
   <g stroke="#8e693e" strokeWidth="1.8">
    <circle cx="70" cy="218" r="8.5" fill="#fae5b0"/><circle cx="70" cy="218" r="3.5" fill="#d3a154" stroke="none"/>
    <circle cx="211" cy="204" r="8.5" fill="#fae5b0"/>
    <circle cx="349" cy="177" r="8.5" fill="#fae5b0"/><circle cx="349" cy="177" r="3.5" fill="#d3a154" stroke="none"/>
   </g>
   <g>
    <ellipse cx="297" cy="192" rx="48" ry="10" fill="#5d4c3b" opacity=".2"/>
    <path d="M244 138L276 89L321 96L350 144L322 195L271 192Z" fill={night?'#8c7d78':'#b49c85'} stroke="#5f4e42" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M276 89L297 132L244 138Z" fill={night?'#a1938d':'#d1beaa'}/>
    <path d="M276 89L321 96L297 132Z" fill={night?'#958782':'#c3ad96'}/>
    <path d="M321 96L350 144L322 195L297 132Z" fill={night?'#736460':'#927b68'}/>
    <path d="M258 124l15-10M314 114l14 16M325 144l10 18" stroke="#5f4e42" strokeWidth="1.2" opacity=".55"/>
    <path d="M268 179V156Q294 126 320 156V179Z" fill="#3a3332" stroke="#5f4430" strokeWidth="3"/>
    <circle cx="294" cy="151" r="11" fill={`url(#${uid}-glow)`}/>
    <circle cx="294" cy="151" r="2.5" fill="#fff3bc"/>
    <path d="M273 179V156M315 179V156M270 155h48" stroke="#996f48" strokeWidth="3.2" strokeLinecap="round"/>
    <path d="M281 179l6-17M307 179l-6-17" stroke="#c8b59a" strokeWidth="1.8"/>
    <path d="M281 174h26M284 168h20M286 163h16" stroke="#856548" strokeWidth="1.5"/>
   </g>
   <g transform="translate(460 66)">
    <ellipse cx="35" cy="75" rx="40" ry="10" fill="#4f4331" opacity=".24"/>
    <path d="M51 5q-5-6 3-11q6-4 2-10" fill="none" stroke="#fffaf0" strokeWidth="3.5" strokeLinecap="round" opacity=".78"/>
    <path d="M54 0q-2-4 3-8" fill="none" stroke="#fffaf0" strokeWidth="2" strokeLinecap="round" opacity=".55"/>
    <rect x="46" y="6" width="11" height="22" rx="1.5" fill="#a67c68" stroke="#5e4337" strokeWidth="1.8"/>
    <rect x="44.5" y="5" width="14" height="4" rx="1" fill="#8d6351" stroke="#5e4337" strokeWidth="1.4"/>
    <rect x="9" y="34" width="54" height="39" rx="2" fill={night?'#cbb999':'#f7e2b5'} stroke="#6c503c" strokeWidth="2"/>
    <rect x="9" y="65" width="54" height="8" fill="#a89882" stroke="#6c503c" strokeWidth="1.5"/>
    <path d="M18 65v8M31 65v8M47 65v8M56 65v8" stroke="#7c6c5a" strokeWidth="1"/>
    <path d="M-1 37L36 7L73 37Z" fill={`url(#${uid}-roof)`} stroke="#62352c" strokeWidth="2.2" strokeLinejoin="round"/>
    <path d="M12 31h48M20 24h32M28 17h16" stroke="#804034" strokeWidth="1.2" strokeDasharray="4 3" opacity=".6"/>
    <path d="M8 35L36 12L64 35" fill="none" stroke="#e39a83" strokeWidth="1.8" opacity=".6"/>
    <circle cx="24" cy="50" r={night?26:19} fill={`url(#${uid}-glow)`}/>
    <rect x="16" y="42" width="15" height="16" rx="2" fill="#ffefad" stroke="#6d4f38" strokeWidth="1.8"/>
    <path d="M23.5 42v16M16 50h15" stroke="#856245" strokeWidth="1.4"/>
    <rect x="14.5" y="58" width="18" height="3.2" rx="1" fill="#9c6c4a" stroke="#62422d" strokeWidth="1"/>
    <path d="M39 73V49q0-6 8-6t8 6v24Z" fill="#8a5f42" stroke="#533725" strokeWidth="1.8"/>
    <path d="M44 45v28M50 45v28" stroke="#6e4931" strokeWidth="1"/>
    <circle cx="51" cy="59" r="1.6" fill="#f7d784"/>
    <circle cx="7" cy="70" r="7" fill="#718c5d" stroke="#485e3a" strokeWidth="1.4"/>
    <circle cx="13" cy="72" r="5" fill="#89a571" stroke="#485e3a" strokeWidth="1.2"/>
    <circle cx="6" cy="68" r="1.4" fill="#f5c6c9"/><circle cx="12" cy="71" r="1.4" fill="#ffe79e"/>
    <circle cx="64" cy="71" r="6" fill="#7c9866" stroke="#485e3a" strokeWidth="1.4"/>
   </g>
   {(state.bridge==='river'||state.bridge==='marsh')&&<g transform={state.bridge==='river'?'translate(138 148) rotate(17)':'translate(414 200) rotate(-38)'}>
    <rect x="1" y="4" width="46" height="19" rx="3" fill="#2c484f" opacity=".32"/>
    <rect width="46" height="18" rx="2.5" fill="#ca945b" stroke="#69482e" strokeWidth="1.9"/>
    <path d="M8 1v16M16 1v16M24 1v16M32 1v16M40 1v16" stroke="#785336" strokeWidth="1.5"/>
    <path d="M2 3.5h42M2 14.5h42" stroke="#96683f" strokeWidth="2.2"/>
    <circle cx="5" cy="3.5" r="1.1" fill="#4f3724"/><circle cx="41" cy="3.5" r="1.1" fill="#4f3724"/>
    <circle cx="5" cy="14.5" r="1.1" fill="#4f3724"/><circle cx="41" cy="14.5" r="1.1" fill="#4f3724"/>
   </g>}
   {[[96,104,1],[216,96,1],[377,45,.86],[552,117,.92]].map(([x,y,s])=><g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${s})`}>
    <ellipse cy="28" rx="14" ry="4.5" fill="#4f4331" opacity=".2"/>
    <path d="M0 10V27" stroke="#624833" strokeWidth="4.5" strokeLinecap="round"/>
    <path d="M-16 20L0-2L16 20Z" fill={night?'#455a45':'#5e794e'} stroke="#364a30" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M-13 10L0-10L13 10Z" fill={night?'#577055':'#779362'} stroke="#364a30" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M-9 0L0-16L9 0Z" fill={night?'#6c8767':'#92ae79'} stroke="#364a30" strokeWidth="1.4" strokeLinejoin="round"/>
   </g>)}
   {night&&<circle cx={point[0]} cy={point[1]} r="72" fill={`url(#${uid}-night)`}/>}
   {[-13,13].map((dx,i)=><g key={dx} transform={`translate(${point[0]+dx} ${point[1]-2})`}>
    <ellipse cy="11" rx="13" ry="5" fill="#3a281c" opacity=".3"/>
    <path d="M-11 7L-7-14Q0-18 7-14L11 7Q0 12-11 7Z" fill={i?'#b86962':'#58758a'} stroke={i?'#6b3936':'#344654'} strokeWidth="1.8"/>
    <path d="M-5-12l-2 17" stroke={i?'#d9948d':'#85a2b5'} strokeWidth="2" strokeLinecap="round" opacity=".55"/>
    <path d="M-8-11q8 4 16 0" fill="none" stroke={i?'#f7ebd2':'#ecc77e'} strokeWidth="3.4" strokeLinecap="round"/>
    {!i&&<path d="M3-9l3 8" stroke="#ecc77e" strokeWidth="2.6" strokeLinecap="round"/>}
    <circle cy="-20.5" r="8" fill={i?'#f3d4b8':'#efd0ad'} stroke="#5c4436" strokeWidth="1.7"/>
    <path d={i?'M-8-20q-1-10 15-7q3 5 1 11q-4-8-16-4Z':'M-8-22q3-9 15-4q2 4 0 6q-6-5-15-2Z'} fill={i?'#4f3b34':'#6f4e35'}/>
    <circle cx="-2.5" cy="-22.5" r="1.6" fill="#fff7ea" opacity=".6"/>
   </g>)}
   <rect x="17" y="274" width="566" height="49" fill={night?'#7c7382':'#d9c698'} opacity=".86"/>
   <path d="M17 274h566" stroke={night?'#574f5e':'#8e7350'} strokeWidth="1.8"/>
   <path d="M17 276h566" stroke="#fff7e2" strokeWidth="1" opacity=".45"/>
   <text x="34" y="304" fill={night?'#f6ebd6':'#594333'} fontSize="13.5" fontFamily="Georgia,serif" letterSpacing="1.8" fontWeight="700">ДВА ПУТЕШЕСТВЕННИКА</text>
   {state.bridge==='carried'&&<g transform="translate(212 290)">
    <rect x="1" y="2" width="44" height="17" rx="2.5" fill="#463222" opacity=".24"/>
    <rect width="44" height="17" rx="2.5" fill="#ca945b" stroke="#69482e" strokeWidth="1.8"/>
    <path d="M8 1v15M16 1v15M24 1v15M32 1v15M38 1v15" stroke="#785336" strokeWidth="1.4"/>
    <path d="M2 3.5h40M2 13.5h40" stroke="#96683f" strokeWidth="2"/>
   </g>}
   <g transform="translate(284 297)">
    {charged&&<circle r="24" fill={`url(#${uid}-glow)`}/>}
    <path d="M-6-13q0-9 6-9t6 9" fill="none" stroke="#5d4634" strokeWidth="2"/>
    <path d="M-11-11h22l-3 4h-16z" fill="#7c5d43" stroke="#473425" strokeWidth="1.5"/>
    <path d="M-8-7h16l2.5 18h-21z" fill={charged?'#ffeb9e':'#9e988c'} stroke="#594230" strokeWidth="1.7"/>
    <path d="M-6-7l-1 18M6-7l1 18" stroke="#8c6949" strokeWidth="1.2"/>
    {charged&&<path d="M0-3q4 5 0 9q-4-4 0-9Z" fill="#fffcf0"/>}
    <path d="M-12 11h24v4.5h-24z" fill="#7c5d43" stroke="#473425" strokeWidth="1.5"/>
   </g>
   {[0,1,2,3,4].map(i=>i<state.suns?<g key={i} transform={`translate(${348+i*42} 299)`}>
    <circle cy="2.5" r="13.5" fill="#593f22" opacity=".28"/>
    <circle r="13.5" fill={`url(#${uid}-coin)`} stroke="#8e6526" strokeWidth="1.7"/>
    <circle r="9.5" fill="none" stroke="#fff2b5" strokeWidth="1" opacity=".8"/>
    <circle r="5.5" fill="#fff3bd"/>
    <path d="M0-11V-7.5M0 7.5V11M-11 0H-7.5M7.5 0H11M-7.8-7.8l2.5 2.5M5.3 5.3l2.5 2.5M-7.8 7.8l2.5-2.5M5.3-5.3l2.5-2.5" stroke="#fff6cc" strokeWidth="1.6" strokeLinecap="round"/>
   </g>:<g key={i} transform={`translate(${348+i*42} 299)`} opacity=".34">
    <circle r="12.5" fill={night?'#57505e':'#cbb688'} stroke={night?'#d9ccb4':'#856940'} strokeWidth="1.5" strokeDasharray="3 3"/>
   </g>)}
  </g>
  <rect x="22" y="21" width="556" height="297" rx="4" fill="none" stroke="#8e714e" strokeWidth="1" strokeDasharray="4 4" opacity=".42"/>
 </svg>;
}

function PortraitPrint({story,source}:{story:StoryState;source:6|7|9}){
 const subject=source===6?story.c6PhotoSubject:source===7?story.c7GalleryFrame:story.c9Frame;
 const background=source===6?story.c6PhotoPlace==='upper'?'bg.photo6.upper':'bg.photo6.shade':source===7?'bg.gallery7.outside':'bg.courtyard9.open';
 return <div className={`printed-scene print-${source} subject-${subject}`}><img className="printed-background" src={assetUrl(firstSeasonBackground(background))} alt=""/>
  {subject==='vlad'&&<img className="printed-person" src={assetUrl(firstSeasonVlad('bg.cafe.window','smile'))} alt=""/>}
  {(subject==='her'||subject==='both')&&<svg className="printed-silhouette" viewBox="0 0 90 160" aria-hidden="true">
   {/* Graceful shadowed silhouette in autumn coat */}
   <path d="M28 16q17-12 34 0q10 15 6 38q-6-5-9-9q-14 4-28 0q-3 4-9 9q-4-23 6-38Z" fill="#463d42"/>
   <ellipse cx="45" cy="28" rx="13" ry="15" fill="#594e51"/>
   <path d="M35 41h20l4 10H31Z" fill="#826d75"/>
   <path d="M22 54q23-10 46 0l11 78q-34 8-68 0Z" fill="#555866" stroke="#3c3e4a" strokeWidth="1.5"/>
   <path d="M30 48q15 10 30 0l-6 15q-9 4-18 0Z" fill="#a99099"/>
   <path d="M20 61q-3 27-7 56m44-63 8 14m4 2 7 43M34 63l9 6" stroke="#b5a399" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity=".42"/>
   <path d="M34 132l-4 28h11l4-27M56 132l4 28H49l-4-27" fill="#3f3d47"/>
  </svg>}
  {subject==='both'&&<img className="printed-person print-reflected" src={assetUrl(firstSeasonVlad('bg.cafe.window','smile'))} alt=""/>}
  {source===7&&subject==='vlad'&&<span className="print-poster">ЛИНИИ<br/>И СВЕТ</span>}
  {source===7&&subject==='both'&&<i className="print-window-frame"/>}
  {source===9&&subject==='vlad'&&<span className="print-bag"/>}
  {source===9&&subject==='seats'&&<svg className="print-chairs" viewBox="0 0 200 140" aria-hidden="true">
   {[32,114].map((x,i)=><g key={x} transform={`translate(${x} 28) rotate(${i?3:-3} 25 50)`}>
    <ellipse cx="26" cy="104" rx="28" ry="6" fill="#2d2018" opacity=".28"/>
    {/* Wooden slats backrest */}
    <rect x="4" y="6" width="44" height="10" rx="2" fill="#ba8665" stroke="#5d4436" strokeWidth="2"/>
    <rect x="4" y="21" width="44" height="10" rx="2" fill="#b07c5c" stroke="#5d4436" strokeWidth="2"/>
    <rect x="4" y="36" width="44" height="10" rx="2" fill="#a67253" stroke="#5d4436" strokeWidth="2"/>
    {/* Frame & seat */}
    <path d="M3 0v102M49 0v102" stroke="#694d3d" strokeWidth="5.5" strokeLinecap="round"/>
    <rect x="-1" y="54" width="54" height="11" rx="3" fill="#c79572" stroke="#5d4436" strokeWidth="2"/>
    <path d="M4 76h44" stroke="#694d3d" strokeWidth="4"/>
    <path d="M9 10q12 4 33 0m-34 16 32-1M10 40q20-1 30 1M6 57q17 3 40 0" fill="none" stroke="#efcfaa" strokeWidth="1.2" strokeLinecap="round" opacity=".64"/>
   </g>)}
  </svg>}
 </div>;
}

function SecretKitchenPrint(){
 return <div className="printed-scene secret-kitchen-print">
  <img src={assetUrl('supper8.secret-hands')} alt=""/>
 </div>;
}

export type PrintSource=6|7|8|9|'secretKitchen'|'feet';

export function selectedPrintLabel(story:StoryState,source:PrintSource){
 switch(source){
  case 6: {
   const place=story.c6PhotoPlace==='upper'?'верхняя дорожка':'у воды';
   const subject=story.c6PhotoSubject==='vlad'?'Влад':story.c6PhotoSubject==='her'?'силуэт героини':'место';
   return `Прогулка: ${place}, ${subject}`;
  }
  case 'feet':return 'Случайный кадр прогулки';
  case 7:return `Галерея: ${story.c7GalleryFrame==='vlad'?'Влад у афиши':story.c7GalleryFrame==='her'?'героиня у двери':'совместное отражение'}`;
  case 8:return `Кухня: ${story.c8Frame?.startsWith('board')?'доска':'блюдо'}, ${story.c8Frame?.endsWith('Her')?'снимает героиня':'снимает Влад'}`;
  case 'secretKitchen':return 'Секретный кадр Влада: твои ладони у чашки и пылинка муки';
  case 9:return `Дворик: ${story.c9Frame==='vlad'?'Влад с пакетом':story.c9Frame==='seats'?'два стула':'дворик до показа'}`;
 }
}

export function SelectedPrint({story,source}:{story:StoryState;source:PrintSource}){
 const board=story.c8Frame?.startsWith('board');
 const label=selectedPrintLabel(story,source);
 return <figure className={`selected-print ${source===8?`food-${story.c8Frame}`:''}`} aria-label={label}>
  {source==='feet'?<FeetPrint/>:source==='secretKitchen'?<SecretKitchenPrint/>:source===8?<div className="printed-food">{board?<SupperArt stage="board"/>:<SupperArt stage="half" shape={story.c8Shape} filling={story.c8Filling}/>}<svg className="print-board-hands" viewBox="0 0 320 190" aria-hidden="true" style={{display:board?'block':'none'}}>
   <g fill="#e0b89e" stroke="#99705b" strokeWidth="2" strokeLinejoin="round">
    <path d="M-2 118l36-16q13-6 20 1q3 4-4 10l-12 6l14-4q10-2 10 6q0 6-9 9l-24 10l-31 13Z"/>
    <path d="M322 100l-34-12q-15-4-21 4q-2 5 5 9l11 5l-13 2q-9 3-6 9q3 5 11 6l23 6l24 8Z"/>
   </g>
   <path d="M12 124l23-8m-17 14 21-6m258-12-17-6m22 17-21-7" stroke="#f6d9bd" strokeWidth="2" strokeLinecap="round" opacity=".62"/>
   <path d="M-2 114l16 36H-2Z" fill="#6d7c86"/><path d="M322 96l-14 40h14Z" fill="#b57e82"/>
  </svg>{!board&&(story.c7GalleryGift==='chip'||story.c7GalleryGift==='blue')?<img className="printed-gift" src={assetUrl(`gallery7.${story.c7GalleryGift}`)} alt={story.c7GalleryGift==='chip'?'Скол со светлой треугольной выемкой':'Просвет'}/>:!board?<span className="print-sugar"/>:null}{!board&&<svg className={`print-hand hand-${story.c8Frame}`} viewBox="0 0 200 100" aria-hidden="true">
   <path d="M202 82l-68-10q-16-2-27-10L80 46q-8-5-4-11q4-5 11-1l21 11l-18-16q-6-6-1-11q5-4 11 2l26 21l-14-21q-4-7 2-10q6-3 11 6l20 27l57 5Z" fill="#e2b99f" stroke="#99705b" strokeWidth="2" strokeLinejoin="round"/>
   <path d="M180 44l22 2v38l-26-4Z" fill="#c79586" stroke="#855a4e" strokeWidth="1.5"/>
  </svg>}</div>:<PortraitPrint story={story} source={source}/>}
  <figcaption>{label}</figcaption>
 </figure>;
}

export function TravellersStatus({run}:{run:Run}){
 const n=run.nodeId.split('.').at(-1)!;
 if(!['open','river','riverChoice','riverHelp','ford','bridge','quarry','quarryChoice','tunnel','contour','cat','catChoice','arrivalHelp','marsh','upperDay','upperNight','arrived'].includes(n))return null;
 const r=travellerView(run);
 return <p className="traveller-status" aria-live="polite">☀ {r.suns} / 5 · Мостик {r.bridge==='carried'?'с собой':r.bridge==='river'?'у реки':'у болота'} · Фонарь {r.lantern==='charged'?'заряжен':'пуст'}</p>;
}

export function TravellersScene({run}:{run:Run}){
 const n=run.nodeId.split('.').at(-1)!,s=run.story,r=travellerView(run);
 const playing=['open','river','riverChoice','riverHelp','ford','bridge','quarry','quarryChoice','tunnel','contour','cat','catChoice','arrivalHelp','marsh','upperDay','upperNight','arrived'].includes(n);
 const home=['home','homeChoice','homeKissFirst','homeKissFirstChoice','homeKissFirstNeck','homeKissFirstSoft','homeKissAgain','homeHug','homeNear','late','lateChoice','lateLeave','sleep'].includes(n);
 if(n==='prints'){
  const i=run.lineIndex,source=i>=16?'feet':i>=12?'secretKitchen':i>=10?9:i>=9?8:i>=8?7:6;
  return <div className="traveller-props prints-scene"><div className="photo-envelope"/>{i>=4&&<SelectedPrint story={s} source={source}/>}</div>;
 }
 if(home)return <svg className="traveller-home-props" viewBox="0 0 1086 1448" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Фотографии на столе; подаренная открытка только рядом с монитором">
  <g transform="translate(245 792) rotate(6)">
   <rect x="4" y="6" width="210" height="86" rx="4" fill="#3a281c" opacity=".24"/>
   <rect width="210" height="86" rx="4" fill="#d8c09f" stroke="#8b7057" strokeWidth="2.4"/>
   <path d="M4 82L78 44M206 82L132 44" stroke="#b99e7d" strokeWidth="2"/>
   <path d="M2 2L105 50L208 2" fill="#edd8b9" stroke="#8b7057" strokeWidth="2.2" strokeLinejoin="round"/>
   <circle cx="105" cy="50" r="10" fill="#b87683" stroke="#794c5a" strokeWidth="2"/>
   <path d="M99 47q4-5 9-3m-4 13q5 0 7-4M17 7l37 16m121-5 24-11" fill="none" stroke="#f4dbc4" strokeLinecap="round" strokeWidth="1.7" opacity=".66"/>
  </g>
  {s.c7GalleryGift&&s.c7GalleryGift!=='none'&&<g><rect x="946" y="531" width="92" height="118" fill="#f5ebd8"/><image x="950" y="535" width="84" height="110" preserveAspectRatio="xMidYMid meet" href={assetUrl(`gallery7.${s.c7GalleryGift}`)} aria-label="Подаренная открытка стоит рядом с монитором"/></g>}
  {n==='sleep'&&run.lineIndex>=3&&<g>
   <path d="M50 720Q80 656 210 688L252 850H50Z" fill="#b7b0c3" stroke="#7d738d" strokeWidth="3"/>
   <path d="M72 726q58-24 128-6M68 770q70-20 150-4" fill="none" stroke="#d9d2e3" strokeWidth="4" strokeLinecap="round"/>
   <path d="M280 700Q330 666 430 708L472 850H290Z" fill="#d5bc9e" stroke="#997f62" strokeWidth="3"/>
   <path d="M302 722q55-18 118 4M300 766q64-16 140 8" fill="none" stroke="#eedcc4" strokeWidth="4" strokeLinecap="round"/>
  </g>}
 </svg>;
 if((n==='open'&&run.lineIndex<3)||(n==='arrived'&&run.lineIndex>=7))return <div className="traveller-props"><div className="game-box">Два<br/>путешественника</div></div>;
 if(playing)return <div className="traveller-props"><TravellersBoard state={r} position={r.position} night={r.night}/>{<div className="feet-by-board"><FeetPrint/></div>}{n==='cat'&&run.lineIndex<5&&<div className="cat-in-box" aria-label="Пончик в крышке коробки на памятке"><span/><img src={assetUrl('cat.season2.gouache.box')} alt="Пончик занял коробку"/></div>}{(n==='cat'&&run.lineIndex>=5||['catChoice','arrivalHelp','marsh','upperDay','upperNight','arrived'].includes(n))&&<div className="cat-chair" aria-label="Пончик на отдельном стуле с пледом"><span/><img src={assetUrl(firstSeasonCat)} alt="Пончик отдыхает на пледе"/></div>}</div>;
 if(n==='entry'||n==='cafeLate')return <div className="traveller-props"><div className="game-box">Два<br/>путешественника</div>{n==='cafeLate'&&<div className="cat-chair"><span/><img src={assetUrl(firstSeasonCat)} alt="Пончик на стуле с пледом"/></div>}</div>;
 return null;
}
