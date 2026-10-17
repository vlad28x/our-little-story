import { useState } from 'react';
import { useGame, DEV_SANDBOX } from '../app/GameProvider';
import { parseSave, MAX_SAVE_BYTES } from '../persistence/validateSave';
import { downloadBlob } from '../sharing/cards';
import type { SaveV1 } from '../state/types';
import { Modal } from './Modal';
export function SettingsPanel(){
  const {save,send,recovery}=useGame();const [pending,setPending]=useState<SaveV1|null>(null);const [message,setMessage]=useState('');const [reset,setReset]=useState(false);
  function exportSave(){downloadBlob(new Blob([JSON.stringify(save,null,2)],{type:'application/json'}),'five-meetings-save.json');}
  async function chooseFile(file:File|undefined){if(!file)return;try{if(file.size>MAX_SAVE_BYTES)throw new Error('Максимальный размер копии — 256 КБ.');const next=parseSave(await file.text());setPending(next);setMessage('');}catch(e){setMessage(e instanceof Error?e.message:'Не удалось прочитать файл');}}
  return <section className="settings-panel"><h2>В твоём темпе</h2>
    <label className="setting-row"><span>Звуки действий<small>Можно играть в тишине</small></span><input type="checkbox" checked={save.settings.sound} onChange={e=>send({type:'settings',settings:{...save.settings,sound:e.target.checked}})}/></label>
    {save.settings.sound&&<label className="setting-row">Громкость<input aria-label="Громкость" type="range" min="0" max="1" step=".05" value={save.settings.volume} onChange={e=>send({type:'settings',settings:{...save.settings,volume:Number(e.target.value)}})}/></label>}
    <label className="setting-row"><span>Появление текста</span><select value={save.settings.textMode} onChange={e=>send({type:'settings',settings:{...save.settings,textMode:e.target.value as 'instant'|'type'}})}><option value="instant">Сразу целиком</option><option value="type">Постепенно</option></select></label>
    <label className="setting-row"><span>Движение</span><select value={save.settings.motion} onChange={e=>send({type:'settings',settings:{...save.settings,motion:e.target.value as 'system'|'reduced'|'full'}})}><option value="system">Как в системе</option><option value="reduced">Меньше анимации</option><option value="full">Все анимации</option></select></label>
    <h3>Сохранить воспоминания</h3><p className="small">Прогресс остаётся только в этом браузере. Для переноса на другое устройство скачай копию. Личные фото и переписки в неё не входят.</p>
    {!DEV_SANDBOX?<div className="stack">{!recovery&&<button onClick={exportSave}>Скачать копию прогресса</button>}<label className="file-button">Загрузить копию<input aria-label="Загрузить копию" type="file" accept=".json,application/json" onChange={e=>{void chooseFile(e.target.files?.[0]);e.target.value='';}}/></label>{!recovery&&<button className="text-button" onClick={()=>setReset(true)}>Начать историю заново</button>}</div>:<p className="small">Тестовый прогресс изолирован. Экспорт и импорт здесь отключены.</p>}
    {message&&<p role="alert">{message}</p>}
    {pending&&<Modal title="Заменить текущий прогресс?" onClose={()=>setPending(null)}><p>В копии пройдено глав: {pending.campaign.completed.length}. {pending.campaign.active?'Есть незавершённая глава.':''}</p><p className="small">Дата копии: {new Date(pending.updatedAt).toLocaleString('ru-RU')}. Текущая история будет заменена, альбомы не объединяются.</p><div className="stack"><button onClick={exportSave}>Сначала скачать текущую копию</button><button className="primary" onClick={()=>{send({type:'replace',save:pending});setPending(null);setMessage('Копия загружена. Можно продолжать историю.');}}>Заменить прогресс</button><button onClick={()=>setPending(null)}>Отмена</button></div></Modal>}
    {reset&&<Modal title="Изменить историю с начала?" onClose={()=>setReset(false)}><p>Прохождение первой главы будет сброшено. Альбом и найденные достижения останутся.</p><div className="stack"><button className="primary" onClick={()=>{send({type:'rewrite'});setReset(false);location.hash='/play/1';}}>Начать заново</button><button onClick={()=>setReset(false)}>Оставить как есть</button></div></Modal>}
  </section>;
}
