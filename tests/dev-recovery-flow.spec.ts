import { test,expect,type Page } from '@playwright/test';
import { finishArc } from './finalArcHelpers';
import { finishFive } from './chapter5Helpers';
import { parseSave } from '../src/persistence/validateSave';
import oldEight from './fixtures/r1/eight.json' with {type:'json'};
import oldR2 from './fixtures/r2/8.json' with {type:'json'};
const key='five-meetings:/:dev:save',ordinary='five-meetings:/:save';
async function seed(page:Page){
 const old=finishArc(8);delete old.campaign.records[8]!.story.c8Dance;const raw=JSON.stringify(old),normal=JSON.stringify(finishFive());
 await page.addInitScript(({key,ordinary,raw,normal})=>{
  if(!localStorage.getItem(key)){localStorage.setItem(key,raw);localStorage.setItem(key.replace(':save',':backup'),raw);}
  if(!localStorage.getItem(ordinary)){localStorage.setItem(ordinary,normal);localStorage.setItem(ordinary.replace(':save',':backup'),normal);}
 },{key,ordinary,raw,normal});
 await page.goto('./?dev=1#/chapters');return {raw,normal};
}
test('an obsolete sandbox can restart chapter eight, persist and reload without touching the ordinary story',async({page})=>{
 const {raw,normal}=await seed(page);await expect(page.getByRole('heading',{name:'Тестовый прогресс устарел'})).toBeVisible();
 expect(await page.evaluate(k=>localStorage.getItem(k),key)).toBe(raw);expect(await page.evaluate(k=>localStorage.getItem(k.replace(':save',':backup')),key)).toBe(raw);
 await page.evaluate(()=>window.dispatchEvent(new Event('focus')));await expect(page.getByRole('dialog')).toHaveCount(0);
 await page.getByRole('button',{name:'Открыть восьмую встречу',exact:true}).click();await expect(page.locator('[data-node="c8.r3.entry"]')).toBeVisible();
 await expect.poll(()=>page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).campaign.active?.chapter,key)).toBe(8);
 const restored=parseSave((await page.evaluate(k=>localStorage.getItem(k),key))!);await page.reload();await expect(page.locator('[data-node="c8.r3.entry"]')).toBeVisible();
 expect(parseSave((await page.evaluate(k=>localStorage.getItem(k),key))!)).toEqual(restored);
 expect(await page.evaluate(k=>localStorage.getItem(k),ordinary)).toBe(normal);expect(await page.evaluate(k=>localStorage.getItem(k.replace(':save',':backup')),ordinary)).toBe(normal);
 await page.getByRole('button',{name:'Открыть меню',exact:true}).click();await page.getByRole('dialog').getByRole('button',{name:'После титров',exact:true}).click();
 await expect(page.locator('.season-tabs button').nth(1)).toHaveAttribute('aria-pressed','true');await expect(page.locator('.chapter-list li')).toHaveCount(5);
});
test('all second-season recovery shortcuts create valid playable checkpoints',async({context})=>{
 for(const chapter of [6,7,9,10]){
  const page=await context.newPage();await seed(page);await page.getByRole('button',{name:`Открыть встречу ${chapter}`,exact:true}).click();
  await expect(page.locator(`[data-node="c${chapter}.r3.entry"]`)).toBeVisible();await expect.poll(()=>page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).campaign.active?.chapter,key)).toBe(chapter);
  expect(parseSave((await page.evaluate(k=>localStorage.getItem(k),key))!).campaign.active?.chapter).toBe(chapter);await page.reload();await expect(page.locator(`[data-node="c${chapter}.r3.entry"]`)).toBeVisible();
  await page.evaluate(k=>{localStorage.removeItem(k);localStorage.removeItem(k.replace(':save',':backup'));},key);await page.close();
 }
});
test('the recovery screen can return to the independent ordinary game',async({page})=>{
 const {raw,normal}=await seed(page);await page.getByRole('button',{name:'Вернуться к обычной игре',exact:true}).click();
 await expect(page.getByRole('heading',{name:'Каждая встреча — маленькая история',exact:true})).toBeVisible();await expect(page.locator('.dev-banner')).toHaveCount(0);
 expect(await page.evaluate(k=>localStorage.getItem(k),key)).toBe(raw);expect(await page.evaluate(k=>localStorage.getItem(k),ordinary)).toBe(normal);
});
test('a valid R1 sandbox also offers explicit recovery instead of a blocked preview map',async({page})=>{
 const raw=JSON.stringify(oldEight),normal=JSON.stringify(finishFive());
 await page.addInitScript(({key,ordinary,raw,normal})=>{if(!localStorage.getItem(key))localStorage.setItem(key,raw);if(!localStorage.getItem(ordinary))localStorage.setItem(ordinary,normal);},{key,ordinary,raw,normal});
 await page.goto('./?dev=1#/chapters');await expect(page.getByRole('heading',{name:'Тестовый прогресс устарел'})).toBeVisible();expect(await page.evaluate(k=>localStorage.getItem(k),key)).toBe(raw);
 await page.getByRole('button',{name:'Открыть встречу 6',exact:true}).click();await expect(page.locator('[data-node="c6.r3.entry"]')).toBeVisible();await expect.poll(()=>page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).contentVersion,key)).toBe(12);
 expect(await page.evaluate(k=>localStorage.getItem(k),ordinary)).toBe(normal);
});
test('a valid R2 sandbox can explicitly open R3 and retains its own original backup',async({page})=>{
 const raw=JSON.stringify(oldR2),normal=JSON.stringify(finishFive());
 await page.addInitScript(({key,ordinary,raw,normal})=>{localStorage.setItem(key,raw);localStorage.setItem(ordinary,normal);},{key,ordinary,raw,normal});
 await page.goto('./?dev=1#/chapters');
 await expect(page.getByRole('heading',{name:'Тестовый прогресс устарел'})).toBeVisible();
 await page.getByRole('button',{name:'Открыть встречу 6',exact:true}).click();
 await expect(page.locator('[data-node="c6.r3.entry"]')).toBeVisible();
 expect(await page.evaluate(k=>localStorage.getItem(k+':legacy-r2'),key)).toBe(raw);
 expect(await page.evaluate(k=>localStorage.getItem(k),ordinary)).toBe(normal);
});
