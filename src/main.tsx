import { StrictMode,useEffect,useState } from 'react';
import { createRoot } from 'react-dom/client';
import { TelegramEntry } from './telegram/TelegramEntry';
import { App } from './app/App';
import { AppErrorBoundary } from './app/AppErrorBoundary';
import { readBackupRequest } from './sharing/backupTransfer';
import { BackupDownloadScreen } from './ui/BackupDownloadScreen';
import './styles/game.css';
// Capture once before StrictMode mounts; remove the payload from the address
// immediately. The download screen does not mount storage or Telegram syncing.
function captureBackupRequest(){
  const request=readBackupRequest(location.hash);
  if(request){const clean=new URL(location.href);clean.hash='#/export-backup';history.replaceState(null,'',clean.href);}
  return request;
}
const initialBackup=captureBackupRequest();
function AppRoot(){
  const [backup,setBackup]=useState(initialBackup);
  // An external browser may reuse its existing game tab for the fragment URL.
  useEffect(()=>{const changed=()=>setBackup(captureBackupRequest());window.addEventListener('hashchange',changed);return()=>window.removeEventListener('hashchange',changed);},[]);
  return backup?<BackupDownloadScreen key={backup.file?.raw} request={backup}/>:<TelegramEntry><App/></TelegramEntry>;
}
createRoot(document.getElementById('root')!).render(<StrictMode><AppErrorBoundary><AppRoot/></AppErrorBoundary></StrictMode>);
