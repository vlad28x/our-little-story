import { test,expect } from '@playwright/test';
import { chapters } from '../src/content/chapters/manifest';
import { reduceSave } from '../src/state/reducer';
import { completeSave } from './helpers';

const key=`five-meetings:${process.env.VITE_BASE_PATH||'/'}:save`;

test('new rain artwork leads to a playable umbrella and the same saved outcome on a narrow phone',async({page})=>{
  const base=completeSave();
  const unlocked=reduceSave(base,{type:'unlock',code:chapters.find(chapter=>chapter.id===2)!.code!});
  const save=reduceSave(unlocked,{type:'start',chapter:2});
  await page.setViewportSize({width:320,height:650});
  await page.addInitScript(({key,save})=>{
    if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(save));
  },{key,save:{...save,settings:{...save.settings,textMode:'instant'}}});
  await page.goto('./#/play/2');
  const next=page.getByRole('button',{name:'Дальше',exact:false});
  async function advanceTo(id:string){
    const node=page.locator(`[data-node="${id}"]`);
    for(let i=0;i<40&&!await node.count();i++)await next.click();
    await expect(node).toBeVisible();
  }
  await expect(page.locator('.scene-rain')).toHaveCount(0);
  await advanceTo('c2.rain.intro');
  await expect(page.locator('.scene-rain.scene-rain-heavy')).toBeVisible();
  await advanceTo('c2.rain');
  await page.getByRole('button',{name:'Давай добежим до соседней арки'}).click();
  await expect(page.locator('.scene-rain.scene-rain-shelter')).toBeVisible();
  const background=page.locator('.scene-background');
  await expect(background).toHaveAttribute('src',/season1-gouache\/rain-arcade\.webp$/);
  await expect.poll(()=>background.evaluate(image=>(image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  await advanceTo('c2.cat');
  await expect(page.locator('.scene-rain')).toHaveCount(0);
  await page.getByRole('button',{name:'Попросим Нину помочь'}).click();
  await advanceTo('c2.umbrella');
  await expect(page.locator('svg.patch-canopy')).toBeVisible();
  await page.getByRole('button',{name:'Ложка',exact:true}).click();
  await page.getByRole('button',{name:'Закрепить: Круг',exact:true}).click();
  await expect(page.getByRole('status')).toContainText('Эта сюда не садится');
  for(const [piece,hole] of [['Пуговица','Круг'],['Лоскут','Треугольник'],['Лента','Полоса']]){
    await page.getByRole('button',{name:piece,exact:true}).click();
    await page.getByRole('button',{name:'Закрепить: '+hole,exact:true}).click();
  }
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.getByRole('button',{name:/Готово · зонтик для витрины спасён/}).click();
  await expect(page.locator('[data-node="c2.umbrella.patched"]')).toBeVisible();
  await advanceTo('c2.recharge');
  await expect(page.locator('.scene-rain.scene-rain-soft')).toBeVisible();
  await page.getByRole('button',{name:/Заворачиваюсь дома/}).click();
  await advanceTo('c2.cat.echo.help');
  await expect(page.locator('.scene-cat')).toBeVisible();
  const campaign=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)!).campaign,key);
  expect(campaign.records[1]).toEqual(base.campaign.records[1]);
  expect(campaign.active.story).toMatchObject({rainRoute:'arcade',catApproach:'help',umbrella:'patched',herRecharge:'cozy'});
});
