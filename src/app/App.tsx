import { useEffect,useState } from 'react';
import { useGame,DEV_SANDBOX } from './GameProvider';
import { go,useRoute } from './router';
import type { CodeEntryState } from './ChapterCodeEntry';
import { ChapterMap } from './ChapterMap';
import { DeveloperRecovery } from './DeveloperRecovery';
import { chapters,chapterFromRoute } from '../content/chapters/manifest';
import { getChapter } from '../content/chapters';
import { SceneStage } from '../ui/SceneStage';
import { Illustration } from '../ui/Illustration';
import { AlbumScreen } from '../ui/AlbumScreen';

import { StoryScreen } from '../ui/StoryScreen';
import { ResultScreen } from '../ui/ResultScreen';
import { SettingsPanel } from '../ui/SettingsPanel';
import { Modal } from '../ui/Modal';
import { SoundContext,useSoundPlayer } from '../ui/useSound';
import type { ChapterId } from '../engine/types';

export function App(){
  const [codeEntry,setCodeEntry]=useState<CodeEntryState>({ text: '' });
  const [discardTrial,setDiscardTrial]=useState(false);
  const [inviteAfterTrial,setInviteAfterTrial]=useState<5|10|null>(null);
  const {save,send,storageId,recovery,loaded,restore,reset,storageError,conflict,reload,cloudStatus,cloudError,cloudBlocked,telegramApp}=useGame();
  const sound=useSoundPlayer(save.settings.sound,save.settings.volume);
  const route=useRoute();
  const [menu,setMenu]=useState(false),[rewrite,setRewrite]=useState<ChapterId|null>(null);
  const parsedChapter=chapterFromRoute(route),routeChapter=parsedChapter??1;
  const seasonOpen=save.unlocked.some(n=>n>=6);
  const seasonKey=`${storageId}:map-season`;
  const [selectedSeason,setSeason]=useState<1|2>(()=>{if(!save.campaign.completed.includes(5))return 1;try{const stored=localStorage.getItem(seasonKey);if(stored==='1'||stored==='2')return Number(stored) as 1|2;}catch{/* This optional UI preference must not block the game. */}return seasonOpen?2:1;});
  const season=selectedSeason===2&&seasonOpen?2:1;
  useEffect(()=>{if(route==='/chapters')try{localStorage.setItem(seasonKey,String(season));}catch{/* Keep the selection in memory when storage is unavailable. */}},[route,season,seasonKey]);
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
    {storageError&&!recovery&&<div role="status" className="storage-notice">{storageError}</div>}
    {recovery?<section className="page-content recovery">
      <Illustration kind="envelope"/><h1>{DEV_SANDBOX?'Тестовый прогресс устарел':'Сохраним эту историю'}</h1>{DEV_SANDBOX?<DeveloperRecovery/>:<><p>{loaded.error}</p><p>Текущее сохранение не изменено. Резервная копия может отставать на один шаг.</p></>}
      <div className="stack">{loaded.backup&&<button className="primary" onClick={()=>{restore();go('/chapters');}}>Восстановить резервную копию</button>}<button onClick={()=>setRewrite(1)}>Начать заново</button></div><SettingsPanel/>
    </section>:
    isPlay?<StoryScreen mode={mode} chapterId={routeChapter} suspended={menu||!!rewrite||conflict||cloudBlocked}/>:
    route.startsWith('/play/')?<section className="page-content"><h1>Такой встречи нет на карте</h1><p>Выбери доступную встречу на карте. Продолжение открывается по приглашению Влада.</p><button onClick={()=>go('/chapters')}>К главам</button></section>:
    route.startsWith('/result/')?<ResultScreen key={route.split('?')[0]} route={route}/>:
    route==='/settings'?<section className="page-content"><button className="back-link" onClick={()=>go('/chapters')}>← К главам</button><SettingsPanel/></section>:
    route==='/album'?<AlbumScreen/>:
    route==='/chapters'?<ChapterMap codeEntry={codeEntry} setCodeEntry={setCodeEntry} season={season} seasonOpen={seasonOpen} setSeason={setSeason} onDiscardTrial={()=>setDiscardTrial(true)} onRewrite={setRewrite} returnToInvitation={returnToInvitation}/>:
    <section className="start-screen"><div className="cover-art"><SceneStage showCat={false} emotion="smile" sceneId="c1.cover"/><div className="cover-caption">Осень. Кафе. Одна маленькая случайность.</div></div><div className="cover-copy"><span className="eyebrow">ИНТЕРАКТИВНАЯ ИСТОРИЯ</span><h1>Пять случайных<br/><em>встреч</em><span className="title-spark">✧</span></h1><p>Иногда всё начинается с неловкости.<br/>А потом почему-то не хочется уходить.</p><button className="primary start-button" onClick={()=>go('/chapters')}>К встречам <span aria-hidden="true">→</span></button><div className="cover-meta"><span>5–7 минут на главу</span><span>В твоём темпе</span><span>Со звуком или без</span></div><p className="privacy-note">{cloudStatus==='none'?'Прогресс сохраняется в этом браузере.':cloudStatus==='local'?'Прогресс пока сохраняется на устройстве.':'История сохраняется в Telegram, когда есть связь.'}</p></div></section>}
    {menu&&<Modal title="Маленькая пауза" onClose={()=>setMenu(false)}><nav className="stack"><button className="primary" onClick={()=>setMenu(false)}>Вернуться к истории</button><button onClick={()=>{setMenu(false);setSeason(menuSeason);go('/chapters');}}>{menuSeason===2?'После титров':'Пять встреч'}</button><button onClick={()=>{setMenu(false);go('/album');}}>Альбом и секреты</button><button onClick={()=>{setMenu(false);go('/settings');}}>Настройки</button>{save.trial&&<button onClick={()=>setDiscardTrial(true)}>Закрыть пробный вариант</button>}{import.meta.env.DEV&&!DEV_SANDBOX&&<button onClick={()=>{location.href=`${location.pathname}?dev=1#/chapters`;}}>Режим разработчика</button>}{DEV_SANDBOX&&<button onClick={()=>{location.href=`${location.pathname}#/start`;}}>Вернуться к обычной игре</button>}</nav></Modal>}
    {discardTrial&&save.trial&&<Modal title="Закрыть пробный вариант?" onClose={cancelDiscardTrial}>{inviteAfterTrial&&<p>Приглашение на настоящую встречу находится в основном финале. Чтобы вернуться к нему, сначала закрой пробный вариант.</p>}<p>Незавершённый пробный прогресс этой главы будет удалён. Основная история останется.</p><div className="stack"><button autoFocus onClick={cancelDiscardTrial}>Продолжить пробный вариант</button><button disabled={recovery||conflict||cloudBlocked} onClick={closeTrial}>Закрыть вариант</button></div></Modal>}
    {rewrite&&<Modal title={recovery?'Начать новую историю?':`Изменить историю с главы ${rewrite}?`} onClose={()=>setRewrite(null)}><p>{recovery?'Текущее повреждённое сохранение будет заменено.':`Результаты начиная с главы ${rewrite} в основной истории будут заменены. Альбом, достижения и открытые главы сохранятся.`}</p><div className="stack"><button className="primary" onClick={()=>{if(recovery){reset();go('/chapters');}else{send({type:'rewrite',chapter:rewrite});go(`/play/${rewrite}`);}setRewrite(null);}}>Начать заново</button><button onClick={()=>setRewrite(null)}>Отмена</button></div></Modal>}
    {conflict&&<Modal title="История открыта в другой вкладке"><p>В другой вкладке появился новый прогресс. Здесь изменения приостановлены, чтобы ничего не затереть.</p><div className="stack"><button className="primary" onClick={reload}>Загрузить обновлённый прогресс</button></div></Modal>}
    {cloudBlocked&&<Modal title="Нашлась другая копия истории"><p>Прогресс в Telegram изменился на другом устройстве. Выбери, какую историю продолжить.</p><div className="stack"><button className="primary" onClick={reload}>Сравнить сохранения</button></div></Modal>}
  </main></SoundContext.Provider>;
}
