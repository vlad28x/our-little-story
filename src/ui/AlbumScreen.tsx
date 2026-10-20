import { useGame } from '../app/GameProvider';
import { go } from '../app/router';
import { cards,archivedEpisodeCard } from '../content/cards';
import { chapters } from '../content/chapters/manifest';
import { achievements } from '../content/achievements';
import { assetUrl } from '../content/assetManifest';
import type { CardId } from '../engine/types';
import { Illustration } from './Illustration';
import { MemoryCollection,SecretCollection } from './EpisodeResult';

export function AlbumScreen(){
  const {save}=useGame();
  const seasonOpen=save.unlocked.some(chapter=>chapter>=6);
  const found=new Set(save.collection.cards.map(card=>card.id));
  const foundCards=(Object.keys(cards) as CardId[]).filter(id=>found.has(id));
  function chapterCards(secondSeason:boolean){
    return chapters.filter(chapter=>(chapter.id>=6)===secondSeason).map(chapter=>{
      const ids=foundCards.filter(id=>cards[id].chapter===chapter.id);
      if(!ids.length)return null;
      return <div className={`album-chapter ${ids.length>1?'album-chapter-wide':''}`} key={chapter.id}>
        <div className="album-chapter-heading"><span>ВСТРЕЧА {chapter.id}</span><h3>{chapter.title}</h3></div>
        <div className="album-grid">{ids.map(id=>{
          const card=cards[id];
          return <button key={id} className="album-card" onClick={()=>go(`/result/${card.chapter}?card=${id}`)}>
            <Illustration kind={card.motif}/><span>{card.title}</span><small>{archivedEpisodeCard(id)?'Прежний сценарий · открыть открытку':'Открыть открытку →'}</small>
          </button>;
        })}</div>
      </div>;
    });
  }
  return <section className="page-content album">
    <span className="eyebrow">ТО, ЧТО ХОЧЕТСЯ ОСТАВИТЬ</span><h1>Маленькие воспоминания</h1><p className="small">Здесь остаются открытки из твоей истории.</p>
    <section className="album-season" aria-label="Пять встреч"><h2>Пять встреч</h2>
      {foundCards.some(id=>cards[id].chapter<=5)?<div className="album-chapters">{chapterCards(false)}</div>:<p className="small album-empty">Пока здесь тихо. Первая открытка появится после завершения встречи.</p>}
    </section>
    {seasonOpen&&<section className="album-season" aria-label="После титров"><h2>После титров</h2>
      {foundCards.some(id=>cards[id].chapter>=6)?<div className="album-chapters">{chapterCards(true)}</div>:<p className="small album-empty">Здесь появятся воспоминания из новых вечеров.</p>}
      <MemoryCollection ids={save.collection.memories}/><SecretCollection ids={save.collection.secrets}/>
    </section>}
    <h2>Маленькие секреты</h2>{achievements.map(achievement=>{
      const unlocked=save.collection.achievements.includes(achievement.id);
      return <div className="secret" key={achievement.id}>{achievement.id==='cat-supervisor'?<img src={assetUrl('cat.idle')} alt="" className={unlocked?'':'silhouette'}/>:<Illustration kind={unlocked?achievement.id==='full-table'?'controller':achievement.id==='own-sky'?'star':achievement.id==='five-meetings'?'envelope':'umbrella':'envelope'}/>}<div><h3>{unlocked?achievement.title:achievement.id==='cat-supervisor'?'Кто-то наблюдает…':achievement.id==='dry-plan'?'Маленький прогноз…':'Ещё один секрет…'}</h3><p>{unlocked?achievement.description:'Секрет. Можно найти в истории.'}</p></div></div>;
    })}<button onClick={()=>go('/chapters')}>К главам</button>
  </section>;
}
