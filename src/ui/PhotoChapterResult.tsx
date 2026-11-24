import {SupperArt} from './SupperArt';
import type {CardRecord} from '../state/types';
import {cardBackground,cardMeta} from '../content/cards';
import {firstSeasonVlad} from '../content/firstSeasonArt';
import {assetUrl} from '../content/assetManifest';
import {useGame} from '../app/GameProvider';
import {go} from '../app/router';
import {CameraArt} from './PhotoCamera';
export function PhotoChapterResult({card,trial,archive}:{card:CardRecord;trial:boolean;archive:boolean}){
 const {save,send,conflict,cloudBlocked,recovery}=useGame(),meta=cardMeta(card);
 const courtyard=card.id==='c9.courtyard';
 const supper=card.id==='c8.supper';
 const alternateFilling=save.lastResult?.episodeRecord?.story.c8Filling;
 const supperFilling=(trial?alternateFilling:save.campaign.records[8]?.story.c8Filling??alternateFilling)??'simple';
 const walk=card.id==='c6.photo.romance'||card.id==='c6.photo.walk',gallery=card.chapter===7;
 const galleryHall=card.id==='c7.gallery';
 const oldFriends=card.id==='c6.photo.friends';
 const blocked=conflict||cloudBlocked||recovery||!!save.trial||!!save.campaign.active;
 const artClass=supper?' supper-result-art':galleryHall?' portrait-postcard gallery-result-art':'';
 return <div className="photo-result second-season-palette"><p className="eyebrow">{trial?'ДРУГОЙ ВАРИАНТ · ОСНОВНАЯ ИСТОРИЯ СОХРАНЕНА':`ПОСЛЕ ТИТРОВ · ${courtyard?'ДЕВЯТАЯ':supper?'ВОСЬМАЯ':gallery?'СЕДЬМАЯ':'ШЕСТАЯ'} ВСТРЕЧА`}</p><article className="postcard">
  <div className={`postcard-art photo-postcard${artClass}`} style={{backgroundImage:`url(${assetUrl(cardBackground(card))})`}}>
   {supper&&<div className="supper-postcard"><SupperArt stage="cooked" shape={card.variant==='fold'?'fold':'open'} filling={supperFilling}/></div>}
   {galleryHall&&<img className="postcard-vlad" src={assetUrl(firstSeasonVlad('bg.gallery7.hall','smile'))} alt="Влад в галерее"/>}
   {walk&&<div className="postcard-camera"><CameraArt/></div>}
   <span className="postcard-number">Встреча {courtyard?'09':supper?'08':gallery?'07':'06'}</span>
  </div>
  <div className="postcard-copy"><h1>{meta.title}</h1><p>{meta.caption}</p></div>
 </article>{oldFriends&&<p className="small">Открытка из прежней редакции сохранена. Чтобы пойти в галерею, начни новую прогулку «Пока светло».</p>}<div className="stack result-actions"><button className="primary" onClick={()=>go('/chapters')}>К встречам</button>{oldFriends&&!archive&&<button disabled={blocked} onClick={()=>{send({type:'rewrite',chapter:6});go('/play/6');}}>Начать новую прогулку</button>}<button disabled={conflict||cloudBlocked||recovery||!save.campaign.completed.includes(card.chapter)&&!save.trial} onClick={()=>{if(!save.trial)send({type:'trial',chapter:card.chapter});go(`/play/${save.trial?.chapter??card.chapter}?mode=trial`);}}>{save.trial&&save.trial.chapter!==card.chapter?`Продолжить пробную главу ${save.trial.chapter} →`:'Посмотреть другой вариант'}</button></div></div>;
}
