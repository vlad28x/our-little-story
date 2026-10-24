import {test,expect,type Page} from '@playwright/test';
import {openOffline} from './offlineApp';
import {startFive,finishFive,command5} from './chapter5Helpers';
import {finishFive as edition2Five} from './edition2FifthHelpers';
import {reduceSave} from '../src/state/reducer';
import {parseSave} from '../src/persistence/validateSave';
import {legacyCloudData} from './legacySave';
import type {SaveV1} from '../src/state/types';
const key='five-meetings:/:save';
const state=(p:Page)=>p.evaluate(k=>JSON.parse(localStorage.getItem(k)!) as SaveV1,key);
function atFirst(){let s=startFive();while(s.campaign.active!.nodeId!=='c5.drink.first')s=reduceSave(s,{type:'command',target:'campaign',command:command5(s.campaign.active!)});return s;}
async function next(page:Page){const before=await state(page);if(await page.locator('[data-node="c5.album"]').count())await page.getByRole('button',{name:'Положить вместе',exact:true}).click();else await page.getByRole('button',{name:'Дальше',exact:false}).click();await expect.poll(async()=>(await state(page)).revision).toBeGreaterThan(before.revision);}
async function until(page:Page,id:string){for(let i=0;i<130;i++){await expect(page.locator('[data-node]')).toBeVisible();if(await page.locator(`[data-node="${id}"]`).count())return;await next(page);}throw Error('Missing '+id);}
async function finish(page:Page){for(let i=0;i<50;i++){if(!(await state(page)).campaign.active){await expect(page.locator('.postcard')).toBeVisible();return;}await next(page);}throw Error('No result');}
const firstLabels={vanilla:'Мне тоже нравится. Я бы оставила так',sweet:'Для меня сладковато',compare:'Давай сравним с менее сладким вариантом'};
const recommendations={vanilla:'Оставить исходный ванильный вариант',fresh:'Предложить менее сладкий вариант',both:'Попробовать в меню оба'};
for(const firstTaste of ['vanilla','sweet','compare'] as const)test(`first opinion ${firstTaste}: all recommendations restore at both menus and lead to a complete evening`,async({context})=>{
 for(const [index,recommendation] of (['vanilla','fresh','both'] as const).entries()){
  const page=await context.newPage();await page.setViewportSize({width:[320,390,960][index],height:900});const base=atFirst();await openOffline(page,base,'/play/5');
  await expect(page.getByRole('heading',{name:'Как тебе первая проба?',exact:true})).toBeVisible();await expect(page.locator('.choices button')).toHaveCount(3);
  await page.getByRole('button',{name:firstLabels[firstTaste],exact:false}).click();await openOffline(page,await state(page),'/play/5');
  await expect(page.locator(`[data-node="c5.drink.first.${firstTaste}"]`)).toBeVisible();await until(page,'c5.drink.recommend');
  const menu=await state(page);await openOffline(page,menu,'/play/5');await expect(page.getByRole('heading',{name:'Что предложим Нине после сравнения?',exact:true})).toBeVisible();
  for(const button of await page.locator('.choices button').all()){const box=(await button.boundingBox())!;expect(box.height).toBeGreaterThanOrEqual(48);}
  if(firstTaste==='sweet')await page.screenshot({path:`work/DRINK_MENU_${[320,390,960][index]}.png`,fullPage:true,animations:'disabled'});
  await page.getByRole('button',{name:recommendations[recommendation],exact:false}).click();await openOffline(page,await state(page),'/play/5');
  await expect(page.locator(`[data-node="c5.drink.reason.${firstTaste}.${recommendation}"]`)).toBeVisible();
  await until(page,`c5.drink.echo.${recommendation}`);await expect(page.locator('.final-conversation')).toHaveCount(0);await until(page,'c5.exit');await finish(page);
  const saved=await state(page);expect(saved.campaign.records[5]?.story).toMatchObject({c5Edition:3,c5FirstTaste:firstTaste,c5Recommendation:recommendation});expect(parseSave(JSON.stringify(saved))).toEqual(saved);
  await expect(page.locator('.postcard h1')).toHaveText('Пять встреч');await expect(page.locator('.vlad-quote')).toContainText('чай с характером. компания тоже.');
  const invite=(await page.locator('.final-conversation').boundingBox())!,postcard=(await page.locator('.postcard').boundingBox())!;expect(invite.y+invite.height).toBeLessThan(postcard.y);
  await page.getByRole('button',{name:'Продолжить разговор',exact:false}).click();await page.getByRole('button',{name:'Продолжить разговор',exact:false}).click();await page.getByRole('button',{name:'Пока воздержусь',exact:true}).click();
  expect((await state(page)).campaign).toEqual(saved.campaign);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);await page.close();
 }
});
test('an edition2 result retains its old postcard while its new tasting trial stays independent',async({page})=>{
 const main=reduceSave(edition2Five(),{type:'continuation',value:'movie'});await openOffline(page,main,'/result/5');await expect(page.locator('.vlad-quote')).toContainText('мой любимый незапланированный перерыв.');
 await page.getByRole('button',{name:'Посмотреть другой вариант',exact:false}).click();await until(page,'c5.drink.first');await page.getByRole('button',{name:firstLabels.sweet,exact:false}).click();await until(page,'c5.drink.recommend');await page.getByRole('button',{name:recommendations.both,exact:false}).click();
 for(let i=0;i<100;i++){const s=await state(page);if(!s.trial)break;await next(page);}
 await expect(page.locator('.postcard')).toBeVisible();await expect(page.locator('.vlad-quote')).toContainText('чай с характером. компания тоже.');await expect(page.locator('.final-conversation')).toHaveCount(0);
 const saved=await state(page);expect(saved.campaign).toEqual(main.campaign);expect(saved.continuation).toBe('movie');
 await openOffline(page,saved,'/result/5?source=campaign');await expect(page.locator('.vlad-quote')).toContainText('мой любимый незапланированный перерыв.');
});
test('the floating devil card fits browser and Telegram safe areas with round corners and an unobstructed close button',async({context})=>{
 for(const telegram of [false,true])for(const [width,height] of [[320,568],[390,844],[667,375],[960,900]]){
  const page=await context.newPage();await page.setViewportSize({width,height});const save=finishFive();
  await openOffline(page,save,'/result/5',telegram?{seedBrowser:false,telegram:{id:42,data:legacyCloudData(save),presentation:{fullscreen:'success'}}}:{});
  await page.getByRole('button',{name:'Псс… Маленький секрет',exact:true}).click();const dialog=page.getByRole('dialog',{name:'Маленький секрет',exact:true});await expect(dialog).toBeVisible();
  await dialog.evaluate(el=>Promise.all(el.getAnimations().map(animation=>animation.finished)));
  const surface=dialog.locator('.modal-surface');await expect(surface).toHaveCSS('border-bottom-left-radius','24px');await expect(surface).toHaveCSS('border-bottom-right-radius','24px');
  const sizes=await page.evaluate(()=>({top:parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--tg-safe-area-inset-top'))||0,content:parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--tg-content-safe-area-inset-top'))||0,bottom:parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--tg-safe-area-inset-bottom'))||0}));
  const portrait=(await dialog.locator('.secret-portrait').boundingBox())!,card=(await surface.boundingBox())!,close=(await dialog.getByRole('button',{name:'Закрыть',exact:true}).boundingBox())!;
  expect(portrait.y).toBeGreaterThanOrEqual(sizes.top+sizes.content);expect(card.y+card.height).toBeLessThanOrEqual(height-sizes.bottom-10);expect(portrait.x+portrait.width).toBeLessThanOrEqual(close.x);
  expect(close.height).toBeGreaterThanOrEqual(48);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  if(height>=568)await page.screenshot({path:`work/DEVIL_CARD_${telegram?'TELEGRAM':'BROWSER'}_${width}.png`,animations:'disabled'});
  await page.getByRole('button',{name:'И какие же?',exact:true}).click();const input=page.getByLabel('Код от Влада',{exact:true});await expect(input).toBeFocused();await input.fill('wrong');await input.press('Enter');await expect(input).toHaveAttribute('aria-invalid','true');
  await page.getByRole('button',{name:'Пока оставим интригу',exact:true}).scrollIntoViewIfNeeded();await dialog.getByRole('button',{name:'Закрыть',exact:true}).click();await expect(dialog).toHaveCount(0);
  await expect(page.getByRole('button',{name:'Псс… Маленький секрет',exact:true})).toBeFocused();await page.close();
 }
});
