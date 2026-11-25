import { createContext, useCallback, useContext, useEffect, useReducer, useRef, useState, type ReactNode } from 'react';
import { DEFAULT_VOLUME,initialState } from '../state/initialState';
import { reduceSave, type Action } from '../state/reducer';
import { load, persist, storageKey, type Loaded, type StorageLike } from '../persistence/storage';
import type { SaveV1 } from '../state/types';
import { useCloudSync,type CloudStatus } from '../telegram/useCloudSync';
import type { CloudSession } from '../telegram/cloud';
import type { TelegramApp } from '../telegram/bridge';
import { clearFinishedDraft } from '../persistence/noteDraft';
import { parseSave } from '../persistence/validateSave';
export const DEV_SANDBOX=import.meta.env.DEV && new URLSearchParams(location.search).get('dev')==='1';
export const activeStorageKey=DEV_SANDBOX?storageKey.replace(':save',':dev:save'):storageKey;
const storage:StorageLike={getItem:k=>localStorage.getItem(k),setItem:(k,v)=>localStorage.setItem(k,v),removeItem:k=>localStorage.removeItem(k)};
type GameContextValue={save:SaveV1;storageId:string;send:(a:Action)=>void;loaded:Loaded;recovery:boolean;storageError:string|null;conflict:boolean;cloudStatus:CloudStatus;cloudError:string;cloudBlocked:boolean;telegramApp?:TelegramApp;reload:()=>void;restore:()=>void;reset:()=>void};
const GameContext=createContext<GameContextValue|null>(null);
export function GameProvider({children,storageId=activeStorageKey,initialLoaded,cloudSession,telegramApp}:{children:ReactNode;storageId?:string;initialLoaded?:Loaded;cloudSession?:CloudSession;telegramApp?:TelegramApp}) {
  const [loaded]=useState(()=>initialLoaded??load(storage,storageId));
  const [save,dispatch]=useReducer(reduceSave,loaded.save);
  const [recovery,setRecovery]=useState(loaded.recovery);
  const [storageError,setStorageError]=useState(loaded.error);
  const [conflict,setConflict]=useState(false);
  const cloud=useCloudSync(save,recovery||conflict,cloudSession,telegramApp);
  const savedRevision=useRef(loaded.save.revision);
  const savedLocalNoteRevision=useRef(loaded.save.localNoteRevision);
  const dirty=useRef(false);
  const soundDefaults=useRef<'unread'|'saving'|'done'>('unread');
  const send=useCallback((action:Action)=>{
    if(conflict || cloud.blocked || (recovery&&action.type!=='replace') || (action.type==='dev-jump'&&!DEV_SANDBOX))return;
    if(action.type==='replace'){setRecovery(false);setStorageError(null);}
    if((action.type==='start'||action.type==='trial'||action.type==='rewrite')&&(action.chapter!==undefined&&action.chapter>=6)&&!action.attemptId)action={...action,attemptId:crypto.randomUUID?.()??Array.from(crypto.getRandomValues(new Uint8Array(16)),b=>b.toString(16).padStart(2,'0')).join('')};
    dirty.current=true;dispatch(action);
  },[cloud.blocked,conflict,recovery]);
  useEffect(()=>{
    if(!dirty.current||recovery||conflict||save.revision===savedRevision.current&&save.localNoteRevision===savedLocalNoteRevision.current)return;
    try {const result=persist(storage,save,savedRevision.current,storageId,savedLocalNoteRevision.current);if(result==='conflict'){setConflict(true);return;}savedRevision.current=save.revision;savedLocalNoteRevision.current=save.localNoteRevision;dirty.current=false;setStorageError(null);try{clearFinishedDraft(storage,storageId,save);}catch{/* Keep a draft if its cleanup fails. */}}
    catch {setStorageError('В этом браузере прогресс сейчас не сохраняется. Скачайте копию в настройках.');}
  },[save,recovery,conflict,storageId]);
  useEffect(()=>{
    if(recovery||conflict||cloud.blocked||storageError||dirty.current||soundDefaults.current==='done')return;
    const soundKey=`${storageId}:sound-default-on-v1`;
    const volumeKey=`${storageId}:volume-default-45-v1`;
    try {
      const updateSound=storage.getItem(soundKey)===null;
      const updateVolume=storage.getItem(volumeKey)===null;
      const { sound,volume }=save.settings;
      if(soundDefaults.current==='unread'&&(updateSound&&!sound||updateVolume&&volume!==DEFAULT_VOLUME)){
        soundDefaults.current='saving';
        send({type:'settings',settings:{...save.settings,sound:updateSound||sound,volume:updateVolume?DEFAULT_VOLUME:volume}});
        return;
      }
      // Record the one-time changes after the settings write has succeeded.
      if(updateSound)storage.setItem(soundKey,'1');
      if(updateVolume)storage.setItem(volumeKey,'1');
      soundDefaults.current='done';
    }catch{/* The markers can be retried when storage becomes available. */}
  },[cloud.blocked,conflict,recovery,save,send,storageError,storageId]);
  useEffect(()=>{
    function check(){try{const raw=storage.getItem(storageId);if(raw){const v=parseSave(raw);if(v.revision>savedRevision.current||v.localNoteRevision>savedLocalNoteRevision.current)setConflict(true);}}catch{/* An unreadable save is handled by recovery, not a competing valid tab. */}}
    function onStorage(e:StorageEvent){if(e.key===storageId)check();}
    window.addEventListener('storage',onStorage);window.addEventListener('focus',check);
    return()=>{window.removeEventListener('storage',onStorage);window.removeEventListener('focus',check);};
  },[storageId]);
  return <GameContext.Provider value={{save,storageId,send,loaded,recovery,storageError,conflict,cloudStatus:cloud.status,cloudError:cloud.errorText,cloudBlocked:cloud.blocked,telegramApp,reload:()=>location.reload(),restore:()=>{if(loaded.backup)send({type:'replace',save:loaded.backup});},reset:()=>send({type:'replace',save:initialState()})}}>{children}</GameContext.Provider>;
}
export function useGame(){const c=useContext(GameContext);if(!c)throw new Error('GameProvider missing');return c;}
