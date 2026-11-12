import type {CardRecord} from '../state/types';
import {cardBackground,cardMeta} from '../content/cards';
import {assetUrl} from '../content/assetManifest';
import {useGame} from '../app/GameProvider';
import {go} from '../app/router';
import {CameraArt} from './PhotoCamera';
export function PhotoChapterResult({card,trial,archive}:{card:CardRecord;trial:boolean;archive:boolean}){
 const {save,send,conflict,cloudBlocked,recovery}=useGame(),meta=cardMeta(card);
 const walk=card.id==='c6.photo.romance'||card.id==='c6.photo.walk',gallery=card.chapter===7;
 const oldFriends=card.id==='c6.photo.friends';
 const blocked=conflict||cloudBlocked||recovery||!!save.trial||!!save.campaign.active;
 return <div className="photo-result"><p className="eyebrow">{trial?'ДРУГОЙ ВАРИАНТ · ОСНОВНАЯ ИСТОРИЯ СОХРАНЕНА':`ПОСЛЕ ТИТРОВ · ${gallery?'СЕДЬМАЯ':'ШЕСТАЯ'} ВСТРЕЧА`}</p><article className="postcard"><div className="postcard-art photo-postcard" style={{backgroundImage:`url(${assetUrl(cardBackground(card))})`}}>{walk&&<div className="postcard-camera"><CameraArt/></div>}<span className="postcard-number">Встреча {gallery?'07':'06'}</span></div><div className="postcard-copy"><h1>{meta.title}</h1><p>{meta.caption}</p></div></article>{gallery&&!archive&&<p className="small continuation-pending">Следующая встреча за ужином ещё готовится.</p>}{oldFriends&&<p className="small">Открытка из прежней редакции сохранена. Чтобы пойти в галерею, начни новую прогулку «Пока светло».</p>}<div className="stack result-actions"><button className="primary" onClick={()=>go('/chapters')}>К встречам</button>{oldFriends&&!archive&&<button disabled={blocked} onClick={()=>{send({type:'rewrite',chapter:6});go('/play/6');}}>Начать новую прогулку</button>}<button disabled={conflict||cloudBlocked||recovery||!save.campaign.completed.includes(card.chapter)&&!save.trial} onClick={()=>{if(!save.trial)send({type:'trial',chapter:card.chapter});go(`/play/${save.trial?.chapter??card.chapter}?mode=trial`);}}>{save.trial&&save.trial.chapter!==card.chapter?`Продолжить пробную главу ${save.trial.chapter} →`:'Посмотреть другой вариант'}</button></div></div>;
}
