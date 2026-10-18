import { useEffect,useRef,useState } from 'react';
import type { SaveV1 } from '../state/types';
import { CloudConflict,type CloudSession } from './cloud';
import type { TelegramApp } from './bridge';
export type CloudStatus='none'|'local'|'saving'|'saved'|'error'|'conflict';
export function useCloudSync(save:SaveV1,paused:boolean,session?:CloudSession,app?:TelegramApp){
  const [status,setStatus]=useState<CloudStatus>(session?'saving':app?'local':'none');
  const latest=useRef(save);latest.current=save;
  const failed=useRef(false),mounted=useRef(false),pending=useRef(0);
  const [syncedRevision,setSyncedRevision]=useState(-1);
  useEffect(()=>{mounted.current=true;return()=>{mounted.current=false;};},[]);
  useEffect(()=>{
    if(!session||paused)return;
    app?.enableClosingConfirmation?.();
    function failure(error:unknown){if(failed.current)return;failed.current=true;if(mounted.current)setStatus(error instanceof CloudConflict?'conflict':'error');app?.enableClosingConfirmation?.();}
    function flush(){
      if(failed.current)return;pending.current++;if(mounted.current)setStatus('saving');app?.enableClosingConfirmation?.();
      const snapshot=latest.current;
      void session!.push(snapshot).then(()=>{pending.current--;if(!pending.current&&!failed.current){if(mounted.current){setStatus('saved');setSyncedRevision(snapshot.revision);}if(latest.current.revision===snapshot.revision)app?.disableClosingConfirmation?.();}},error=>{pending.current--;failure(error);});
    }
    const timer=setTimeout(flush,650);
    const hide=()=>{if(document.hidden)flush();};
    const check=()=>{void session.check().catch(failure);};
    window.addEventListener('focus',check);document.addEventListener('visibilitychange',hide);app?.onEvent?.('deactivated',flush);
    return()=>{clearTimeout(timer);window.removeEventListener('focus',check);document.removeEventListener('visibilitychange',hide);app?.offEvent?.('deactivated',flush);};
  },[save,paused,session,app]);
  // Mark an unsent action immediately, including during the debounce window.
  const visibleStatus=status==='saved'&&syncedRevision!==save.revision?'saving':status;
  return {status:visibleStatus,blocked:status==='conflict'};
}
