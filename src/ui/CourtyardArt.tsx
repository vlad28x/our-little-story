import type {Run} from '../engine/types';

type FilmPhase='packing'|'key'|'photo'|'alone'|'door'|'train';
const filmLabels:Record<FilmPhase,string>={packing:'Кот устраивается в чемодане',key:'Человек с ключом у чемодана',photo:'Человек берёт с собой старую фотографию',alone:'Кот ждёт у двери',door:'Человек возвращается с переноской для кота',train:'Человек и кот уезжают вместе в поезде'};
function FilmCat({x,y,small=false}:{x:number;y:number;small?:boolean}){
 return <g transform={`translate(${x} ${y}) scale(${small?.55:1})`} fill="#c6ab89" stroke="#62594e" strokeWidth="2.5"><ellipse cy="6" rx="26" ry="15"/><path d="M-17-4l-3-24 14 10q8-3 15 0l14-10-4 24q-2 16-18 16T-17-4Z"/><path d="M-10-2h3M8-2h3M0 3v3M-25 10q-24 6-16-13" fill="none" strokeLinecap="round"/></g>;
}
function FilmPerson({x,y}:{x:number;y:number}){
 return <g transform={`translate(${x} ${y})`} stroke="#4d4d4c" strokeWidth="3" strokeLinecap="round"><path d="M-15 28l-4 63M12 28l8 63" fill="none" strokeWidth="12"/><path d="M-24-18q24-14 47 0l5 51h-57Z" fill="#88948d"/><circle cy="-38" r="18" fill="#dfc8a9"/><path d="M-18-42q-1-27 30-12l7 16-23-7Z" fill="#696155"/><path d="M-22-13l-23 28M24-13l19 22" fill="none" strokeWidth="10"/></g>;
}
export function CourtyardFilmArt({phase='packing'}:{phase?:FilmPhase}){
 return <svg width="300" height="160" viewBox="0 0 300 160" role="img" aria-label={filmLabels[phase]}>
  <rect width="300" height="160" fill="#e2d9c8"/><path d="M0 129h300v31H0Z" fill="#b6aa98"/>
  {phase==='train'?<><rect x="13" y="13" width="164" height="95" rx="8" fill="#98abb0" stroke="#6f7d7c" strokeWidth="5"/><path d="M15 82q40-15 85-4t76-6v33H15Z" fill="#abb493"/><path d="M93 16v86M13 48h163" stroke="#d9d5c8" strokeWidth="5"/><path d="M23 133h250" stroke="#8d8070" strokeWidth="16"/><g transform="translate(40 124)"><path d="M0 0v-30q0-22 24-22h24q24 0 24 22V0Z" fill="#c8bca2" stroke="#6a6d61" strokeWidth="3"/><FilmCat x={35} y={-16} small/><path d="M7-1v-32M21-1v-42M36-1v-44M51-1v-42M65-1v-32" stroke="#7d8170" strokeWidth="2"/></g><FilmPerson x={227} y={65}/></>:<>
   <path d="M22 9h65v120H22Z" fill="#a79882" stroke="#776e60" strokeWidth="4"/>
   <rect x="181" y="96" width="100" height="32" rx="6" fill="#a5a792" stroke="#6d756a" strokeWidth="3"/>
   <path d="M184 94V67q44-15 91 0v28" fill="#bfbea6" stroke="#6d756a" strokeWidth="3"/>
   {phase!=='alone'&&<FilmPerson x={128} y={53}/>}
   {phase==='packing'&&<FilmCat x={231} y={86}/>}
   {phase==='alone'&&<FilmCat x={60} y={117}/>}
   {phase==='key'&&<g stroke="#b28e54" strokeWidth="3" fill="none"><circle cx="169" cy="69" r="5"/><path d="M169 74v15h6"/></g>}
   {phase==='photo'&&<g transform="translate(155 59) rotate(-12)"><rect width="31" height="38" fill="#8d7866"/><rect x="4" y="4" width="23" height="30" fill="#d4c5a9"/><circle cx="15" cy="14" r="5" fill="#8f8e7a"/><path d="M6 31q9-17 18 0" fill="#8f8e7a"/></g>}
   {phase==='door'&&<><rect x="20" y="87" width="70" height="44" rx="9" fill="#b4b9a5" stroke="#6b786d" strokeWidth="3"/><FilmCat x={56} y={112} small/><path d="M43 86v-8h23v8" stroke="#6b786d" strokeWidth="3" fill="none"/></>}
  </>}
  <rect x="1" y="1" width="298" height="158" fill="none" stroke="#f4ecdc" strokeWidth="2" opacity=".65"/>
 </svg>;
}

export function CourtyardScene({run}:{run:Run}){
 const node=run.nodeId.replace('c9.courtyard.',''),i=run.lineIndex;
 const filmStart=node==='filmStart',resume=node==='resume';
 const inPause=['rain','rainAside','rainChoice','canopy','arch','warmth','nextCoop','nextOther','nextDate','bet','betChoice','betTogether','betAlone','betSkip'].includes(node)&&run.story.c9Rain!=='leave';
 const film=filmStart||resume||inPause;
 const phase:FilmPhase=filmStart?(i>=3?'key':'packing'):resume?(['key','key','photo','train','train'] as const)[i]??'train':'key';
 const position=resume?(run.story.c9Rain==='arch'?'arch':'open'):run.story.c9Rain==='arch'?'arch':run.story.c9Rain==='canopy'?'canopy':'open';
 const transform=position==='arch'?'matrix(.89 -.125 0 .92 827 330)':position==='canopy'?'translate(808 329) scale(.777 .817)':'translate(689 312) scale(1.24 1.195)';
 const atLab=['lab','goodbye','goodbyeChoice','kissAgain','kissFirst','kissEnd','hug','words'].includes(node);
 return <div className={`courtyard-visual ${filmStart||resume?'courtyard-playing':''} ${inPause?'courtyard-paused':''}`}>
  {(film||atLab)&&<svg className="courtyard-projection" viewBox="0 0 1536 1024" preserveAspectRatio="xMidYMid slice" aria-label={film?filmLabels[phase]:undefined} role={film?'img':undefined} aria-hidden={!film}>
   {film&&<g transform={transform}><CourtyardFilmArt phase={phase}/>{inPause&&<rect width="300" height="160" fill="#282831" opacity=".62"/>}</g>}
   {atLab&&<g fill="#59412e" textAnchor="middle" fontSize="15" fontFamily="Georgia, serif"><text x="695" y="300">Плёнка и одноразовые камеры</text><text x="695" y="327">Приём</text></g>}
  </svg>}
  {['rain','rainAside','rainChoice'].includes(node)&&<div className="courtyard-rain" aria-hidden="true"/>}
 </div>;
}
