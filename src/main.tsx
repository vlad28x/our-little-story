import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TelegramEntry } from './telegram/TelegramEntry';
import { App } from './app/App';
import { AppErrorBoundary } from './app/AppErrorBoundary';
import { readBackupRequest } from './sharing/backupTransfer';
import { BackupDownloadScreen } from './ui/BackupDownloadScreen';
import './styles/game.css';
const backupRequest=readBackupRequest(location.hash);
// Capture once before StrictMode mounts; remove the payload from the address
// immediately. The download screen does not mount storage or Telegram syncing.
if(backupRequest){const clean=new URL(location.href);clean.hash='#/export-backup';history.replaceState(null,'',clean.href);}
createRoot(document.getElementById('root')!).render(<StrictMode><AppErrorBoundary>{backupRequest?<BackupDownloadScreen request={backupRequest}/>:<TelegramEntry><App/></TelegramEntry>}</AppErrorBoundary></StrictMode>);
