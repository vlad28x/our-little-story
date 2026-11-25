import {useId} from 'react';
import type {Run} from '../engine/types';

type FilmPhase='packing'|'key'|'photo'|'alone'|'door'|'train';
const filmLabels:Record<FilmPhase,string>={packing:'Кот устраивается в чемодане',key:'Человек с ключом у чемодана',photo:'Человек берёт с собой старую фотографию',alone:'Кот ждёт у двери',door:'Человек возвращается с переноской для кота',train:'Человек и кот уезжают вместе в поезде'};

function FilmCat({x,y,small=false,awake=false}:{x:number;y:number;small?:boolean;awake?:boolean}){
 const id=useId().replace(/:/g,'');
 return <g transform={`translate(${x} ${y}) scale(${small?.58:1})`}>
  <defs><radialGradient id={`${id}-film-fur`} cx="36%" cy="27%" r="72%"><stop stopColor="#efd3a3"/><stop offset=".68" stopColor="#d3a072"/><stop offset="1" stopColor="#ae7658"/></radialGradient></defs>
  <path d="M-24 8q-23 3-18-13q3-8 10-4" fill="none" stroke="#c9935f" strokeWidth="7.5" strokeLinecap="round"/>
  <path d="M-24 8q-23 3-18-13q3-8 10-4" fill="none" stroke="#6b4c34" strokeWidth="1.6" strokeLinecap="round"/>
  <path d="M-38 4l3-4M-42-3l4-2" stroke="#8e5e38" strokeWidth="1.8" strokeLinecap="round"/>
  <ellipse cx="0" cy="7" rx="27" ry="13.5" fill={`url(#${id}-film-fur)`} stroke="#8d654e" strokeWidth="1.9"/>
  <path d="M-19 2q16-10 38 0" fill="none" stroke="#fff0d2" strokeWidth="2" strokeLinecap="round" opacity=".6"/>
  <path d="M-14-1q4 5 0 11M-3-3q4 6 0 13M10-1q4 5 0 11" fill="none" stroke="#a67144" strokeWidth="2.2" strokeLinecap="round"/>
  <ellipse cx="-10" cy="14" rx="6" ry="3.5" fill="#f7e6ce" stroke="#664933" strokeWidth="1.3"/>
  <ellipse cx="10" cy="14" rx="6" ry="3.5" fill="#f7e6ce" stroke="#664933" strokeWidth="1.3"/>
  <path d="M-15-4q-5-5-4-10l3-5 10 6q6-2.5 12 0l12-8-3 17q2 14-15 14t-15-14Z" fill={`url(#${id}-film-fur)`} stroke="#8d654e" strokeWidth="1.9" strokeLinejoin="round"/>
  <path d="M-13-10l-1-7 6.5 4.2zM13-10l1-7-6.5 4.2z" fill="#e8a79d"/>
  <path d="M-4-11l2 4l2-3l2 3l2-4" fill="none" stroke="#a67144" strokeWidth="1.3" strokeLinecap="round"/>
  <ellipse cx="0" cy="2.5" rx="7.5" ry="5.5" fill="#fbf0de"/>
  {awake?<g>
   <ellipse cx="-6.5" cy="-2.5" rx="2.3" ry="2.8" fill="#3f3128"/><circle cx="-7.2" cy="-3.4" r=".8" fill="#fffaf0"/>
   <ellipse cx="6.5" cy="-2.5" rx="2.3" ry="2.8" fill="#3f3128"/><circle cx="5.8" cy="-3.4" r=".8" fill="#fffaf0"/>
  </g>:<path d="M-9.5-2.5q3-3.5 5.5 0M4-2.5q3-3.5 5.5 0" fill="none" stroke="#473427" strokeWidth="1.7" strokeLinecap="round"/>}
  <ellipse cx="-9.5" cy="1.5" rx="2.4" ry="1.3" fill="#e69a92" opacity=".55"/>
  <ellipse cx="9.5" cy="1.5" rx="2.4" ry="1.3" fill="#e69a92" opacity=".55"/>
  <path d="M-2 1h4l-2 2.5z" fill="#b46a64"/>
  <path d="M-10 2l-9-1M-10 4.5l-8 2M10 2l9-1M10 4.5l8 2" stroke="#664933" strokeWidth="1" strokeLinecap="round"/>
 </g>;
}

function FilmPerson({x,y,coatGrad,seated=false}:{x:number;y:number;coatGrad:string;seated?:boolean}){
 return <g transform={`translate(${x} ${y})`}>
  {!seated&&<>
   <path d="M-12 37l-5 40h11l5-38M4 37l5 40h11l-4-40" fill="#464d52" stroke="#2d3236" strokeWidth="1.8" strokeLinejoin="round"/>
   <path d="M-19 77h15q3 5-3 6h-13q-2-4 1-6ZM9 77h16q3 5-2 6H9z" fill="#473329" stroke="#2e2019" strokeWidth="1.3"/>
  </>}
  <path d="M-21-10q21-9 43 0l9 50q-29 6-59 0Z" fill={coatGrad} stroke="#3e4b45" strokeWidth="2" strokeLinejoin="round"/>
  <path d="M-13 4l-4 35M14 4l5 35" stroke="#53635c" strokeWidth="1.3" opacity=".7"/>
  <path d="M1-8v49M-19 18h41" stroke="#47554f" strokeWidth="1.4"/>
  <path d="M-10-12l10 14l10-14" fill="#5e7068" stroke="#3e4b45" strokeWidth="1.4"/>
  <circle cx="7" cy="6" r="1.8" fill="#38443f"/><circle cx="7" cy="15" r="1.8" fill="#38443f"/>
  <path d="M-11-13q11 8 22 0q2 6-2 10q-9 4-18 0q-4-4-2-10Z" fill="#d9bc97" stroke="#755d46" strokeWidth="1.4"/>
  <path d="M3-5l4 15" stroke="#d9bc97" strokeWidth="4.5" strokeLinecap="round"/>
  <path d="M-20-6q-12 16-9 32q5 3 8-2q2-12 7-22" fill={coatGrad} stroke="#3e4b45" strokeWidth="1.8"/>
  <path d="M21-6q16 11 25 23q-3 5-8 3q-10-9-20-16" fill={coatGrad} stroke="#3e4b45" strokeWidth="1.8"/>
  <circle cx="43" cy="18" r="4" fill="#eccca9" stroke="#6d5342" strokeWidth="1.3"/>
  <circle cx="2" cy="-26" r="13.5" fill="#edd0ae" stroke="#664f3f" strokeWidth="1.8"/>
  <path d="M7-36a12 12 0 0 1 6 18" fill="none" stroke="#fff4dd" strokeWidth="2" strokeLinecap="round" opacity=".65"/>
  <path d="M-12-26q-2-19 17-17q16 2 13 16q-7-7-17-5q-8 2-13 6Z" fill="#5c4b3d" stroke="#3c3027" strokeWidth="1.6"/>
  <path d="M-5-40q9-4 17 2M-8-33q8-4 15-1" fill="none" stroke="#7c6654" strokeWidth="1.2" opacity=".7"/>
  <circle cx="7.5" cy="-25" r="1.3" fill="#3c3027"/>
  <path d="M5-19q4 2.5 7.5-.5" fill="none" stroke="#7a5a47" strokeWidth="1.4" strokeLinecap="round"/>
 </g>;
}

export function CourtyardFilmArt({phase='packing'}:{phase?:FilmPhase}){
 const uid=useId().replace(/:/g,'');
 const coat=`url(#${uid}-coat)`;
 return <svg width="300" height="160" viewBox="0 0 300 160" role="img" aria-label={filmLabels[phase]}>
  <defs>
   <linearGradient id={`${uid}-wall`} x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stopColor="#f0ddc3"/><stop offset=".6" stopColor="#dfd0b4"/><stop offset="1" stopColor="#c4b397"/>
   </linearGradient>
   <linearGradient id={`${uid}-floor`} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stopColor="#af917f"/><stop offset="1" stopColor="#8c755c"/>
   </linearGradient>
   <linearGradient id={`${uid}-beam`} x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stopColor="#fff8dc" stopOpacity=".46"/><stop offset=".7" stopColor="#ffefc2" stopOpacity=".14"/><stop offset="1" stopColor="#ffefc2" stopOpacity="0"/>
   </linearGradient>
   <linearGradient id={`${uid}-coat`} x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stopColor="#93a191"/><stop offset=".6" stopColor="#6e827a"/><stop offset="1" stopColor="#53655e"/>
   </linearGradient>
   <linearGradient id={`${uid}-case`} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stopColor="#a88867"/><stop offset="1" stopColor="#785c43"/>
   </linearGradient>
   <linearGradient id={`${uid}-sky`} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stopColor="#8fb4c2"/><stop offset=".65" stopColor="#d8e3d5"/><stop offset="1" stopColor="#f4dfb8"/>
   </linearGradient>
   <radialGradient id={`${uid}-vig`} cx="54%" cy="46%" r="68%">
    <stop offset=".58" stopColor="#291e16" stopOpacity="0"/><stop offset="1" stopColor="#291e16" stopOpacity=".34"/>
   </radialGradient>
  </defs>
  {phase==='train'?<>
   <rect width="300" height="160" fill="#d9cbb3"/>
   <rect y="118" width="300" height="42" fill="#9d886f"/>
   {/* Compartment window with scenic hills and warm sunset clouds */}
   <rect x="14" y="12" width="166" height="96" rx="10" fill={`url(#${uid}-sky)`} stroke="#6c5947" strokeWidth="4.5"/>
   <path d="M32 34q12-7 25 0q8-4 15 2H26q2-4 6-2ZM116 28q14-6 26 1q9-3 14 3h-45q2-4 5-4Z" fill="#fffaf0" opacity=".78"/>
   <path d="M16 78q42-19 88-6t74-8v42H16Z" fill="#8ca382"/>
   <path d="M16 90q52-14 98-2t64-6v24H16Z" fill="#6f8769"/>
   <path d="M14 52h166M97 14v92" stroke="#dfd4be" strokeWidth="4"/>
   {/* Curtain on left edge of window */}
   <path d="M16 14h24q-8 38-3 88H16Z" fill="#c79586" stroke="#7d5347" strokeWidth="1.6" opacity=".88"/>
   <path d="M22 14q-4 38-1 88M29 14q-5 38-2 88" stroke="#a66f60" strokeWidth="1" opacity=".6"/>
   {/* Wooden railway bench */}
   <rect x="14" y="120" width="272" height="16" rx="4" fill="#8e6c4e" stroke="#59412e" strokeWidth="2"/>
   <rect x="14" y="132" width="272" height="28" fill="#6f533b"/>
   {/* Pet carrier with cat looking out */}
   <g transform="translate(36 123)">
    <ellipse cx="40" cy="4" rx="40" ry="6" fill="#3a281c" opacity=".28"/>
    <path d="M2 0v-32q0-24 25-24h26q25 0 25 24V0Z" fill="#cbbda0" stroke="#5d584b" strokeWidth="2.4"/>
    <path d="M28-56v-7h24v7" fill="none" stroke="#6c5640" strokeWidth="3" strokeLinecap="round"/>
    <path d="M9-3v-29q0-17 18-17h26q18 0 18 17v29Z" fill="#4f4840"/>
    <FilmCat x={40} y={-15} small awake/>
    <path d="M15-3v-38M27-3v-44M40-3v-45M53-3v-44M65-3v-38M10-20h60" stroke="#908875" strokeWidth="1.8"/>
   </g>
   <FilmPerson x={228} y={84} coatGrad={coat} seated/>
  </>:<>
   <rect width="300" height="160" fill={`url(#${uid}-wall)`}/>
   <rect y="82" width="300" height="40" fill="#d4c4a8" opacity=".55"/>
   <path d="M0 82h300M0 85h300" stroke="#b3a186" strokeWidth="1.2"/>
   <rect y="118" width="300" height="5" fill="#a8947b"/>
   <rect y="123" width="300" height="37" fill={`url(#${uid}-floor)`}/>
   <path d="M0 132h300M0 144h300M45 123l-18 37M120 123l-10 37M195 123l8 37M265 123l18 37" stroke="#7d664f" strokeWidth="1" opacity=".48"/>
   <g transform="translate(96 22)">
    <rect x="2" y="2" width="28" height="34" rx="1.5" fill="#5e4d3e" opacity=".18"/>
    <rect width="28" height="34" rx="1.5" fill="#8b6b50" stroke="#5b4331" strokeWidth="1.3"/>
    <rect x="3.5" y="3.5" width="21" height="27" fill="#efe6d3"/>
    <path d="M4 25q7-8 14-2t6 2v5H4Z" fill="#899c84"/>
    <circle cx="19" cy="11" r="2.8" fill="#e6be75"/>
   </g>
   <g>
    <rect x="16" y="7" width="66" height="116" fill="#9c866d" stroke="#5d4d3e" strokeWidth="2"/>
    <rect x="24" y="16" width="50" height="43" rx="1.5" fill="#8d775f" stroke="#b5a188" strokeWidth="1"/>
    <rect x="24" y="67" width="50" height="47" rx="1.5" fill="#8d775f" stroke="#b5a188" strokeWidth="1"/>
    <rect x="68" y="64" width="6" height="14" rx="2" fill="#cfa45c" stroke="#664b25" strokeWidth="1"/>
    <circle cx="71" cy="69" r="2.6" fill="#e8c378" stroke="#664b25" strokeWidth=".9"/>
   </g>
   {phase!=='alone'&&<ellipse cx="127" cy="138" rx="34" ry="7.5" fill="#3a2c20" opacity=".28"/>}
   <ellipse cx="229" cy="136" rx="58" ry="9" fill="#3a2c20" opacity=".3"/>
   <g transform="translate(178 58)">
    <path d="M6 39V11q44-13 88 0v28z" fill="#b49c7f" stroke="#5b4938" strokeWidth="2"/>
    <path d="M11 37V15q39-10 78 0v22z" fill="#e5d9c3" stroke="#99846a" strokeWidth="1.2"/>
    <path d="M24 14l16 22M46 12l16 24M68 14l16 22M38 12l-16 24M60 12l-16 24M82 14l-16 22" stroke="#cbbba0" strokeWidth=".8" opacity=".6"/>
    <rect x="19" y="18" width="16" height="10" rx="1.5" transform="rotate(-7 27 23)" fill="#c9755b" stroke="#854836" strokeWidth=".9"/>
    <circle cx="76" cy="22" r="5.5" fill="#739c99" stroke="#476664" strokeWidth=".9"/>
    <path d="M9 39q21-13 44-7q25-6 41 7v15H9z" fill="#cf9081" stroke="#7d4f44" strokeWidth="1.5"/>
    <path d="M16 36q14-4 28 0M56 35q14-4 26 1" fill="none" stroke="#e8b8ab" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="2" y="39" width="96" height="36" rx="5.5" fill={`url(#${uid}-case)`} stroke="#4f3d2d" strokeWidth="2"/>
    <path d="M2 45q0-6 6-6h6v10H2Z M98 45q0-6-6-6h-6v10h12Z M2 69q0 6 6 6h6v-9H2Z M98 69q0 6-6 6h-6v-9h12Z" fill="#684d37" stroke="#473324" strokeWidth="1"/>
    <path d="M22 39v36M78 39v36" stroke="#5d422d" strokeWidth="5.5"/>
    <path d="M22 39v36M78 39v36" stroke="#856346" strokeWidth="1" strokeDasharray="2 3"/>
    <rect x="18.5" y="47" width="7" height="6" rx="1.2" fill="#e9c474" stroke="#7a5b27" strokeWidth="1"/>
    <rect x="74.5" y="47" width="7" height="6" rx="1.2" fill="#e9c474" stroke="#7a5b27" strokeWidth="1"/>
    <path d="M39 75v4q11 3.5 22 0v-4" fill="none" stroke="#4f3d2d" strokeWidth="2.8" strokeLinecap="round"/>
   </g>
   {phase!=='alone'&&<FilmPerson x={125} y={56} coatGrad={coat}/>}
   {phase==='packing'&&<FilmCat x={228} y={90}/>}
   {phase==='alone'&&<>
    <ellipse cx="62" cy="133" rx="28" ry="6" fill="#3a2c20" opacity=".26"/>
    <FilmCat x={62} y={118} awake/>
   </>}
   {phase==='key'&&<g transform="translate(169 75)">
    <circle r="11" fill="#ffecab" opacity=".32"/>
    <circle cy="-6" r="5.5" fill="#e7be62" stroke="#755522" strokeWidth="1.8"/>
    <circle cy="-6" r="2" fill="#f5ecd8"/>
    <path d="M0-.5v16h6M0 10h4.5" fill="none" stroke="#c89a3d" strokeWidth="2.6" strokeLinecap="round"/>
   </g>}
   {phase==='photo'&&<g transform="translate(154 57) rotate(-11)">
    <rect x="2" y="3" width="33" height="40" rx="2" fill="#3a2c20" opacity=".26"/>
    <rect width="33" height="40" rx="2" fill="#826a56" stroke="#4f3f33" strokeWidth="1.5"/>
    <rect x="4" y="4" width="25" height="31" fill="#e6d9be"/>
    <circle cx="16.5" cy="15" r="5.5" fill="#8f8672"/>
    <path d="M7 33q9.5-16 19 0Z" fill="#7c7d6e"/>
    <path d="M6 6l12 10" stroke="#fff9eb" strokeWidth="1.5" opacity=".55"/>
   </g>}
   {phase==='door'&&<g transform="translate(18 85)">
    <ellipse cx="38" cy="48" rx="38" ry="6" fill="#3a2c20" opacity=".25"/>
    <path d="M24 0v-8q14-3 28 0v8" fill="none" stroke="#6a543e" strokeWidth="3.2" strokeLinecap="round"/>
    <rect width="76" height="46" rx="10" fill="#bac1ab" stroke="#5b685c" strokeWidth="2.4"/>
    <rect x="7" y="7" width="62" height="33" rx="6" fill="#4f4840"/>
    <FilmCat x={38} y={26} small awake/>
    <path d="M16 7v33M28 7v33M40 7v33M52 7v33M62 7v33M7 22h62" stroke="#9aa38e" strokeWidth="1.6"/>
   </g>}
   <path d="M168 0h132v106l-115 54H95Z" fill={`url(#${uid}-beam)`}/>
   <g fill="#fff8dd" opacity=".75">
    <circle cx="222" cy="24" r="1.4"/><circle cx="256" cy="40" r="1.1"/><circle cx="198" cy="46" r="1"/><circle cx="274" cy="64" r="1.3"/>
   </g>
  </>}
  <rect width="300" height="160" fill={`url(#${uid}-vig)`}/>
  <rect x="2" y="2" width="296" height="156" rx="3" fill="none" stroke="#fbf3e2" strokeWidth="2.2" opacity=".68"/>
 </svg>;
}

export function CourtyardScene({run,background}:{run:Run;background?:string}){
 const screen=useId().replace(/:/g,'');
 const node=run.nodeId.replace('c9.courtyard.',''),i=run.lineIndex;
 const filmStart=node==='filmStart',resume=node==='resume';
 const inPause=['rain','rainAside','rainChoice','canopy','arch','warmth','movieTalk','movieChoice','movieDrama','movieWarm','movieMystery','nextCoop','nextOther','nextDate','bet','betChoice','betTogether','betAlone','betSkip'].includes(node)&&run.story.c9Rain!=='leave';
 const film=filmStart||resume||inPause;
 const phase:FilmPhase=filmStart?(i>=3?'key':'packing'):resume?(['key','key','photo','train','train'] as const)[i]??'train':'key';
 const position=resume?(run.story.c9Rain==='arch'?'arch':'open'):run.story.c9Rain==='arch'?'arch':run.story.c9Rain==='canopy'?'canopy':'open';
 const transform=position==='arch'?'matrix(.892 -.159 0 1.13 824 329)':position==='canopy'?'translate(804 330) scale(.79 .825)':'translate(689 312) scale(1.24 1.195)';
 const redSignal=background==='bg.courtyard9.lab-red';
 const atLab=['lab','goodbye','goodbyeChoice','kissAgain','kissFirst','kissEnd','hug','words'].includes(node);
 return <div className={`courtyard-visual ${filmStart||resume?'courtyard-playing':''} ${inPause?'courtyard-paused':''}`}>
  {(film||atLab||redSignal)&&<svg className="courtyard-projection" viewBox="0 0 1536 1024" preserveAspectRatio="xMidYMid slice" aria-label={film?filmLabels[phase]:undefined} role={film?'img':undefined} aria-hidden={!film}>
   {film&&<>
    {position==='arch'&&<defs><clipPath id={`${screen}-arch`}><path d="M824 329 1091 281 1091 460 824 466Z"/></clipPath></defs>}
    <g clipPath={position==='arch'?`url(#${screen}-arch)`:undefined}>
     <g transform={transform}><CourtyardFilmArt phase={phase}/>{inPause&&<rect width="300" height="160" fill="#282831" opacity=".62"/>}</g>
    </g>
   </>}
   {redSignal&&<g aria-hidden="true">
    <path d="M1042 325q8-7 20 0l-2 19-17 2Z" fill="#354142"/>
    <ellipse cx="1051" cy="280" rx="17" ry="18" fill="#d26b59" opacity=".31"/>
    <ellipse cx="1051" cy="281" rx="10" ry="12" fill="#db664f"/>
    <path d="M1047 274q5-4 9 1" fill="none" stroke="#ffc294" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M1046 810q12-12 6-24m-11 40 14-7m-20 35 17-15m-24 30 11-5" stroke="#ce7868" strokeWidth="6" strokeLinecap="round" opacity=".34"/>
   </g>}
   {atLab&&<g fill="#59412e" textAnchor="middle" fontSize="15" fontFamily="Georgia, serif"><text x="694" y="302">Плёнка и одноразовые камеры</text><text x="694" y="328">Приём</text></g>}
  </svg>}
  {['rain','rainAside','rainChoice'].includes(node)&&<div className="courtyard-rain" aria-hidden="true"/>}
 </div>;
}
