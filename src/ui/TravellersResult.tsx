import type {CardRecord} from '../state/types';
import {cardMeta} from '../content/cards';
import {travellerResources} from '../content/travellers';
import {assetUrl} from '../content/assetManifest';
import {useGame} from '../app/GameProvider';
import {go} from '../app/router';
import {TravellersBoard,FeetPrint} from './TravellersArt';
import {TravellersInvitation} from './TravellersInvitation';

export function TravellersResult({card,trial,archive}:{card:CardRecord;trial:boolean;archive:boolean}){
 const {save,send,conflict,recovery,cloudBlocked}=useGame(),meta=cardMeta(card);
 const invitation=!archive&&!trial&&!save.trial&&save.campaign.completed.includes(10);
 const blocked=conflict||recovery||cloudBlocked;
 return <div className="result-screen travellers-result">
  <p className="eyebrow">{trial?'ДРУГОЙ ВАРИАНТ · ОСНОВНАЯ ИСТОРИЯ СОХРАНЕНА':'ДЕСЯТАЯ ВСТРЕЧА · ВЕЧЕР НА ПАМЯТЬ'}</p>
  {invitation&&<TravellersInvitation/>}
  <article className="postcard"><div className="postcard-art traveller-postcard" style={{backgroundImage:`url(${assetUrl('bg.travellers10.cafe')})`}}><TravellersBoard state={travellerResources({c10River:'ford',c10Quarry:'tunnel',c10Arrival:'marsh'})}/><div className="feet-by-board"><FeetPrint/></div></div><div className="postcard-copy"><h1>{meta.title}</h1><p>{meta.caption}</p><p className="vlad-quote">{meta.quote}</p></div></article>
  <div className="result-actions stack"><button className="primary" onClick={()=>go('/chapters')}>К встречам</button><button disabled={blocked||!save.campaign.completed.includes(10)} onClick={()=>{if(!save.trial)send({type:'trial',chapter:10});go(`/play/${save.trial?.chapter??10}?mode=trial`);}}>Посмотреть другой вариант</button></div>
 </div>;
}
