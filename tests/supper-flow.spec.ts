import {test,expect} from '@playwright/test';
import {supperAt,supperCommand} from './supperHelpers';
import {finishGallery} from './gallery7Helpers';
import {parseSave} from '../src/persistence/validateSave';
import {reduceSave} from '../src/state/reducer';
import {photoAt,photoCommand} from './photo6Helpers';
import {chapter8} from '../src/content/chapters/ch08';
const key=`five-meetings:${process.env.VITE_BASE_PATH||'/'}:save`;
test('served eighth reloads food and shutter without overwriting the first seven',async({page})=>{
 const save=supperAt('c8.supper.foodClick',{filling:'mushroom',shape:'open',frame:'foodHer'}),errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript(({key,save})=>{if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(save));},{key,save});
 await page.goto('./#/play/8');await expect(page.locator('.photo-camera strong')).toHaveText('6');
 for(let i=0;i<2;i++)await page.locator('.dialogue-content .next-button').click();
 await page.reload();await expect(page.locator('.photo-camera strong')).toHaveText('5');
 const stored=parseSave((await page.evaluate(k=>localStorage.getItem(k),key))!);expect(stored.campaign.active?.story).toMatchObject({c8Filling:'mushroom',c8Shape:'open',c8Film:'key'});expect(stored.campaign.records).toEqual(save.campaign.records);
 await expect.poll(()=>page.locator('.scene-background').evaluate((im:HTMLImageElement)=>im.naturalWidth>0)).toBe(true);
 expect(errors).toEqual([]);
});

for(const gesture of ['hand','hug','none'] as const)test(`served sixth goodbye remembers ${gesture} after reload`,async({page})=>{
 let save=photoAt('c6.photo.goodbye',{gesture});
 while(save.campaign.active!.lineIndex!==4)save=reduceSave(save,{type:'command',target:'campaign',command:photoCommand(save.campaign.active!,{gesture})});
 await page.addInitScript(({key,save})=>{if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(save));},{key,save});
 await page.goto('./#/play/6');await page.reload();
 const text=gesture==='hand'?'Влад коротко сжимает твои пальцы':gesture==='hug'?'накрывает твою руку своей':'Ты машешь ему на прощание';
 await expect(page.locator('.dialogue-text')).toContainText(text);
 expect(parseSave((await page.evaluate(k=>localStorage.getItem(k),key))!).campaign.records).toEqual(save.campaign.records);
});

for(const kiss of [false,true])test(`served eighth goodbye preserves actual kiss=${kiss} after reload`,async({page})=>{
 let save=supperAt('c8.supper.courtyard',{kiss,step:'sit'},kiss?finishGallery(undefined,{farewell:'cheek'}):undefined);
 const node=chapter8.nodes['c8.supper.courtyard'];if(node.kind!=='dialogue')throw Error('Missing goodbye');
 while(save.campaign.active!.lineIndex!==node.lines.length-1)save=reduceSave(save,{type:'command',target:'campaign',command:supperCommand(save.campaign.active!,{kiss,step:'sit'})});
 await page.addInitScript(({key,save})=>{if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(save));},{key,save});
 await page.goto('./#/play/8');await page.reload();
 await expect(page.locator('.dialogue-text')).toContainText(kiss?'Влад ещё раз притягивает тебя к себе':'У порога Влад придерживает дверь');
 expect(parseSave((await page.evaluate(k=>localStorage.getItem(k),key))!).campaign.active?.story.c8LipKiss).toBe(kiss?'yes':'no');
 if(kiss)await page.screenshot({path:'test-results/screenshots/goodbye-kiss-390.png',animations:'disabled'});
});
