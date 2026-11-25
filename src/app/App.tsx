import { useEffect,useRef,useState } from 'react';
import { useGame,DEV_SANDBOX } from './GameProvider';
import { go,useRoute } from './router';
import { DeveloperPanel } from './DeveloperPanel';
import { DeveloperRecovery } from './DeveloperRecovery';
import { assetUrl } from '../content/assetManifest';
import { chapters,checkCode,chapterFromRoute } from '../content/chapters/manifest';
import { getChapter } from '../content/chapters';
import { canStart } from '../state/reducer';
import {completedWalk} from '../persistence/photoSix';
import { SceneStage } from '../ui/SceneStage';
import { ConstellationArt } from '../ui/ConstellationArt';
import { Illustration } from '../ui/Illustration';
import { AlbumScreen } from '../ui/AlbumScreen';

import { StoryScreen } from '../ui/StoryScreen';
import { ResultScreen } from '../ui/ResultScreen';
import { SettingsPanel } from '../ui/SettingsPanel';
import { Modal } from '../ui/Modal';
import { SaveExportButton } from '../ui/SaveExportButton';
import { SoundContext,useSoundPlayer } from '../ui/useSound';
import type { ChapterId } from '../engine/types';

const chapterIllustrations:Record<ChapterId,string>={1:'token',2:'umbrella',3:'star',4:'controller',5:'cafe',6:'promenade',7:'gallery',8:'tea-for-two',9:'cinema',10:'evening-lamp'};
const seasonCovers = [
  { id: 1, title: 'Пять встреч', range: 'Главы 1–5', art: 'bg.chapter1.gouache.entry' },
  { id: 2, title: 'После титров', range: 'Главы 6–10', art: 'bg.photo6.sun' },
] as const;

export function App(){
  const [discardTrial,setDiscardTrial]=useState(false);
  const [inviteAfterTrial,setInviteAfterTrial]=useState<5|10|null>(null);
  const {save,send,storageId,recovery,loaded,restore,reset,storageError,conflict,reload,cloudStatus,cloudError,cloudBlocked,telegramApp}=useGame();
  const sound=useSoundPlayer(save.settings.sound,save.settings.volume);
  const route=useRoute();
  const [menu,setMenu]=useState(false),[rewrite,setRewrite]=useState<ChapterId|null>(null),[code,setCode]=useState(''),[codeMessage,setCodeMessage]=useState('');
  const codeInput=useRef<HTMLInputElement>(null);
  const codeDetails=useRef<HTMLDetailsElement>(null);
  const [codeError,setCodeError]=useState(false),[codeChapter,setCodeChapter]=useState<ChapterId|null>(null);
  const parsedChapter=chapterFromRoute(route),routeChapter=parsedChapter??1;
  const seasonOpen=save.unlocked.some(n=>n>=6);
  const seasonKey=`${storageId}:map-season`;
  const [selectedSeason,setSeason]=useState<1|2>(()=>{if(!save.campaign.completed.includes(5))return 1;try{const stored=localStorage.getItem(seasonKey);if(stored==='1'||stored==='2')return Number(stored) as 1|2;}catch{/* This optional UI preference must not block the game. */}return seasonOpen?2:1;});
  const season=selectedSeason===2&&seasonOpen?2:1;
  useEffect(()=>{if(route==='/chapters')try{localStorage.setItem(seasonKey,String(season));}catch{/* Keep the selection in memory when storage is unavailable. */}},[route,season,seasonKey]);
  const listedChapters=season===2&&seasonOpen?chapters.filter(c=>c.id>=6):chapters.filter(c=>c.id<=5);
  const mode=route.includes('mode=trial')?'trial':'campaign';
  const isPlay=route.startsWith('/play/')&&parsedChapter!==undefined&&!!getChapter(parsedChapter);
  const viewedRun=mode==='trial'?save.trial?.run:save.campaign.active;
  const visitedSeason=parsedChapter!==undefined&&!recovery&&(isPlay?viewedRun?.chapter===parsedChapter:!!save.campaign.records[parsedChapter]||save.collection.cards.some(card=>card.chapter===parsedChapter))?(parsedChapter>=6?2:1):undefined;
  useEffect(()=>{
    if(visitedSeason===undefined)return;
    // Chapter links, the secret invitation and dev previews can bypass the map.
    setSeason(visitedSeason);
    try{localStorage.setItem(seasonKey,String(visitedSeason));}catch{/* Keep the chapter's season in memory. */}
  },[visitedSeason,seasonKey]);
  useEffect(()=>{
    const back=telegramApp?.BackButton;if(!back)return;
    const handle=()=>{if(isPlay)setMenu(true);else go('/chapters');};
    if(route==='/start'||route==='/chapters')back.hide();else back.show();back.onClick(handle);
    return()=>{back.offClick(handle);back.hide();};
  },[telegramApp,route,isPlay]);
  useEffect(()=>{
    if(codeMessage&&codeDetails.current)codeDetails.current.open=true;
  },[codeMessage,route,seasonOpen]);
  function focusCode(){
    if(codeDetails.current)codeDetails.current.open=true;
    codeInput.current?.scrollIntoView({block:'center'});
    codeInput.current?.focus({preventScroll:true});
  }
  function submitCode(){
    const found=checkCode(code);setCodeChapter(null);
    if(!found?.available){setCodeError(true);setCodeMessage(found?`«${found.title}» ещё готовится. Код пока не откроет эту встречу.`:'Код не подошёл. Проверь латинские буквы и дефис в сообщении Влада.');return;}
    send({type:'unlock',code});if(found.id>=6)setSeason(2);setCode('');setCodeError(false);setCodeChapter(found.id);
    const ready=canStart({...save,unlocked:[...save.unlocked,found.id]},found.id)&&!save.campaign.active||save.campaign.completed.includes(found.id)||save.campaign.active?.chapter===found.id;
    setCodeMessage(`${save.unlocked.includes(found.id)?'Уже открыта':'Открыта'} встреча ${found.id}: «${found.title}». ${ready?'Можно перейти к встрече.':'Код сохранён. Сначала заверши предыдущие встречи или текущую главу.'}`);
  }
  function openChapter(id:ChapterId){
    if(save.campaign.active?.chapter===id)go(`/play/${id}`);
    else if(save.campaign.completed.includes(id)){if(id===5||id===10)returnToInvitation(id);else go(`/result/${id}?source=campaign`);}
    else if(canStart(save,id)&&!save.campaign.active){send({type:'start',chapter:id});go(`/play/${id}`);}
    else go('/chapters');
  }
  function openTrial(id:ChapterId){send({type:'trial',chapter:id});go(`/play/${save.trial?.chapter??id}?mode=trial`);}
  const menuSeason=visitedSeason??season;
  function returnToInvitation(id:5|10){
    if(recovery||conflict||cloudBlocked)return;
    if(save.trial){setInviteAfterTrial(id);setDiscardTrial(true);return;}
    go(`/result/${id}?source=campaign&view=invitation`);
  }
  function cancelDiscardTrial(){setDiscardTrial(false);setInviteAfterTrial(null);}
  function closeTrial(){
    if(!save.trial||recovery||conflict||cloudBlocked)return;
    const targetSeason=save.trial.chapter>=6?2:1;
    send({type:'discard-trial'});setDiscardTrial(false);setMenu(false);
    if(inviteAfterTrial){setInviteAfterTrial(null);setSeason(inviteAfterTrial===10?2:1);go(`/result/${inviteAfterTrial}?source=campaign&view=invitation`);return;}
    if(route!=='/chapters'){setSeason(targetSeason);go('/chapters');}
  }
  const codeFields = <>
    {seasonOpen&&<p id="chapter-code-hint">Введи код из сообщения Влада.</p>}
    <form onSubmit={e=>{e.preventDefault();submitCode();}}><label htmlFor="chapter-access-code">Код<input ref={codeInput} id="chapter-access-code" name="chapter-code" value={code} placeholder="Код из сообщения" maxLength={64} onChange={e=>{setCode(e.target.value);setCodeMessage('');setCodeError(false);setCodeChapter(null);}} autoComplete="off" autoCapitalize="characters" autoCorrect="off" spellCheck={false} enterKeyHint="go" aria-invalid={codeError} aria-describedby={seasonOpen?'chapter-code-hint chapter-code-message':'chapter-code-message'}/></label><button className="primary" disabled={!code.trim()}>Открыть встречу</button></form>
    <p id="chapter-code-message" className="code-entry-status" role="status">{codeMessage}</p>
    {codeChapter&&(save.campaign.completed.includes(codeChapter)||save.campaign.active?.chapter===codeChapter||canStart(save,codeChapter)&&!save.campaign.active)&&<button className="code-open-chapter full" onClick={()=>openChapter(codeChapter)}>{save.campaign.completed.includes(codeChapter)?codeChapter===5||codeChapter===10?'Встретиться вживую':'Открыть мой финал':save.campaign.active?.chapter===codeChapter?'Продолжить встречу':`Начать встречу ${codeChapter}`} →</button>}
  </>;
  return <SoundContext.Provider value={sound}><main className="game-shell" data-motion={save.settings.motion}>
    <header className="topbar">
      <button className="brand" onClick={()=>go('/start')} aria-label="На главный экран">
        <Illustration kind="tea-for-two" className="brand-mark" viewBox="8 18 87 72"/>
        <span>пять случайных<br/><b>встреч</b></span>
      </button>
      <span className="topbar-caption">{isPlay?`${String(routeChapter).padStart(2,'0')} · ${routeChapter===1?'Случайная встреча':routeChapter===2?'Прогулка под дождём':routeChapter===3?'Разговор под звёздами':routeChapter===4?'Игровой вечер':routeChapter>=8?`После титров · ${chapters.find(c=>c.id===routeChapter)?.title}`:routeChapter===7?'После титров · На шаг левее':routeChapter===6?'После титров · Пока светло':'Ещё одна встреча?'}`:'маленькая история о нас'}</span>
      <button className="icon-button menu-toggle" aria-label="Открыть меню" onClick={()=>setMenu(true)}><span/><span/></button>
    </header>
    {DEV_SANDBOX&&<div className="dev-banner">Режим разработчика · отдельный тестовый прогресс</div>}
    {cloudStatus!=='none'&&<div className={`telegram-sync ${cloudStatus==='error'||cloudBlocked?'sync-warning':''}`} role="status">{cloudStatus==='saved'?'✓ История сохранена в Telegram':cloudStatus==='saving'?'Сохраняем историю в Telegram…':cloudStatus==='local'?'Пока сохраняем только на этом устройстве':cloudBlocked?'В Telegram появилась другая копия истории.':'Сохранение в Telegram не подтверждено. Прогресс остаётся на устройстве.'}{(cloudStatus==='local'||cloudStatus==='error')&&<button onClick={reload}>Проверить облако</button>}{cloudStatus==='error'&&cloudError&&<details className="telegram-sync-reason"><summary>Почему не сохранилось?</summary><p>{cloudError}</p></details>}</div>}
    {storageError&&!recovery&&<div role="status" className="storage-notice">{storageError} <button onClick={()=>go('/settings')}>К копии</button></div>}
    {recovery?<section className="page-content recovery">
      <Illustration kind="envelope"/><h1>{DEV_SANDBOX?'Тестовый прогресс устарел':'Сохраним эту историю'}</h1>{DEV_SANDBOX?<DeveloperRecovery/>:<><p>{loaded.error}</p><p>Текущий файл не изменён. Резервная копия может отставать на один шаг.</p></>}
      <div className="stack">{loaded.backup&&<button className="primary" onClick={()=>{restore();go('/chapters');}}>Восстановить резервную копию</button>}{loaded.raw&&<SaveExportButton raw={loaded.raw} name="five-meetings-recovery.json" app={telegramApp}>Скачать исходную копию</SaveExportButton>}<button onClick={()=>setRewrite(1)}>Начать заново</button></div><SettingsPanel/>
    </section>:
    isPlay?<StoryScreen mode={mode} chapterId={routeChapter} suspended={menu||!!rewrite||conflict||cloudBlocked}/>:
    route.startsWith('/play/')?<section className="page-content"><h1>Такой встречи нет на карте</h1><p>Выбери доступную встречу на карте. Продолжение открывается по приглашению Влада.</p><button onClick={()=>go('/chapters')}>К главам</button></section>:
    route.startsWith('/result/')?<ResultScreen key={route.split('?')[0]} route={route}/>:
    route==='/settings'?<section className="page-content"><button className="back-link" onClick={()=>go('/chapters')}>← К главам</button><SettingsPanel/></section>:
    route==='/album'?<AlbumScreen/>:
    route==='/chapters'?<section className="page-content chapter-map">
      <h1>Встречи</h1>
      {seasonOpen&&<div className="season-tabs" role="group" aria-label="Выбрать историю">
        {seasonCovers.map(({id,title,range,art})=><button key={id} type="button" aria-pressed={season===id} aria-label={title} aria-describedby={'season-range-'+id} onClick={()=>setSeason(id)}>
          <img src={assetUrl(art)} alt="" decoding="async"/>
          <span className="season-tab-copy"><strong>{title}</strong><small id={'season-range-'+id}>{range}</small></span>
        </button>)}
      </div>}
      {seasonOpen?<details ref={codeDetails} className="code-entry code-entry-fold">
        <summary><Illustration kind="envelope"/>Есть код от Влада?</summary>
        <div className="season-code-fields">{codeFields}</div>
      </details>:<section className="code-entry" aria-labelledby="chapter-code-title">
        <div className="code-entry-heading"><Illustration kind="envelope"/><h2 id="chapter-code-title">Есть код от Влада?</h2></div>
        {codeFields}
      </section>}
      {season===2&&save.campaign.completed.includes(10)&&<p className="small">Сезон «После титров» завершён. Можно вернуться к любимым встречам.</p>}
      {save.trial&&<div className="trial-map-actions"><button className="text-button" onClick={()=>go(`/play/${save.trial!.chapter}?mode=trial`)}>Продолжить пробный вариант главы {save.trial.chapter}</button><button className="text-button" onClick={()=>setDiscardTrial(true)}>Закрыть пробный вариант</button></div>}
      <ol className="chapter-list">{listedChapters.map(c=>{
        const needsWalk=c.id===7&&save.campaign.completed.includes(6)&&!completedWalk(save.campaign.records[6]?.story);
        const completed=save.campaign.completed.includes(c.id),active=save.campaign.active?.chapter===c.id,entitled=save.unlocked.includes(c.id),priorDone=Array.from({length:c.id-1},(_,i)=>i+1).every(n=>save.campaign.completed.includes(n as ChapterId));
        const shape=c.id===3 ? save.campaign.records[c.id]?.story.constellation : undefined;
        return <li key={c.id} className={c.available?'available':'locked'}>
          <div className="chapter-icon">{shape?<ConstellationArt shape={shape} ink className="illustration"/>:<Illustration kind={chapterIllustrations[c.id]}/>}<span>{String(c.id).padStart(2,'0')}</span></div>
          <div><span className="eyebrow">ВСТРЕЧА {c.id}</span><h2>{c.title}</h2><p>{c.motif}</p>
            {!c.available?<span className="locked-caption">Этот вечер ещё готовится</span>:!priorDone||needsWalk?<><span className="locked-caption">{needsWalk?'Сначала пройди новую прогулку «Пока светло».':`Сначала заверши встречу ${c.id-1}`}</span>{needsWalk&&<button className="text-button" onClick={()=>go('/result/6')}>К новой прогулке</button>}{!entitled&&<button className="text-button chapter-unlock-link" onClick={focusCode}>Ввести код</button>}</>:!entitled?<><span className="locked-caption">Ждёт своего маленького приглашения</span><p className="small unlock-note">Влад пришлёт код, когда будет время для следующей встречи.</p><button className="text-button chapter-unlock-link" onClick={focusCode}>Ввести код</button></>:<>
              <button className="primary" disabled={!completed&&!active&&!!save.campaign.active||completed&&(c.id===5||c.id===10)&&(conflict||cloudBlocked)} onClick={()=>openChapter(c.id)}>{completed?c.id===5||c.id===10?'Встретиться вживую':'Мой финал':active?'Продолжить':'Начать встречу'} →</button>
              {save.campaign.startStates[c.id]&&<div className="replay-links">{(!save.trial||save.trial.chapter===c.id)&&<button className="text-button" onClick={()=>openTrial(c.id)}>{save.trial?'Продолжить другой вариант':'Посмотреть другой вариант'}</button>}{save.trial?.chapter===c.id&&<button className="text-button" onClick={()=>setDiscardTrial(true)}>Закрыть пробный вариант</button>}<button className="text-button" onClick={()=>setRewrite(c.id)}>Изменить мою историю</button></div>}
            </>}
          </div>
        </li>;
      })}</ol>
      {save.campaign.completed.includes(5)&&!seasonOpen&&<section className="after-credits-strip"><span aria-hidden="true">😈</span><div><h2>После титров</h2><p className="small">Продолжение открывается по приглашению Влада.</p><button className="text-button" onClick={focusCode}>Ввести код</button></div></section>}
      {DEV_SANDBOX&&<DeveloperPanel/>}
    </section>:
    <section className="start-screen"><div className="cover-art"><SceneStage showCat={false} emotion="smile" sceneId="c1.cover"/><div className="cover-caption">Осень. Кафе. Одна маленькая случайность.</div></div><div className="cover-copy"><span className="eyebrow">ИНТЕРАКТИВНАЯ ИСТОРИЯ</span><h1>Пять случайных<br/><em>встреч</em><span className="title-spark">✧</span></h1><p>Иногда всё начинается с неловкости.<br/>А потом почему-то не хочется уходить.</p><button className="primary start-button" onClick={()=>go('/chapters')}>К встречам <span aria-hidden="true">→</span></button><div className="cover-meta"><span>5–7 минут на главу</span><span>В твоём темпе</span><span>Со звуком или без</span></div><p className="privacy-note">{cloudStatus==='none'?'Прогресс сохраняется в этом браузере.':cloudStatus==='local'?'Прогресс пока сохраняется на устройстве.':'История сохраняется в Telegram, когда есть связь.'}</p></div></section>}
    {menu&&<Modal title="Маленькая пауза" onClose={()=>setMenu(false)}><nav className="stack"><button className="primary" onClick={()=>setMenu(false)}>Вернуться к истории</button><button onClick={()=>{setMenu(false);setSeason(menuSeason);go('/chapters');}}>{menuSeason===2?'После титров':'Пять встреч'}</button><button onClick={()=>{setMenu(false);go('/album');}}>Альбом и секреты</button><button onClick={()=>{setMenu(false);go('/settings');}}>Настройки и резервная копия</button>{save.trial&&<button onClick={()=>setDiscardTrial(true)}>Закрыть пробный вариант</button>}{import.meta.env.DEV&&!DEV_SANDBOX&&<button onClick={()=>{location.href=`${location.pathname}?dev=1#/chapters`;}}>Режим разработчика</button>}{DEV_SANDBOX&&<button onClick={()=>{location.href=`${location.pathname}#/start`;}}>Вернуться к обычной игре</button>}</nav></Modal>}
    {discardTrial&&save.trial&&<Modal title="Закрыть пробный вариант?" onClose={cancelDiscardTrial}>{inviteAfterTrial&&<p>Приглашение на настоящую встречу находится в основном финале. Чтобы вернуться к нему, сначала закрой пробный вариант.</p>}<p>Незавершённый пробный прогресс этой главы будет удалён. Основная история останется.</p><div className="stack"><button autoFocus onClick={cancelDiscardTrial}>Продолжить пробный вариант</button><button disabled={recovery||conflict||cloudBlocked} onClick={closeTrial}>Закрыть вариант</button></div></Modal>}
    {rewrite&&<Modal title={recovery?'Начать новую историю?':`Изменить историю с главы ${rewrite}?`} onClose={()=>setRewrite(null)}><p>{recovery?'Текущая повреждённая копия будет заменена. При необходимости сначала скачай её.':`Результаты начиная с главы ${rewrite} в основной истории будут заменены. Альбом, достижения и открытые главы сохранятся.`}</p><div className="stack"><button className="primary" onClick={()=>{if(recovery){reset();go('/chapters');}else{send({type:'rewrite',chapter:rewrite});go(`/play/${rewrite}`);}setRewrite(null);}}>Начать заново</button><button onClick={()=>setRewrite(null)}>Отмена</button></div></Modal>}
    {conflict&&<Modal title="История открыта в другой вкладке" onClose={()=>{}}><p>В другой вкладке появился новый прогресс. Здесь изменения приостановлены, чтобы ничего не затереть.</p><div className="stack"><button className="primary" onClick={reload}>Загрузить обновлённый прогресс</button><SaveExportButton raw={JSON.stringify(save)} name="five-meetings-this-tab.json" app={telegramApp}>Скачать копию этой вкладки</SaveExportButton></div></Modal>}
    {cloudBlocked&&<Modal title="Нашлась другая копия истории" onClose={()=>{}}><p>Прогресс в Telegram изменился на другом устройстве. Сначала сохрани эту копию, затем выбери историю для продолжения.</p><div className="stack"><SaveExportButton raw={JSON.stringify(save)} name="five-meetings-this-device.json" app={telegramApp}>Скачать эту копию</SaveExportButton><button className="primary" onClick={reload}>Сравнить сохранения</button></div></Modal>}
  </main></SoundContext.Provider>;
}
