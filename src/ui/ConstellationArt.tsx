import { constellationPaths } from '../minigames/constellationModel';
import type { ConstellationResult } from '../engine/types';
export function ConstellationArt({shape}:{shape:ConstellationResult['outcome']}){
  return <svg className="constellation-art" viewBox="0 0 100 100" aria-hidden="true"><path d={constellationPaths[shape]} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>{[[25,25],[42,40],[75,25],[65,80]].map(([cx,cy],i)=><circle key={i} cx={cx} cy={cy} r="2.7" fill="currentColor"/>)}</svg>;
}
