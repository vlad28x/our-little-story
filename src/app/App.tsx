import { useRef,useState } from 'react';
import { useGame,DEV_SANDBOX } from './GameProvider';
import { go,useRoute } from './router';
import { DeveloperPanel } from './DeveloperPanel';
import { chapters,checkCode } from '../content/chapters/manifest';
import { getChapter } from '../content/chapters';
import { cards } from '../content/cards';
import { achievements } from '../content/achievements';
import { assetUrl } from '../content/assetManifest';
import { canStart } from '../state/reducer';
import { SceneStage } from '../ui/SceneStage';
import { Illustration } from '../ui/Illustration';
import { StoryScreen } from '../ui/StoryScreen';
import { ResultScreen } from '../ui/ResultScreen';
import { SettingsPanel } from '../ui/SettingsPanel';
import { Modal } from '../ui/Modal';
import { downloadBlob } from '../sharing/cards';
import type { ChapterId } from '../engine/types';

export function App(){
  const {save,send,recovery,loaded,restore,reset,storageError,conflict,reload}=useGame();
  const route=useRoute();
  const [menu,setMenu]=useState(false),[journal,setJournal]=useState(false),[rewrite,setRewrite]=useState<ChapterId|null>(null),[code,setCode]=useState(''),[codeMessage,setCodeMessage]=useState('');
  const codeInput=useRef<HTMLInputElement>(null);
  const [codeError,setCodeError]=useState(false),[codeChapter,setCodeChapter]=useState<ChapterId|null>(null);
  const routeChapter=Number(route.match(/^\/(?:play|result)\/([1-5])(?:\?|$)/)?.[1]) as ChapterId;
  const mode=route.includes('mode=trial')?'trial':'campaign';
  const isPlay=route.startsWith('/play/')&&!!getChapter(routeChapter);
  const currentRun=mode==='trial'?save.trial?.run:save.campaign.active;
  const lastCompleted=save.campaign.completed.at(-1);
  function focusCode(){codeInput.current?.scrollIntoView({block:'center'});codeInput.current?.focus({preventScroll:true});}
  function submitCode(){
    const found=checkCode(code);setCodeChapter(null);
    if(!found?.available){setCodeError(true);setCodeMessage(found?`«${found.title}» ещё готовится. Код пока не откроет эту встречу.`:'Код не подошёл. Проверь латинские буквы и дефис в сообщении Влада.');return;}
    send({type:'unlock',code});setCode('');setCodeError(false);setCodeChapter(found.id);
    const ready=canStart({...save,unlocked:[...save.unlocked,found.id]},found.id)&&!save.campaign.active||save.campaign.completed.includes(found.id)||save.campaign.active?.chapter===found.id;
    setCodeMessage(`${save.unlocked.includes(found.id)?'Уже открыта':'Открыта'} встреча ${found.id}: «${found.title}». ${ready?'Можно перейти к встрече.':'Код сохранён. Сначала заверши предыдущие встречи или текущую главу.'}`);
  }
  function openChapter(id:ChapterId){
    if(save.campaign.active?.chapter===id)go(`/play/${id}`);
    else if(save.campaign.completed.includes(id))go(`/result/${id}?source=campaign`);
    else if(canStart(save,id)&&!save.campaign.active){send({type:'start',chapter:id});go(`/play/${id}`);}
    else go('/chapters');
  }
  function continueGame(){if(save.campaign.active)openChapter(save.campaign.active.chapter);else if(lastCompleted&&lastCompleted<5)go('/chapters');else openChapter(lastCompleted??1);}
  function openTrial(id:ChapterId){send({type:'trial',chapter:id});go(`/play/${save.trial?.chapter??id}?mode=trial`);}
  return <main className="game-shell" data-motion={save.settings.motion}>
    <header className="topbar">
      <button className="brand" onClick={()=>go('/start')} aria-label="На главный экран"><span className="brand-mark">● ●</span><span>пять случайных<br/><b>встреч</b></span></button>
      <span className="topbar-caption">{isPlay?`${String(routeChapter).padStart(2,'0')} · ${routeChapter===1?'Случайная встреча':routeChapter===2?'Прогулка под дождём':routeChapter===3?'Игровой вечер':routeChapter===4?'Разговор под звёздами':'Ещё одна встреча?'}`:'маленькая история о нас'}</span>
      <button className="icon-button menu-toggle" aria-label="Открыть меню" onClick={()=>setMenu(true)}><span/><span/></button>
    </header>
    {DEV_SANDBOX&&<div className="dev-banner">Режим разработчика · отдельный тестовый прогресс</div>}
    {storageError&&!recovery&&<div role="status" className="storage-notice">{storageError} <button onClick={()=>go('/settings')}>К копии</button></div>}
    {recovery?<section className="page-content recovery">
      <Illustration kind="envelope"/><h1>Сохраним эту историю</h1><p>{loaded.error}</p><p>Текущий файл не изменён. Резервная копия может отставать на один шаг.</p>
      <div className="stack">{loaded.backup&&<button className="primary" onClick={()=>{restore();go('/chapters');}}>Восстановить резервную копию</button>}{loaded.raw&&<button onClick={()=>downloadBlob(new Blob([loaded.raw!],{type:'application/json'}),'five-meetings-recovery.json')}>Скачать исходную копию</button>}<button onClick={()=>setRewrite(1)}>Начать заново</button></div><SettingsPanel/>
    </section>:
    isPlay?<StoryScreen mode={mode} chapterId={routeChapter} suspended={menu||journal||!!rewrite||conflict}/>:
    route.startsWith('/play/')?<section className="page-content"><h1>Такой встречи нет на карте</h1><p>Все пять встреч уже здесь. Выбери главу на карте.</p><button onClick={()=>go('/chapters')}>К главам</button></section>:
    route.startsWith('/result/')?<ResultScreen key={route.split('?')[0]} route={route}/>:
    route==='/settings'?<section className="page-content"><button className="back-link" onClick={()=>go('/chapters')}>← К главам</button><SettingsPanel/></section>:
    route==='/album'?<section className="page-content album">
      <span className="eyebrow">ТО, ЧТО ХОЧЕТСЯ ОСТАВИТЬ</span><h1>Маленькие воспоминания</h1><p className="small">У каждой встречи свои настроения. Каждое — твоё.</p>
      <div className="album-grid">{Object.entries(cards).map(([id,c])=>{const unlocked=save.collection.cards.some(x=>x.id===id);return <button key={id} className={`album-card ${unlocked?'':'unfound'}`} disabled={!unlocked} onClick={()=>go(`/result/${c.chapter}?card=${id}`)}><Illustration kind={unlocked?c.motif:'envelope'}/><span>{unlocked?c.title:'Ещё одно воспоминание'}</span><small>{unlocked?`Встреча ${c.chapter} · Открыть открытку`:'Можно найти в истории'}</small></button>;})}</div>
      <h2>Маленькие секреты</h2>{achievements.map(a=><div className="secret" key={a.id}>{a.id==='cat-supervisor'?<img src={assetUrl('cat.idle')} alt="" className={save.collection.achievements.includes(a.id)?'':'silhouette'}/>:<Illustration kind={save.collection.achievements.includes(a.id)?a.id==='full-table'?'controller':a.id==='own-sky'?'star':a.id==='five-meetings'?'envelope':'umbrella':'envelope'}/>}<div><h3>{save.collection.achievements.includes(a.id)?a.title:a.id==='cat-supervisor'?'Кто-то наблюдает…':a.id==='dry-plan'?'Маленький прогноз…':'Ещё один секрет…'}</h3><p>{save.collection.achievements.includes(a.id)?a.description:'Секрет. Можно найти в истории.'}</p></div></div>)}<button onClick={()=>go('/chapters')}>К главам</button>
    </section>:
    route==='/chapters'?<section className="page-content chapter-map">
      <span className="eyebrow">ПЯТЬ ПОВОДОВ УЛЫБНУТЬСЯ</span><h1>Каждая встреча —<br/>маленькая история</h1><p className="small">Влад присылает коды продолжений лично.</p>
      <section className="code-entry" aria-labelledby="chapter-code-title">
        <div className="code-entry-heading"><Illustration kind="envelope"/><h2 id="chapter-code-title">Есть код от Влада?</h2></div>
        <p id="chapter-code-hint">Введи код из сообщения Влада.</p>
        <form onSubmit={e=>{e.preventDefault();submitCode();}}><label htmlFor="chapter-access-code">Код<input ref={codeInput} id="chapter-access-code" name="chapter-code" value={code} placeholder="Код из сообщения" maxLength={64} onChange={e=>{setCode(e.target.value);setCodeMessage('');setCodeError(false);setCodeChapter(null);}} autoComplete="off" autoCapitalize="characters" autoCorrect="off" spellCheck={false} enterKeyHint="go" aria-invalid={codeError} aria-describedby="chapter-code-hint chapter-code-message"/></label><button className="primary" disabled={!code.trim()}>Открыть встречу</button></form>
        <p id="chapter-code-message" className="code-entry-status" role="status">{codeMessage}</p>
        {codeChapter&&(save.campaign.completed.includes(codeChapter)||save.campaign.active?.chapter===codeChapter||canStart(save,codeChapter)&&!save.campaign.active)&&<button className="code-open-chapter full" onClick={()=>openChapter(codeChapter)}>{save.campaign.completed.includes(codeChapter)?'Открыть мой финал':save.campaign.active?.chapter===codeChapter?'Продолжить встречу':`Начать встречу ${codeChapter}`} →</button>}
      </section>
      {save.trial&&<button className="text-button" onClick={()=>go(`/play/${save.trial!.chapter}?mode=trial`)}>Продолжить пробный вариант главы {save.trial.chapter}</button>}
      <ol className="chapter-list">{chapters.map(c=>{
        const completed=save.campaign.completed.includes(c.id),active=save.campaign.active?.chapter===c.id,entitled=save.unlocked.includes(c.id),priorDone=Array.from({length:c.id-1},(_,i)=>i+1).every(n=>save.campaign.completed.includes(n as ChapterId));
        return <li key={c.id} className={c.available?'available':'locked'}>
          <div className="chapter-icon"><Illustration kind={c.id===1?'token':c.id===2?'umbrella':c.id===3?'controller':c.id===4?'star':'envelope'}/><span>0{c.id}</span></div>
          <div><span className="eyebrow">ВСТРЕЧА {c.id}</span><h2>{c.title}</h2><p>{c.motif}</p>
            {!c.available?<span className="locked-caption">Ещё в разработке</span>:!priorDone?<><span className="locked-caption">Сначала заверши встречу {c.id-1}</span>{!entitled&&<button className="text-button chapter-unlock-link" onClick={focusCode}>Ввести код</button>}</>:!entitled?<><span className="locked-caption">Ждёт своего маленького приглашения</span><p className="small unlock-note">Влад пришлёт код, когда будет время для следующей встречи.</p><button className="text-button chapter-unlock-link" onClick={focusCode}>Ввести код</button></>:<>
              <button className="primary" disabled={!completed&&!active&&!!save.campaign.active} onClick={()=>openChapter(c.id)}>{completed?'Мой финал':active?'Продолжить':'Начать встречу'} →</button>
              {save.campaign.startStates[c.id]&&<div className="replay-links">{(!save.trial||save.trial.chapter===c.id)&&<button className="text-button" onClick={()=>openTrial(c.id)}>{save.trial?'Продолжить другой вариант':'Посмотреть другой вариант'}</button>}<button className="text-button" onClick={()=>setRewrite(c.id)}>Изменить мою историю</button></div>}
            </>}
          </div>
        </li>;
      })}</ol>
      {DEV_SANDBOX&&<DeveloperPanel/>}
    </section>:
    <section className="start-screen"><div className="cover-art"><SceneStage showCat emotion="smile"/><div className="cover-caption">Осень. Кафе. Одна маленькая случайность.</div></div><div className="cover-copy"><span className="eyebrow">ИНТЕРАКТИВНАЯ ИСТОРИЯ</span><h1>Пять случайных<br/><em>встреч</em><span className="title-spark">✧</span></h1><p>Иногда всё начинается с неловкости.<br/>А потом почему-то не хочется уходить.</p><button className="primary start-button" onClick={continueGame}>{save.campaign.active?'Продолжить историю':lastCompleted&&lastCompleted<5?'К следующей встрече':lastCompleted?'Вернуться к воспоминанию':'Начать первую встречу'} <span>→</span></button>{save.trial&&<button className="text-button" onClick={()=>go(`/play/${save.trial!.chapter}?mode=trial`)}>Продолжить пробный вариант</button>}<div className="cover-meta"><span>5–7 минут на главу</span><span>В твоём темпе</span><span>Со звуком или без</span></div><p className="privacy-note">Прогресс сохраняется в этом браузере.<br/>Никаких автоматических сообщений.</p></div></section>}
    {menu&&<Modal title="Маленькая пауза" onClose={()=>setMenu(false)}><nav className="stack"><button className="primary" onClick={()=>setMenu(false)}>Вернуться к истории</button><button onClick={()=>{setMenu(false);go('/chapters');}}>Пять встреч</button><button onClick={()=>{setMenu(false);go('/album');}}>Альбом и секреты</button>{currentRun&&<button onClick={()=>{setMenu(false);setJournal(true);}}>Прочитанные реплики</button>}<button onClick={()=>{setMenu(false);go('/settings');}}>Настройки и резервная копия</button>{save.trial&&<button onClick={()=>{send({type:'discard-trial'});setMenu(false);go('/chapters');}}>Закрыть пробный вариант</button>}{import.meta.env.DEV&&!DEV_SANDBOX&&<button onClick={()=>{location.href=`${location.pathname}?dev=1#/chapters`;}}>Режим разработчика</button>}{DEV_SANDBOX&&<button onClick={()=>{location.href=`${location.pathname}#/start`;}}>Вернуться к обычной игре</button>}</nav></Modal>}
    {journal&&<Modal title="Уже сказанное" onClose={()=>setJournal(false)}><div className="journal">{currentRun?.journal.map(e=><p key={e.key}><b>{e.speaker==='vlad'?'Влад':e.speaker==='heroine'?'Ты':e.speaker==='nina'?'Нина':'История'}</b>{e.text}</p>)}</div></Modal>}
    {rewrite&&<Modal title={recovery?'Начать новую историю?':`Изменить историю с главы ${rewrite}?`} onClose={()=>setRewrite(null)}><p>{recovery?'Текущая повреждённая копия будет заменена. При необходимости сначала скачай её.':`Результаты глав ${rewrite}–5 в основной истории будут заменены. Альбом, достижения и открытые главы сохранятся.`}</p><div className="stack"><button className="primary" onClick={()=>{if(recovery){reset();go('/chapters');}else{send({type:'rewrite',chapter:rewrite});go(`/play/${rewrite}`);}setRewrite(null);}}>Начать заново</button><button onClick={()=>setRewrite(null)}>Отмена</button></div></Modal>}
    {conflict&&<Modal title="История открыта в другой вкладке" onClose={()=>{}}><p>В другой вкладке появился новый прогресс. Здесь изменения приостановлены, чтобы ничего не затереть.</p><div className="stack"><button className="primary" onClick={reload}>Загрузить обновлённый прогресс</button><button onClick={()=>downloadBlob(new Blob([JSON.stringify(save)],{type:'application/json'}),'five-meetings-this-tab.json')}>Скачать копию этой вкладки</button></div></Modal>}
  </main>;
}
