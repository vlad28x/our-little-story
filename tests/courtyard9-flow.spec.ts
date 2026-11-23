import {test,expect} from '@playwright/test';
import {courtyardAt,finishCourtyard} from './courtyard9Helpers';
import {parseSave} from '../src/persistence/validateSave';
const key=`five-meetings:${process.env.VITE_BASE_PATH||'/'}:save`;

test('served shutter and reload retain the selected frame, real invitation and previous eight records',async({page})=>{
 const save=courtyardAt('c9.courtyard.frameVlad',{frame:'vlad'});save.continuation='decline';const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript(({key,save})=>{if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(save));},{key,save});
 await page.goto('./#/play/9');await expect(page.locator('.photo-camera strong')).toHaveText('3');
 for(let i=0;i<4;i++)await page.getByRole('button',{name:'Дальше',exact:false}).click();
 await page.reload();await expect(page.locator('.photo-camera strong')).toHaveText('2');
 const stored=parseSave((await page.evaluate(k=>localStorage.getItem(k),key))!);expect(stored.campaign.active?.story).toMatchObject({c9Frame:'vlad',c9Film:'key'});expect(stored.campaign.records).toEqual(save.campaign.records);expect(stored.continuation).toBe('decline');
 await expect.poll(()=>page.locator('.scene-background').evaluate((im:HTMLImageElement)=>im.naturalWidth>0)).toBe(true);expect(errors).toEqual([]);
});

test('served ninth postcard reloads the actual rain route without film or photo spoilers',async({page})=>{
 const save=finishCourtyard(undefined,{rain:'leave',goodbye:'words'});
 await page.addInitScript(({key,save})=>{if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(save));},{key,save});
 await page.goto('./#/result/9');await page.reload();await expect(page.getByRole('heading',{name:'С крышей разберёмся',exact:true})).toBeVisible();
 await expect(page.locator('.postcard-copy')).toContainText('полку книг');await expect(page.locator('.postcard-art')).toHaveCSS('background-image',/courtyard9-open-v2.webp/);
 expect(parseSave((await page.evaluate(k=>localStorage.getItem(k),key))!).campaign).toEqual(save.campaign);
});
