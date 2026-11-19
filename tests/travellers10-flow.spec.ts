import {test,expect} from '@playwright/test';
import {travellersAt,finishTravellers} from './travellers10Helpers';
import {parseSave} from '../src/persistence/validateSave';
const key=`five-meetings:${process.env.VITE_BASE_PATH||'/'}:save`;

test('Pages base loads night art and reloads a committed crossing exactly once',async({page})=>{
 const save=travellersAt('c10.travellers.ford'),errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript(({key,save})=>{if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(save));},{key,save});
 await page.goto('./#/play/10');await expect(page.locator('.traveller-status')).toContainText('5 / 5');
 await page.getByRole('button',{name:/^Дальше/}).click();await expect(page.locator('.traveller-status')).toContainText('3 / 5');
 await page.reload();await expect(page.locator('[data-node="c10.travellers.ford"]')).toBeVisible();await expect(page.locator('.traveller-status')).toContainText('3 / 5');
 await expect.poll(()=>page.locator('.scene-background').evaluate((im:HTMLImageElement)=>im.naturalWidth>0)).toBe(true);
 await expect(page.locator('.scene-background')).toHaveAttribute('src',`${process.env.VITE_BASE_PATH||'/'}assets/backgrounds/travellers10-cafe-night.webp`);
 const stored=parseSave((await page.evaluate(k=>localStorage.getItem(k),key))!);expect(stored.campaign.active?.story.c10River).toBe('ford');expect(stored.campaign.records).toEqual(save.campaign.records);
 expect(errors).toEqual([]);
});

test('Pages invitation preserves both answers on reload and archive hides controls',async({page})=>{
 const save=finishTravellers({continuation:'home',tender:'near',finale:'private'});save.continuation='movie';
 await page.addInitScript(({key,save})=>{if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(save));},{key,save});
 await page.goto('./#/result/10');await page.getByRole('button',{name:/Готовка вдвоём/}).click();
 await page.reload();await expect(page.getByRole('button',{name:/Готовка вдвоём/})).toHaveAttribute('aria-pressed','true');
 const stored=parseSave((await page.evaluate(k=>localStorage.getItem(k),key))!);expect(stored.continuation).toBe('movie');expect(stored.continuation10).toBe('cook');
 await page.goto('./#/result/10?card=c10.travellers');await expect(page.locator('.travellers-invitation')).toHaveCount(0);await expect(page.locator('.postcard-copy')).toContainText('Утром на столе рядом с двумя чашками остался конверт с фотографиями.');
});
