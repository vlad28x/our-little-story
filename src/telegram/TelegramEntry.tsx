import { useEffect,useState,type ReactNode } from 'react';
import { GameProvider,DEV_SANDBOX,activeStorageKey } from '../app/GameProvider';
import { load,persist,type Loaded,type StorageLike,storageKey } from '../persistence/storage';
import { initialState } from '../state/initialState';
import type { SaveV1 } from '../state/types';
import { SaveExportButton } from '../ui/SaveExportButton';
import { prepareTelegram,type TelegramApp } from './bridge';
import { TelegramCloud,CloudSession,cloudRaw,type CloudSnapshot } from './cloud';
import { preserveLocalNotes } from '../persistence/notes';

const storage:StorageLike={getItem:k=>localStorage.getItem(k),setItem:(k,v)=>localStorage.setItem(k,v),removeItem:k=>localStorage.removeItem(k)};
type Ready={key:string;loaded:Loaded;session?:CloudSession;app?:TelegramApp};
type Choice={app:TelegramApp;key:string;local:Loaded;browser:Loaded;snapshot:CloudSnapshot;cloud:TelegramCloud};
export function TelegramEntry({children}:{children:ReactNode}){
  const [ready,setReady]=useState<Ready|null>(null),[choice,setChoice]=useState<Choice|null>(null),[error,setError]=useState(''),[attempt,setAttempt]=useState(0);
  const [localKey,setLocalKey]=useState(activeStorageKey);
  const [launchApp,setLaunchApp]=useState<TelegramApp>();
  useEffect(()=>{
    let alive=true;
    if(DEV_SANDBOX)return;
    void (async()=>{
      try{
        const app=await prepareTelegram();if(!alive)return;
        if(!app){setReady({key:activeStorageKey,loaded:load(storage,activeStorageKey)});return;}
        setLaunchApp(app);
        const key=`five-meetings:${import.meta.env.BASE_URL}:telegram:our_little_story_game_bot:${app.initDataUnsafe!.user!.id}:save`;setLocalKey(key);
        const local=load(storage,key);
        const [major,minor]=app.version.split('.').map(Number);
        if(!app.CloudStorage||major<6||major===6&&minor<9)throw new Error('Эта версия Telegram не поддерживает облачные сохранения. Обнови приложение или продолжи только на этом устройстве.');
        const cloud=new TelegramCloud(app.CloudStorage),snapshot=await cloud.read();if(!alive)return;
        // Resume without a chooser only when copies agree or this device is new.
        if(snapshot.save&&!local.recovery&&(!local.raw||cloudRaw(local.save)===cloudRaw(snapshot.save))){
          const save=local.raw?local.save:snapshot.save;
          let error:string|null=null;
          if(!local.raw){try{if(persist(storage,save,local.save.revision,key)==='conflict')throw new Error('conflict');}catch{error='Не удалось записать копию на устройстве. Скачай резервный файл в настройках.';}}
          setReady({key,loaded:{save,recovery:false,backup:null,raw:JSON.stringify(save),error},session:new CloudSession(cloud,snapshot.head,snapshot.needsRewrite?null:cloudRaw(snapshot.save)),app});return;
        }
        setChoice({app,key,local,browser:load(storage,storageKey),snapshot,cloud});setError('');
      }catch(e){if(alive)setError(e instanceof Error?e.message:'Не удалось проверить облачную копию.');}
    })();return()=>{alive=false;};
  },[attempt]);
  function choose(save:SaveV1,useCloud=true){
    if(!choice)return;
    if(save===choice.snapshot.save||save===choice.snapshot.backup)save=preserveLocalNotes(save,choice.local.recovery&&choice.local.backup?choice.local.backup:choice.local.save);
    const session=useCloud?new CloudSession(choice.cloud,choice.snapshot.head,choice.snapshot.save&&!choice.snapshot.needsRewrite?cloudRaw(choice.snapshot.save):null):undefined;
    let localError:string|null=null;
    try{
      const old=load(storage,choice.key);
      if(persist(storage,save,old.save.revision,choice.key)==='conflict')throw new Error('Локальная копия изменилась. Перепроверь сохранения.');
    }catch{localError='Копия на этом устройстве сейчас не записывается. Скачай резервный файл в настройках.';}
    setReady({key:choice.key,loaded:{save,recovery:false,backup:null,raw:JSON.stringify(save),error:localError},session,app:choice.app});
  }
  if(DEV_SANDBOX)return <GameProvider>{children}</GameProvider>;
  if(ready)return <GameProvider key={ready.key} storageId={ready.key} initialLoaded={ready.loaded} cloudSession={ready.session} telegramApp={ready.app}>{children}</GameProvider>;
  return <main className="game-shell"><section className="page-content telegram-entry">
    <span className="eyebrow">НАША МАЛЕНЬКАЯ ИСТОРИЯ</span>
    {error?<><h1>Проверим сохранение</h1><p role="alert">{error}</p><p>Облако не изменено. Без проверки можно продолжить с копией на этом устройстве; синхронизация останется на паузе.</p><div className="stack"><button className="primary" onClick={()=>{setError('');setAttempt(n=>n+1);}}>Проверить ещё раз</button><button onClick={()=>setReady({key:localKey,loaded:load(storage,localKey),app:launchApp})}>Продолжить на этом устройстве</button></div></>:
    choice?<><h1>{choice.snapshot.damaged?'Сохраним эту историю':choice.snapshot.save?'Какую историю продолжить?':'История будет с тобой 💗'}</h1>
      <p>{choice.snapshot.damaged?'Облачная копия повреждена. Можно восстановить предыдущую или явно заменить её выбранной историей.':'В Telegram можно сохранять главы, ответы, альбом и настройки и продолжать на другом устройстве с тем же аккаунтом.'}</p>
      <p className="small">Реальный выбор встречи, личные заметки и черновики в облако не отправляются. В обычном браузере прогресс хранится отдельно. Игра не отправляет сообщений.</p>
      <div className="stack">
        {choice.snapshot.save&&<SaveChoice title="Продолжить из Telegram" save={choice.snapshot.save} onChoose={()=>choose(choice.snapshot.save!)}/>}
        {choice.snapshot.backup&&<SaveChoice title="Восстановить резервную копию Telegram" save={choice.snapshot.backup} onChoose={()=>choose(choice.snapshot.backup!)}/>}
        {choice.local.raw&&!choice.local.recovery&&<SaveChoice title="Продолжить с этого устройства" save={choice.local.save} onChoose={()=>choose(choice.local.save)}/>}
        {choice.local.recovery&&choice.local.backup&&<SaveChoice title="Восстановить копию этого устройства" save={choice.local.backup} onChoose={()=>choose(choice.local.backup!)}/>}
        {!choice.local.raw&&choice.browser.raw&&!choice.browser.recovery&&<SaveChoice title="Перенести историю из этого браузера" save={choice.browser.save} onChoose={()=>choose(choice.browser.save)}/>}
        {!choice.snapshot.save&&!choice.snapshot.damaged&&!choice.local.raw&&<button className="primary" onClick={()=>choose(initialState())}>Начать с сохранением в Telegram</button>}
        {choice.local.raw&&<SaveExportButton raw={choice.local.raw} name="five-meetings-device.json" app={choice.app}>Скачать копию устройства</SaveExportButton>}
        {(choice.snapshot.save||choice.snapshot.backup)&&<SaveExportButton raw={JSON.stringify(choice.snapshot.save??choice.snapshot.backup)} name="five-meetings-telegram.json" app={choice.app}>Скачать копию Telegram</SaveExportButton>}
        <button className="text-button" onClick={()=>setReady({key:choice.key,loaded:choice.local,app:choice.app})}>Пока играть только на этом устройстве</button>
      </div><p className="small">Выбранная история станет основной в Telegram; копии не объединяются. Если они отличаются, сначала скачай нужные резервные файлы.</p>
    </>:<><h1>Находим твою историю…</h1><p role="status">Проверяем сохранения перед встречей.</p></>}
  </section></main>;
}
function SaveChoice({title,save,onChoose}:{title:string;save:SaveV1;onChoose:()=>void}){
  return <button className="telegram-save-choice" onClick={onChoose}><strong>{title}</strong><span>Пройдено глав: {save.campaign.completed.length}{save.campaign.active?` · сейчас глава ${save.campaign.active.chapter}`:''}</span><small>{new Date(save.updatedAt).toLocaleString('ru-RU')}</small></button>;
}
