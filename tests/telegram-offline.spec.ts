import { test,expect,type Page } from '@playwright/test';
import { openOffline } from './offlineApp';
import { initialState } from '../src/state/initialState';
import { reduceSave } from '../src/state/reducer';
import { TelegramCloud } from '../src/telegram/cloud';
import type { SaveV1 } from '../src/state/types';
import { runTo } from './helpers';
import { withLegacyJournal } from './legacySave';
import { defaultSixth,sixAt } from './chapter6Helpers';
import { defaultArc,finishArc } from './finalArcHelpers';
import { parseSave } from '../src/persistence/validateSave';
const key='five-meetings:/:telegram:our_little_story_game_bot:42:save';
async function cloudData(save:SaveV1){
  const data:Record<string,string>={};const cloud=new TelegramCloud({getItem(k,done){done(null,data[k]??'');},getItems(keys,done){done(null,Object.fromEntries(keys.map(k=>[k,data[k]??''])));},setItem(k,v,done){data[k]=v;done(null,true);}});await cloud.write(save,'');return data;
}
function remote(page:Page){return page.evaluate(()=>(window as unknown as {testCloud:{data:Record<string,string>}}).testCloud.data);}
async function remoteSave(page:Page){const data=await remote(page),part=JSON.parse(data.five_meetings_v1_head).current;return parseSave(Array.from({length:part.count},(_,i)=>data[`five_meetings_v1_${part.slot}_${i}`]).join(''));}

test('the optional answer has no device-only caption and its confirmed text restores in Telegram',async({page,context})=>{
  const save=sixAt('c6.note'),data=await cloudData(save);await openOffline(page,save,'/play/6',{seedBrowser:false,telegram:{id:42,data}});
  await page.getByRole('button',{name:/Своими словами/}).click();await expect(page.locator('#personal-answer')).toBeVisible();await expect(page.locator('#note-privacy')).toHaveCount(0);await expect(page.getByText('Ответ останется на этом устройстве. Влад его не получает. Можно пропустить.',{exact:true})).toHaveCount(0);await expect(page.getByRole('button',{name:'Пропустить',exact:true})).toBeEnabled();
  await page.locator('#personal-answer').fill('Мой <b>ответ</b> 💗');await page.getByRole('button',{name:'Сохранить ответ',exact:true}).click();
  await expect.poll(async()=> (await remoteSave(page)).privateNotes[6]?.campaign?.text).toBe('Мой <b>ответ</b> 💗');
  const second=await context.newPage();await openOffline(second,save,'/play/6',{seedBrowser:false,telegram:{id:42,data:await remote(page)}});
  await expect(second.locator('[data-node="c6.r3.closing"]')).toBeVisible();const restored=parseSave(await second.evaluate(k=>localStorage.getItem(k)!,key));expect(restored.privateNotes[6]?.campaign?.text).toBe('Мой <b>ответ</b> 💗');await second.close();
});

test('answer-only and word-only edits sync, and remote deletions are not revived by a stale device',async({page,context})=>{
  const main=finishArc(8),data=await cloudData(main);await openOffline(page,main,'/result/8',{seedBrowser:false,telegram:{id:42,data}});
  await expect(page.getByText(defaultArc.note!,{exact:true})).toBeVisible();await page.getByRole('button',{name:'Редактировать',exact:true}).click();await page.locator('#edit-personal-note').fill('Обновлённый ответ 💗');await page.getByRole('button',{name:'Сохранить изменения',exact:true}).click();
  await expect.poll(async()=> (await remoteSave(page)).privateNotes[8]?.campaign?.text).toBe('Обновлённый ответ 💗');expect((await remoteSave(page)).revision).toBe(main.revision);
  await page.getByRole('button',{name:'Изменить слово',exact:true}).click();await page.getByLabel('Наше слово',{exact:true}).fill('Наш новый вечер');await page.getByRole('button',{name:'Сохранить слово',exact:true}).click();await expect.poll(async()=> (await remoteSave(page)).privateWords.campaign?.text).toBe('Наш новый вечер');
  const second=await context.newPage();await openOffline(second,main,'/result/8',{seedBrowser:false,telegram:{id:42,data:await remote(page)}});await expect(second.getByText('Обновлённый ответ 💗',{exact:true})).toBeVisible();await expect(second.locator('.saved-shared-word .shared-word-tag')).toHaveText('Наш новый вечер');await second.close();
  await page.getByRole('button',{name:'Удалить заметку',exact:true}).click();await page.getByRole('button',{name:'Удалить',exact:true}).click();await expect.poll(async()=> (await remoteSave(page)).privateNotes[8]?.campaign?.status).toBe('deleted');
  await page.getByRole('button',{name:'Убрать слово',exact:true}).click();await page.getByRole('button',{name:'Убрать',exact:true}).click();await expect.poll(async()=> (await remoteSave(page)).privateWords.campaign?.status).toBe('deleted');
  const stale=await context.newPage();await openOffline(stale,main,'/result/8',{seedBrowser:false,local:{[key]:JSON.stringify(main)},telegram:{id:42,data:await remote(page)}});await expect(stale.getByRole('heading',{name:'Какую историю продолжить?',exact:true})).toBeVisible();await stale.getByRole('button',{name:/Продолжить из Telegram/}).click();await expect(stale.getByText('Заметка удалена.',{exact:true})).toBeVisible();await expect(stale.locator('.saved-shared-word .shared-word-tag')).toHaveText('Наше слово');const restored=parseSave(await stale.evaluate(k=>localStorage.getItem(k)!,key));expect(restored.privateNotes[8]?.campaign?.status).toBe('deleted');expect(restored.privateWords.campaign?.status).toBe('deleted');await stale.close();
});

test('selecting an old text-free cloud preserves matching local answers and uploads them',async({page})=>{
  const main=finishArc(8),old={...main,privateNotes:{},privateWords:{},localNoteRevision:0};await openOffline(page,main,'/result/8',{seedBrowser:false,local:{[key]:JSON.stringify(main)},telegram:{id:42,data:await cloudData(old)}});await page.getByRole('button',{name:/Продолжить из Telegram/}).click();await expect(page.getByText(defaultArc.note!,{exact:true})).toBeVisible();await expect(page.locator('.saved-shared-word .shared-word-tag')).toHaveText(defaultArc.wordText!);await expect.poll(async()=> (await remoteSave(page)).privateWords.campaign?.text).toBe(defaultArc.wordText);expect((await remoteSave(page)).privateNotes[6]?.campaign?.text).toBe(defaultSixth.note);
});
test('legacy Cyrillic progress becomes compact after choosing the device, then restores on another client',async({page,context})=>{
  const base=reduceSave(initialState(),{type:'start'}),local={...base,campaign:{...base.campaign,active:runTo('c1.plan')}},data=await cloudData(base);
  await openOffline(page,initialState(),'/play/1',{seedBrowser:false,local:{[key]:JSON.stringify(withLegacyJournal(local))},telegram:{id:42,data,maxRequestBytes:4096}});
  await page.getByRole('button',{name:/Продолжить с этого устройства/}).click();await expect(page.locator('[data-node="c1.plan"]')).toBeVisible();await expect(page.locator('.telegram-sync')).toContainText('История сохранена в Telegram');
  const committed=await remote(page);for(const [key,value] of Object.entries(committed))expect(new TextEncoder().encode(JSON.stringify({key,value})).length).toBeLessThanOrEqual(4096);
  const second=await context.newPage();await openOffline(second,initialState(),'/play/1',{seedBrowser:false,telegram:{id:42,data:committed,maxRequestBytes:4096}});
  await expect(second.locator('[data-node="c1.plan"]')).toBeVisible();await expect(second.locator('.telegram-sync')).toContainText('История сохранена в Telegram');expect(JSON.parse((await second.evaluate(k=>localStorage.getItem(k),key))!)).toEqual(local);
});
test('Telegram saves actual actions and resumes the same cursor on a second device',async({page,context})=>{
  await page.setViewportSize({width:320,height:568});
  await openOffline(page,initialState(),'/start',{seedBrowser:false,telegram:{id:42,data:{}}});
  await page.getByRole('button',{name:'Начать с сохранением в Telegram',exact:true}).click();
  await page.getByRole('button',{name:'К встречам',exact:true}).click();await page.locator('.chapter-list li').first().getByRole('button',{name:'Начать встречу',exact:false}).click();await page.locator('[data-node="c1.entry"]').waitFor();
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
  await expect(page.getByRole('alert')).toContainText('Чтение состояния облака');expect(await remote(page)).toEqual(data);
  await page.getByRole('button',{name:'Продолжить на этом устройстве',exact:true}).click();await page.locator('[data-node="c1.entry"]').waitFor();
  await page.getByRole('button',{name:/Дальше/}).click();expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).revision,key)).toBe(save.revision+1);
  const other=await context.newPage();await openOffline(other,initialState(),'/start',{seedBrowser:false,local:{[key]:JSON.stringify(save)},telegram:{id:43,data:{}}});
  await expect(other.getByRole('button',{name:'Начать с сохранением в Telegram',exact:true})).toBeVisible();await expect(other.getByRole('button',{name:/Продолжить с этого устройства/})).toHaveCount(0);
});
test('a rejected native write shows a safe reason and preserves both copies after choosing the device',async({page})=>{
  await page.setViewportSize({width:320,height:568});
  const cloudSave=reduceSave(initialState(),{type:'start'}),local=reduceSave(cloudSave,{type:'command',target:'campaign',command:{kind:'advance',expectedTurn:0}}),data=await cloudData(cloudSave),errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  await openOffline(page,initialState(),'/play/1',{seedBrowser:false,local:{[key]:JSON.stringify(local)},telegram:{id:42,data,failWrites:'STORAGE_VALUE_TOO_LONG'}});
  await page.getByRole('button',{name:/Продолжить с этого устройства/}).click();
  await expect(page.locator('.telegram-sync')).toContainText('Сохранение в Telegram не подтверждено');
  const reason=page.getByText('Почему не сохранилось?',{exact:true});await reason.focus();await page.keyboard.press('Enter');
  await expect(page.locator('.telegram-sync-reason p')).toBeVisible();await expect(page.locator('.telegram-sync-reason p')).toContainText('Запись части сохранения');await expect(page.locator('.telegram-sync-reason p')).toContainText('STORAGE_VALUE_TOO_LONG');
  expect(await remote(page)).toEqual(data);expect(JSON.parse((await page.evaluate(k=>localStorage.getItem(k),key))!)).toEqual(local);
  await page.getByRole('button',{name:/Дальше/}).click();expect(await remote(page)).toEqual(data);expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).revision,key)).toBe(local.revision+1);expect(errors).toEqual([]);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);await page.screenshot({path:'outputs/TELEGRAM_SYNC_REASON_320.png',fullPage:true,animations:'disabled'});
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
  await page.getByRole('button',{name:'К встречам',exact:true}).click();await page.locator('.chapter-list li').first().getByRole('button',{name:'Продолжить',exact:false}).click();await page.locator('[data-node="c1.entry"]').waitFor();
});
