import { useState } from 'react';
import type { BackupRequest } from '../sharing/backupTransfer';
import { downloadBlob } from '../sharing/cards';

export function BackupDownloadScreen({request}:{request:BackupRequest}){
  const [message,setMessage]=useState(''),file=request.file;
  return <main className="game-shell"><section className="page-content"><span className="eyebrow">НАША МАЛЕНЬКАЯ ИСТОРИЯ</span><h1>Копия из Telegram</h1>{file?<>
    <p>Здесь можно скачать переданную копию. Прогресс игры в этом браузере не изменяется.</p>
    <div className="stack"><button className="primary" onClick={()=>{try{downloadBlob(new Blob([file.raw],{type:'application/json'}),file.name);setMessage('Запрос на скачивание отправлен. Проверь загрузки браузера.');}catch{setMessage('Не удалось начать скачивание. Скопируй текст из поля ниже.');}}}>Скачать файл</button></div>
    <p className="small">{file.name}. После закрытия или обновления страницы открой копию заново из Mini App.</p><label className="manual-copy">Текст копии<textarea aria-label="Текст копии" readOnly value={file.raw} spellCheck={false} onFocus={e=>e.currentTarget.select()}/></label>{message&&<p role="status">{message}</p>}
  </>:<p role="alert">Не удалось прочитать переданную копию. Вернись в Mini App и ещё раз выбери «Скачать через браузер».</p>}</section></main>;
}
