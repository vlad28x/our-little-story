import {useId} from 'react';

export function KitchenControls({ready=false}:{ready?:boolean}){
  const uid=useId().replace(/:/g,'');
  return <div className="controller-pair" aria-hidden="true">{[true,ready].map((lit,i)=><svg key={i} viewBox="0 0 140 100">
    <defs>
      <linearGradient id={`${uid}-body-${i}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#7c727e"/><stop offset=".55" stopColor="#5c535f"/><stop offset="1" stopColor="#433c47"/>
      </linearGradient>
      <radialGradient id={`${uid}-led-${i}`} cx="50%" cy="50%" r="50%">
        <stop offset="0" stopColor="#e8ffc9"/><stop offset="1" stopColor="#9cd46b" stopOpacity="0"/>
      </radialGradient>
    </defs>
    {/* Contact shadow */}
    <ellipse cx="70" cy="88" rx="54" ry="8" fill="#2a1f2d" opacity=".24"/>
    {/* Shoulder triggers */}
    <path d="M30 20q10-7 21-4v7H29Z M110 20q-10-7-21-4v7h22Z" fill="#463e4a" stroke="#2f2933" strokeWidth="1.6"/>
    {/* Ergonomic controller casing */}
    <path d="M32 22Q70 11 108 22Q124 31 130 74Q129 97 109 80L94 65H46L31 80Q11 97 11 74Q15 32 32 22Z" fill={`url(#${uid}-body-${i})`} stroke="#352e39" strokeWidth="2.4" strokeLinejoin="round"/>
    <path d="M35 25Q70 16 105 25" fill="none" stroke="#9d92a0" strokeWidth="2" strokeLinecap="round" opacity=".55"/>
    {/* Sculpted D-pad */}
    <circle cx="38" cy="40" r="14" fill="#4a424d" opacity=".6"/>
    <path d="M34 28h8v8h8v8h-8v8h-8v-8h-8v-8h8Z" fill="#ece2d8" stroke="#3c3540" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="38" cy="40" r="2.6" fill="#cfc3b8"/>
    {/* Glossy face buttons */}
    <circle cx="96" cy="43" r="16" fill="#4a424d" opacity=".45"/>
    <g stroke="#3c3540" strokeWidth="1.2">
      <circle cx="96" cy="31" r="4.6" fill="#b7d4bc"/><circle cx="109" cy="43" r="4.6" fill="#f0bfd0"/>
      <circle cx="83" cy="43" r="4.6" fill="#d3c8eb"/><circle cx="96" cy="55" r="4.6" fill="#f7da92"/>
    </g>
    <g fill="#ffffff" opacity=".65">
      <circle cx="94.8" cy="29.8" r="1.2"/><circle cx="107.8" cy="41.8" r="1.2"/>
      <circle cx="81.8" cy="41.8" r="1.2"/><circle cx="94.8" cy="53.8" r="1.2"/>
    </g>
    {/* Recessed analog thumbsticks */}
    <circle cx="56" cy="55" r="9.5" fill="#3a333e" stroke="#2c2630" strokeWidth="1.5"/>
    <circle cx="56" cy="55" r="6" fill="#4e4754" stroke="#6c6472" strokeWidth="1.2"/>
    <circle cx="82" cy="56" r="8.5" fill="#3a333e" stroke="#2c2630" strokeWidth="1.5"/>
    <circle cx="82" cy="56" r="5.2" fill="#4e4754" stroke="#6c6472" strokeWidth="1.2"/>
    {/* Power / Charge LED */}
    {lit&&<circle cx="70" cy="28" r="10" fill={`url(#${uid}-led-${i})`}/>}
    <circle cx="70" cy="28" r="4.2" fill={lit?'#d7f5b0':'#3b3540'} stroke="#2c2630" strokeWidth="1.3"/>
    {lit&&<circle cx="69" cy="27" r="1.3" fill="#ffffff" opacity=".9"/>}
  </svg>)}</div>;
}
