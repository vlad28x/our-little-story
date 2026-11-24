import { useId } from 'react';
import type { MovieDrink } from '../engine/types';

export function DrinkArt({ drink='tea' }: { drink?:MovieDrink }){
  const id=useId().replace(/:/g,'');
  const glass=drink==='water';
  return <svg viewBox="0 0 80 80" aria-hidden="true">
    <defs>
      <linearGradient id={`${id}-cup`} x2=".86" y2="1">
        <stop stopColor={glass?'#ecf1e9':'#fbe8cb'}/><stop offset=".58" stopColor={glass?'#aebfbd':'#d7b4a1'}/><stop offset="1" stopColor={glass?'#758989':'#aa7f8c'}/>
      </linearGradient>
    </defs>
    <ellipse cx="36" cy="67" rx="29" ry="5" fill="#604338" opacity=".22"/>
    {!glass&&<path d="M52 34q13-6 16 3 4 12-12 17l-3-4q10-3 10-10 0-4-8-2Z" fill={`url(#${id}-cup)`} stroke="#9d8079" strokeWidth="1.5"/>}
    <path d={glass?'M16 28h39l-6 32q-13 10-27 0Z':'M13 29h44l-4 24q-3 13-18 13T16 53Z'} fill={`url(#${id}-cup)`} stroke="#9c8079" strokeWidth="1.6" strokeLinejoin="round"/>
    <ellipse cx="35" cy="28.5" rx={glass?19.5:22} ry="5.5" fill={glass?'#9db6b8':drink==='cocoa'?'#96715e':'#bd8b5d'} stroke={glass?'#e2e7df':'#ead3b0'} strokeWidth="1.7"/>
    <path d="M21 37q1 13 7 20m16 4q6-3 8-8" fill="none" stroke="#f7e6cd" strokeWidth="1.5" strokeLinecap="round" opacity=".78"/>
    {!glass&&<path d="M24 20c-7-8 7-9 3-16m14 17c-6-7 8-9 3-16" fill="none" stroke="#f7e1ce" strokeWidth="1.9" strokeLinecap="round" opacity=".85"/>}
  </svg>;
}
