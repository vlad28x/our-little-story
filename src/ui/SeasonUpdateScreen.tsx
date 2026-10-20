import { SaveExportButton } from './SaveExportButton';
import { useGame } from '../app/GameProvider';
export function SeasonUpdateScreen({raw,error,onConfirm,onRead}:{raw:string;error:string|null;onConfirm:()=>void;onRead:()=>void}){
 const {telegramApp}=useGame();
 return <section className="page-content season-update"><span className="eyebrow">ПОСЛЕ ТИТРОВ</span><h1>Сезон обновился</h1><p>У Влада появились новые реплики, маленькие общие истории и другое продолжение вечера.</p><p>Первые пять встреч, их открытки и настройки сохранены. Второй сезон нужно начать заново: старые решения не подходят новому сценарию.</p><p className="small">До твоего выбора исходное сохранение не меняется и не отправляется в облако. После обновления его копия останется на этом устройстве.</p>{error&&<p role="alert">{error}</p>}<div className="stack"><SaveExportButton raw={raw} name="five-meetings-before-season-update.json" app={telegramApp}>Скачать исходную копию</SaveExportButton><button className="primary" onClick={onConfirm}>Начать второй сезон заново</button><button onClick={onRead}>Посмотреть первые пять встреч</button></div></section>;
}
