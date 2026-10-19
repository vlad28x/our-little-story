import { test,expect,type Page } from '@playwright/test';
import { finishFive } from './chapter5Helpers';
import { sixthCode } from './chapter6Helpers';
const key=`five-meetings:${process.env.VITE_BASE_PATH||'/'}:save`;
async function until(page:Page,id:string){for(let i=0;i<150;i++){if(await page.locator(`[data-node="${id}"]`).count())return;await page.getByRole('button',{name:'Дальше',exact:false}).click();}throw Error('Not reached '+id);}
test('sixth chapter loads new art from the configured production base and resumes the same route scene',async({page})=>{
  const prior=finishFive(),errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
  await page.addInitScript(({key,raw})=>{if(!localStorage.getItem(key))localStorage.setItem(key,raw);},{key,raw:JSON.stringify(prior)});
  await page.goto('./#/chapters');await page.getByLabel('Код',{exact:true}).fill(sixthCode);await page.getByRole('button',{name:'Открыть встречу',exact:true}).click();await page.getByRole('button',{name:'Начать встречу 6',exact:false}).click();await until(page,'c6.guide');
  for(const image of await page.locator('.adviser-council img').all())await expect.poll(()=>image.evaluate(el=>(el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  await page.locator('.choices button').nth(0).click();await until(page,'c6.thought');await page.locator('.choices button').nth(1).click();await until(page,'c6.voice');await page.locator('.choices button').nth(1).click();await until(page,'c6.map');await page.getByRole('button',{name:'К витрине',exact:true}).click();await page.getByRole('button',{name:'К воде',exact:true}).click();await page.getByRole('button',{name:'Пойдём так',exact:true}).click();await expect(page.locator('[data-node="c6.first.window"]')).toBeVisible();await expect(page.locator('.scene-background')).toHaveAttribute('src',/assets\/backgrounds\/shop-window-evening.webp$/);await expect.poll(()=>page.locator('.scene-background').evaluate(el=>(el as HTMLImageElement).naturalWidth)).toBe(1000);
  const saved=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);for(const id of [1,2,3,4,5] as const)expect(saved.campaign.records[id]).toEqual(prior.campaign.records[id]);await page.reload();await expect(page.locator('[data-node="c6.first.window"]')).toBeVisible();expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).campaign.active,key)).toEqual(saved.campaign.active);expect(errors).toEqual([]);
});
