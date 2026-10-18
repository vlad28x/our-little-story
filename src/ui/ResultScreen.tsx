import { useGame } from '../app/GameProvider';
import { go } from '../app/router';
import { assetUrl } from '../content/assetManifest';
import { cards, cardFromStory, cardDetail, cardTeam, cardCharacter } from '../content/cards';
import type { CardId,ChapterId } from '../engine/types';
import { ConstellationArt } from './ConstellationArt';
import type { ConstellationResult } from '../engine/types';
import { InvitationPanel } from './InvitationPanel';
import { Illustration } from './Illustration';
export function ResultScreen({route}:{route:string}){
  const {save,send}=useGame();const params=new URLSearchParams(route.split('?')[1]??'');const wanted=params.get('card') as CardId|null;
  const chapter=Number(route.split('/')[2]?.split('?')[0]) as ChapterId;
  const isTrial=!wanted&&save.lastResult?.chapter===chapter&&save.lastResult?.source==='trial'&&params.get('source')!=='campaign';
  const canonical=save.campaign.records[chapter];
  const card=wanted?save.collection.cards.find(c=>c.id===wanted&&c.chapter===chapter):isTrial?save.collection.cards.find(c=>c.id===save.lastResult?.cardId):canonical?cardFromStory(canonical.story,chapter,canonical.results):undefined;
  if(!card)return <div className="page-content"><h2>Этот финал ещё впереди</h2><button onClick={()=>go('/chapters')}>К главам</button></div>;
  const c=cards[card.id];
  const showInvitation=chapter===5&&!wanted&&!save.trial&&canonical&&save.campaign.completed.includes(5);
  return <div className={`result-screen ${showInvitation?'has-final-conversation':''}`}>
    {showInvitation&&<InvitationPanel story={isTrial?{...canonical.story,ending:card.id==='c5.romantic'?'romantic':card.id==='c5.gaming'?'gaming':card.id==='c5.comic'?'comic':'friendly'}:canonical.story}/>}
    <p className="eyebrow">{isTrial?'ДРУГОЙ ВАРИАНТ · ОСНОВНАЯ ИСТОРИЯ СОХРАНЕНА':chapter===1?'ПЕРВАЯ ВСТРЕЧА ОСТАНЕТСЯ С ТОБОЙ':chapter===2?'У КАЖДОЙ ПОГОДЫ ЕСТЬ СВОЯ ИСТОРИЯ':chapter===3?'ХОРОШАЯ КОМАНДА · ТЁПЛЫЙ ВЕЧЕР':chapter===4?'У ЭТОГО ВЕЧЕРА СВОЁ СОЗВЕЗДИЕ':'ПЯТЬ ВСТРЕЧ · СВОЯ ИСТОРИЯ'}</p>
    <article className="postcard"><div className="postcard-art" style={{backgroundImage:`url(${assetUrl(c.background)})`}}>{chapter===4?<ConstellationArt shape={card.variant as ConstellationResult['outcome']}/>:<img src={assetUrl(cardCharacter(card.id))} className={cardCharacter(card.id).startsWith('vlad.')?'postcard-vlad':''} alt={cardCharacter(card.id).startsWith('vlad.')?'Влад':'Пончик отдыхает у кафе'}/>}<span className="postcard-number">0{card.chapter} / 05</span></div><div className="postcard-copy"><Illustration kind={c.motif}/><h1>{c.title}</h1><p>{c.caption}</p><p className="vlad-quote">«{c.quote}»</p><span className="small">{cardDetail(card)}</span>{cardTeam(card)&&<p className="card-team">{cardTeam(card)}</p>}</div></article>
    {chapter===1&&save.collection.achievements.includes('cat-supervisor')&&<p className="achievement-ribbon">✧ Начальник найден · Пончик одобряет перерыв</p>}
    {chapter===2&&save.collection.achievements.includes('dry-plan')&&<p className="achievement-ribbon">✧ Прогноз без дыр · зонтик для витрины спасён</p>}
    {chapter===3&&save.collection.achievements.includes('full-table')&&<p className="achievement-ribbon">✧ Стол на всех · девять подач вместе</p>}
    {chapter===4&&!card.usedPreset&&save.collection.achievements.includes('own-sky')&&<p className="achievement-ribbon">✧ Своё небо · четыре звезды в своём порядке</p>}
    {chapter===5&&save.collection.achievements.includes('five-meetings')&&<p className="achievement-ribbon">✧ Пять встреч · история останется с тобой</p>}
    <div className="result-actions"><button className="primary" onClick={()=>go('/chapters')}>К главам</button></div>
    <button className="text-button" onClick={()=>{send({type:'trial',chapter:card.chapter});go(`/play/${save.trial?.chapter??card.chapter}?mode=trial`);}}>{save.trial&&save.trial.chapter!==card.chapter?`Продолжить пробную главу ${save.trial.chapter} →`:'Посмотреть другой вариант →'}</button>
    {chapter<5&&<button className="primary full" onClick={()=>go('/chapters')}>{chapter===1?'Ко второй встрече':chapter===2?'К третьей встрече':chapter===3?'К четвёртой встрече':'К пятой встрече'} →</button>}
    <p className="tiny">{chapter<5?'Продолжение ждёт на карте встреч — понадобится код Влада.':'Это твой финал. К другим вариантам можно вернуться без изменения основной истории.'} Здесь ничего не отправляется автоматически.</p>
  </div>;
}
