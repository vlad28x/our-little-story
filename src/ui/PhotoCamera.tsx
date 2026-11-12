import {filmLeft} from '../persistence/photoSix';
import type {StoryState} from '../engine/types';
export function CameraArt(){return <svg viewBox="0 0 140 90" aria-hidden="true"><rect x="8" y="15" width="124" height="65" rx="12" fill="#d7dfd0" stroke="#5c5950" strokeWidth="3"/><path d="M11 38H130V69H11Z" fill="#70796f"/><rect x="21" y="22" width="25" height="12" rx="2" fill="#f7efda" stroke="#5c5950" strokeWidth="2"/><rect x="99" y="22" width="18" height="12" rx="3" fill="#3d4640"/><circle cx="73" cy="51" r="24" fill="#e9dfca" stroke="#4d524b" strokeWidth="3"/><circle cx="73" cy="51" r="16" fill="#4d6268"/><circle cx="73" cy="51" r="8" fill="#263d46"/><path d="M102 13V8H117V14" fill="#5c5950"/><circle cx="32" cy="53" r="7" fill="#b2b9a3"/></svg>;}
export function PhotoCamera({story}:{story:StoryState}){
 const left=filmLeft(story);if(left===undefined)return null;
 return <div className="photo-camera" role="img" aria-label={`Общий плёночный аппарат. Осталось кадров: ${left}. Снимки ещё не проявлены.`}><CameraArt/><span>Кадров осталось: <strong>{left}</strong></span></div>;
}
