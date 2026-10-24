import {test,expect,type Page} from '@playwright/test';
import {startFive,command5} from './chapter5Helpers';
import {reduceSave} from '../src/state/reducer';
const key=`five-meetings:${process.env.VITE_BASE_PATH||'/'}:save`;
async function until(page:Page,id:string){for(let i=0;i<110;i++){if(await page.locator(`[data-node="${id}"]`).count())return;await page.getByRole('button',{name:'Дальше',exact:false}).click();}throw Error('Missing '+id);}
test('the two drink menus and their changed opinion survive actual production reloads',async({page})=>{
 let save=startFive();while(save.campaign.active!.nodeId!=='c5.drink.first')save=reduceSave(save,{type:'command',target:'campaign',command:command5(save.campaign.active!)});
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript(({key,save})=>{if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(save));},{key,save});
 await page.goto('./#/play/5');await expect(page.getByRole('heading',{name:'Как тебе первая проба?',exact:true})).toBeVisible();await page.reload();
 await page.getByRole('button',{name:'Для меня сладковато',exact:false}).click();await page.reload();await expect(page.locator('[data-node="c5.drink.first.sweet"]')).toBeVisible();await until(page,'c5.drink.recommend');
 await page.reload();await expect(page.getByRole('heading',{name:'Что предложим Нине после сравнения?',exact:true})).toBeVisible();
 await page.getByRole('button',{name:'Оставить исходный ванильный вариант',exact:false}).click();await page.reload();await expect(page.locator('[data-node="c5.drink.reason.sweet.vanilla"]')).toBeVisible();
 await until(page,'c5.album');await page.getByRole('button',{name:'Положить вместе',exact:true}).click();await until(page,'c5.exit');
 for(let i=0;i<12;i++){const before=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);if(!before.campaign.active)break;await page.getByRole('button',{name:'Дальше',exact:false}).click();await expect.poll(()=>page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).revision,key)).toBeGreaterThan(before.revision);}
 await expect(page.locator('.postcard')).toBeVisible();await page.reload();await expect(page.locator('.vlad-quote')).toContainText('чай с характером. компания тоже.');
 const saved=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);expect(saved.campaign.records[5].story).toMatchObject({c5Edition:3,c5FirstTaste:'sweet',c5Recommendation:'vanilla'});expect(saved.campaign.records[5].story.ending).toBeUndefined();expect(errors).toEqual([]);
 await page.getByRole('button',{name:'Псс… Маленький секрет',exact:true}).click();await expect(page.locator('.modal-surface')).toHaveCSS('border-bottom-left-radius','24px');
 await page.screenshot({path:'work/DRINK_PRODUCTION_SECRET.png',animations:'disabled'});
});
