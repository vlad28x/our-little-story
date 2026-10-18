import { test,expect } from '@playwright/test';
import fs from 'node:fs';
import { openOffline } from './offlineApp';
import { initialState } from '../src/state/initialState';
import { reduceSave } from '../src/state/reducer';
import { legacyCloudData } from './legacySave';
import { backupTransferUrl,readBackupRequest } from '../src/sharing/backupTransfer';
const key='five-meetings:/:save',tgKey='five-meetings:/:telegram:our_little_story_game_bot:42:save';

test('Telegram exports its actual save through an isolated browser page without changing browser progress',async({page,context})=>{
  const save=reduceSave(initialState(),{type:'start'}),errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  await page.setViewportSize({width:320,height:700});
  await openOffline(page,initialState(),'/settings',{seedBrowser:false,telegram:{id:42,data:legacyCloudData(save)}});
  await expect(page.locator('.telegram-sync')).toContainText('История сохранена в Telegram');
  await page.evaluate(()=>{
    const base=document.createElement('base');base.href='https://example.test/';document.head.append(base);
    window.Telegram!.WebApp!.openLink=url=>{(window as unknown as {exportUrl:string}).exportUrl=url;};
    Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async(raw:string)=>{(window as unknown as {copied:string}).copied=raw;}}});
  });
  const before=await page.evaluate(k=>localStorage.getItem(k),tgKey);
  await page.getByRole('button',{name:'Скачать копию прогресса',exact:true}).click();
  const modal=page.getByRole('dialog',{name:'Сохранить копию прогресса',exact:true});await expect(modal).toBeVisible();
  expect(JSON.parse(await modal.getByLabel('Текст копии',{exact:true}).inputValue())).toEqual(save);
  await modal.getByRole('button',{name:'Скопировать текст копии',exact:true}).click();await expect(modal.getByRole('status')).toContainText('Текст копии скопирован');
  expect(JSON.parse(await page.evaluate(()=>(window as unknown as {copied:string}).copied))).toEqual(save);
  await modal.getByRole('button',{name:'Скачать через браузер',exact:true}).click();
  const url=await page.evaluate(()=>(window as unknown as {exportUrl:string}).exportUrl),request=readBackupRequest(new URL(url).hash)!;expect(JSON.parse(request.file!.raw)).toEqual(save);
  expect(new URL(url).search).toBe('');expect(new URL(url).pathname).toBe('/');expect(await page.evaluate(k=>localStorage.getItem(k),tgKey)).toBe(before);
  await page.screenshot({path:'outputs/TELEGRAM_BACKUP_EXPORT_320.png',fullPage:true,animations:'disabled'});
  const browser=await context.newPage(),browserSave=initialState();await openOffline(browser,browserSave,new URL(url).hash);
  await expect(browser.getByRole('heading',{name:'Копия из Telegram',exact:true})).toBeVisible();expect(await browser.evaluate(()=>location.hash)).toBe('#/export-backup');expect(await browser.evaluate(k=>localStorage.getItem(k),key)).toBe(JSON.stringify(browserSave));expect(await browser.evaluate(k=>localStorage.getItem(k),tgKey)).toBeNull();
  const pending=browser.waitForEvent('download');await browser.getByRole('button',{name:'Скачать файл',exact:true}).click();const file=await pending;expect(file.suggestedFilename()).toBe('five-meetings-save.json');expect(JSON.parse(fs.readFileSync((await file.path())!,'utf8'))).toEqual(save);expect(errors).toEqual([]);
});

test('copy chooser exports each original copy and handles unsupported browser and clipboard APIs',async({page})=>{
  const cloud=reduceSave(initialState(),{type:'start'}),local=reduceSave(cloud,{type:'command',target:'campaign',command:{kind:'advance',expectedTurn:0}});
  await openOffline(page,initialState(),'/chapters',{local:{[tgKey]:JSON.stringify(local)},telegram:{id:42,data:legacyCloudData(cloud)}});
  await page.evaluate(()=>{Object.defineProperty(navigator,'clipboard',{value:{writeText:async()=>{throw new Error('denied');}}});});
  await expect(page.getByRole('heading',{name:'Какую историю продолжить?',exact:true})).toBeVisible();
  await page.getByRole('button',{name:'Скачать копию устройства',exact:true}).click();let modal=page.getByRole('dialog',{name:'Сохранить копию прогресса',exact:true});
  expect(JSON.parse(await modal.getByLabel('Текст копии',{exact:true}).inputValue())).toEqual(local);
  await modal.getByRole('button',{name:'Скачать через браузер',exact:true}).click();await expect(modal.getByRole('status')).toContainText('Скопируй текст копии');
  await modal.getByRole('button',{name:'Скопировать текст копии',exact:true}).click();await expect(modal.getByRole('status')).toContainText('скопируй вручную');
  await modal.getByRole('button',{name:'Закрыть',exact:true}).click();await page.getByRole('button',{name:'Скачать копию Telegram',exact:true}).click();modal=page.getByRole('dialog',{name:'Сохранить копию прогресса',exact:true});
  expect(JSON.parse(await modal.getByLabel('Текст копии',{exact:true}).inputValue())).toEqual(cloud);expect(await page.evaluate(k=>localStorage.getItem(k),tgKey)).toBe(JSON.stringify(local));
});

test('pasted JSON is validated and requires explicit replacement; current copy can be exported from confirmation',async({page})=>{
  const save=reduceSave(initialState(),{type:'start'});
  await openOffline(page,initialState(),'/settings',{seedBrowser:false,telegram:{id:42,data:legacyCloudData(save)}});
  await expect(page.locator('.telegram-sync')).toContainText('История сохранена в Telegram');const before=await page.evaluate(k=>localStorage.getItem(k),tgKey);
  await page.getByText('Вставить текст копии',{exact:true}).click();await page.getByLabel('Текст сохранения',{exact:true}).fill('{broken');await page.getByRole('button',{name:'Проверить текст копии',exact:true}).click();await expect(page.locator('.settings-panel>[role="alert"]')).toBeVisible();expect(await page.evaluate(k=>localStorage.getItem(k),tgKey)).toBe(before);
  const imported=initialState();await page.getByLabel('Текст сохранения',{exact:true}).fill(JSON.stringify(imported));await page.getByRole('button',{name:'Проверить текст копии',exact:true}).click();
  const confirm=page.getByRole('dialog',{name:'Заменить текущий прогресс?',exact:true});await expect(confirm).toBeVisible();expect(await page.evaluate(k=>localStorage.getItem(k),tgKey)).toBe(before);
  await confirm.getByRole('button',{name:'Сначала скачать текущую копию',exact:true}).click();const exportDialog=page.getByRole('dialog',{name:'Сохранить копию прогресса',exact:true});await expect(exportDialog).toBeVisible();expect(JSON.parse(await exportDialog.getByLabel('Текст копии',{exact:true}).inputValue())).toEqual(save);
  await exportDialog.getByRole('button',{name:'Закрыть',exact:true}).click();await confirm.getByRole('button',{name:'Заменить прогресс',exact:true}).click();await expect(page.getByText('Копия загружена. Можно продолжать историю.',{exact:true})).toBeVisible();const after=JSON.parse((await page.evaluate(k=>localStorage.getItem(k),tgKey))!);expect(after.campaign).toEqual(imported.campaign);expect(after.revision).toBe(save.revision+1);
});

test('malformed or missing transfer stays outside the game, with no imports or executable content',async({page})=>{
  const save=initialState();await openOffline(page,save,'#/export-backup/invalid');await expect(page.getByRole('alert')).toContainText('Не удалось прочитать');expect(await page.evaluate(k=>localStorage.getItem(k),key)).toBe(JSON.stringify(save));expect(await page.locator('.telegram-sync').count()).toBe(0);
  expect(readBackupRequest('#/chapters')).toBeNull();expect(readBackupRequest('#/export-backup')).toEqual({file:null});
  const file={name:'five-meetings-recovery.json',raw:'{broken кириллица 🌸 " \\'};expect(readBackupRequest(new URL(backupTransferUrl(file,'https://example.test/game/?private=1')).hash)).toEqual({file});
  expect(()=>backupTransferUrl({...file,raw:'я'.repeat(50000)},'https://example.test/')).toThrow('ссылка слишком длинная');
  const bad=btoa(JSON.stringify({name:'bad.html',raw:'<script>alert(1)</script>'}));expect(readBackupRequest('#/export-backup/'+bad.replaceAll('+','-').replaceAll('/','_').replace(/=+$/,''))).toEqual({file:null});
});

test('reusing an existing browser game tab also downloads the transferred copy instead of its own progress',async({page})=>{
  const browserSave=initialState(),telegramSave=reduceSave(browserSave,{type:'start'});
  await openOffline(page,browserSave,'/chapters');await expect(page.getByRole('heading',{name:'Каждая встреча — маленькая история',exact:true})).toBeVisible();
  const url=backupTransferUrl({name:'five-meetings-save.json',raw:JSON.stringify(telegramSave)},'https://example.test/');
  await page.evaluate(hash=>{location.hash=hash;},new URL(url).hash);
  await expect(page.getByRole('heading',{name:'Копия из Telegram',exact:true})).toBeVisible();expect(await page.evaluate(()=>location.hash)).toBe('#/export-backup');expect(await page.evaluate(k=>localStorage.getItem(k),key)).toBe(JSON.stringify(browserSave));
  const pending=page.waitForEvent('download');await page.getByRole('button',{name:'Скачать файл',exact:true}).click();const download=await pending;expect(JSON.parse(fs.readFileSync((await download.path())!,'utf8'))).toEqual(telegramSave);
});
