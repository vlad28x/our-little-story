import { test,expect } from '@playwright/test';
import { openOffline } from './offlineApp';
import { initialState } from '../src/state/initialState';
import { reduceSave } from '../src/state/reducer';
import { legacyCloudData } from './legacySave';
const key='five-meetings:/:telegram:our_little_story_game_bot:42:save';

test('startup requests fullscreen once; notch, Telegram controls and landscape insets keep content and dialogs usable',async({page})=>{
  await page.setViewportSize({width:390,height:844});const save=reduceSave(initialState(),{type:'start'}),errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  await openOffline(page,initialState(),'/play/1',{seedBrowser:false,telegram:{id:42,data:legacyCloudData(save),presentation:{fullscreen:'success'}}});
  await expect(page.locator('[data-node="c1.entry"]')).toBeVisible();await expect(page.locator('.telegram-sync')).toContainText('История сохранена в Telegram');
  expect(await page.evaluate(()=>(window as unknown as {testCloud:{presentation:{fullscreenCalls:number;expandCalls:number}}}).testCloud.presentation)).toMatchObject({fullscreenCalls:1,expandCalls:1});
  expect((await page.locator('.topbar').boundingBox())!.y).toBeGreaterThanOrEqual(103);
  await page.getByRole('button',{name:'Открыть меню',exact:true}).click();const modal=page.getByRole('dialog',{name:'Маленькая пауза',exact:true});let box=(await modal.boundingBox())!;expect(box.y).toBeGreaterThanOrEqual(103);expect(box.y+box.height).toBeLessThanOrEqual(810);
  await page.screenshot({path:'outputs/TELEGRAM_FULLSCREEN_SAFE_AREA.png',fullPage:false,animations:'disabled'});
  await page.setViewportSize({width:844,height:390});await page.evaluate(()=>{const s=document.documentElement.style;s.setProperty('--tg-safe-area-inset-top','0px');s.setProperty('--tg-content-safe-area-inset-top','40px');s.setProperty('--tg-safe-area-inset-left','47px');s.setProperty('--tg-safe-area-inset-right','47px');s.setProperty('--tg-safe-area-inset-bottom','21px');});
  box=(await modal.boundingBox())!;expect(box.x).toBeGreaterThanOrEqual(47);expect(box.y).toBeGreaterThanOrEqual(40);expect(box.y+box.height).toBeLessThanOrEqual(369);expect(box.x+box.width).toBeLessThanOrEqual(797);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await modal.getByRole('button',{name:'Закрыть',exact:true}).click();expect(JSON.parse((await page.evaluate(k=>localStorage.getItem(k),key))!)).toEqual(save);expect(errors).toEqual([]);
});

for(const scenario of [{version:'7.10',fullscreen:'success',calls:0,expand:1},{version:'9.0',fullscreen:'throws',calls:1,expand:2},{version:'9.0',fullscreen:'failed',calls:1,expand:2},{version:'9.0',fullscreen:'already',calls:0,expand:1}] as const){
  test(`fullscreen ${scenario.fullscreen} on ${scenario.version} does not block restoring and playing`,async({page})=>{
    const save=reduceSave(initialState(),{type:'start'}),errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
    await openOffline(page,initialState(),'/play/1',{seedBrowser:false,telegram:{id:42,data:legacyCloudData(save),presentation:{fullscreen:scenario.fullscreen,version:scenario.version}}});
    await expect(page.locator('[data-node="c1.entry"]')).toBeVisible();await expect(page.locator('.telegram-sync')).toContainText('История сохранена в Telegram');
    const presentation=await page.evaluate(()=>(window as unknown as {testCloud:{presentation:{fullscreenCalls?:number;expandCalls:number}}}).testCloud.presentation);expect(presentation.fullscreenCalls??0).toBe(scenario.calls);expect(presentation.expandCalls).toBe(scenario.expand);
    await page.getByRole('button',{name:/Дальше/}).click();await expect(page.locator('.telegram-sync')).toContainText('История сохранена в Telegram');const after=JSON.parse((await page.evaluate(k=>localStorage.getItem(k),key))!);expect(after.campaign.active.turn).toBe(save.campaign.active!.turn+1);expect(errors).toEqual([]);
  });
}
