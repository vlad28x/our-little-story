import {test,expect} from '@playwright/test';
import {r3At,finishR3} from './r3Helpers';
import type {EpisodeChapter} from '../src/engine/types';
const base=process.env.VITE_BASE_PATH||'/',key='five-meetings:'+base+':save';
test('production serves R3 portraits, note and morning under the configured base and survives reload',async({context})=>{
 const scenes:[EpisodeChapter,string,Parameters<typeof r3At>[2]][]=[
 [6,'c6.r3.note',{}],[7,'c7.r3.aside.other',{}],
 [8,'c8.r3.hoodie',{choices:{'c8.r3.place':'home'}}],
 [9,'c9.r3.setup',{}],
 [10,'c10.r3.morning.intro',{choices:{'c10.r3.ending.home':'overnight','c10.r3.night':'hug'}}]];
 for(const [chapter,node,path] of scenes){
  const page=await context.newPage(),errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  const raw=JSON.stringify(r3At(chapter,node,path));
  await page.addInitScript(({key,raw})=>{if(window.name!=='r3-fixture'){localStorage.setItem(key,raw);window.name='r3-fixture';}},{key,raw});
  await page.goto('./#/play/'+chapter);await expect(page.locator('[data-node="'+node+'"]')).toBeVisible();
  await expect.poll(()=>page.locator('.scene-background').evaluate(el=>(el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  await expect(page.locator('.art-error')).toHaveCount(0);await page.reload();await expect(page.locator('[data-node="'+node+'"]')).toBeVisible();expect(errors).toEqual([]);await page.close();
 }
});
test('overnight result retains morning and no chapter11 appears',async({page})=>{
 const raw=JSON.stringify(finishR3(10,{choices:{'c10.r3.ending.home':'overnight','c10.r3.night':'talk'}}));
 await page.addInitScript(({key,raw})=>localStorage.setItem(key,raw),{key,raw});
 await page.goto('./#/result/10?source=campaign');await expect(page.getByRole('heading',{name:'До утра',exact:true})).toBeVisible();
 await expect(page.locator('.postcard-art')).toHaveCSS('background-image',/s2-kitchen-morning.webp/);
 await expect(page.getByRole('button',{name:/К следующей встрече/})).toHaveCount(0);
});
