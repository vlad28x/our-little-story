import { useId,useState } from 'react';
import { useGame } from '../app/GameProvider';
import { go } from '../app/router';
import { cards,archivedEpisodeCard,cardConstellation } from '../content/cards';
import { chapters } from '../content/chapters/manifest';
import { achievements,afterCreditsSecrets } from '../content/achievements';
import { assetUrl } from '../content/assetManifest';
import type { CardId,StoryState } from '../engine/types';
import { triggerHaptic } from '../telegram/bridge';
import { Illustration } from './Illustration';
import { ConstellationArt } from './ConstellationArt';
import { SelectedPrint,selectedPrintLabel,type PrintSource } from './TravellersArt';
import { useReducedMotion } from './useReducedMotion';
import { useSound } from './useSound';

const printSources=[6,'feet',7,8,'secretKitchen',9] as const;
const printNotes:Record<PrintSource,(story:StoryState)=>string>={
  6:story=>story.c6PhotoPlace==='upper'?'первый кадр нашей плёнки. на верхней дорожке свет всё-таки дождался.':'первый кадр нашей плёнки. свет всё-таки дождался.',
  feet:()=> 'нажали кнопку одновременно. лучший документальный отчёт о том, что мы уже шли рядом.',
  7:()=> 'у дверей галереи. внутри за перегородкой снимать запретили — пришлось запоминать так.',
  8:story=>story.c8Frame?.startsWith('board')?'наша половина кухни. мучная запятая осталась на доске, а хрустящий край честно поделили пополам.':'наша половина кухни. хрустящий край честно поделили пополам.',
  secretKitchen:()=> 'снял, пока ты не смотрела. мой любимый кадр со всей плёнки — оставил у себя.',
  9:story=>story.c9Rain==='leave'?'дворик, гирлянды и вечер, которому дождь пошёл только на пользу. даже книги успели спасти.':'дворик, гирлянды и вечер, которому дождь пошёл только на пользу.',
};

function AlbumPrint({story,source,reduced,onFlip}:{story:StoryState;source:PrintSource;reduced:boolean;onFlip:()=>void}){
  const [flipped,setFlipped]=useState(false);
  const id=useId();
  const label=selectedPrintLabel(story,source);
  const flip=()=>{setFlipped(value=>!value);onFlip();};
  return <div className="album-print" data-flipped={flipped} data-reduced={reduced}>
    <div className="album-print-stage" id={id}>
      <div className="album-print-sides">
        <div className="album-print-face album-print-front" aria-hidden={flipped}><SelectedPrint story={story} source={source}/></div>
        <div className="album-print-face album-print-back" aria-hidden={!flipped}><p>{printNotes[source](story)}</p></div>
      </div>
      <button className="album-print-hit" aria-label={`Оборот снимка «${label}»`} aria-pressed={flipped} aria-controls={id} onClick={flip}/>
    </div>
    <button className="album-print-flip" aria-controls={id} onClick={flip}>{flipped?'Вернуть снимок ↻':'Перевернуть на оборот ↻'}</button>
  </div>;
}

export function AlbumScreen(){
  const {save,telegramApp}=useGame();
  const {play}=useSound();
  const seasonOpen=save.unlocked.some(chapter=>chapter>=6);
  const reduced=useReducedMotion(save.settings.motion);
  const prints=save.campaign.completed.includes(10)?save.campaign.records[10]?.story:undefined;
  const found=new Map(save.collection.cards.map(card=>[card.id,card]));
  const foundCards=(Object.keys(cards) as CardId[]).filter(id=>found.has(id));
  function chapterCards(secondSeason:boolean){
    return chapters.filter(chapter=>(chapter.id>=6)===secondSeason).map(chapter=>{
      const ids=foundCards.filter(id=>cards[id].chapter===chapter.id);
      if(!ids.length)return null;
      return <div className={`album-chapter ${ids.length>1?'album-chapter-wide':''}`} key={chapter.id}>
        <div className="album-chapter-heading"><span>ВСТРЕЧА {chapter.id}</span><h3>{chapter.title}</h3></div>
        <div className="album-grid">{ids.map(id=>{
          const card=cards[id],shape=cardConstellation(found.get(id)!);
          return <button key={id} className="album-card" onClick={()=>go(`/result/${card.chapter}?card=${id}`)}>
            {shape?<ConstellationArt shape={shape} ink className="illustration"/>:<Illustration kind={card.motif}/>}<span>{card.title}</span><small>{archivedEpisodeCard(id)?'Прежний сценарий · открыть открытку':'Открыть открытку →'}</small>
          </button>;
        })}</div>
      </div>;
    });
  }
  return <section className="page-content album">
    <span className="eyebrow">ТО, ЧТО ХОЧЕТСЯ ОСТАВИТЬ</span><h1>Маленькие воспоминания</h1><p className="small">Здесь остаются открытки и снимки из твоей истории.</p>
    <section className="album-season" aria-label="Пять встреч"><h2>Пять встреч</h2>
      {foundCards.some(id=>cards[id].chapter<=5)?<div className="album-chapters">{chapterCards(false)}</div>:<p className="small album-empty">Пока здесь тихо. Первая открытка появится после завершения встречи.</p>}
    </section>
    {seasonOpen&&<section className="album-season" aria-label="После титров"><h2>После титров</h2>
      {foundCards.some(id=>cards[id].chapter>=6)?<div className="album-chapters">{chapterCards(true)}</div>:<p className="small album-empty">Здесь появятся воспоминания из новых вечеров.</p>}
      {prints&&<section className="album-envelope" aria-labelledby="album-envelope-heading">
        <h3 id="album-envelope-heading">Конверт из фотолаборатории</h3>
        <div className="album-prints">{printSources.map(source=><AlbumPrint key={source} story={prints} source={source} reduced={reduced} onFlip={()=>{play('paper');triggerHaptic(telegramApp,'selection',save.settings.sound,reduced);}}/>)}</div>
      </section>}
    </section>}
    <h2>Маленькие секреты</h2>{achievements.map(achievement=>{
      const unlocked=save.collection.achievements.includes(achievement.id);
      return <div className="secret" key={achievement.id}>{achievement.id==='cat-supervisor'?<img src={assetUrl('cat.chapter1.gouache')} alt="" className={unlocked?'':'silhouette'}/>:<Illustration kind={unlocked?achievement.id==='full-table'?'controller':achievement.id==='own-sky'?'star':achievement.id==='five-meetings'?'envelope':'umbrella':'envelope'}/>}<div><h3>{unlocked?achievement.title:achievement.id==='cat-supervisor'?'Кто-то наблюдает…':achievement.id==='dry-plan'?'Маленький прогноз…':'Ещё один секрет…'}</h3><p>{unlocked?achievement.description:'Секрет. Можно найти в истории.'}</p></div></div>;
    })}
    {seasonOpen&&<section className="album-season-secrets" aria-labelledby="album-season-secrets-heading">
      <h3 id="album-season-secrets-heading">После титров</h3>
      {afterCreditsSecrets.map(secret=>{
        const unlocked=save.collection.secrets.includes(secret.id);
        return <div className="secret" key={secret.id}>
          <Illustration kind={unlocked?secret.motif:'envelope'}/>
          <div><h4>{unlocked?secret.title:`Секрет встречи ${secret.chapter}`}</h4><p>{unlocked?secret.description:secret.hint}</p></div>
        </div>;
      })}
    </section>}
    <button onClick={()=>go('/chapters')}>К главам</button>
  </section>;
}
