import { useState,type ReactNode } from 'react';
import type { TelegramApp } from '../telegram/bridge';
import { backupTransferUrl,type BackupFile } from '../sharing/backupTransfer';
import { downloadBlob } from '../sharing/cards';
import { Modal } from './Modal';

export function SaveExportButton({raw,name,app,children,className}:{raw:string;name:string;app?:TelegramApp;children:ReactNode;className?:string}){
  const [file,setFile]=useState<BackupFile|null>(null);
  let hasNotes=false;
  try{const value=JSON.parse(raw);const groups=Object.values(value.privateNotes??{}).flatMap(g=>g&&typeof g==='object'?[g,...Object.values(g)]:[]);hasNotes=[...groups,...Object.values(value.privateWords??{})].some(n=>!!n&&typeof n==='object'&&'text' in n&&!!n.text);}catch{/* Recovery may export damaged bytes. */}
  return <>{hasNotes&&<p className="tiny">В копии будут твои личные заметки и своё слово, если ты их сохранила.</p>}<button className={className} onClick={()=>{
    if(app)setFile({raw,name});
    else downloadBlob(new Blob([raw],{type:'application/json'}),name);
  }}>{children}</button>{file&&<Modal title="Сохранить копию прогресса" onClose={()=>setFile(null)}><BackupExportOptions file={file} app={app}/></Modal>}</>;
}

export function BackupExportOptions({file,app}:{file:BackupFile;app?:TelegramApp}){
  const [message,setMessage]=useState('');
  function openBrowser(){
    try{
      if(!app?.openLink)throw new Error('Эта версия Telegram не открыла браузер. Скопируй текст копии ниже.');
      const base=new URL(import.meta.env.BASE_URL,document.baseURI).href;
      app.openLink(backupTransferUrl(file,base));
      setMessage('Отправлен запрос на открытие браузера. На открывшейся странице нажми «Скачать файл». Если страница не открылась, скопируй текст ниже.');
    }catch(error){setMessage(error instanceof Error?error.message:'Не удалось открыть браузер. Скопируй текст копии ниже.');}
  }
  async function copy(){
    try{await navigator.clipboard.writeText(file.raw);setMessage('Текст копии скопирован. Сохрани его в файл .json или вставь в игре через «Вставить текст копии».');}
    catch{setMessage('Не удалось скопировать автоматически. Нажми на поле, выдели весь текст и скопируй вручную.');}
  }
  return <div className="backup-export"><p className="small">В Telegram прямое скачивание может не работать. Открой эту копию в браузере и скачай файл там. Прогресс браузерной игры не изменится.</p><div className="stack"><button className="primary" onClick={openBrowser}>Скачать через браузер</button><button onClick={()=>void copy()}>Скопировать текст копии</button></div><label className="manual-copy">Текст копии<textarea aria-label="Текст копии" readOnly value={file.raw} spellCheck={false} onFocus={e=>e.currentTarget.select()}/></label>{message&&<p className="small" role="status">{message}</p>}</div>;
}
