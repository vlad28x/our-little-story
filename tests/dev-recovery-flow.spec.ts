import { CONTENT_VERSION } from '../src/content/version';
import {test,expect} from '@playwright/test';
import {finishFive} from './chapter5Helpers';
import {parseSave} from '../src/persistence/validateSave';
import old from './fixtures/r1/eight.json' with {type:'json'};
const key='five-meetings:/:dev:save',ordinary='five-meetings:/:save';
test('gallery preview starts after a synthetic no-touch walk without altering ordinary progress',async({page})=>{const normal=JSON.stringify(finishFive());await page.addInitScript(({ordinary,normal})=>localStorage.setItem(ordinary,normal),{ordinary,normal});await page.goto('./?dev=1#/chapters');await page.getByText('Тестовые сцены',{exact:true}).click();await page.getByRole('button',{name:'Тест: начать седьмую встречу',exact:true}).click();await expect(page.locator('[data-node="c7.gallery.entry"]')).toBeVisible();await expect(page.locator('.topbar-caption')).toContainText('На шаг левее');const save=parseSave((await page.evaluate(k=>localStorage.getItem(k),key))!);expect(save.campaign.records[6]?.story.c6Gesture).toBe('none');expect(save.campaign.active?.story.s2Direction).toBeUndefined();expect(await page.evaluate(k=>localStorage.getItem(k),ordinary)).toBe(normal);});
test('first-five and photo-six previews stay separate from ordinary history',async({page})=>{const normal=JSON.stringify(finishFive());await page.addInitScript(({ordinary,normal})=>localStorage.setItem(ordinary,normal),{ordinary,normal});for(const id of ['c3.walk','c3.stars','c3.honest','c3.goodbye.end','c5.return','c5.drink.first','c5.drink.recommend','c5.album','c5.letter','c5.close','c6.photo.place','c6.photo.subject','c6.photo.touch']){await page.goto('./?dev=1#/chapters');await page.getByText('Тестовые сцены',{exact:true}).click();await page.getByRole('button',{name:id,exact:true}).click();await expect(page.locator(`[data-node="${id}"]`)).toBeVisible();const s=parseSave((await page.evaluate(k=>localStorage.getItem(k),key))!);expect(s.contentVersion).toBe(CONTENT_VERSION);expect(await page.evaluate(k=>localStorage.getItem(k),ordinary)).toBe(normal);}});
test('old sandbox second season resets to preserved first-five and can start new six',async({page})=>{const normal=JSON.stringify(finishFive()),raw=JSON.stringify(old);await page.addInitScript(({key,ordinary,raw,normal})=>{localStorage.setItem(key,raw);localStorage.setItem(ordinary,normal);},{key,ordinary,raw,normal});await page.goto('./?dev=1#/chapters');await page.getByText('Тестовые сцены',{exact:true}).click();await page.getByRole('button',{name:'Тест: начать шестую встречу',exact:true}).click();await expect(page.locator('[data-node="c6.photo.entry"]')).toBeVisible();expect(await page.evaluate(k=>localStorage.getItem(k),ordinary)).toBe(normal);expect(parseSave((await page.evaluate(k=>localStorage.getItem(k),key))!).campaign.completed).toEqual([1,2,3,4,5]);});

test('eighth preview uses a synthetic completed gallery and never changes ordinary save',async({page})=>{const normal=JSON.stringify(finishFive());await page.addInitScript(({ordinary,normal})=>localStorage.setItem(ordinary,normal),{ordinary,normal});await page.goto('./?dev=1#/chapters');await page.getByText('Тестовые сцены',{exact:true}).click();await page.getByRole('button',{name:'Тест: начать восьмую встречу',exact:true}).click();await expect(page.locator('[data-node="c8.supper.entry"]')).toBeVisible();const s=parseSave((await page.evaluate(k=>localStorage.getItem(k),key))!);expect(s.campaign.completed).toEqual([1,2,3,4,5,6,7]);expect(await page.evaluate(k=>localStorage.getItem(k),ordinary)).toBe(normal);});

test('ninth preview and its rain checkpoints use only the sandbox, preserving ordinary history byte for byte',async({page})=>{
 const normal=JSON.stringify(finishFive());await page.addInitScript(({ordinary,normal})=>localStorage.setItem(ordinary,normal),{ordinary,normal});
 for(const target of ['entry','rainChoice','betChoice','earlyWalk','goodbyeChoice']){
  await page.goto('./?dev=1#/chapters');await page.getByText('Тестовые сцены',{exact:true}).click();
  await page.getByRole('button',{name:target==='entry'?'Тест: начать девятую встречу':`c9.courtyard.${target}`,exact:true}).click();
  await expect(page.locator(`[data-node="c9.courtyard.${target}"]`)).toBeVisible();const s=parseSave((await page.evaluate(k=>localStorage.getItem(k),key))!);
  expect(s.campaign.completed).toEqual([1,2,3,4,5,6,7,8]);expect(s.campaign.active?.story.c8Hoodie).toBe('borrowed');expect(await page.evaluate(k=>localStorage.getItem(k),ordinary)).toBe(normal);
 }
});


test('tenth preview checkpoints keep the real first-season copy byte for byte',async({page})=>{
 const normal=JSON.stringify(finishFive());await page.addInitScript(({ordinary,normal})=>localStorage.setItem(ordinary,normal),{ordinary,normal});
 for(const target of ['entry','prints','riverChoice','catChoice','upperNight','homeChoice','sleep','homeKissFirstChoice','homeKissFirstNeck','homeKissFirstSoft']){
  await page.goto('./?dev=1#/chapters');await page.getByText('Тестовые сцены',{exact:true}).click();
  await page.getByRole('button',{name:target==='entry'?'Тест: начать десятую встречу':`c10.travellers.${target}`,exact:true}).click();
  await expect(page.locator(`[data-node="c10.travellers.${target}"]`)).toBeVisible();
  const s=parseSave((await page.evaluate(k=>localStorage.getItem(k),key))!);expect(s.campaign.completed).toEqual([1,2,3,4,5,6,7,8,9]);
  expect(await page.evaluate(k=>localStorage.getItem(k),ordinary)).toBe(normal);
 }
});
