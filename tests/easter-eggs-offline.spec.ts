import { test,expect,type Page } from '@playwright/test';
import { openOffline } from './offlineApp';
import { initialState } from '../src/state/initialState';
import { reduceSave } from '../src/state/reducer';
import { commandFor } from './helpers';
import { completeTwo,thirdCode,command3 } from './chapter3Helpers';
import type { SaveV1 } from '../src/state/types';
const key='five-meetings:/:save';
const stored=(page:Page)=>page.evaluate(k=>localStorage.getItem(k),key);
function firstAt(id?:string){
  let s=reduceSave(initialState(),{type:'start'});
  for(let i=0;id&&s.campaign.active?.nodeId!==id&&i<180;i++)s=reduceSave(s,{type:'command',target:'campaign',command:commandFor(s.campaign.active!)});
  return s;
}
function thirdAt(id?:string){
  let s=reduceSave(completeTwo(),{type:'unlock',code:thirdCode});s=reduceSave(s,{type:'start',chapter:3});
  for(let i=0;id&&s.campaign.active?.nodeId!==id&&i<180;i++)s=reduceSave(s,{type:'command',target:'campaign',command:command3(s.campaign.active!)});
  return s;
}
async function open(page:Page,save:SaveV1,chapter=1){
  const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  await openOffline(page,{...save,settings:{...save.settings,textMode:'instant'}},`/play/${chapter}`);
  await expect(page.locator('.story-screen')).toBeVisible();return errors;
}

test('hair and cat react on a small screen without changing saved story, then clear on advance',async({page})=>{
  await page.setViewportSize({width:320,height:568});const errors=await open(page,firstAt());
  const hair=page.getByRole('button',{name:'Потрогать кудри Влада'}),cat=page.getByRole('button',{name:'Погладить Пончика'});
  await expect(hair).toBeVisible();await expect(cat).toBeVisible();const raw=await stored(page);
  for(const target of [hair,cat]){const box=await target.boundingBox();expect(box!.width).toBeGreaterThanOrEqual(48);expect(box!.height).toBeGreaterThanOrEqual(48);}
  await hair.focus();await page.keyboard.press('Enter');await expect(page.getByRole('status')).toContainText('я их укладывал. у них другое мнение');
  await page.screenshot({path:'outputs/EASTER_HAIR_MOBILE.png',fullPage:true,animations:'disabled'});
  expect(await stored(page)).toBe(raw);await page.getByRole('button',{name:'Скрыть маленькую реакцию'}).click();await expect(hair).toBeFocused();
  const hairBox=(await hair.boundingBox())!;expect(hairBox.width).toBeGreaterThanOrEqual(64);expect(hairBox.height).toBeGreaterThanOrEqual(64);
  await hair.click({position:{x:8,y:hairBox.height/2}});await expect(page.getByRole('status')).toContainText('я их укладывал. у них другое мнение');expect(await stored(page)).toBe(raw);
  await page.getByRole('button',{name:'Скрыть маленькую реакцию'}).click();
  await cat.click();await expect(page.getByRole('status')).toContainText('так. теперь он уверен, что ты пришла к нему');expect(await stored(page)).toBe(raw);
  await page.screenshot({path:'outputs/EASTER_CAT_MOBILE.png',fullPage:true,animations:'disabled'});
  await page.getByRole('button',{name:'Скрыть маленькую реакцию'}).click();await page.setViewportSize({width:785,height:600});
  await cat.click();await expect(page.getByRole('status')).toContainText('пришла к нему');expect(await stored(page)).toBe(raw);
  await page.getByRole('button',{name:'Дальше',exact:false}).click();await expect(page.getByLabel('Маленькая реакция',{exact:true})).toHaveCount(0);
  const result=JSON.parse((await stored(page))!);expect(result.collection.achievements).not.toContain('cat-supervisor');expect(errors).toEqual([]);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});

test('one cookie per chapter visit is cosmetic, survives pause and is keyboard accessible with reduced motion',async({page,context})=>{
  await page.setViewportSize({width:785,height:600});await page.emulateMedia({reducedMotion:'reduce'});const errors=await open(page,thirdAt(),3);
  const cookie=page.getByRole('button',{name:'Взять печеньку'});await expect(cookie).toBeVisible();const raw=await stored(page);
  const before=await cookie.locator('svg circle').count();await cookie.focus();await page.keyboard.press('Enter');
  await expect(page.getByRole('status')).toContainText('план был дожить до начала игры');await expect(cookie).toBeDisabled();expect(await cookie.locator('svg circle').count()).toBeLessThan(before);expect(await stored(page)).toBe(raw);
  expect(await page.locator('.cookie-crumbs').evaluate(el=>getComputedStyle(el).display)).toBe('none');
  await page.screenshot({path:'outputs/EASTER_COOKIE_PREVIEW.png',fullPage:true,animations:'disabled'});
  await page.getByRole('button',{name:'Скрыть маленькую реакцию'}).click();await expect(page.getByRole('button',{name:'Потрогать кудри Влада'})).toBeFocused();
  await page.getByRole('button',{name:'Дальше',exact:false}).click();await expect(cookie).toBeDisabled();expect(errors).toEqual([]);
  await page.getByRole('button',{name:'Открыть меню',exact:true}).click();await page.getByRole('button',{name:'Вернуться к истории'}).click();await expect(cookie).toBeDisabled();
  const reopened=await context.newPage();await reopened.setViewportSize({width:320,height:568});await open(reopened,JSON.parse(raw!),3);
  const freshCookie=reopened.getByRole('button',{name:'Взять печеньку'});await expect(freshCookie).toBeEnabled();await freshCookie.click();
  const note=await reopened.getByLabel('Маленькая реакция',{exact:true}).boundingBox(),plate=await freshCookie.boundingBox();expect(note!.y+note!.height).toBeLessThanOrEqual(plate!.y);
  await reopened.screenshot({path:'outputs/EASTER_COOKIE_MOBILE.png',fullPage:true,animations:'disabled'});
});

test('two cookies remain after finishing the kitchen, while an untouched plate still has three after skipping it',async({page,context})=>{
  await page.setViewportSize({width:320,height:568});const errors=await open(page,thirdAt('c3.tutorial'),3);
  const cookie=page.getByRole('button',{name:'Взять печеньку'});await cookie.click();const remaining=await cookie.locator('svg circle').count();
  for(let i=0;i<8&&!await page.locator('[data-node="c3.kitchen"]').count();i++)await page.getByRole('button',{name:'Дальше',exact:false}).click();
  await expect(page.locator('.kitchen-game')).toBeVisible();await expect(page.locator('.scene-easter')).toHaveCount(0);
  for(const ingredient of ['Хлеб','Томат']){
    await page.getByRole('button',{name:ingredient,exact:true}).click();await page.getByRole('button',{name:'Передать Владу',exact:true}).click();await page.getByRole('button',{name:'Подать',exact:true}).click();
  }
  await page.getByRole('button',{name:'Готовить без таймера',exact:true}).click();
  for(let round=0;round<3;round++){
    await page.getByRole('button',{name:'Закончить раунд',exact:true}).click();
    if(round<2)await page.getByRole('button',{name:'Следующий раунд',exact:true}).click();
  }
  await page.getByRole('button',{name:'Закончить игру',exact:false}).click();
  await expect(page.locator('[data-node="c3.debrief.chaos"]')).toBeVisible();await expect(cookie).toBeDisabled();expect(await cookie.locator('svg circle').count()).toBe(remaining);
  await page.screenshot({path:'outputs/COOKIE_AFTER_KITCHEN.png',fullPage:true,animations:'disabled'});
  const clean=await context.newPage();await open(clean,thirdAt('c3.tutorial'),3);
  const untouched=clean.getByRole('button',{name:'Взять печеньку'});const original=await untouched.locator('svg circle').count();expect(original).toBeGreaterThan(remaining);
  for(let i=0;i<8&&!await clean.locator('[data-node="c3.kitchen"]').count();i++)await clean.getByRole('button',{name:'Дальше',exact:false}).click();
  await clean.getByRole('button',{name:'Продолжить историю без кухни',exact:true}).click();await expect(untouched).toBeEnabled();expect(await untouched.locator('svg circle').count()).toBe(original);expect(errors).toEqual([]);
});

test('scene eggs leave minigames, controller props and pause controls alone',async({page,context})=>{
  const search=await open(page,firstAt('c1.search'));await expect(page.locator('.search-game')).toBeVisible();await expect(page.locator('.scene-easter')).toHaveCount(0);expect(search).toEqual([]);
  const dead=await context.newPage();await open(dead,thirdAt('c3.pad.dead'),3);await expect(dead.locator('.controller-scene')).toBeVisible();await expect(dead.getByRole('button',{name:'Взять печеньку'})).toHaveCount(0);
  await dead.getByRole('button',{name:'Потрогать кудри Влада'}).click();await dead.getByRole('button',{name:'Открыть меню',exact:true}).click();await expect(dead.getByRole('heading',{name:'Маленькая пауза'})).toBeVisible();await expect(dead.locator('.scene-easter')).toHaveCount(0);
  await dead.getByRole('button',{name:'Вернуться к истории'}).click();await expect(dead.getByLabel('Маленькая реакция',{exact:true})).toHaveCount(0);
  const kitchen=await context.newPage();await open(kitchen,thirdAt('c3.kitchen'),3);await expect(kitchen.locator('.kitchen-game')).toBeVisible();await expect(kitchen.locator('.scene-easter')).toHaveCount(0);
});
