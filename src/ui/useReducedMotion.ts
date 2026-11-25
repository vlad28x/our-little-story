import { useEffect, useState } from 'react';
import type { Settings } from '../state/types';

const query='(prefers-reduced-motion: reduce)';

export function useReducedMotion(motion:Settings['motion']){
  const [systemReduced,setSystemReduced]=useState(()=>matchMedia(query).matches);
  useEffect(()=>{
    const media=matchMedia(query);
    const update=()=>setSystemReduced(media.matches);
    media.addEventListener('change',update);
    return()=>media.removeEventListener('change',update);
  },[]);
  return motion==='reduced'||motion==='system'&&systemReduced;
}
