import { test,expect } from '@playwright/test';
import fs from 'node:fs';
import { openOffline } from './offlineApp';
import { withLegacyJournal,legacyCloudData } from './legacySave';
import { initialState } from '../src/state/initialState';
import { reduceSave } from '../src/state/reducer';
import { finishThree } from './chapter3Helpers';
import { cloudRaw } from '../src/telegram/cloud';
const key='five-meetings:/:save',telegramKey='five-meetings:/:telegram:our_little_story_game_bot:42:save';

test('legacy local progress resumes, imports and exports without a reading journal or menu entry',async({page,context})=>{
  await page.setViewportSize({width:320,height:568});const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  const save=reduceSave(finishThree(),{type:'trial',chapter:1}),legacy=withLegacyJournal(save);
  await openOffline(page,legacy,'/play/1?mode=trial');await expect(page.locator('[data-node="c1.entry"]')).toBeVisible();
  await page.getByRole('button',{name:'Открыть меню',exact:true}).click();await expect(page.getByRole('button',{name:'Прочитанные реплики',exact:true})).toHaveCount(0);
  await page.screenshot({path:'outputs/PAUSE_WITHOUT_JOURNAL_320.png',fullPage:true,animations:'disabled'});
  await page.getByRole('button',{name:'Настройки и резервная копия',exact:true}).click();
  const pending=page.waitForEvent('download');await page.getByRole('button',{name:'Скачать копию прогресса',exact:true}).click();const download=await pending;
  const raw=fs.readFileSync((await download.path())!,'utf8'),exported=JSON.parse(raw);expect(raw).not.toContain('"journal"');expect(exported).toEqual(save);
  await page.getByLabel('Загрузить копию',{exact:true}).setInputFiles({name:'legacy-save.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(legacy))});
  await page.getByRole('button',{name:'Заменить прогресс',exact:true}).click();await expect(page.getByText('Копия загружена. Можно продолжать историю.')).toBeVisible();
  expect(await page.evaluate(k=>localStorage.getItem(k),key)).not.toContain('"journal"');
  await page.getByRole('button',{name:'Открыть меню',exact:true}).click();await page.getByRole('button',{name:'Пять встреч',exact:true}).click();await page.getByRole('button',{name:/Продолжить пробный вариант главы/}).click();
  await page.getByRole('button',{name:'Дальше',exact:false}).click();const after=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);
  expect(after.trial.run.turn).toBe(save.trial!.run.turn+1);expect(after.campaign).toEqual(save.campaign);expect(JSON.stringify(after)).not.toContain('"journal"');
  const restored=await context.newPage();await openOffline(restored,exported,'/play/1?mode=trial');await expect(restored.locator('[data-node="c1.entry"]')).toBeVisible();expect(errors).toEqual([]);
});

test('matching legacy cloud progress is compacted without a chooser, changed cursor or revision',async({page,context})=>{
  const save=reduceSave(initialState(),{type:'start'}),data=legacyCloudData(save),oldHead=data.five_meetings_v1_head;
  await openOffline(page,initialState(),'/play/1',{seedBrowser:false,local:{[telegramKey]:JSON.stringify(save)},telegram:{id:42,data,maxRequestBytes:4096}});
  await expect(page.locator('[data-node="c1.entry"]')).toBeVisible();await expect(page.getByRole('heading',{name:'Какую историю продолжить?',exact:true})).toHaveCount(0);await expect(page.locator('.telegram-sync')).toContainText('История сохранена в Telegram');
  const remote=await page.evaluate(()=>(window as unknown as {testCloud:{data:Record<string,string>}}).testCloud.data),head=JSON.parse(remote.five_meetings_v1_head),current=head.current;
  expect(remote.five_meetings_v1_head).not.toBe(oldHead);
  const raw=Array.from({length:current.count},(_,i)=>remote[`five_meetings_v1_${current.slot}_${i}`]).join('');expect(raw).toBe(cloudRaw(save));expect(raw).not.toContain('"journal"');
  expect(head.previous).toEqual(JSON.parse(oldHead).current);for(const [key,value] of Object.entries(data))if(key!=='five_meetings_v1_head')expect(remote[key]).toBe(value);
  const second=await context.newPage();await openOffline(second,initialState(),'/play/1',{seedBrowser:false,telegram:{id:42,data:remote}});await expect(second.locator('[data-node="c1.entry"]')).toBeVisible();await expect(second.locator('.telegram-sync')).toContainText('История сохранена в Telegram');expect(JSON.parse((await second.evaluate(k=>localStorage.getItem(k),telegramKey))!)).toEqual(save);
});
