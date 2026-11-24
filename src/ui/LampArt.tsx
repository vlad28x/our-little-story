import { useId } from 'react';

export function LampArt({dim=false}:{dim?:boolean}){
  const id=useId().replace(/:/g,'');
  return <svg className="lamp-art" viewBox="0 0 200 200" aria-hidden="true">
    <defs>
      <radialGradient id={`${id}-light`}><stop stopColor="#ffe1a5" stopOpacity={dim ? .28 : .62}/><stop offset="1" stopColor="#e7b784" stopOpacity="0"/></radialGradient>
      <linearGradient id={`${id}-shade`} x2=".8" y2="1">
        <stop stopColor={dim?'#dfba8f':'#fbe7b0'}/><stop offset=".64" stopColor={dim?'#c89d78':'#e5bd84'}/><stop offset="1" stopColor="#b18077"/>
      </linearGradient>
    </defs>
    <ellipse cx="100" cy="172" rx="58" ry="11" fill="#805848" opacity=".24"/>
    <circle cx="100" cy="88" r="77" fill={`url(#${id}-light)`}/>
    <path d="M95 94h10v69H95Z" fill="#937065" stroke="#7c594f" strokeWidth="1.4"/>
    <path d="M99 109v51" stroke="#d9ae85" strokeWidth="1.4" opacity=".8"/>
    <ellipse cx="100" cy="164" rx="34" ry="8.5" fill="#936f68" stroke="#76594f" strokeWidth="1.5"/>
    <path d="M75 164q25 6 49 0" fill="none" stroke="#d2a789" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M67 39q33-6 66 0l22 66q-55 17-110 0Z" fill={`url(#${id}-shade)`} stroke="#a77b72" strokeWidth="2.4" strokeLinejoin="round"/>
    <path d="M75 43 63 105m37-65v72m24-69 14 61M51 101q49 15 97 0" fill="none" stroke="#f4d8b2" strokeWidth="1.5" strokeDasharray="4 2.5" opacity=".74"/>
    <path d="M144 109v29" stroke="#8e675f" strokeWidth="2.5"/><circle cx="144" cy="138" r="4.5" fill="#b48b68" stroke="#806153" strokeWidth="1.1"/>
  </svg>;
}
