import {useId} from 'react';
import type {Run,StoryState} from '../engine/types';
import {travellerView,travellerResources} from '../content/travellers';
import {assetUrl} from '../content/assetManifest';
import {firstSeasonBackground,firstSeasonCat,firstSeasonVlad} from '../content/firstSeasonArt';
import {SupperArt} from './SupperArt';

export function FeetPrint(){
 return <img className="feet-print" src={assetUrl('travellers10.walk-print')} width={900} height={600} alt="Две пары обуви рядом на набережной"/>;
}

 export function TravellersBoard({state,position,night=false}:{state:ReturnType<typeof travellerResources>;position?:string;night?:boolean}){
 const uid=useId().replace(/:/g,'');
 const posKey=position??state.position;
 const point=({start:[70,218],river:[211,204],quarry:[349,177],last:[476,106],house:[496,146]} as Record<string,number[]>)[posKey]??[70,218];
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
   {(state.bridge==='river'||state.bridge==='marsh')&&<g className="traveller-bridge-placed" transform={state.bridge==='river'?'translate(138 148) rotate(17)':'translate(414 200) rotate(-38)'}>
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
   {night&&<g className="traveller-night-glow" style={{transform:`translate(${point[0]}px, ${point[1]}px)`}}><circle r="72" fill={`url(#${uid}-night)`}/></g>}
   {[-13,13].map((dx,i)=><g key={dx} className={`traveller-piece${i?' traveller-piece-second':''}`} style={{transform:`translate(${point[0]+dx}px, ${point[1]-2}px)`}}>
    <ellipse key={`sh-${posKey}`} className={posKey==='start'?undefined:`traveller-shadow-hop${i?' traveller-hop-second':''}`} cy="11" rx="13" ry="5" fill="#3a281c" opacity=".3"/>
    <g key={`p-${posKey}`} className={posKey==='start'?undefined:`traveller-hop${i?' traveller-hop-second':''}`}>
     <path d="M-11 7L-7-14Q0-18 7-14L11 7Q0 12-11 7Z" fill={i?'#b86962':'#58758a'} stroke={i?'#6b3936':'#344654'} strokeWidth="1.8"/>
     <path d="M-5-12l-2 17" stroke={i?'#d9948d':'#85a2b5'} strokeWidth="2" strokeLinecap="round" opacity=".55"/>
     <path d="M-8-11q8 4 16 0" fill="none" stroke={i?'#f7ebd2':'#ecc77e'} strokeWidth="3.4" strokeLinecap="round"/>
     {!i&&<path d="M3-9l3 8" stroke="#ecc77e" strokeWidth="2.6" strokeLinecap="round"/>}
     <circle cy="-20.5" r="8" fill={i?'#faeadc':'#efd0ad'} stroke="#5c4436" strokeWidth="1.7"/>
     <path d={i?'M-8-20q-1-10 15-7q3 5 1 11q-4-8-16-4Z':'M-8-22q3-9 15-4q2 4 0 6q-6-5-15-2Z'} fill={i?'#9a7e60':'#6f4e35'}/>
     <circle cx="-2.5" cy="-22.5" r="1.6" fill="#fff7ea" opacity=".6"/>
    </g>
   </g>)}
   <rect x="17" y="274" width="566" height="49" fill={night?'#7c7382':'#d9c698'} opacity=".86"/>
   <path d="M17 274h566" stroke={night?'#574f5e':'#8e7350'} strokeWidth="1.8"/>
   <path d="M17 276h566" stroke="#fff7e2" strokeWidth="1" opacity=".45"/>
   <text className="board-title" x="28" y="303" fill={night?'#f6ebd6':'#594333'} fontSize="12.5" fontFamily="Georgia,serif" letterSpacing="1.2" fontWeight="700">ДВА ПУТЕШЕСТВЕННИКА</text>
   {state.bridge==='carried'&&<g className="board-carried-bridge" transform="translate(274 292)">
    <rect x="1" y="2" width="34" height="14" rx="2.2" fill="#463222" opacity=".24"/>
    <rect width="34" height="14" rx="2.2" fill="#ca945b" stroke="#69482e" strokeWidth="1.6"/>
    <path d="M6.5 1v12M12 1v12M17.5 1v12M23 1v12M28.5 1v12" stroke="#785336" strokeWidth="1.2"/>
    <path d="M2 3h30M2 11h30" stroke="#96683f" strokeWidth="1.8"/>
   </g>}
   <g transform="translate(334 297)">
    {charged&&<circle r="24" fill={`url(#${uid}-glow)`}/>}
    <path d="M-6-13q0-9 6-9t6 9" fill="none" stroke="#5d4634" strokeWidth="2"/>
    <path d="M-11-11h22l-3 4h-16z" fill="#7c5d43" stroke="#473425" strokeWidth="1.5"/>
    <path d="M-8-7h16l2.5 18h-21z" fill={charged?'#ffeb9e':'#9e988c'} stroke="#594230" strokeWidth="1.7"/>
    <path d="M-6-7l-1 18M6-7l1 18" stroke="#8c6949" strokeWidth="1.2"/>
    {charged&&<path d="M0-3q4 5 0 9q-4-4 0-9Z" fill="#fffcf0"/>}
    <path d="M-12 11h24v4.5h-24z" fill="#7c5d43" stroke="#473425" strokeWidth="1.5"/>
   </g>
   {[0,1,2,3,4].map(i=>i<state.suns?<g key={i} transform={`translate(${388+i*39} 299)`}>
    <circle cy="2.5" r="13" fill="#593f22" opacity=".28"/>
    <circle r="13" fill={`url(#${uid}-coin)`} stroke="#8e6526" strokeWidth="1.6"/>
    <circle r="9" fill="none" stroke="#fff2b5" strokeWidth="1" opacity=".8"/>
    <circle r="5.2" fill="#fff3bd"/>
    <path d="M0-10.5V-7M0 7V10.5M-10.5 0H-7M7 0H10.5M-7.4-7.4l2.4 2.4M5 5l2.4 2.4M-7.4 7.4l2.4-2.4M5-5l2.4-2.4" stroke="#fff6cc" strokeWidth="1.5" strokeLinecap="round"/>
   </g>:<g key={i} transform={`translate(${388+i*39} 299)`} opacity=".34">
    <circle r="12" fill={night?'#57505e':'#cbb688'} stroke={night?'#d9ccb4':'#856940'} strokeWidth="1.5" strokeDasharray="3 3"/>
   </g>)}
  </g>
  <rect x="22" y="21" width="556" height="297" rx="4" fill="none" stroke="#8e714e" strokeWidth="1" strokeDasharray="4 4" opacity=".42"/>
 </svg>;
}

function CookieBag({className,folded=false}:{className?:string;folded?:boolean}){
 const uid=useId().replace(/:/g,'');
 return <svg className={className} viewBox="0 0 92 114" aria-hidden="true">
  <defs>
   <linearGradient id={`${uid}-front`} x1=".05" y1="0" x2=".95" y2="1">
    <stop offset="0" stopColor="#e5be8d"/><stop offset=".52" stopColor="#c9996b"/><stop offset="1" stopColor="#9c6e4e"/>
   </linearGradient>
   <linearGradient id={`${uid}-side`} x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stopColor="#a87954"/><stop offset="1" stopColor="#6f4a39"/>
   </linearGradient>
   <linearGradient id={`${uid}-inside`} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stopColor="#4f3329"/><stop offset="1" stopColor="#7a5340"/>
   </linearGradient>
   <radialGradient id={`${uid}-sticker`} cx="35%" cy="30%" r="72%">
    <stop offset="0" stopColor="#faf0dc"/><stop offset="1" stopColor="#dfc7a6"/>
   </radialGradient>
  </defs>
  {/* Soft shadow underneath */}
  <ellipse cx="47" cy="107" rx="34" ry="5.5" fill="#281817" opacity=".32"/>
  {/* Twisted kraft handles */}
  {!folded&&<>
   <path d="M35 32c-2-18 6-27 14-27s15 9 12 27" fill="none" stroke="#855d42" strokeWidth="3.6" strokeLinecap="round"/>
   <path d="M35 32c-2-18 6-27 14-27s15 9 12 27" fill="none" stroke="#d5ab7f" strokeWidth="1.2" strokeDasharray="2 2.5" strokeLinecap="round" opacity=".7"/>
  </>}
  {/* Inside top opening & parchment lining */}
  <path d="M18 32h52l5 6H14Z" fill={`url(#${uid}-inside)`} stroke="#634233" strokeWidth="1.4" strokeLinejoin="round"/>
  {!folded&&<>
   {/* Subtle parchment tissue & peeking chocolate-chip cookie */}
   <path d="M23 32l8-8 12 5 11-6 12 9Z" fill="#f6ead4" stroke="#b99c7c" strokeWidth="1.1" strokeLinejoin="round"/>
   <ellipse cx="47" cy="31" rx="11" ry="6" fill="#be8450" stroke="#7d4f32" strokeWidth="1.2"/>
   <circle cx="43" cy="30" r="1.4" fill="#4f2f23"/><circle cx="50" cy="29.5" r="1.3" fill="#4f2f23"/><circle cx="47" cy="32.5" r="1.2" fill="#4f2f23"/>
  </>}
  {/* Right shaded side gusset */}
  <path d="M70 32l8 4 5 64-13 6Z" fill={`url(#${uid}-side)`} stroke="#5e3e30" strokeWidth="1.6" strokeLinejoin="round"/>
  <path d="M75 38l3 62" stroke="#53362a" strokeWidth="1.3" opacity=".65"/>
  {/* Main kraft front face */}
  <path d="M18 32h52l4 74H12Z" fill={`url(#${uid}-front)`} stroke="#694736" strokeWidth="1.7" strokeLinejoin="round"/>
  {/* Rolled/creased top cuff when folded, or reinforced handle rim */}
  {folded?<path d="M16 28h56l2 14H14Z" fill="#deb686" stroke="#694736" strokeWidth="1.6" strokeLinejoin="round"/>:<path d="M27 36c-1-17 7-26 16-26s17 9 14 26" fill="none" stroke="#6e4b36" strokeWidth="3.8" strokeLinecap="round"/>}
  {!folded&&<path d="M27 36c-1-17 7-26 16-26s17 9 14 26" fill="none" stroke="#f0cfa0" strokeWidth="1.5" strokeDasharray="2.2 2.4" strokeLinecap="round" opacity=".88"/>}
  {/* Soft kraft creases & warm evening garland rim light */}
  <path d="M19 35l-4 67" stroke="#ffe7bd" strokeWidth="1.5" strokeLinecap="round" opacity=".52"/>
  <path d="M20 34h48" stroke="#f7dfb8" strokeWidth="1.2" strokeLinecap="round" opacity=".58"/>
  <path d="M18 89q24 4 53-1M24 54q15 3 27-2M32 97q18 2 35-2" fill="none" stroke="#8b5e42" strokeWidth="1.15" strokeLinecap="round" opacity=".45"/>
  <path d="M20 66l11-2m26 14 10-2m-42 22 14 1" stroke="#f7dfba" strokeWidth="1" strokeLinecap="round" opacity=".42"/>
  {/* Bakery round stamp sticker with cookie motif */}
  <g transform="translate(43 68) rotate(-3)">
   <circle cy="1.2" r="14.5" fill="#5e3c2e" opacity=".2"/>
   <circle r="14" fill={`url(#${uid}-sticker)`} stroke="#9c6c56" strokeWidth="1.3"/>
   <circle r="11.2" fill="none" stroke="#b98a6f" strokeWidth=".8" strokeDasharray="2 1.8"/>
   <circle cy="-1" r="5.6" fill="#c98e58" stroke="#7d4f32" strokeWidth="1.1"/>
   <circle cx="-2" cy="-2.2" r="1.1" fill="#543326"/><circle cx="2.1" cy="-2.5" r="1" fill="#543326"/><circle cx=".3" cy=".8" r="1.1" fill="#543326"/><circle cx="-1.8" cy="1.2" r=".8" fill="#543326"/>
   <path d="M-6 7.2q6 2.2 12 0" fill="none" stroke="#855645" strokeWidth="1.1" strokeLinecap="round"/>
  </g>
 </svg>;
}

function PortraitPrint({story,source}:{story:StoryState;source:6|7|9}){
 const uid=useId().replace(/:/g,'');
 const subject=source===6?story.c6PhotoSubject:source===7?story.c7GalleryFrame:story.c9Frame;
 const background=source===6?story.c6PhotoPlace==='upper'?'bg.photo6.upper':'bg.photo6.shade':source===7?'bg.gallery7.outside':'bg.courtyard9.open';
 const backView=source===6&&subject==='her';
 return <div className={`printed-scene print-${source} subject-${subject}`}><img className="printed-background" src={assetUrl(firstSeasonBackground(background))} alt=""/>
  {subject==='vlad'&&<img className="printed-person" src={assetUrl(firstSeasonVlad('bg.cafe.window','smile'))} alt=""/>}
  {(subject==='her'||subject==='both')&&<svg className="printed-silhouette" viewBox="0 0 180 320" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
   <defs>
    <linearGradient id={`${uid}-hair`} x1=".12" y1="0" x2=".88" y2="1">
     <stop offset="0" stopColor="#b89c7c"/><stop offset=".5" stopColor="#93785c"/><stop offset="1" stopColor="#6c5540"/>
    </linearGradient>
    <linearGradient id={`${uid}-hairShade`} x1="0" y1="0" x2="1" y2="1">
     <stop offset="0" stopColor="#866c53"/><stop offset="1" stopColor="#5c4735"/>
    </linearGradient>
    <linearGradient id={`${uid}-coat`} x1=".08" y1="0" x2=".92" y2="1">
     <stop offset="0" stopColor="#6c7086"/><stop offset=".52" stopColor="#4f5368"/><stop offset="1" stopColor="#353848"/>
    </linearGradient>
    <linearGradient id={`${uid}-coatSleeve`} x1="0" y1="0" x2="1" y2="1">
     <stop offset="0" stopColor="#63677d"/><stop offset=".6" stopColor="#494d61"/><stop offset="1" stopColor="#323545"/>
    </linearGradient>
    <linearGradient id={`${uid}-scarf`} x1="0" y1="0" x2="1" y2="1">
     <stop offset="0" stopColor="#e5c1c7"/><stop offset=".55" stopColor="#be919d"/><stop offset="1" stopColor="#8c6371"/>
    </linearGradient>
    <linearGradient id={`${uid}-skin`} x1=".15" y1="0" x2=".85" y2="1">
     <stop offset="0" stopColor="#fff4eb"/><stop offset=".58" stopColor="#f4dac9"/><stop offset="1" stopColor="#d9b6a3"/>
    </linearGradient>
    <linearGradient id={`${uid}-cuff`} x1="0" y1="0" x2="1" y2="1">
     <stop offset="0" stopColor="#edd6d2"/><stop offset="1" stopColor="#c9a5a4"/>
    </linearGradient>
    <linearGradient id={`${uid}-jeans`} x1="0" y1="0" x2="1" y2="0">
     <stop offset="0" stopColor="#4b5369"/><stop offset=".55" stopColor="#3c4254"/><stop offset="1" stopColor="#2b303f"/>
    </linearGradient>
   </defs>
   {backView?<>
    {/* Back view (со спины): sleek adult silhouette, flowing wavy blonde hair, tailored belted coat, scarf, real arms & 5-fingered hands */}
    <path d="M71 252l-3 56h15l3-56Z" fill={`url(#${uid}-jeans)`} stroke="#282c3a" strokeWidth="1.3"/>
    <path d="M95 252l3 56h15l-3-56Z" fill={`url(#${uid}-jeans)`} stroke="#282c3a" strokeWidth="1.3"/>
    <path d="M67 306q8-3 17 0l2 9q-10 3-20 0Z" fill="#41485c" stroke="#282c3a" strokeWidth="1.2"/>
    <path d="M97 306q8-3 17 0l2 9q-10 3-20 0Z" fill="#41485c" stroke="#282c3a" strokeWidth="1.2"/>
    <path d="M67 313q10 2 18 0M97 313q10 2 18 0" fill="none" stroke="#efe4d2" strokeWidth="2.2"/>
    {/* Tailored slim autumn coat body */}
    <path d="M62 103c9-7 19-10 28-10s19 3 28 10c4 7 6 24 6 46l7 104c-14 6-27 8-41 8s-27-2-41-8l7-104c0-22 2-39 6-46Z" fill={`url(#${uid}-coat)`} stroke="#2f3242" strokeWidth="1.5"/>
    {/* Coat back seams, waist belt, loops & soft hem folds */}
    <path d="M90 102v158M75 166l-5 88M105 166l5 88" fill="none" stroke="#2c2f3e" strokeWidth="1.15" opacity=".46"/>
    <path d="M61 154q29 6 58 0l1 8q-30 6-60 0Z" fill="#43475b" stroke="#2a2d3c" strokeWidth="1.25"/>
    <rect x="75" y="154" width="4.5" height="9" rx="1.4" fill="#52566c" stroke="#2c2f3e" strokeWidth="1"/>
    <rect x="100.5" y="154" width="4.5" height="9" rx="1.4" fill="#52566c" stroke="#2c2f3e" strokeWidth="1"/>
    {/* Left arm (relaxed at side, natural sleeve folds, cuff & graceful 5-fingered hand) */}
    <g>
     <path d="M62 105c-10 15-17 42-20 76l14 3c4-22 8-45 13-63Z" fill={`url(#${uid}-coatSleeve)`} stroke="#313445" strokeWidth="1.45"/>
     <path d="M46 146q5 4 10 3m-11 20q5 3 11 2" fill="none" stroke="#2d3040" strokeWidth="1.1" opacity=".52"/>
     <path d="M42 180l14 3-1 7-14-3Z" fill={`url(#${uid}-cuff)`} stroke="#8f6c6e" strokeWidth="1.15"/>
     <path d="M43 187l11 2c1.5 5 2 10 1.4 14-.4 2.8-2.3 2.7-2.6-.2l-.4-6-.5 9.8c-.2 3-2.2 3-2.5-.1l-.3-9.2-.7 9c-.3 2.8-2.2 2.7-2.2-.3l.1-8.5-.9 7.2c-.4 2.4-2.1 2.1-2-.6l.7-8.2-2.2 4.6c-1.1 2-2.8.9-1.9-1.7l2.7-8.8Z" fill={`url(#${uid}-skin)`} stroke="#9a7566" strokeWidth="1.1"/>
    </g>
    {/* Right arm (relaxed slightly outward with natural cuff & 5-fingered hand) */}
    <g>
     <path d="M118 105c10 15 17 42 20 76l-14 3c-4-22-8-45-13-63Z" fill={`url(#${uid}-coatSleeve)`} stroke="#313445" strokeWidth="1.45"/>
     <path d="M124 146q5 4 10 3m-10 20q5 3 11 2" fill="none" stroke="#2d3040" strokeWidth="1.1" opacity=".52"/>
     <path d="M124 183l14-3 1 7-14 3Z" fill={`url(#${uid}-cuff)`} stroke="#8f6c6e" strokeWidth="1.15"/>
     <path d="M126 189l11-2 2.7 8.8c.9 2.6-.8 3.7-1.9 1.7l-2.2-4.6.7 8.2c.1 2.7-1.6 3-2 .6l-.9-7.2.1 8.5c0 3-1.9 3.1-2.2.3l-.7-9-.3 9.2c-.3 3.1-2.3 3.1-2.5.1l-.5-9.8-.4 6c-.3 2.9-2.2 3-2.6.2-.6-4-.1-9 1.4-14Z" fill={`url(#${uid}-skin)`} stroke="#9a7566" strokeWidth="1.1"/>
    </g>
    {/* Cozy dusty-rose knitted scarf wrapped around collar + fringed tail */}
    <path d="M66 90q24 10 48 0c4 9 2 18-5 24-12 5-26 5-38 0-7-6-9-15-5-24Z" fill={`url(#${uid}-scarf)`} stroke="#785462" strokeWidth="1.35"/>
    <path d="M97 108l13 42-16 4-11-41Z" fill={`url(#${uid}-scarf)`} stroke="#785462" strokeWidth="1.25"/>
    <path d="M71 99q19 7 38 0m-33 8q14 5 28 0m-4 9l7 28m-12-25l7 28" fill="none" stroke="#f8e4e6" strokeWidth="1.15" opacity=".56"/>
    <path d="M93 153l2 7m4-8l2 7m4-8l2 7m4-8l2 7" stroke="#d5aeb7" strokeWidth="1.2" opacity=".82"/>
    {/* Flowing layered medium-ashy (русые) wavy hair from behind */}
    <path d="M66 53c0-18 11-29 24-29s24 11 24 29c2 21 8 44 6 70-8 7-16 11-23 10-4 2-10 2-14 0-7 1-15-3-23-10-2-26 4-49 6-70Z" fill={`url(#${uid}-hair)`} stroke="#5c4635" strokeWidth="1.4"/>
    <path d="M72 45c-4 26-5 51-6 77M83 33c-2 30-2 62-1 96M94 30c1 32 1 65 0 99M105 40c4 26 6 54 8 81" fill="none" stroke={`url(#${uid}-hairShade)`} strokeWidth="1.35" opacity=".55"/>
    <path d="M74 36q16-8 32 0M70 64q5 22 2 48M110 64q-5 22-2 48M83 49q7 28 4 62" fill="none" stroke="#d8c0a0" strokeWidth="1.5" opacity=".58"/>
    <path d="M75 27q-12 9-12 34c-1 17-4 34-3 54m-1 8c-8 17-12 36-15 58" fill="none" stroke="#ffe5bd" strokeWidth="1.9" opacity=".62"/>
   </>:<>
    {/* Front / 3/4 view (галерея и отражение): sleek adult proportions matching Vlad, natural jawline, flowing hair, articulated arms & 5-fingered hands */}
    <path d="M63 50c-11 14-16 42-12 74 8-5 15-6 22-5 11 3 23 3 34 0 7-1 14 1 19 6 3-32-1-60-12-75-12-16-39-16-51 0Z" fill={`url(#${uid}-hairShade)`} stroke="#5a4534" strokeWidth="1.35"/>
    <path d="M72 252l-3 56h15l3-56Z" fill={`url(#${uid}-jeans)`} stroke="#282c3a" strokeWidth="1.3"/>
    <path d="M96 252l3 56h15l-3-56Z" fill={`url(#${uid}-jeans)`} stroke="#282c3a" strokeWidth="1.3"/>
    <path d="M68 306q8-3 17 0l2 9q-10 3-20 0Z" fill="#41485c" stroke="#282c3a" strokeWidth="1.2"/>
    <path d="M98 306q8-3 17 0l2 9q-10 3-20 0Z" fill="#41485c" stroke="#282c3a" strokeWidth="1.2"/>
    {/* Sleek tailored autumn wool coat body */}
    <path d="M61 104c9-8 19-11 29-11s20 3 29 11c5 7 7 23 8 44l7 104c-15 7-29 9-44 9s-29-2-44-9l7-104c1-21 3-37 8-44Z" fill={`url(#${uid}-coat)`} stroke="#2f3242" strokeWidth="1.5"/>
    <path d="M76 96l14 30 14-30M90 126v134M64 158q26 6 52 0M72 192l-4 60M108 192l4 60" fill="none" stroke="#2c2f3e" strokeWidth="1.25" opacity=".58"/>
    <path d="M76 96l-9 17 14 13 9-11Z" fill="#5b5f76" stroke="#313446" strokeWidth="1.15"/>
    <path d="M104 96l9 17-14 13-9-11Z" fill="#5b5f76" stroke="#313446" strokeWidth="1.15"/>
    <circle cx="85" cy="142" r="2" fill="#2d3040"/><circle cx="85" cy="157" r="2" fill="#2d3040"/><circle cx="85" cy="173" r="2" fill="#2d3040"/>
    <path d="M102 182h19v3.8h-19Z" fill="#3e4255" stroke="#2a2d3c" strokeWidth="1"/>
    {/* Slender neck & refined 3/4 oval face with tapered chin */}
    <path d="M83 74h14l2.5 21H80.5Z" fill={`url(#${uid}-skin)`}/>
    <path d="M83 77q7 3.5 14 0" fill="none" stroke="#cca592" strokeWidth="1.2" opacity=".6"/>
    <path d="M74 51c0-16 7.5-24 16.5-24s16.5 8.5 16 24c-.5 11.5-5.5 21.5-15.5 24.5-10.2-2.5-17-12-17-24.5Z" fill={`url(#${uid}-skin)`} stroke="#b8988a" strokeWidth="1.25"/>
    {/* Delicate anime-gouache features */}
    <ellipse cx="82" cy="59.5" rx="3.8" ry="1.9" fill="#e9aeb2" opacity=".4"/>
    <ellipse cx="99.5" cy="59.5" rx="3.4" ry="1.7" fill="#e9aeb2" opacity=".38"/>
    <path d="M80 48.5q3.6-2.2 7.2-.4m8.2-.2q3.4-2 6.8-.2" fill="none" stroke="#7d6352" strokeWidth="1.25" opacity=".76"/>
    <path d="M80.5 53.8q3.5-2.6 7-.2" fill="none" stroke="#4f3e3b" strokeWidth="1.65"/>
    <ellipse cx="84.2" cy="54.4" rx="2" ry="2.2" fill="#5e6d7a"/>
    <circle cx="83.6" cy="53.6" r=".85" fill="#fffaf2"/>
    <path d="M95.5 53.6q3.3-2.4 6.5-.1" fill="none" stroke="#4f3e3b" strokeWidth="1.65"/>
    <ellipse cx="98.8" cy="54.3" rx="1.9" ry="2.1" fill="#5e6d7a"/>
    <circle cx="98.2" cy="53.5" r=".8" fill="#fffaf2"/>
    <path d="M91.5 57.5l1 3.8-1.5.6" fill="none" stroke="#be9989" strokeWidth="1" opacity=".68"/>
    <path d="M87.5 66.2q3.8 2.2 7.4-.3" fill="none" stroke="#b57b7d" strokeWidth="1.35" opacity=".82"/>
    {/* Flowing medium-ashy (русые) parted hair & face-framing waves */}
    <path d="M67 49c2-19 14-27 28-24 12 2.2 18 12 18 28-4-12-12-18-23-16-8.5 1.3-14.5 5-17 14-2 14 0 31-4 48-6-15-6-34-2-50Z" fill={`url(#${uid}-hair)`} stroke="#5c4635" strokeWidth="1.3"/>
    <path d="M108 46c5 16 8 36 4 55-4-12-6-26-6-40Z" fill={`url(#${uid}-hair)`} stroke="#5c4635" strokeWidth="1.2"/>
    <path d="M74 34q16-8 31 2M68 62q-2 18-1 35M109 58q2 16 1 32" fill="none" stroke="#d8c0a0" strokeWidth="1.45" opacity=".6"/>
    {/* Cozy knitted dusty-rose scarf */}
    <path d="M66 89q24 11 48 0c4 9 2 19-5 25-12 6-26 6-38 0-7-6-9-16-5-25Z" fill={`url(#${uid}-scarf)`} stroke="#785462" strokeWidth="1.35"/>
    <path d="M91 109l12 42-17 4-9-41Z" fill={`url(#${uid}-scarf)`} stroke="#785462" strokeWidth="1.25"/>
    <path d="M71 98q19 7 38 0m-32 8q13 5 26 0m-5 11l6 27m-11-24l6 27" fill="none" stroke="#f8e3e5" strokeWidth="1.15" opacity=".58"/>
    <path d="M87 154l2 7m4-8l2 7m4-8l2 7m4-8l2 7" stroke="#d5aeb7" strokeWidth="1.2" opacity=".82"/>
    {/* Left arm (bent gracefully with 5-fingered hand touching scarf) */}
    <g>
     <path d="M61 106c-12 17-16 40-12 58 3 8 12 12 25 9l3-14c-8 1-12-1-13-6-1-11 2-25 7-37Z" fill={`url(#${uid}-coatSleeve)`} stroke="#313445" strokeWidth="1.45"/>
     <path d="M52 150q5 4 12 3" fill="none" stroke="#2c2f3f" strokeWidth="1.15" opacity=".58"/>
     <path d="M72 159l7 1-2 14-7-1Z" fill={`url(#${uid}-cuff)`} stroke="#8f6c6e" strokeWidth="1.15"/>
     <path d="M78 160l10-3.8c2.6-.9 4 .8 2 2.2l-5.2 3 9.8-3c2.8-.7 3.9 1.5 1.4 2.7l-8.6 3.5 10-1.9c2.8-.5 3.6 1.8 1 2.8l-9.2 2.8 8.6-.7c2.6-.2 3.1 2 .6 2.7l-8.8 1.7 6.2.6c2.2.3 2.1 2.3-.3 2.6l-10.8.7c-4.2.2-7.2-1.3-9-4.2Z" fill={`url(#${uid}-skin)`} stroke="#9a7566" strokeWidth="1.05"/>
    </g>
    {/* Right arm (relaxed down along coat with cuff & 5-fingered hand near pocket) */}
    <g>
     <path d="M119 106c10 17 15 41 17 72l-14 3c-3-20-7-41-12-60Z" fill={`url(#${uid}-coatSleeve)`} stroke="#313445" strokeWidth="1.45"/>
     <path d="M123 146q5 4 10 2m-9 20q6 2 11 0" fill="none" stroke="#2c2f3f" strokeWidth="1.15" opacity=".52"/>
     <path d="M121 179l15-3 1 7-15 3Z" fill={`url(#${uid}-cuff)`} stroke="#8f6c6e" strokeWidth="1.15"/>
     <path d="M123 185l11-2 2.7 8.8c.9 2.6-.8 3.7-1.9 1.7l-2.2-4.6.7 8.2c.1 2.7-1.6 3-2 .6l-.9-7.2.1 8.5c0 3-1.9 3.1-2.2.3l-.7-9-.3 9.2c-.3 3.1-2.3 3.1-2.5.1l-.5-9.8-.4 6c-.3 2.9-2.2 3-2.6.2-.6-4-.1-9 1.4-14Z" fill={`url(#${uid}-skin)`} stroke="#9a7566" strokeWidth="1.1"/>
    </g>
   </>}
  </svg>}
  {subject==='both'&&<img className="printed-person print-reflected" src={assetUrl(firstSeasonVlad('bg.cafe.window','smile'))} alt=""/>}
  {source===7&&subject==='vlad'&&<span className="print-poster">ЛИНИИ<br/>И СВЕТ</span>}
  {source===7&&subject==='both'&&<i className="print-window-frame"/>}
  {source===9&&subject==='vlad'&&<CookieBag className="print-bag"/>}
  {source===9&&subject==='seats'&&<>
   <svg className="print-chairs" viewBox="0 0 200 140" aria-hidden="true">
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
   </svg>
   <CookieBag className="print-bag-seats" folded/>
  </>}
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
 const uid=useId().replace(/:/g,'');
 const board=story.c8Frame?.startsWith('board');
 const label=selectedPrintLabel(story,source);
 return <figure className={`selected-print ${source===8?`food-${story.c8Frame}`:''}`} aria-label={label}>
  {source==='feet'?<FeetPrint/>:source==='secretKitchen'?<SecretKitchenPrint/>:source===8?<div className="printed-food">{board?<SupperArt stage="board"/>:<SupperArt stage="half" shape={story.c8Shape} filling={story.c8Filling}/>}<svg className="print-board-hands" viewBox="0 0 360 210" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{display:board?'block':'none'}}>
   <defs>
    <linearGradient id={`${uid}-skinL`} x1="0" y1="0" x2="1" y2="1">
     <stop offset="0" stopColor="#f5d5ba"/><stop offset=".55" stopColor="#deac90"/><stop offset="1" stopColor="#b7836b"/>
    </linearGradient>
    <linearGradient id={`${uid}-skinR`} x1="1" y1="0" x2="0" y2="1">
     <stop offset="0" stopColor="#fae0ca"/><stop offset=".55" stopColor="#e5b89d"/><stop offset="1" stopColor="#c08d76"/>
    </linearGradient>
    <linearGradient id={`${uid}-cuffL`} x1="0" y1="0" x2="1" y2="1">
     <stop offset="0" stopColor="#8596a3"/><stop offset=".55" stopColor="#657582"/><stop offset="1" stopColor="#4c5964"/>
    </linearGradient>
    <linearGradient id={`${uid}-cuffR`} x1="1" y1="0" x2="0" y2="1">
     <stop offset="0" stopColor="#d9a5ab"/><stop offset=".55" stopColor="#b9838c"/><stop offset="1" stopColor="#8f5f69"/>
    </linearGradient>
    {/* Unified seamless 5-fingered left hand (Vlad) & right hand (Heroine) contours */}
    <path id={`${uid}-handL`} d="M40 124l30-11c13-4 24-6 34-4l22-6c7-2 11 2.4 7 7-4 3.8-12 6.2-21 8.5l29-7.5c7.5-2 11.5 3 7 7.6-5 4.4-15 7.4-27 10.2l24-6c7-1.6 10.5 3.4 6 7.6-5 4.2-15 7-27 9.8l16-3.6c6.2-1.4 9.2 3.4 4.8 7.2-5 4-15 6.4-28 9.2l-10 2.2c9 1.8 17 4.4 22 8 3.8 2.8 1.4 7.8-4.4 6.8-10-1.6-19-4.6-28-6.4-9 1.8-19 4.2-30 7.2l-20 5.5Z"/>
    <path id={`${uid}-handR`} d="M320 108l-30-6c-13-3-24-4-34 0l-23-2c-7-.6-10.5 4-6 8 4.2 3.6 12 4.8 21 6l-30-3c-7.5-.7-11 4.4-6 8.4 5.2 3.8 15 5.2 27 6.6l-26-2.2c-7-.6-10 4.4-5 8 5.2 3.6 15 5 28 6.2l-18-1.2c-6.2-.4-8.8 4.2-4 7.6 5.4 3.4 16 4.6 30 6l9 1c-9 2.6-16 6-20 10-3.4 3.2-.6 8 5 6.4 9.5-2.8 18-6.4 27-9.2 9 1.2 19 2.8 30 4.8l18 3.5Z"/>
   </defs>
   {/* Matching soft cast shadows on wooden board */}
   <use href={`#${uid}-handL`} transform="translate(2 6)" fill="#3b2218" opacity=".2"/>
   <use href={`#${uid}-handR`} transform="translate(-2 6)" fill="#3b2218" opacity=".2"/>
   {/* Left arm & hand (Vlad) — 5 continuous fingers + clean sweater cuff */}
   <g>
    <use href={`#${uid}-handL`} fill={`url(#${uid}-skinL)`} stroke="#855d4e" strokeWidth="1.45"/>
    <path d="M101 116l22-6m-18 13.5l26-7.2m-22 14.5l23-6.2m-17 13.2l15-3.8" fill="none" stroke="#996b59" strokeWidth="1.1" opacity=".62"/>
    <path d="M68 118q16-5 32-7m-14 13q13-3.5 26-5.5" fill="none" stroke="#fff2e0" strokeWidth="1.25" opacity=".6"/>
    <ellipse cx="129.5" cy="105.5" rx="3" ry="1.5" transform="rotate(-14 129.5 105.5)" fill="#fde9d8" opacity=".82"/>
    <ellipse cx="144.5" cy="112" rx="3.1" ry="1.5" transform="rotate(-14 144.5 112)" fill="#fde9d8" opacity=".82"/>
    <ellipse cx="146.5" cy="124.5" rx="3" ry="1.45" transform="rotate(-13 146.5 124.5)" fill="#fde9d8" opacity=".8"/>
    <ellipse cx="139" cy="136.8" rx="2.7" ry="1.35" transform="rotate(-12 139 136.8)" fill="#fde9d8" opacity=".78"/>
    <ellipse cx="129.5" cy="166.2" rx="3" ry="1.5" transform="rotate(14 129.5 166.2)" fill="#fde9d8" opacity=".76"/>
    <ellipse cx="145" cy="112" rx="5.5" ry="2.8" transform="rotate(-14 145 112)" fill="#fff8ec" opacity=".46"/>
    {/* Slate-blue knitted sleeve cleanly enclosing wrist & forearm */}
    <path d="M-10 120l68-22 21 67-89 29Z" fill="#3b2218" opacity=".18" transform="translate(2 5)"/>
    <path d="M-10 120l68-22 21 67-89 29Z" fill={`url(#${uid}-cuffL)`} stroke="#43505b" strokeWidth="1.55"/>
    <path d="M12 115l19 60M24 111l19 60M36 107l19 60M48 103l19 60" stroke="#a6b6c2" strokeWidth="1.2" opacity=".44"/>
   </g>
   {/* Right arm & hand (Heroine) — 5 continuous slender fingers + clean sweater cuff */}
   <g>
    <use href={`#${uid}-handR`} fill={`url(#${uid}-skinR)`} stroke="#8a6252" strokeWidth="1.4"/>
    <path d="M259 104l-23-2.2m21 11.5l-28-2.8m26 12.8l-25-2.4m19 11.8l-17-1.4" fill="none" stroke="#a07260" strokeWidth="1.05" opacity=".62"/>
    <path d="M294 106q-16-3.5-33-2.5m16 11.5q-13-2-26-1.5" fill="none" stroke="#fff4e6" strokeWidth="1.25" opacity=".62"/>
    <ellipse cx="229.5" cy="103" rx="3" ry="1.45" transform="rotate(7 229.5 103)" fill="#fff0e4" opacity=".84"/>
    <ellipse cx="215.5" cy="112.5" rx="3.1" ry="1.45" transform="rotate(7 215.5 112.5)" fill="#fff0e4" opacity=".84"/>
    <ellipse cx="212" cy="124.2" rx="2.9" ry="1.4" transform="rotate(6 212 124.2)" fill="#fff0e4" opacity=".82"/>
    <ellipse cx="219.5" cy="135.8" rx="2.7" ry="1.3" transform="rotate(5 219.5 135.8)" fill="#fff0e4" opacity=".8"/>
    <ellipse cx="233.5" cy="162" rx="2.9" ry="1.45" transform="rotate(-16 233.5 162)" fill="#fff0e4" opacity=".78"/>
    <ellipse cx="216" cy="113" rx="5" ry="2.5" transform="rotate(8 216 113)" fill="#fff8ec" opacity=".44"/>
    {/* Cozy dusty-rose knitted sleeve cleanly enclosing wrist & forearm */}
    <path d="M370 100l-68-15-14 66 82 18Z" fill="#3b2218" opacity=".18" transform="translate(-2 5)"/>
    <path d="M370 100l-68-15-14 66 82 18Z" fill={`url(#${uid}-cuffR)`} stroke="#724a53" strokeWidth="1.55"/>
    <path d="M350 97l-13 60M338 95l-13 60M326 92l-13 60M314 90l-13 60" stroke="#f0c8cc" strokeWidth="1.2" opacity=".46"/>
   </g>
  </svg>{!board&&<svg className={`print-hand hand-${story.c8Frame}`} viewBox="0 0 260 150" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
   <defs>
    <linearGradient id={`${uid}-hand`} x1=".08" y1="0" x2=".95" y2="1">
     <stop offset="0" stopColor={story.c8Frame==='foodVlad'?'#fae0ca':'#f4d4b9'}/><stop offset=".55" stopColor={story.c8Frame==='foodVlad'?'#e4b69b':'#ddab8f'}/><stop offset="1" stopColor={story.c8Frame==='foodVlad'?'#be8b74':'#b6826a'}/>
    </linearGradient>
    <linearGradient id={`${uid}-sleeve`} x1="0" y1="0" x2="1" y2="1">
     <stop offset="0" stopColor={story.c8Frame==='foodVlad'?'#d9a5ab':'#8596a3'}/><stop offset=".58" stopColor={story.c8Frame==='foodVlad'?'#b9838c':'#657582'}/><stop offset="1" stopColor={story.c8Frame==='foodVlad'?'#8e5e68':'#4b5863'}/>
    </linearGradient>
    {/* Single unified seamless 5-fingered hand & wrist contour */}
    <path id={`${uid}-foodHand`} d="M222 86l-54-9c-14-2.5-26-7-36-15-9-9-17-17-24-21-5-2.6-9.5 2.2-5.6 7.5 4.8 6.4 11 13 18 19.5l-30-13.5c-6.8-3-10.5 2.2-5.5 7 5 4.8 15 10 27 15.5l-34-18.5c-6.8-3.6-11 2-5.8 7 5.8 5.4 17 11.8 30 18l-31-14.5c-6.5-3-10.2 2.4-5 7.2 6 5.2 18 11 31 16.5l-20-8c-5.8-2.4-9 2.8-4 6.8 6.8 4.8 20 9.6 37 14 14 3.6 29 5.8 44 8l68 10Z"/>
   </defs>
   {/* Exact-shape cast shadow on table */}
   <use href={`#${uid}-foodHand`} transform="translate(2 6)" fill="#3b2218" opacity=".2"/>
   {/* Single 5-fingered hand reaching gracefully to the plate rim */}
   <use href={`#${uid}-foodHand`} fill={`url(#${uid}-hand)`} stroke="#886050" strokeWidth="1.45"/>
   {/* Subtle finger separations, knuckles & warm evening lamplight */}
   <path d="M107 75l24 12m-27 4l26 12.5m-22 6l22 10m-13 7.5l17 6.5" fill="none" stroke="#9d6f5d" strokeWidth="1.05" opacity=".6"/>
   <path d="M88 68q14 7 28 14m-22-2q14 7 28 13.5m30 8.5q20 4 42 6.5" fill="none" stroke="#fff3e4" strokeWidth="1.3" opacity=".64"/>
   {/* Delicate fingernails squarely inside all 5 fingertips */}
   <ellipse cx="104.5" cy="45" rx="2.9" ry="1.5" transform="rotate(36 104.5 45)" fill="#fdebe0" opacity=".84"/>
   <ellipse cx="89" cy="58.5" rx="3" ry="1.5" transform="rotate(26 89 58.5)" fill="#fdebe0" opacity=".84"/>
   <ellipse cx="75.5" cy="64" rx="3.1" ry="1.5" transform="rotate(28 75.5 64)" fill="#fdebe0" opacity=".84"/>
   <ellipse cx="76" cy="79" rx="2.9" ry="1.4" transform="rotate(27 76 79)" fill="#fdebe0" opacity=".82"/>
   <ellipse cx="87.5" cy="94" rx="2.6" ry="1.3" transform="rotate(24 87.5 94)" fill="#fdebe0" opacity=".8"/>
   {/* Textured knitted sleeve neatly covering wrist & forearm */}
   <path d="M202 74l64 9v64l-74-11c-2-20 2-42 10-62Z" fill="#3b2218" opacity=".18" transform="translate(2 5)"/>
   <path d="M202 74l64 9v64l-74-11c-2-20 2-42 10-62Z" fill={`url(#${uid}-sleeve)`} stroke={story.c8Frame==='foodVlad'?'#734b54':'#43505b'} strokeWidth="1.55"/>
   <path d="M213 78c-4 18-6 36-5 54m14-53c-4 18-6 37-5 55m14-53c-4 18-6 37-5 55m14-53c-4 18-6 37-5 55" fill="none" stroke={story.c8Frame==='foodVlad'?'#f1c8cc':'#a8b8c4'} strokeWidth="1.2" opacity=".46"/>
  </svg>}</div>:<PortraitPrint story={story} source={source}/>}
  <figcaption>{label}</figcaption>
 </figure>;
}

export function TravellersStatus({run}:{run:Run}){
 const n=run.nodeId.split('.').at(-1)!;
 if(!['open','river','riverChoice','riverHelp','ford','bridge','quarry','quarryChoice','tunnel','contour','cat','catChoice','arrivalHelp','marsh','upperDay','upperNight','arrived'].includes(n))return null;
 if((n==='open'&&run.lineIndex<3)||(n==='arrived'&&run.lineIndex>=7))return null;
 const r=travellerView(run);
 return <p className="traveller-status" aria-live="polite">☀ {r.suns} / 5 · Мостик {r.bridge==='carried'?'с собой':r.bridge==='river'?'у реки':'у болота'} · Фонарь {r.lantern==='charged'?'заряжен':'пуст'}</p>;
}

function PhotoEnvelope({opened}:{opened:boolean}){
 const uid=useId().replace(/:/g,'');
 return <svg className={`photo-envelope ${opened?'is-opened':''}`} viewBox="0 0 230 156" role="img" aria-label="Плотный бумажный конверт из фотолаборатории с выглядывающими белыми краями отпечатков">
  <defs>
   <linearGradient id={`${uid}-body`} x1="0" y1="0" x2=".92" y2="1">
    <stop offset="0" stopColor="#ebd1ae"/><stop offset=".52" stopColor="#d5b089"/><stop offset="1" stopColor="#b58966"/>
   </linearGradient>
   <linearGradient id={`${uid}-flap`} x1=".08" y1="0" x2=".9" y2="1">
    <stop offset="0" stopColor="#f5e0c0"/><stop offset=".6" stopColor="#e2c098"/><stop offset="1" stopColor="#c79d77"/>
   </linearGradient>
   <linearGradient id={`${uid}-inner`} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stopColor="#6c4b3b"/><stop offset="1" stopColor="#946e56"/>
   </linearGradient>
   <linearGradient id={`${uid}-gloss`} x1="0" y1="0" x2="1" y2=".9">
    <stop offset="0" stopColor="#ffffff" stopOpacity="0"/><stop offset=".45" stopColor="#ffffff" stopOpacity=".65"/><stop offset=".7" stopColor="#fff7e6" stopOpacity=".16"/><stop offset="1" stopColor="#ffffff" stopOpacity="0"/>
   </linearGradient>
  </defs>
  {/* Soft warm shadow on café table */}
  <rect x="16" y="48" width="204" height="102" rx="6" fill="#3a231c" opacity=".24"/>
  {/* Opened flap folded up behind the pocket */}
  {opened&&<g>
   <path d="M15 43 L106 8 Q115 4.5 124 8 L215 43 Z" fill={`url(#${uid}-inner)`} stroke="#86624d" strokeWidth="1.8" strokeLinejoin="round"/>
   <path d="M24 41 L108 11 Q115 8.5 122 11 L206 41" fill="none" stroke="#b88e6d" strokeWidth="1" opacity=".45"/>
  </g>}
  {/* Envelope back & inner pocket */}
  <rect x="12" y="42" width="206" height="104" rx="5" fill={`url(#${uid}-inner)`} stroke="#86624d" strokeWidth="1.8"/>
  {/* Layered white glossy edges of prints tucked inside the pocket, peeking from under the flap */}
  <g transform={opened?'translate(0 4)':'translate(0 0)'}>
   <rect x="20" y="46" width="190" height="32" rx="2" fill="#f3e8d6" stroke="#b89f87" strokeWidth="1.1" transform="rotate(-.7 115 60)"/>
   <rect x="19" y="49.5" width="192" height="32" rx="2" fill="#fbf4e8" stroke="#c3aa92" strokeWidth="1.15" transform="rotate(.6 115 62)"/>
   <rect x="21" y="53" width="188" height="30" rx="2" fill="#fffdf8" stroke="#cbb49d" strokeWidth="1.2"/>
   <rect x="21" y="53" width="188" height="30" rx="2" fill={`url(#${uid}-gloss)`}/>
   <path d="M26 55.2h178" stroke="#ffffff" strokeWidth="1.3" strokeLinecap="round" opacity=".85"/>
  </g>
  {/* Front kraft pocket with shallow thumb-cut lip so white print edges show inside */}
  <path d="M12 60 Q115 66 218 60 V141 Q218 146 213 146 H17 Q12 146 12 141 Z" fill={`url(#${uid}-body)`} stroke="#8c6750" strokeWidth="1.9" strokeLinejoin="round"/>
  <path d="M15 61.5 Q115 67.3 215 61.5" fill="none" stroke="#f7e3c5" strokeWidth="1.1" opacity=".6"/>
  {/* Folded side/bottom kraft gusset seams */}
  <path d="M14 144L84 96M216 144L146 96" stroke="#a2795c" strokeWidth="1.5" opacity=".55"/>
  <path d="M18 145L86 98M212 145L144 98" stroke="#f7e3c5" strokeWidth="1" opacity=".42"/>
  <path d="M74 102h82" stroke="#9e7458" strokeWidth="1.1" opacity=".32"/>
  {/* Subtle kraft paper fibers & warm sunset highlight */}
  <path d="M24 114l18-2m116 18 24-1m-92 8 15 1m78-44 19-2M26 78l12 2m148 34 11 1" stroke="#f8e5c8" strokeWidth="1.1" strokeLinecap="round" opacity=".5"/>
  <path d="M36 126l14 1m96 10 18-2m46-24 10 2M22 92l15-1" stroke="#966c51" strokeWidth="1" strokeLinecap="round" opacity=".38"/>
  {/* Vintage photo-lab rubber stamp (lower left) */}
  <g transform="translate(22 103) rotate(-4)" opacity=".78">
   <rect width="74" height="31" rx="4" fill="#f3dfc2" fillOpacity=".35" stroke="#7c5250" strokeWidth="1.35"/>
   <rect x="2.5" y="2.5" width="69" height="26" rx="2.4" fill="none" stroke="#7c5250" strokeWidth=".7" strokeDasharray="2 1.5"/>
   <g fill="#7c5250">
    <rect x="7" y="7" width="12" height="17" rx="1.4" fill="none" stroke="#7c5250" strokeWidth="1.1"/>
    <rect x="8.8" y="9" width="2" height="2.2" rx=".4"/><rect x="8.8" y="13.8" width="2" height="2.2" rx=".4"/><rect x="8.8" y="18.6" width="2" height="2.2" rx=".4"/>
    <rect x="15.2" y="9" width="2" height="2.2" rx=".4"/><rect x="15.2" y="13.8" width="2" height="2.2" rx=".4"/><rect x="15.2" y="18.6" width="2" height="2.2" rx=".4"/>
    <text x="45" y="15.5" textAnchor="middle" fontFamily="Georgia,serif" fontSize="8.2" fontWeight="700" letterSpacing=".6">ФОТОЛАБ</text>
    <text x="45" y="24.2" textAnchor="middle" fontFamily="Georgia,serif" fontSize="6.4" letterSpacing=".4">35 мм · 10×15</text>
   </g>
  </g>
  {/* Printed order slip & handwritten mark (lower right) */}
  <g transform="translate(152 106) rotate(2)" opacity=".72">
   <path d="M0 6h48M0 15h48M0 24h36" stroke="#855e4d" strokeWidth="1" strokeLinecap="round"/>
   <path d="M5 4q6-4 11 0t9-1q5-2 11 1M8 13q7-3 14 0t11-1" fill="none" stroke="#63424c" strokeWidth="1.25" strokeLinecap="round"/>
   <text x="45" y="23.5" textAnchor="end" fill="#7c5250" fontFamily="Georgia,serif" fontSize="7.2" fontStyle="italic">№ 05</text>
  </g>
  {/* Unsealed top flap resting loosely over the center so white print edges peek out underneath */}
  {!opened&&<g>
   <path d="M22 44 L106 87 Q115 91.5 124 87 L208 44 L208 48 L124 91 Q115 95.5 106 91 L22 48 Z" fill="#543628" opacity=".22"/>
   <path d="M16 42.5 Q16 41.5 19 41.5 H211 Q214 41.5 214 42.5 L124 85 Q115 89 106 85 Z" fill={`url(#${uid}-flap)`} stroke="#8c6750" strokeWidth="1.8" strokeLinejoin="round"/>
   <path d="M23 44 H207" stroke="#fff4de" strokeWidth="1.4" strokeLinecap="round" opacity=".72"/>
   <path d="M32 48.5 L98 80 M198 48.5 L132 80" stroke="#fff3db" strokeWidth="1" strokeLinecap="round" opacity=".45"/>
  </g>}
 </svg>;
}

export function TravellersScene({run}:{run:Run}){
 const uid=useId().replace(/:/g,'');
 const n=run.nodeId.split('.').at(-1)!,s=run.story,r=travellerView(run);
 const playing=['open','river','riverChoice','riverHelp','ford','bridge','quarry','quarryChoice','tunnel','contour','cat','catChoice','arrivalHelp','marsh','upperDay','upperNight','arrived'].includes(n);
 const home=['home','homeChoice','homeKissFirst','homeKissFirstChoice','homeKissFirstNeck','homeKissFirstSoft','homeKissAgain','homeHug','homeNear','late','lateChoice','lateLeave'].includes(n)||(n==='sleep'&&run.lineIndex<9);
 if(n==='prints'){
  const i=run.lineIndex,source=i>=16?'feet':i>=12?'secretKitchen':i>=10?9:i>=9?8:i>=8?7:6;
  return <div className={`traveller-props prints-scene ${i<4?'prints-closed':''}`}><PhotoEnvelope opened={i>=4}/>{i>=4&&<SelectedPrint story={s} source={source}/>}</div>;
 }
 if(home)return <svg className="traveller-home-props" viewBox="0 0 1086 1448" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Фотографии на столе; подаренная открытка только рядом с монитором">
  <defs>
   <linearGradient id={`${uid}-env`} x1="0" y1="0" x2=".9" y2="1">
    <stop offset="0" stopColor="#ead0ae"/><stop offset=".55" stopColor="#d3ae88"/><stop offset="1" stopColor="#b08462"/>
   </linearGradient>
   <linearGradient id={`${uid}-flap`} x1=".1" y1="0" x2=".9" y2="1">
    <stop offset="0" stopColor="#f5e1c2"/><stop offset=".6" stopColor="#e2c09a"/><stop offset="1" stopColor="#c49a76"/>
   </linearGradient>
   <linearGradient id={`${uid}-plaidL`} x1=".1" y1="0" x2=".85" y2="1">
    <stop offset="0" stopColor="#cfc8da"/><stop offset=".48" stopColor="#b7b0c3"/><stop offset="1" stopColor="#867d96"/>
   </linearGradient>
   <linearGradient id={`${uid}-plaidR`} x1=".1" y1="0" x2=".85" y2="1">
    <stop offset="0" stopColor="#ecd8be"/><stop offset=".52" stopColor="#d5bc9e"/><stop offset="1" stopColor="#a78b6d"/>
   </linearGradient>
   <pattern id={`${uid}-knitL`} width="14" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(-10)">
    <path d="M2 4q0 5 5 7 5-2 5-7" fill="none" stroke="#786f88" strokeWidth="1.5" opacity=".45"/>
    <path d="M2.5 3q0 4.5 4.5 6.5 4.5-2 4.5-6.5" fill="none" stroke="#ece6f5" strokeWidth="1.4" opacity=".62"/>
   </pattern>
   <pattern id={`${uid}-knitR`} width="14" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(9)">
    <path d="M2 4q0 5 5 7 5-2 5-7" fill="none" stroke="#997d60" strokeWidth="1.5" opacity=".45"/>
    <path d="M2.5 3q0 4.5 4.5 6.5 4.5-2 4.5-6.5" fill="none" stroke="#fbf0df" strokeWidth="1.4" opacity=".65"/>
   </pattern>
  </defs>
  {/* Detailed photo-lab envelope resting on the evening table */}
  <g transform="translate(245 792) rotate(6)">
   <rect x="6" y="9" width="212" height="90" rx="6" fill="#2d1c16" opacity=".3"/>
   <rect width="212" height="88" rx="5" fill="#775443" stroke="#7c5d48" strokeWidth="2.2"/>
   {/* White glossy print edges tucked neatly under the unsealed flap */}
   <rect x="10" y="5" width="192" height="24" rx="2" fill="#f7eedf" stroke="#bfa68d" strokeWidth="1.3"/>
   <rect x="12" y="9" width="188" height="22" rx="2" fill="#fffdf8" stroke="#cab29a" strokeWidth="1.3"/>
   <path d="M0 16 Q106 22 212 16 V83 Q212 88 207 88 H5 Q0 88 0 83 Z" fill={`url(#${uid}-env)`} stroke="#7c5d48" strokeWidth="2.2" strokeLinejoin="round"/>
   <path d="M4 84L80 44M208 84L132 44" stroke="#9f775c" strokeWidth="1.8" opacity=".6"/>
   <path d="M8 85L82 46M204 85L130 46" stroke="#f7e4c7" strokeWidth="1.1" opacity=".42"/>
   {/* Subtle rubber stamp mark */}
   <g transform="translate(14 55) rotate(-4)" opacity=".62">
    <rect width="52" height="22" rx="3" fill="none" stroke="#7c5250" strokeWidth="1.3"/>
    <path d="M7 8h38M7 15h26" stroke="#7c5250" strokeWidth="1.4" strokeLinecap="round"/>
   </g>
   {/* Cast shadow under unsealed flap + folded triangular flap */}
   <path d="M8 5l98 44 98-44v4l-98 45L8 9Z" fill="#5e3e30" opacity=".24"/>
   <path d="M4 2.5q0-2 3-2h198q3 0 3 2l-97 43q-5 2.4-10 0Z" fill={`url(#${uid}-flap)`} stroke="#7c5d48" strokeWidth="2" strokeLinejoin="round"/>
   <path d="M14 4.5h184" stroke="#fff4de" strokeWidth="1.4" strokeLinecap="round" opacity=".68"/>
  </g>
  {/* Framed gallery postcard standing by the monitor */}
  {s.c7GalleryGift&&s.c7GalleryGift!=='none'&&<g>
   <rect x="949" y="535" width="92" height="118" rx="3" fill="#24181a" opacity=".28"/>
   <rect x="946" y="531" width="92" height="118" rx="3" fill="#f5ebd8" stroke="#b9a087" strokeWidth="1.8"/>
   <image x="950" y="535" width="84" height="110" preserveAspectRatio="xMidYMid meet" href={assetUrl(`gallery7.${s.c7GalleryGift}`)} aria-label="Подаренная открытка стоит рядом с монитором"/>
  </g>}
  {/* Soft draped knitted blankets for the quiet night stay */}
  {n==='sleep'&&run.lineIndex>=3&&<g strokeLinecap="round" strokeLinejoin="round">
   {/* Ambient soft shadows under blankets */}
   <path d="M44 734c18-56 72-76 168-42 18 7 32 22 44 58l10 106H44Z" fill="#231a29" opacity=".32"/>
   <path d="M276 716c34-36 98-40 162-6 18 10 30 34 42 74l8 72H278Z" fill="#231a29" opacity=".3"/>
   {/* Left lavender-grey knitted blanket */}
   <path d="M48 722c14-48 56-68 128-54 32 6 54 22 66 56l20 128c-38 8-82 6-126 1-34-4-62 3-88-2Z" fill={`url(#${uid}-plaidL)`} stroke="#6d647c" strokeWidth="2.8"/>
   <path d="M52 722c14-44 52-63 122-50 30 6 50 20 62 52l19 124c-36 7-78 5-120 1-32-4-58 2-83-2Z" fill={`url(#${uid}-knitL)`}/>
   {/* Draped soft blanket folds & turned cuff */}
   <path d="M58 706c38-28 96-30 156-6c-12 16-34 22-66 18-36-4-66 2-90 12Z" fill="#dad3e6" stroke="#807691" strokeWidth="2.2" opacity=".88"/>
   <path d="M68 748c46-18 108-18 164 4M62 794c54-16 118-12 180 8M82 832c44-8 98-4 156 8" fill="none" stroke="#e9e3f4" strokeWidth="3.2" opacity=".68"/>
   <path d="M74 756c44-16 104-14 156 6M68 802c50-14 114-10 172 10" fill="none" stroke="#756b85" strokeWidth="2.4" opacity=".46"/>
   {/* Soft woven fringe tassels */}
   <path d="M62 851l-3 14m19-13l-2 14m21-14l-1 14m22-14l1 14m23-13l2 14m24-13l3 14m24-12l4 14m24-11l4 13m23-12l5 13" stroke="#cfc8da" strokeWidth="3.4" opacity=".85"/>
   {/* Right warm oat-sand knitted blanket */}
   <g className="sleep-blanket-second">
    <path d="M278 706c32-34 86-40 144-12 24 12 38 32 48 66l16 92c-36 6-76 3-118-1-34-3-64 4-88 0Z" fill={`url(#${uid}-plaidR)`} stroke="#8c7258" strokeWidth="2.8"/>
    <path d="M282 706c30-31 82-37 138-10 22 11 36 30 45 62l15 88c-34 5-72 2-112-1-32-3-60 3-84 0Z" fill={`url(#${uid}-knitR)`}/>
    {/* Cozy layered folds & warm lamplight highlight */}
    <path d="M292 694c38-20 88-18 136 10-14 14-36 18-68 12-30-6-52 0-72 10Z" fill="#f1e0c8" stroke="#9e8265" strokeWidth="2.2" opacity=".88"/>
    <path d="M296 736c46-16 102-8 154 16M292 782c52-14 114-4 172 18M304 824c46-6 102 0 156 12" fill="none" stroke="#fbf0de" strokeWidth="3.2" opacity=".72"/>
    <path d="M302 744c44-14 98-6 148 16M298 790c50-12 110-2 164 18" fill="none" stroke="#92765a" strokeWidth="2.4" opacity=".44"/>
    {/* Soft warm fringe tassels */}
    <path d="M292 851l-3 14m20-14l-2 14m22-14l-1 14m22-14l1 14m23-14l2 14m23-13l3 14m24-12l4 14m23-11l4 13m22-11l5 13" stroke="#ead7be" strokeWidth="3.4" opacity=".86"/>
   </g>
  </g>}
 </svg>;
 if((n==='open'&&run.lineIndex<3)||(n==='arrived'&&run.lineIndex>=7))return <div className="traveller-props"><div className="game-box">Два<br/>путешественника</div></div>;
 if(playing){
  const catChair=(n==='cat'&&run.lineIndex>=5)||['catChoice','arrivalHelp','marsh','upperDay','upperNight','arrived'].includes(n);
  return <div className="traveller-props"><TravellersBoard state={r} position={r.position} night={r.night}/><div className="feet-by-board"><FeetPrint/></div>{n==='cat'&&run.lineIndex<5&&<div className="cat-in-box" aria-label="Пончик в крышке коробки на памятке"><span/><img src={assetUrl('cat.season2.gouache.box')} alt="Пончик занял коробку"/></div>}{catChair&&<div className="cat-chair" aria-label="Пончик на отдельном стуле с пледом"><span/><img src={assetUrl(firstSeasonCat)} alt="Пончик отдыхает на пледе"/></div>}</div>;
 }
 if(n==='cafeLate'&&run.lineIndex>=1)return <div className="cat-on-table" aria-label="Пончик устроился на столике"><img src={assetUrl(firstSeasonCat)} alt="Пончик отдыхает на столике"/></div>;
 if(n==='entry'||n==='cafeLate')return <div className="traveller-props"><div className="game-box">Два<br/>путешественника</div>{n==='cafeLate'&&<div className="cat-chair"><span/><img src={assetUrl(firstSeasonCat)} alt="Пончик на стуле с пледом"/></div>}</div>;
 return null;
}
