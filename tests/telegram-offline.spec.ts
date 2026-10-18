import { test,expect,type Page } from '@playwright/test';
import { openOffline } from './offlineApp';
import { initialState } from '../src/state/initialState';
import { reduceSave } from '../src/state/reducer';
import { TelegramCloud } from '../src/telegram/cloud';
import type { SaveV1 } from '../src/state/types';
const key='five-meetings:/:telegram:our_little_story_game_bot:42:save';
async function cloudData(save:SaveV1){
  const data:Record<string,string>={};const cloud=new TelegramCloud({getItem(k,done){done(null,data[k]??'');},getItems(keys,done){done(null,Object.fromEntries(keys.map(k=>[k,data[k]??''])));},setItem(k,v,done){data[k]=v;done(null,true);}});await cloud.write(save,'');return data;
}
function remote(page:Page){return page.evaluate(()=>(window as unknown as {testCloud:{data:Record<string,string>}}).testCloud.data);}
test('Telegram saves actual actions and resumes the same cursor on a second device',async({page,context})=>{
  await page.setViewportSize({width:320,height:568});
  await openOffline(page,initialState(),'/start',{seedBrowser:false,telegram:{id:42,data:{}}});
  await page.getByRole('button',{name:'Начать с сохранением в Telegram',exact:true}).click();
  await page.getByRole('button',{name:/Начать первую встречу/}).click();await page.locator('[data-node="c1.entry"]').waitFor();
  await page.getByRole('button',{name:/Дальше/}).click();
  await expect(page.getByRole('status')).toContainText('История сохранена в Telegram');
  const data=await remote(page),saved=await page.evaluate(k=>localStorage.getItem(k),key),cursor=await page.locator('[data-node]').getAttribute('data-node');expect(saved).not.toBeNull();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  const second=await context.newPage();await openOffline(second,initialState(),'/play/1',{seedBrowser:false,telegram:{id:42,data}});
  await second.locator(`[data-node="${cursor}"]`).waitFor();await expect(second.getByRole('status')).toContainText('История сохранена в Telegram');
  await second.getByRole('button',{name:/Дальше/}).click();await expect(second.getByRole('status')).toContainText('История сохранена в Telegram');
  expect(await remote(second)).not.toEqual(data);
  await page.getByRole('button',{name:'Открыть меню',exact:true}).click();await page.getByRole('button',{name:'Пять встреч',exact:true}).click();
  const button=await page.getByRole('button',{name:'Открыть встречу',exact:true}).boundingBox();expect(button!.y+button!.height).toBeLessThanOrEqual(568);
  await page.screenshot({path:'outputs/TELEGRAM_CHAPTER_MAP_320.png',fullPage:false,animations:'disabled'});
});
test('different local and cloud stories require a choice before any cloud write',async({page})=>{
  const cloudSave=reduceSave(initialState(),{type:'start'}),local=reduceSave(cloudSave,{type:'command',target:'campaign',command:{kind:'advance',expectedTurn:0}}),data=await cloudData(cloudSave);
  await openOffline(page,initialState(),'/play/1',{seedBrowser:false,local:{[key]:JSON.stringify(local)},telegram:{id:42,data}});
  await expect(page.getByRole('heading',{name:'Какую историю продолжить?'})).toBeVisible();expect(await remote(page)).toEqual(data);
  await page.getByRole('button',{name:/Продолжить из Telegram/}).click();await page.locator('[data-node="c1.entry"]').waitFor();
  expect(JSON.parse((await page.evaluate(k=>localStorage.getItem(k),key))!)).toEqual(cloudSave);
  expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k.replace(':save',':backup'))!).revision,key)).toBe(local.revision);
});
test('offline startup preserves local progress and another Telegram account does not inherit it',async({page,context})=>{
  const save=reduceSave(initialState(),{type:'start'}),data=await cloudData(save);
  await openOffline(page,initialState(),'/play/1',{seedBrowser:false,local:{[key]:JSON.stringify(save)},telegram:{id:42,data,failReads:true}});
  await expect(page.getByRole('alert')).toContainText('облаком');expect(await remote(page)).toEqual(data);
  await page.getByRole('button',{name:'Продолжить на этом устройстве',exact:true}).click();await page.locator('[data-node="c1.entry"]').waitFor();
  await page.getByRole('button',{name:/Дальше/}).click();expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).revision,key)).toBe(save.revision+1);
  const other=await context.newPage();await openOffline(other,initialState(),'/start',{seedBrowser:false,local:{[key]:JSON.stringify(save)},telegram:{id:43,data:{}}});
  await expect(other.getByRole('button',{name:'Начать с сохранением в Telegram',exact:true})).toBeVisible();await expect(other.getByRole('button',{name:/Продолжить с этого устройства/})).toHaveCount(0);
});
test('a remote change pauses the game and preserves a download of the current device',async({page})=>{
  const save=reduceSave(initialState(),{type:'start'}),data=await cloudData(save);
  await openOffline(page,initialState(),'/play/1',{seedBrowser:false,telegram:{id:42,data}});await page.locator('[data-node="c1.entry"]').waitFor();await expect(page.getByRole('status')).toContainText('История сохранена в Telegram');
  await page.evaluate(()=>{(window as unknown as {testCloud:{data:Record<string,string>}}).testCloud.data.five_meetings_v1_head='different';window.dispatchEvent(new Event('focus'));});
  await expect(page.getByRole('dialog',{name:'Нашлась другая копия истории'})).toBeVisible();
  await expect(page.getByRole('button',{name:'Скачать эту копию',exact:true})).toBeVisible();expect((await remote(page)).five_meetings_v1_head).toBe('different');
});
test('Telegram launch data is removed from the hash before the story opens',async({page})=>{
  await openOffline(page,initialState(),'tgWebAppData=opaque&tgWebAppVersion=9.0',{seedBrowser:false,telegram:{id:42,data:{}}});
  await expect(page.getByRole('button',{name:'Начать с сохранением в Telegram',exact:true})).toBeVisible();expect(await page.evaluate(()=>location.hash)).toBe('#/start');
});
test('failed SDK loading offers retry and keeps the browser save playable',async({page})=>{
  const save=reduceSave(initialState(),{type:'start'});
  await openOffline(page,save,'tgWebAppData=opaque&tgWebAppVersion=9.0');
  await expect(page.getByRole('alert')).toContainText('подключиться к Telegram');
  await page.getByRole('button',{name:'Проверить ещё раз',exact:true}).click();await expect(page.getByRole('alert')).toBeVisible();
  await page.getByRole('button',{name:'Продолжить на этом устройстве',exact:true}).click();
  // The fallback has not touched the previous snapshot; starting/continuing remains explicit.
  expect(await page.evaluate(()=>JSON.parse(localStorage.getItem('five-meetings:/:save')!).revision)).toBe(save.revision);
  await page.getByRole('button',{name:/Продолжить историю/}).click();await page.locator('[data-node="c1.entry"]').waitFor();
});
