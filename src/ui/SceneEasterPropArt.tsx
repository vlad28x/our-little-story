import type { ScenePropId } from '../content/easterEggs';

// Small original SVG scene props; no external files or duplicate SVG IDs.
export function SceneEasterPropArt({id,active}:{id:ScenePropId;active:boolean}){
  switch(id){
    case 'blanket':return active?<svg viewBox="0 0 100 80" aria-hidden="true"><g className="blanket-fold is-lifted"><path d="M7 35Q37 20 89 29L78 53Q38 34 9 49Z" fill="#e4c19b" stroke="#ac8766" strokeWidth="2"/><path d="M14 39Q43 28 82 35M17 45Q43 35 78 42" fill="none" stroke="#f3dfc2" strokeWidth="3"/></g></svg>:null;
    case 'tv':return active?<><svg viewBox="0 0 128 100" aria-hidden="true"><g className="tv-cat"><path d="m41 42-3-17 16 9h20l16-9-3 17q11 28-23 28T41 42Z" fill="#d6ae7e" stroke="#805c48" strokeWidth="2"/><path d="M49 48h4m22 0h4m-19 8 4 3 4-3m-4 3v4" stroke="#634c46" strokeWidth="2.5" strokeLinecap="round" fill="none"/></g></svg><span className="tv-player" aria-hidden="true">Игрок 3 подключился</span></>:null;
    case 'mug':return active?<svg viewBox="0 0 80 100" aria-hidden="true"><path className="tea-heart" d="M36 32C12 20 17 5 27 8q7 0 9 7 3-7 10-7c12 0 14 14-10 24Z" fill="none" stroke="#fff6e5" strokeWidth="3" strokeLinecap="round"/></svg>:null;
    case 'star':return <svg viewBox="0 0 80 80" aria-hidden="true"><g className={active?'wish-star is-falling':'wish-star'}><path d="m40 18 5 16 17 6-17 5-5 17-6-17-16-5 16-6Z" fill="#ffe7a8"/><circle cx="40" cy="40" r="7" fill="#fff5dd"/>{active&&<path d="M42 38 70 10" stroke="#ffe7a8" strokeWidth="3" strokeLinecap="round"/>}</g></svg>;
    case 'sign':return <svg viewBox="0 0 160 80" aria-hidden="true"><path d="M29 27 38 3m93 24L122 3" stroke="#8c6952" strokeWidth="2"/><rect x="5" y="23" width="150" height="50" rx="7" fill="#82634e" stroke="#533e38" strokeWidth="2"/><rect x="10" y="28" width="140" height="40" rx="4" fill="#f0d9b4"/><text x="80" y="54" textAnchor="middle" fill="#70465e" fontFamily="inherit" fontSize="18" className={active?'sign-normal is-replaced':'sign-normal'}>Пауза</text>{active&&<text x="80" y="53" textAnchor="middle" fill="#70465e" fontFamily="inherit" fontSize="15" className="sign-secret">Продолжение</text>}</svg>;
  }
}
