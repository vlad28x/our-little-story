import {test,expect} from '@playwright/test';
import {photoAt,finishPhotoSix} from './photo6Helpers';
import {galleryAt,finishGallery} from './gallery7Helpers';
import {parseSave} from '../src/persistence/validateSave';
const key=`five-meetings:${process.env.VITE_BASE_PATH||'/'}:save`;
test('new six reloads its first choice without status question and preserves exact count',async({page})=>{
 const save=photoAt('c6.photo.roll',{place:'upper',subject:'her'});await page.addInitScript(({key,save})=>{if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(save));},{key,save});await page.goto('./#/play/6');await expect(page.locator('.photo-camera')).toContainText('26');await expect(page.locator('.scene-background')).toHaveAttribute('src',/photo6-upper.webp$/);await page.getByRole('button',{name:'Дальше',exact:false}).click();await page.reload();await expect(page.locator('.photo-camera')).toContainText('25');await expect(page.getByRole('button',{name:'Вернуться к выбору',exact:true})).toHaveCount(0);
});
test('served gallery assets load under configured base; reload retains gift and film and later old scripts cannot open',async({page})=>{
 const save=galleryAt('c7.gallery.film',{gift:'blue',frame:'both'}),errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));await page.addInitScript(({key,save})=>{if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(save));},{key,save});await page.goto('./#/play/7');await page.reload();await expect(page.locator('.photo-camera')).toContainText('20');await expect.poll(()=>page.locator('.scene-background').evaluate((im:HTMLImageElement)=>im.naturalWidth)).toBe(1000);
 for(const f of ['backgrounds/gallery7-hall.webp','backgrounds/gallery7-outside.webp','gallery7/row.webp','gallery7/chip.webp','gallery7/blue.webp'])expect((await page.request.get(`./assets/${f}`)).ok()).toBe(true);
 const s=parseSave((await page.evaluate(k=>localStorage.getItem(k),key))!);expect(s.campaign.active?.story.c7GalleryGift).toBe('blue');await page.goto('./#/play/8');await expect(page.locator('[data-node]')).toHaveCount(0);expect(errors).toEqual([]);
});
test('completed sixth and seventh show authored cards and preserve no-touch continuation',async({page})=>{
 const six=finishPhotoSix(undefined,{gesture:'none',place:'water'}),seven=finishGallery(six,{route:'apart',gift:'none',farewell:'words'});await page.addInitScript(({key,seven})=>{if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(seven));},{key,seven});await page.goto('./#/result/6');await expect(page.locator('.postcard h1')).toHaveText('Пока светло');await expect(page.getByText('Первый кадр нашёлся у воды. Двадцать один ещё впереди.',{exact:true})).toBeVisible();await page.goto('./#/result/7');await page.reload();await expect(page.locator('.postcard h1')).toHaveText('На шаг левее');await expect(page.getByText('В одном зале уместились две экскурсии. Каждый привёл другого к своей находке.',{exact:true})).toBeVisible();
});
