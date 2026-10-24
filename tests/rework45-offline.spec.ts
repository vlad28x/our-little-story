import { test,expect,type Page } from '@playwright/test';
import fs from 'node:fs/promises';
import { openOffline } from './offlineApp';
import { finishFour,startFour,command4,defaultFourth } from './chapter4Helpers';
import { finishFive,startFive } from './chapter5Helpers';
import { finishFive as oldFive,startFive as oldStartFive,command5 as oldCommand5 } from './legacy5Helpers';
import { finishFour as oldFour } from './legacy4Helpers';
import { reduceSave } from '../src/state/reducer';
import { chapters } from '../src/content/chapters/manifest';
import { parseSave } from '../src/persistence/validateSave';
import { legacyCloudData } from './legacySave';
import type { SaveV1 } from '../src/state/types';
const key='five-meetings:/:save';
const state=(page:Page)=>page.evaluate(k=>JSON.parse(localStorage.getItem(k)!) as SaveV1,key);
async function until(page:Page,id:string){
  for(let i=0;i<150;i++){
    if(await page.locator(`[data-node="${id}"]`).count())return;
    await expect(page.locator('[data-node^="c4.bond"], [data-node^="c5.tone"], [data-node^="c5.ending"]')).toHaveCount(0);
    if(await page.locator('[data-node="c5.drink.first"]').count())await page.getByRole('button',{name:'Давай сравним с менее сладким вариантом',exact:false}).click();
    else if(await page.locator('[data-node="c5.drink.recommend"]').count())await page.getByRole('button',{name:'Предложить менее сладкий вариант',exact:false}).click();
    else await page.getByRole('button',{name:'Дальше',exact:false}).click();
  }
  throw Error('Missing '+id);
}
async function finish(page:Page){for(let i=0;i<40;i++){
  const before=await state(page),trial=await page.evaluate(()=>location.hash.includes('mode=trial'));
  if(!(trial?before.trial?.run:before.campaign.active)){await expect(page.locator('.postcard')).toBeVisible();return;}
  if(await page.locator('[data-node="c5.drink.first"]').count())await page.getByRole('button',{name:'Давай сравним с менее сладким вариантом',exact:false}).click();
    else if(await page.locator('[data-node="c5.drink.recommend"]').count())await page.getByRole('button',{name:'Предложить менее сладкий вариант',exact:false}).click();
    else await page.getByRole('button',{name:'Дальше',exact:false}).click();
  await expect.poll(async()=>(await state(page)).revision).toBeGreaterThan(before.revision);
}throw Error('No postcard');}
async function invitation(page:Page){await expect(page.locator('.final-conversation')).toBeVisible();for(let i=0;i<2;i++)if(await page.getByRole('button',{name:'Продолжить разговор',exact:false}).count())await page.getByRole('button',{name:'Продолжить разговор',exact:false}).click();}

test('new fourth reaches wishes and each goodbye with no status; reload preserves choices at320 and960',async({context})=>{
  for(const width of [320,960])for(const [goodbye,label] of [['accept','Можно. Иди сюда'],['her','Я сама'],['none','Давай сегодня без объятий. До завтра']] as const){
    const page=await context.newPage();await page.setViewportSize({width,height:width===320?568:900});
    let s=startFour();while(s.campaign.active!.nodeId!=='c4.stars')s=reduceSave(s,{type:'command',target:'campaign',command:command4(s.campaign.active!)});
    await openOffline(page,s,'/play/4');await page.getByRole('button',{name:'Выбрать готовый чайник',exact:true}).click();
    await until(page,'c4.wish');await expect(page.getByRole('button',{name:'Мне хорошо дружить с тобой',exact:false})).toHaveCount(0);
    await page.getByRole('button',{name:'Больше спокойных вечеров',exact:false}).click();await until(page,'c4.goodbye');
    await expect(page.locator('.choices button')).toHaveCount(3);await page.getByRole('button',{name:label,exact:false}).click();
    await openOffline(page,await state(page),'/play/4');await expect(page.locator(`[data-node="c4.goodbye.${goodbye}"]`)).toBeVisible();await finish(page);
    const saved=await state(page);expect(saved.campaign.records[4]?.story).toMatchObject({c4Edition:2,c4Goodbye:goodbye,wish:'calm'});expect(saved.campaign.records[4]?.story.bond).toBeUndefined();
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);expect(parseSave(JSON.stringify(saved))).toEqual(saved);
    if(goodbye==='her')await page.screenshot({path:`work/REWORK45_FOUR_${width}.png`,fullPage:true,animations:'disabled'});await page.close();
  }
});
test('new fifth keeps precise goodbye callbacks and a single general ending including an old no-memory prefix',async({context})=>{
  for(const goodbye of ['accept','her','none',undefined] as const){
    const prior=goodbye===undefined?oldFour():finishFour(undefined,{...defaultFourth,goodbye});
    if(goodbye===undefined)delete prior.campaign.records[4]!.story.c4Goodbye;
    const page=await context.newPage();await page.setViewportSize({width:320,height:568});await openOffline(page,startFive(prior),'/play/5');
    await until(page,goodbye==='her'?'c5.hug.her':goodbye==='accept'?'c5.hug.accept':'c5.cat.wait');
    if(goodbye==='her')await expect(page.getByText('в прошлый раз ты меня обняла первой. я потом полдороги улыбался.',{exact:true})).toBeVisible();
    await until(page,'c5.album');await page.getByRole('button',{name:'Положить вместе',exact:true}).click();await until(page,'c5.close');await expect(page.locator('.choices button')).toHaveCount(0);await finish(page);
    await expect(page.locator('.postcard h1')).toHaveText('Пять встреч');await expect(page.getByText('ИСТОРИЯ ЗАКОНЧИЛАСЬ. А МЫ?',{exact:true})).toBeVisible();
    await expect(page.getByRole('heading',{name:'А теперь — встретимся по-настоящему?',exact:true})).toBeVisible();
    expect((await state(page)).campaign.records[5]?.story.ending).toBeUndefined();await page.close();
  }
});
test('all five invitation responses edit/copy/restore without status or changing the postcard',async({page})=>{
  await page.setViewportSize({width:320,height:568});const main=finishFive();await openOffline(page,main,'/result/5');await invitation(page);
  await expect(page.locator('.invitation-options button')).toHaveCount(5);
  for(const [value,label] of [['game','Игровой вечер'],['movie','Киновечер'],['cafe','Встретиться в кафе'],['walk','Погулять вместе'],['decline','Пока воздержусь']] as const){
    await page.getByRole('button',{name:label,exact:true}).click();await expect(page.getByLabel('Сообщение Владу',{exact:true})).not.toHaveValue(/свидани|люблю|отношени/);
    const saved=await state(page);expect(saved.continuation).toBe(value);expect(saved.campaign).toEqual(main.campaign);expect(saved.collection).toEqual(main.collection);
    await openOffline(page,saved,'/result/5');await expect(page.getByRole('button',{name:label,exact:true})).toHaveAttribute('aria-pressed','true');await expect(page.locator('.postcard h1')).toHaveText('Пять встреч');
  }
  await page.getByRole('button',{name:'Киновечер',exact:true}).click();
  await page.evaluate(()=>{Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async(text:string)=>{(window as unknown as {copied:string}).copied=text;}}});});
  await page.getByLabel('Сообщение Владу',{exact:true}).fill('Мой текст для ручной отправки.');await page.getByRole('button',{name:'Копировать сообщение',exact:true}).click();
  expect(await page.evaluate(()=>(window as unknown as {copied:string}).copied)).toBe('Мой текст для ручной отправки.');expect(JSON.stringify(await state(page))).not.toContain('Мой текст');
  const bounds=await page.locator('.final-conversation').boundingBox(),postcard=await page.locator('.postcard').boundingBox();expect(bounds!.y+bounds!.height).toBeLessThan(postcard!.y);
  await page.screenshot({path:'work/REWORK45_INVITATION_320.png',fullPage:true,animations:'disabled'});
});
test('old archived card and a new trial preserve canon and the real invitation answer',async({page})=>{
  const main=reduceSave(oldFive(),{type:'continuation',value:'cafe'});await openOffline(page,main,'/result/5?card=c5.friendly');
  await expect(page.locator('.postcard h1')).toHaveText('Хорошо, что встретились');await expect(page.locator('.final-conversation')).toHaveCount(0);
  await expect(page.getByText('Из прежнего сценария · встреча 5',{exact:true})).toBeVisible();
  await page.getByRole('button',{name:'Посмотреть другой вариант',exact:false}).click();await until(page,'c5.album');await page.getByRole('button',{name:'Положить вместе',exact:true}).click();await finish(page);
  await expect(page.locator('.postcard h1')).toHaveText('Пять встреч');await expect(page.locator('.final-conversation')).toHaveCount(0);
  const saved=await state(page);expect(saved.campaign).toEqual(main.campaign);expect(saved.continuation).toBe('cafe');expect(saved.collection.cards.some(c=>c.id==='c5.friendly')).toBe(true);
});
test('new save exports a real JSON file and imports through the existing confirmation',async({page})=>{
  const main=reduceSave(finishFive(),{type:'continuation',value:'walk'});await openOffline(page,main,'/settings');
  const downloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:'Скачать копию прогресса',exact:true}).click();const download=await downloadPromise;
  const raw=await fs.readFile((await download.path())!,'utf8');expect(parseSave(raw)).toEqual(main);
  await page.getByText('Вставить текст копии',{exact:true}).click();await page.getByLabel('Текст сохранения',{exact:true}).fill(raw);await page.getByRole('button',{name:'Проверить текст копии',exact:true}).click();
  await expect(page.getByRole('dialog',{name:'Заменить текущий прогресс?'})).toBeVisible();await page.getByRole('button',{name:'Заменить прогресс',exact:true}).click();
  const loaded=await state(page);expect(loaded.campaign).toEqual(main.campaign);expect(loaded.continuation).toBe('walk');expect(loaded.collection).toEqual(main.collection);
});
test('old menu cursors resume their actual graph and old endings retain their card after reopen',async({page})=>{
  let s=oldStartFive();while(!s.campaign.active!.nodeId.startsWith('c5.tone.'))s=reduceSave(s,{type:'command',target:'campaign',command:oldCommand5(s.campaign.active!)});
  await openOffline(page,{...s,contentVersion:12} as unknown as SaveV1,'/play/5');await expect(page.locator('.choices button')).toHaveCount(4);
  await page.getByRole('button',{name:'Надо официально продлить этот беспорядок',exact:false}).click();await finish(page);await expect(page.locator('.postcard h1')).toHaveText('Продлено котом');
  const loaded=await state(page);expect(loaded.campaign.records[5]?.story.ending).toBe('comic');expect(loaded.campaign.records[5]?.story.c5Edition).toBeUndefined();
  await openOffline(page,loaded,'/result/5');await expect(page.locator('.postcard h1')).toHaveText('Продлено котом');
});
test('new fifth can open the existing sixth via the unchanged secret and reload',async({page})=>{
  const main=finishFive();await openOffline(page,main,'/result/5');await page.getByRole('button',{name:'Псс… Маленький секрет',exact:true}).click();
  await page.getByRole('button',{name:'И какие же?',exact:true}).click();
  const input=page.getByRole('textbox',{name:'Код от Влада',exact:true});await input.fill(chapters.find(c=>c.id===6)!.code!);
  await page.getByRole('button',{name:'Проверить код',exact:true}).click();await page.getByRole('button',{name:'Начать шестую встречу',exact:false}).click();
  await expect(page.locator('[data-node="c6.r3.entry"]')).toBeVisible();const loaded=await state(page);expect(loaded.campaign.records[5]).toEqual(main.campaign.records[5]);
  await openOffline(page,loaded,'/play/6');await expect(page.locator('[data-node="c6.r3.entry"]')).toBeVisible();
});
test('new continuation and edition markers survive mock Telegram cloud restore',async({page,context})=>{
  const main=finishFive();await openOffline(page,main,'/result/5',{seedBrowser:false,telegram:{id:42,data:legacyCloudData(main)}});
  await expect(page.locator('.telegram-sync')).toContainText('История сохранена в Telegram');await invitation(page);
  for(const [value,label] of [['game','Игровой вечер'],['movie','Киновечер'],['cafe','Встретиться в кафе'],['walk','Погулять вместе'],['decline','Пока воздержусь']] as const){
    await page.getByRole('button',{name:label,exact:true}).click();await expect(page.locator('.telegram-sync')).toContainText('История сохранена в Telegram');
    const remote=await page.evaluate(()=>(window as unknown as {testCloud:{data:Record<string,string>}}).testCloud.data);
    const restored=await context.newPage();await openOffline(restored,main,'/result/5',{seedBrowser:false,telegram:{id:42,data:remote}});
    await expect(restored.getByRole('button',{name:label,exact:true})).toHaveAttribute('aria-pressed','true');
    const saved=await restored.evaluate(()=>JSON.parse(localStorage.getItem('five-meetings:/:telegram:our_little_story_game_bot:42:save')!) as SaveV1);
    expect(saved.continuation).toBe(value);expect(saved.campaign).toEqual(main.campaign);await restored.close();
  }
});
