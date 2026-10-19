import { go } from '../app/router';
import { AdviserPortrait } from './AdviserPortrait';
export function AfterCreditsTeaser(){
  return <section className="after-credits-teaser"><span className="eyebrow">ПОСЛЕ ТИТРОВ</span><div className="teaser-advisers"><AdviserPortrait kind="angel"/><AdviserPortrait kind="devil"/></div><p className="teaser-devil">«что, думала, он на этом закончит?»</p><p className="small">Ангел уводит его за кадр: «не торопи события».</p><p>У этой истории может быть продолжение.</p><button className="text-button" onClick={()=>go('/chapters')}>К карте встреч →</button></section>;
}
