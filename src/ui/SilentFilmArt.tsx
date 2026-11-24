import { useId } from 'react';

const frameLabels=['Кот ищет выходной','Кот рассматривает плед','Кот устроился под пледом'];

export function SilentFilmArt({frame=0}:{frame?:0|1|2}){
  const id=useId().replace(/:/g,'');
  return <svg className="silent-film-art" viewBox="0 0 360 210" role="img" aria-label={frameLabels[frame]}>
    <defs>
      <radialGradient id={`${id}-screen`} cx="44%" cy="38%" r="77%">
        <stop stopColor="#666078"/><stop offset="1" stopColor="#363348"/>
      </radialGradient>
      <linearGradient id={`${id}-fur`} x2=".8" y2="1">
        <stop stopColor="#f0d5a6"/><stop offset=".6" stopColor="#cea27b"/><stop offset="1" stopColor="#a57159"/>
      </linearGradient>
      <linearGradient id={`${id}-blanket`} x2=".78" y2="1">
        <stop stopColor="#d4b6bc"/><stop offset="1" stopColor="#9d7894"/>
      </linearGradient>
    </defs>
    <rect x="3" y="3" width="354" height="204" rx="19" fill={`url(#${id}-screen)`} stroke="#96809a" strokeWidth="6"/>
    <path d="M24 172q156-20 312 2v13H24Z" fill="#75647e"/>
    <path d={frame===2?'M101 121q76-55 150 10l29 40H80Z':'M194 142l99-14 18 44H182Z'} fill={`url(#${id}-blanket)`} stroke="#8c6d83" strokeWidth="2.4"/>
    <path d={frame===2?'M98 150q73-45 160 1m-163 9q79-38 174 0':'M197 153q42-13 97-14m-107 25q34-14 108-14'} fill="none" stroke="#efd0c0" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 3" opacity=".67"/>
    <g fill={`url(#${id}-fur)`} stroke="#a47c68" strokeWidth="2.2">
      <ellipse cx="147" cy="146" rx="60" ry="27"/>
      <path d="M105 112q-8-10-5-24l1-17 24 15q20-10 41 0l18-13q7 3 5 10l-5 31q-11 30-40 28-27 2-39-30Z"/>
      <path d="M109 100l-4-21 16 12zm62-6 13-14-4 18z" fill="#c7907e" stroke="none"/>
      <path d="M128 86q8 5 10 11m7-12 3 9m11-7 7 7M100 143q11 3 16 11m-8-19q12 4 18 12" stroke="#a67252" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity=".65"/>
      {frame===1?<g fill="#63584c"><ellipse cx="129" cy="109" rx="3" ry="4.5"/><ellipse cx="162" cy="109" rx="3" ry="4.5"/></g>:<path d="M119 110q6 5 13 3m23 0q7 1 13-3" fill="none" stroke="#694f49" strokeLinecap="round"/>}
      <path d="M134 113q9-6 20 1l6 11q-17 10-31-1Z" fill="#f4ddbd" stroke="none"/>
      <path d="M141 119l6 0-3 5Z" fill="#ad7775" strokeWidth="1.4"/>
      <path d="M133 122l-14-2m14 4-13 3m35-5 14-3m-14 5 13 2" fill="none" stroke="#f2d0b4" strokeWidth="1.1" strokeLinecap="round"/>
      <path d="M95 145q-36 10-32-18" fill="none" strokeWidth="9" strokeLinecap="round"/>
    </g>
    {frame===0&&<path d="M224 68h17l-17 20h17m5-44h12l-12 14h12" stroke="#e6d5c8" fill="none" strokeWidth="2.6" strokeLinecap="round"/>}
  </svg>;
}
