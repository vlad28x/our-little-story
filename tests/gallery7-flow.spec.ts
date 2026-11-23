import {test,expect} from '@playwright/test';
import {photoAt,finishPhotoSix} from './photo6Helpers';
import {galleryAt,finishGallery} from './gallery7Helpers';
import {parseSave} from '../src/persistence/validateSave';
const key=`five-meetings:${process.env.VITE_BASE_PATH||'/'}:save`;

test('shortened gallery shows the matching works, both choices reload and the gift menu stays available',async({browser,baseURL})=>{
 for(const route of ['together','apart'] as const)for(const work of ['blue','chip'] as const){
  const context=await browser.newContext({baseURL,viewport:{width:390,height:844}}),page=await context.newPage();
  const save=galleryAt('c7.gallery.route',{route,work});
  await page.addInitScript(({key,save})=>{if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(save));},{key,save});
  await page.goto('./#/play/7');
  await page.locator('.choices button').nth(route==='together'?0:1).click();
  let advances=0;
  while(await page.locator('[data-node]').getAttribute('data-node')!=='c7.gallery.pick'){
   const current=parseSave((await page.evaluate(k=>localStorage.getItem(k),key))!).campaign.active!;
   const expected=route==='together'?(current.lineIndex<2?'row':current.lineIndex<7?'chip':'blue'):(current.lineIndex===4||current.lineIndex===5?'blue':null);
   if(expected){await expect(page.locator('.gallery-art img')).toHaveAttribute('src',new RegExp(`gallery7/${expected==='chip'?'chip-light-notch':expected}\\.webp$`));await expect.poll(()=>page.locator('.gallery-art img').evaluate((im:HTMLImageElement)=>im.naturalWidth)).toBeGreaterThan(0);}
   await page.getByRole('button',{name:'Дальше',exact:false}).click();expect(++advances).toBeLessThan(15);
  }
  await page.locator('.choices button').nth(work==='blue'?0:1).click();await page.reload();
  await expect(page.locator(`.gallery-art-${work} img`)).toBeVisible();
  await page.screenshot({path:`work/GALLERY7_SHORT_${route}_${work}_390.png`,animations:'disabled'});
  advances=0;
  while(await page.locator('[data-node]').getAttribute('data-node')!=='c7.gallery.card'){
   await page.getByRole('button',{name:'Дальше',exact:false}).click();expect(++advances).toBeLessThan(40);
  }
  await expect(page.locator('.choices button')).toHaveCount(3);await expect(page.locator('.gallery-art-cards img')).toHaveCount(2);
  expect((await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth))).toBe(true);await context.close();
 }
});
test('new six reloads its first choice without status question and preserves exact count',async({page})=>{
 const save=photoAt('c6.photo.roll',{place:'upper',subject:'her'});await page.addInitScript(({key,save})=>{if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(save));},{key,save});await page.goto('./#/play/6');await expect(page.locator('.photo-camera strong')).toHaveText('11');await expect(page.locator('.scene-background')).toHaveAttribute('src',/photo6-upper.webp$/);await page.getByRole('button',{name:'Дальше',exact:false}).click();await page.reload();await expect(page.locator('.photo-camera strong')).toHaveText('10');await expect(page.getByRole('button',{name:'Вернуться к выбору',exact:true})).toHaveCount(0);
});
test('served gallery assets load under configured base; reload retains gift and film and later old scripts cannot open',async({page})=>{
 const save=galleryAt('c7.gallery.film',{gift:'blue',frame:'both'}),errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));await page.addInitScript(({key,save})=>{if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(save));},{key,save});await page.goto('./#/play/7');await page.reload();await expect(page.locator('.photo-camera strong')).toHaveText('8');await expect.poll(()=>page.locator('.scene-background').evaluate((im:HTMLImageElement)=>im.naturalWidth)).toBe(1000);
 for(const f of ['backgrounds/gallery7-hall-light-notch.webp','backgrounds/gallery7-outside.webp','gallery7/row.webp','gallery7/chip-light-notch.webp','gallery7/blue.webp'])expect((await page.request.get(`./assets/${f}`)).ok()).toBe(true);
 const s=parseSave((await page.evaluate(k=>localStorage.getItem(k),key))!);expect(s.campaign.active?.story.c7GalleryGift).toBe('blue');await page.goto('./#/play/8');await expect(page.locator('[data-node]')).toHaveCount(0);expect(errors).toEqual([]);
});
test('completed sixth and seventh show authored cards and preserve no-touch continuation',async({page})=>{
 const six=finishPhotoSix(undefined,{gesture:'none',place:'water'}),seven=finishGallery(six,{route:'apart',gift:'none',farewell:'words'});await page.addInitScript(({key,seven})=>{if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(seven));},{key,seven});await page.goto('./#/result/6');await expect(page.locator('.postcard h1')).toHaveText('Пока светло');await expect(page.getByText('Первый кадр нашёлся у воды. Девять ещё впереди.',{exact:true})).toBeVisible();await page.goto('./#/result/7');await page.reload();await expect(page.locator('.postcard h1')).toHaveText('На шаг левее');await expect(page.getByText('В одном зале уместились две экскурсии. Каждый привёл другого к своей находке.',{exact:true})).toBeVisible();
});
