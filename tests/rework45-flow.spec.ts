import {test,expect,type Page} from '@playwright/test';
import {startFour,command4} from './chapter4Helpers';
import {startFive as startOldFive,command5 as commandOld5} from './legacy5Helpers';
import {reduceSave} from '../src/state/reducer';
import {chapters} from '../src/content/chapters/manifest';
const base=process.env.VITE_BASE_PATH||'/',key=`five-meetings:${base}:save`;
async function until(page:Page,id:string){for(let i=0;i<150;i++){if(await page.locator(`[data-node="${id}"]`).count())return;if(await page.locator('[data-node="c5.drink.first"]').count())await page.getByRole('button',{name:'Давай сравним с менее сладким вариантом',exact:false}).click();
    else if(await page.locator('[data-node="c5.drink.recommend"]').count())await page.getByRole('button',{name:'Предложить менее сладкий вариант',exact:false}).click();
    else await page.getByRole('button',{name:'Дальше',exact:false}).click();}throw Error('Missing '+id);}
async function finish(page:Page){for(let i=0;i<40;i++){
 const before=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);
 if(!before.campaign.active){await expect(page.locator('.postcard')).toBeVisible();return;}
 if(await page.locator('[data-node="c5.drink.first"]').count())await page.getByRole('button',{name:'Давай сравним с менее сладким вариантом',exact:false}).click();
    else if(await page.locator('[data-node="c5.drink.recommend"]').count())await page.getByRole('button',{name:'Предложить менее сладкий вариант',exact:false}).click();
    else await page.getByRole('button',{name:'Дальше',exact:false}).click();
 await expect.poll(()=>page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).revision,key)).toBeGreaterThan(before.revision);
}throw Error('Missing result');}
test('production new4→new5→existing6 survives real reload and has one neutral card and invitation',async({page})=>{
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 let save=startFour();while(save.campaign.active!.nodeId!=='c4.stars')save=reduceSave(save,{type:'command',target:'campaign',command:command4(save.campaign.active!)});
 save=reduceSave(save,{type:'unlock',code:chapters.find(c=>c.id===5)!.code!});
 await page.addInitScript(({key,save})=>{if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(save));},{key,save});
 await page.goto('./#/play/4');await page.getByRole('button',{name:'Выбрать готовый чайник',exact:true}).click();await until(page,'c4.wish');
 await expect(page.getByRole('button',{name:'Мне нравится быть с тобой',exact:false})).toHaveCount(0);
 await page.getByRole('button',{name:'Больше маленьких приключений',exact:false}).click();await until(page,'c4.goodbye');await page.getByRole('button',{name:'Я сама',exact:false}).click();
 await page.reload();await expect(page.locator('[data-node="c4.goodbye.her"]')).toBeVisible();await finish(page);
 await page.getByRole('button',{name:'К главам',exact:true}).click();await page.locator('.chapter-list li').nth(4).getByRole('button',{name:'Начать встречу',exact:false}).click();
 await until(page,'c5.hug.her');await until(page,'c5.album');await page.getByRole('button',{name:'Положить вместе',exact:true}).click();await finish(page);
 await expect(page.locator('.postcard h1')).toHaveText('Пять встреч');await expect(page.locator('.choices button')).toHaveCount(0);
 await page.getByRole('button',{name:'Продолжить разговор',exact:false}).click();await page.getByRole('button',{name:'Продолжить разговор',exact:false}).click();
 await page.getByRole('button',{name:'Встретиться в кафе',exact:true}).click();await expect(page.getByLabel('Сообщение Владу',{exact:true})).not.toHaveValue(/свидание/);
 await page.reload();await expect(page.getByRole('button',{name:'Встретиться в кафе',exact:true})).toHaveAttribute('aria-pressed','true');
 const before=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);expect(before.contentVersion).toBe(14);expect(before.campaign.records[5].story.bond).toBeUndefined();expect(before.campaign.records[5].story.ending).toBeUndefined();
 await page.getByRole('button',{name:'Псс… Маленький секрет',exact:true}).click();await page.getByRole('button',{name:'И какие же?',exact:true}).click();
 await page.getByLabel('Код от Влада',{exact:true}).fill(chapters.find(c=>c.id===6)!.code!);await page.getByRole('button',{name:'Проверить код',exact:true}).click();await page.getByRole('button',{name:'Начать шестую встречу',exact:false}).click();
 await expect(page.locator('[data-node="c6.r3.entry"]')).toBeVisible();await page.reload();await expect(page.locator('[data-node="c6.r3.entry"]')).toBeVisible();
 const after=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);expect(after.campaign.records).toEqual(before.campaign.records);expect(after.continuation).toBe('cafe');expect(errors).toEqual([]);
});
test('production V12 menu cursor continues its old ending after a real reload',async({page})=>{
 let save=startOldFive();while(!save.campaign.active!.nodeId.startsWith('c5.tone.'))save=reduceSave(save,{type:'command',target:'campaign',command:commandOld5(save.campaign.active!)});
 await page.addInitScript(({key,save})=>{if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify({...save,contentVersion:12}));},{key,save});
 await page.goto('./#/play/5');await expect(page.locator('.choices button')).toHaveCount(4);await page.reload();await expect(page.locator('.choices button')).toHaveCount(4);
 await page.getByRole('button',{name:'Надо официально продлить этот беспорядок',exact:false}).click();await finish(page);await page.reload();await expect(page.locator('.postcard h1')).toHaveText('Продлено котом');
 const after=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);expect(after.campaign.records[5].story.ending).toBe('comic');expect(after.campaign.records[5].story.c5Edition).toBeUndefined();
});
