import { useState } from 'react';
import { useGame, DEV_SANDBOX } from '../app/GameProvider';
import { Modal } from './Modal';
export function SettingsPanel(){
  const {save,send,recovery}=useGame();
  const [reset,setReset]=useState(false);
  return <section className="settings-panel"><h2>В твоём темпе</h2>
    <label className="setting-row"><span>Звуки действий<small>Можно играть в тишине</small></span><input type="checkbox" checked={save.settings.sound} onChange={e=>send({type:'settings',settings:{...save.settings,sound:e.target.checked}})}/></label>
    {save.settings.sound&&<label className="setting-row">Громкость<input aria-label="Громкость" type="range" min="0" max="1" step=".05" value={save.settings.volume} onChange={e=>send({type:'settings',settings:{...save.settings,volume:Number(e.target.value)}})}/></label>}
    <label className="setting-row"><span>Появление текста</span><select value={save.settings.textMode} onChange={e=>send({type:'settings',settings:{...save.settings,textMode:e.target.value as 'instant'|'type'}})}><option value="instant">Сразу целиком</option><option value="type">Постепенно</option></select></label>
    <label className="setting-row"><span>Движение</span><select value={save.settings.motion} onChange={e=>send({type:'settings',settings:{...save.settings,motion:e.target.value as 'system'|'reduced'|'full'}})}><option value="system">Как в системе</option><option value="reduced">Меньше анимации</option><option value="full">Все анимации</option></select></label>
    {!DEV_SANDBOX&&!recovery&&<div className="stack"><button className="text-button" onClick={()=>setReset(true)}>Начать историю заново</button></div>}
    {reset&&<Modal title="Изменить историю с начала?" onClose={()=>setReset(false)}><p>Основная история будет начата заново, результаты следующих глав и личные заметки будут удалены. Альбом, найденные бонусы и достижения останутся.</p><div className="stack"><button className="primary" onClick={()=>{send({type:'rewrite'});setReset(false);location.hash='/play/1';}}>Начать заново</button><button onClick={()=>setReset(false)}>Оставить как есть</button></div></Modal>}
  </section>;
}
