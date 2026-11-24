import { useId } from 'react';
import type { StoryState } from '../engine/types';

export function BookmarkArt({memory}:{memory:StoryState['c10Memory']}){
  const id=useId().replace(/:/g,'');
  return <svg className="bookmark-art" viewBox="0 0 160 210" role="img" aria-label="Знак нашего вечера">
    <defs><linearGradient id={`${id}-paper`} x2=".78" y2="1"><stop stopColor="#f8edd2"/><stop offset=".6" stopColor="#ebd7bf"/><stop offset="1" stopColor="#c9a3a6"/></linearGradient></defs>
    <path d="M40 19h87v177l-47-24-40 23Z" fill="#6e5158" opacity=".23"/>
    <path d="M37 15q35-3 86 0v175l-43-25-43 25Z" fill={`url(#${id}-paper)`} stroke="#a5828f" strokeWidth="2.1" strokeLinejoin="round"/>
    <path d="M45 23h70v153l-35-20-35 20Z" fill="none" stroke="#b59190" strokeWidth="1.25" strokeDasharray="2.8 3.2"/>
    <path d="M48 37l9-1m51 27 4-1m-61 81 10-2m41 20 8 4" fill="none" stroke="#fbedd2" strokeWidth="2.1" strokeLinecap="round"/>
    <circle cx="80" cy="33" r="5" fill="#ac8a93"/>
    {memory==='pause'&&<g stroke="#89596a" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M54 82h43v29q-21 20-43 0Zm44 5q22-2 18 14-3 9-17 7M67 68q-7-10 2-17m13 18q-7-10 2-19"/>
      <path d="M58 85q15 5 34 0" stroke="#bb8d83" strokeWidth="1.8"/>
    </g>}
    {memory==='laugh'&&<g stroke="#ad7c52" strokeWidth="2.6" strokeLinejoin="round">
      <path d="m79 64 12 23 26 5-19 19 3 26-23-15-24 10 5-24-17-20 26-4Z" fill="#ecca84"/>
      <path d="M68 108q11 10 23-1m-14-35-4 12" fill="none" strokeLinecap="round"/><circle cx="68" cy="96" r="2"/><circle cx="91" cy="96" r="2"/>
    </g>}
    {memory==='initiative'&&<path d="M53 126q-16-34 17-35 34-2 23 21-9 17-19-2-7-16 34-38l-7 18m7-18-19 4" stroke="#9f6379" fill="none" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round"/>}
  </svg>;
}
