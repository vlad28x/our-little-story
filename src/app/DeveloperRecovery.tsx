import { useGame } from './GameProvider';
import { recoveryPreview } from './developerPreview';
import { go } from './router';

export function DeveloperRecovery(){
 const {send}=useGame();
 function open(chapter:6|7|8|9|10){send({type:'replace',save:recoveryPreview(chapter)});go(`/play/${chapter}`);}
 return <section aria-label="Перезапустить тестовую встречу" className="stack">
  <p>Сценарий обновился, и прежняя тестовая копия больше не подходит. Заново открой нужную встречу. Обычная история останется без изменений.</p>
  <button className="primary" onClick={()=>open(8)}>Открыть восьмую встречу</button>
  {([6,7,9,10] as const).map(chapter=><button key={chapter} onClick={()=>open(chapter)}>Открыть встречу {chapter}</button>)}
  <button className="text-button" onClick={()=>{location.href=`${location.pathname}#/chapters`;}}>Вернуться к обычной игре</button>
 </section>;
}
