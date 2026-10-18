export type CloudAPI={
  getItem:(key:string,callback:(error:string|null,value:string)=>void)=>unknown;
  getItems:(keys:string[],callback:(error:string|null,values:Record<string,string>)=>void)=>unknown;
  setItem:(key:string,value:string,callback:(error:string|null,stored:boolean)=>void)=>unknown;
};
export type TelegramApp={initData:string;initDataUnsafe?:{user?:{id:number}};CloudStorage?:CloudAPI;version:string;
  ready:()=>void;expand:()=>void;setHeaderColor?:(color:string)=>void;setBackgroundColor?:(color:string)=>void;
  enableClosingConfirmation?:()=>void;disableClosingConfirmation?:()=>void;
  onEvent?:(event:string,handler:()=>void)=>void;offEvent?:(event:string,handler:()=>void)=>void;
  BackButton?:{show:()=>void;hide:()=>void;onClick:(handler:()=>void)=>void;offClick:(handler:()=>void)=>void};
};
declare global {interface Window{Telegram?:{WebApp?:TelegramApp}}}
export const BOT_URL='https://t.me/our_little_story_game_bot';
let preparation:Promise<TelegramApp|null>|undefined;
export function prepareTelegram():Promise<TelegramApp|null>{
  if(preparation)return preparation;
  const params=new URLSearchParams(location.hash.slice(1));
  const launched=!!window.Telegram?.WebApp?.initData||params.has('tgWebAppData')||new URLSearchParams(location.search).has('tgWebAppData');
  if(!launched)return Promise.resolve(null);
  preparation=(async()=>{
    if(!window.Telegram?.WebApp){
      await new Promise<void>((resolve,reject)=>{
        const script=document.createElement('script');script.src='https://telegram.org/js/telegram-web-app.js?64';
        const timer=setTimeout(()=>{script.remove();reject(new Error('Telegram не ответил. Проверь интернет и открой игру заново.'));},10000);
        script.onload=()=>{clearTimeout(timer);resolve();};script.onerror=()=>{clearTimeout(timer);reject(new Error('Не удалось подключиться к Telegram.'));};document.head.append(script);
      });
    }
    const app=window.Telegram?.WebApp;
    if(!app?.initData)throw new Error('Открой игру кнопкой приложения у бота.');
    // Launch data is only used to partition local caches, never as server authentication.
    const id=app.initDataUnsafe?.user?.id;
    if(!Number.isSafeInteger(id)||!id||id<0)throw new Error('Telegram не передал данные аккаунта. Открой игру заново у бота.');
    if(params.has('tgWebAppData'))history.replaceState(null,'','#/start');
    app.ready();app.expand();app.setHeaderColor?.('#fff7ed');app.setBackgroundColor?.('#fff7ed');
    document.documentElement.dataset.telegram='true';
    return app;
  })().catch(error=>{preparation=undefined;throw error;});
  return preparation;
}
