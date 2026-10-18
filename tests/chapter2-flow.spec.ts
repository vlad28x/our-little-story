import { chapters as chapterManifest } from '../src/content/chapters/manifest';
const chapterTwoCode=chapterManifest.find(c=>c.id===2)!.code!;
import { test,expect,type Page } from '@playwright/test';
import { expectSimpleResult } from './resultActions';
import { completeSave,defaultPath } from './helpers';
import type { SaveV1 } from '../src/state/types';
const key=`five-meetings:${process.env.VITE_BASE_PATH||'/'}:save`;
async function seed(page:Page,save:SaveV1,legacy=true){await page.addInitScript(({key,raw})=>{if(!localStorage.getItem(key))localStorage.setItem(key,raw);},{key,raw:JSON.stringify({...save,contentVersion:legacy?1:2})});}
async function until(page:Page,id:string){for(let i=0;i<150;i++){if(await page.locator(`[data-node="${id}"]`).count())return;await page.getByRole('button',{name:'Дальше',exact:false}).click();}throw new Error('Did not reach '+id);}
async function openSecond(page:Page){await page.goto('./#/chapters');await expect(page.getByRole('button',{name:'Открыть встречу 2',exact:true})).toHaveCount(0);await expect(page.getByLabel('Код',{exact:true})).toBeVisible();await page.getByLabel('Код',{exact:true}).fill(chapterTwoCode);await page.getByRole('button',{name:'Открыть встречу',exact:true}).click();await expect(page.getByText(/Открыта встреча 2/)).toBeVisible();await page.locator('.chapter-list li').nth(1).getByRole('button',{name:'Начать встречу'}).click();await expect(page.locator('[data-node="c2.arrival"]')).toBeVisible();}
async function toPuzzle(page:Page,rain:'shelter'|'arcade'='shelter',cat:'wait'|'help'='wait'){await until(page,'c2.rain');await page.getByRole('button',{name:rain==='shelter'?'Вернёмся под навес. Здесь вполне уютно':'Давай добежим до соседней арки'}).click();await until(page,'c2.cat');await page.getByRole('button',{name:cat==='wait'?'Пусть сам подойдёт. Подождём рядом':'Попросим Нину помочь'}).click();await until(page,'c2.umbrella');}
async function finish(page:Page,mood:'quiet'|'playful'='quiet'){await until(page,'c2.pause');await page.getByRole('button',{name:mood==='quiet'?'Давай немного помолчим и послушаем дождь':'Расскажи, что за игру ты хотел показать'}).click();await until(page,'c2.end');for(let i=0;i<6;i++)await page.getByRole('button',{name:'Дальше',exact:false}).click();await expect(page.locator('.postcard')).toBeVisible();}
test('old save opens chapter two by code, preserves memories, solves the puzzle and shows its result',async({page})=>{
  const old=completeSave({...defaultPath,plan:'coop',pace:'flirt',search:{kind:'token-search',outcome:'detour',catNoticed:true}});await seed(page,old);
  const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)errors.push(r.url());});
  await openSecond(page);expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).contentVersion,key)).toBe(5);expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k.replace(':save',':backup'))!).contentVersion,key)).toBe(5);
  await until(page,'c2.plan.coop');await expect(page.getByText('Влад достаёт маленькую коробку карманной игры и кладёт её на стол под навесом.')).toBeVisible();
  await until(page,'c2.rain');await page.getByRole('button',{name:'Давай добежим до соседней арки'}).click();await until(page,'c2.cat.known');await expect(page.getByText('С начальником вы уже знакомы. Сегодня он отвечает за забытые вещи.')).toBeVisible();
  await until(page,'c2.cat');await page.getByRole('button',{name:'Попросим Нину помочь'}).click();await until(page,'c2.umbrella');
  await page.getByRole('button',{name:'Ложка',exact:true}).click();await page.getByRole('button',{name:'Закрепить: Круг',exact:true}).click();await expect(page.getByRole('status')).toContainText('Эта сюда не садится');
  for(const [piece,hole] of [['Пуговица','Круг'],['Лоскут','Треугольник'],['Лента','Полоса']]){await page.getByRole('button',{name:piece,exact:true}).click();await page.getByRole('button',{name:`Закрепить: ${hole}`,exact:true}).click();}
  await page.getByRole('button',{name:'Готово · зонтик для витрины спасён'}).click();await finish(page,'playful');await expect(page.getByRole('heading',{name:'Короткий путь с лужей'})).toBeVisible();await expect(page.getByText('Прогноз без дыр · зонтик для витрины спасён')).toBeVisible();
  const main=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);expect(main.campaign.records[1]).toEqual(old.campaign.records[1]);expect(main.campaign.records[2].story).toMatchObject({rainRoute:'arcade',catApproach:'help',umbrella:'patched',eveningMood:'playful'});
  await expectSimpleResult(page);await page.reload();await expect(page.getByRole('heading',{name:'Короткий путь с лужей'})).toBeVisible();
  await page.getByRole('button',{name:'Посмотреть другой вариант →'}).click();await toPuzzle(page);await page.getByRole('button',{name:'Попросить готовый чехол',exact:true}).click();await finish(page);await expect(page.getByRole('heading',{name:'Навес на двоих'})).toBeVisible();expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).campaign,key)).toEqual(main.campaign);expect(errors).toEqual([]);
});
test('code unlock, skipped puzzle and 320px layout work; reload resets only the unfinished puzzle',async({page})=>{await page.setViewportSize({width:320,height:568});await seed(page,completeSave());await openSecond(page);await toPuzzle(page);await page.getByRole('button',{name:'Пуговица',exact:true}).click();await page.getByRole('button',{name:'Закрепить: Круг',exact:true}).click();await expect(page.getByText('1 / 3')).toBeVisible();await page.reload();await expect(page.getByText('0 / 3')).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);await page.getByRole('button',{name:'Пропустить занятие',exact:true}).click();await finish(page);await expect(page.getByRole('heading',{name:'Навес на двоих'})).toBeVisible();expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).campaign.records[2].story.umbrella,key)).toBe('skipped');});
test('a direct chapter-two link cannot bypass the previous chapter',async({page})=>{await page.goto('./#/play/2');await expect(page.getByRole('heading',{name:'Эта встреча ждёт на карте глав'})).toBeVisible();expect(await page.locator('[data-node]').count()).toBe(0);});

test('completed chapter one still waits for the author code; wrong codes and direct links grant nothing',async({page})=>{
  const saved=completeSave();await seed(page,saved,false);await page.goto('./#/chapters');
  await expect(page.getByText('Ждёт своего маленького приглашения')).toBeVisible();
  await expect(page.getByRole('button',{name:'Открыть встречу 2',exact:true})).toHaveCount(0);
  await expect(page.getByLabel('Код',{exact:true})).toBeVisible();
  for(const code of ['DOZHD','wrong-code']){
    await page.getByLabel('Код',{exact:true}).fill(code);await page.getByRole('button',{name:'Открыть встречу',exact:true}).click();
    await expect(page.getByRole('status')).toContainText('Код не подошёл');
    expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).unlocked,key)).toEqual([1]);
  }
  await page.goto('./#/play/2');await expect(page.getByRole('heading',{name:'Эта встреча ждёт на карте глав'})).toBeVisible();
  await openSecond(page);await page.reload();await expect(page.locator('[data-node="c2.arrival"]')).toBeVisible();
});
