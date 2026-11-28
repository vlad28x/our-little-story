import { useRef } from 'react';
import { useGame, DEV_SANDBOX } from './GameProvider';
import { go } from './router';
import { ChapterCodeEntry, type CodeEntryState } from './ChapterCodeEntry';
import { DeveloperPanel } from './DeveloperPanel';
import { chapterAction } from '../state/chapterAccess';
import type { ChapterId } from '../engine/types';
import { assetUrl } from '../content/assetManifest';
import { chapters } from '../content/chapters/manifest';
import { ConstellationArt } from '../ui/ConstellationArt';
import type { IllustrationKind } from '../content/illustrations';
import { Illustration } from '../ui/Illustration';

const chapterIllustrations:Record<ChapterId,IllustrationKind>={1:'token',2:'umbrella',3:'star',4:'controller',5:'cafe',6:'promenade',7:'gallery',8:'tea-for-two',9:'cinema',10:'evening-lamp'};
const seasonCovers = [
  { id: 1, title: 'Пять встреч', range: 'Главы 1–5', art: 'bg.chapter1.gouache.entry' },
  { id: 2, title: 'После титров', range: 'Главы 6–10', art: 'bg.photo6.sun' },
] as const;

type ChapterMapProps = {
  codeEntry: CodeEntryState;
  setCodeEntry: (value: CodeEntryState) => void;
  season: 1 | 2;
  setSeason: (season: 1 | 2) => void;
  seasonOpen: boolean;
  onRewrite: (chapter: ChapterId) => void;
  onDiscardTrial: () => void;
  returnToInvitation: (chapter: 5 | 10) => void;
};

export function ChapterMap({codeEntry, setCodeEntry, season, setSeason, seasonOpen, onRewrite, onDiscardTrial, returnToInvitation}: ChapterMapProps) {
  const { save, send, conflict, cloudBlocked } = useGame();
  const invitationBlocked = conflict || cloudBlocked;
  const codeInput = useRef<HTMLInputElement>(null);
  const listedChapters=chapters.filter(c=>season===1?c.id<=5:c.id>=6);
  function focusCode() {
    const input = codeInput.current;
    if (!input) return;
    const details = input.closest('details');
    if (details) details.open = true;
    input.scrollIntoView({ block: 'center' });
    input.focus({ preventScroll: true });
  }
  function openChapter(id: ChapterId) {
    const action = chapterAction(save, id);
    if (action === 'result') {
      if (id === 5 || id === 10) returnToInvitation(id);
      else go(`/result/${id}?source=campaign`);
    } else if (action === 'resume' || action === 'start') {
      if (action === 'start') send({ type: 'start', chapter: id });
      go(`/play/${id}`);
    }
  }

  function openTrial(id: ChapterId) {
    send({ type: 'trial', chapter: id });
    go(`/play/${save.trial?.chapter ?? id}?mode=trial`);
  }

  function chapterControls(id: ChapterId) {
    const action = chapterAction(save, id);
    const enterCode = <button className="text-button chapter-unlock-link" onClick={focusCode}>Ввести код</button>;
    if (action === 'unavailable') return <span className="locked-caption">Этот вечер ещё готовится</span>;
    if (action === 'previous' || action === 'walk') return <>
      <span className="locked-caption">{action === 'walk'
        ? 'Сначала пройди новую прогулку «Пока светло».'
        : `Сначала заверши встречу ${id - 1}`}</span>
      {action === 'walk' && <button className="text-button" onClick={() => go('/result/6')}>К новой прогулке</button>}
      {!save.unlocked.includes(id) && enterCode}
    </>;
    if (action === 'code') return <>
      <span className="locked-caption">Ждёт своего маленького приглашения</span>
      <p className="small unlock-note">Влад пришлёт код, когда будет время для следующей встречи.</p>
      {enterCode}
    </>;

    const invitation = action === 'result' && (id === 5 || id === 10);
    const label = invitation ? 'Встретиться вживую' : action === 'result' ? 'Мой финал' :
      action === 'resume' ? 'Продолжить' : 'Начать встречу';
    return <>
      <button className="primary" disabled={action === 'busy' || (invitation && invitationBlocked)}
        onClick={() => openChapter(id)}>{label} →</button>
      {save.campaign.startStates[id] && <div className="replay-links">
        {(!save.trial || save.trial.chapter === id) && <button className="text-button" onClick={() => openTrial(id)}>
          {save.trial ? 'Продолжить другой вариант' : 'Посмотреть другой вариант'}
        </button>}
        {save.trial?.chapter === id && <button className="text-button" onClick={onDiscardTrial}>Закрыть пробный вариант</button>}
        <button className="text-button" onClick={() => onRewrite(id)}>Изменить мою историю</button>
      </div>}
    </>;
  }

  return <section className="page-content chapter-map">
      <h1>Встречи</h1>
      {seasonOpen&&<div className="season-tabs" role="group" aria-label="Выбрать историю">
        {seasonCovers.map(({id,title,range,art})=><button key={id} type="button" aria-pressed={season===id} aria-label={title} aria-describedby={'season-range-'+id} onClick={()=>setSeason(id)}>
          <img src={assetUrl(art)} alt="" decoding="async"/>
          <span className="season-tab-copy"><strong>{title}</strong><small id={'season-range-'+id}>{range}</small></span>
        </button>)}
      </div>}
      <ChapterCodeEntry value={codeEntry} onChange={setCodeEntry} folded={seasonOpen} input={codeInput}
        onOpen={openChapter} onUnlockSeason={() => setSeason(2)}/>
      {season===2&&save.campaign.completed.includes(10)&&<p className="small">Сезон «После титров» завершён. Можно вернуться к любимым встречам.</p>}
      {save.trial&&<div className="trial-map-actions"><button className="text-button" onClick={()=>go(`/play/${save.trial!.chapter}?mode=trial`)}>Продолжить пробный вариант главы {save.trial.chapter}</button><button className="text-button" onClick={onDiscardTrial}>Закрыть пробный вариант</button></div>}
      <ol className="chapter-list">{listedChapters.map(c=>{
        const shape=c.id===3 ? save.campaign.records[c.id]?.story.constellation : undefined;
        return <li key={c.id} className={c.available?'available':'locked'}>
          <div className="chapter-icon">{shape?<ConstellationArt shape={shape} ink className="illustration"/>:<Illustration kind={chapterIllustrations[c.id]}/>}<span>{String(c.id).padStart(2,'0')}</span></div>
          <div><span className="eyebrow">ВСТРЕЧА {c.id}</span><h2>{c.title}</h2><p>{c.motif}</p>
            {chapterControls(c.id)}
          </div>
        </li>;
      })}</ol>
      {save.campaign.completed.includes(5)&&!seasonOpen&&<section className="after-credits-strip"><span aria-hidden="true">😈</span><div><h2>После титров</h2><p className="small">Продолжение открывается по приглашению Влада.</p><button className="text-button" onClick={focusCode}>Ввести код</button></div></section>}
      {DEV_SANDBOX&&<DeveloperPanel/>}
    </section>;
}
