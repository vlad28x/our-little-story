import { test,expect } from '@playwright/test';
import { openOffline } from './offlineApp';
import { initialState } from '../src/state/initialState';
import { reduceSave } from '../src/state/reducer';
import { finishFive } from './chapter5Helpers';
import { finishSix,sixAt } from './chapter6Helpers';
import { finishArc } from './finalArcHelpers';
const key='five-meetings:/:save',preference=`${key}:map-season`;

test('an unreadable JSON save does not impersonate another tab and recovery reset remains usable',async({page})=>{
 const obsolete=finishArc(8);delete obsolete.campaign.records[8]!.story.c8Dance;const raw=JSON.stringify(obsolete);
 await openOffline(page,initialState(),'/chapters',{local:{[key]:raw}});
 await expect(page.getByRole('heading',{name:'Сохраним эту историю',exact:true})).toBeVisible();
 await page.evaluate(()=>window.dispatchEvent(new Event('focus')));await expect(page.getByRole('dialog')).toHaveCount(0);expect(await page.evaluate(k=>localStorage.getItem(k),key)).toBe(raw);
 await page.getByRole('button',{name:'Начать заново',exact:true}).click();await page.getByRole('dialog').getByRole('button',{name:'Начать заново',exact:true}).click();
 await expect(page.getByRole('heading',{name:'Каждая встреча — маленькая история',exact:true})).toBeVisible();
 await page.locator('.chapter-list li').first().getByRole('button',{name:'Начать встречу',exact:false}).click();await expect(page.locator('[data-node="c1.entry"]')).toBeVisible();
});

test('a genuinely newer valid save still protects against overwriting another tab',async({page})=>{
 const save=finishSix();await openOffline(page,save,'/chapters');const newer=reduceSave(save,{type:'settings',settings:{...save.settings,sound:!save.settings.sound}});
 await expect(page.getByRole('heading',{name:'Каждая встреча — маленькая история',exact:true})).toBeVisible();
 await page.evaluate(({key,raw})=>{localStorage.setItem(key,raw);window.dispatchEvent(new Event('focus'));},{key,raw:JSON.stringify(newer)});
 await expect(page.getByRole('dialog',{name:'История открыта в другой вкладке',exact:true})).toBeVisible();expect(JSON.parse(await page.evaluate(k=>localStorage.getItem(k)!,key))).toEqual(newer);
});

test('finishing chapter six returns to After Credits even when Five Meetings was remembered',async({page})=>{
  await openOffline(page,sixAt('c6.ending'),'/play/6',{local:{[preference]:'1'}});
  await page.getByRole('button',{name:'Проводи меня за руку',exact:false}).click();
  for(let step=0;step<12;step++){
    await expect(page.locator('.postcard').or(page.getByRole('button',{name:'Дальше',exact:false}))).toBeVisible();
    if(await page.locator('.postcard').count())break;
    await page.getByRole('button',{name:'Дальше',exact:false}).click();
  }
  await expect(page.getByRole('heading',{name:'Рука в руке',exact:true})).toBeVisible();
  const completed=await page.evaluate(k=>localStorage.getItem(k),key);
  await page.getByRole('button',{name:'К следующей встрече',exact:false}).click();
  await expect(page.locator('.season-tabs button').nth(1)).toHaveAttribute('aria-pressed','true');
  await expect(page.locator('.chapter-list li').first()).toContainText('Ещё пять минут');
  expect(await page.evaluate(k=>localStorage.getItem(k),key)).toBe(completed);
});

test('chapter results select their season for both map actions and persist it through home and restart',async({context})=>{
  const save=finishArc(10);
  for(const chapter of [5,6,7,8,9,10]){
    const page=await context.newPage(),season=chapter>=6?2:1;
    await openOffline(page,save,`/result/${chapter}?source=campaign`,{local:{[preference]:String(3-season)}});
    await expect(page.locator('.postcard')).toBeVisible();
    await expect.poll(()=>page.evaluate(k=>localStorage.getItem(k),preference)).toBe(String(season));
    await page.getByRole('button',{name:'К главам',exact:true}).click();
    await expect(page.locator('.season-tabs button').nth(season-1)).toHaveAttribute('aria-pressed','true');
    expect(JSON.parse(await page.evaluate(k=>localStorage.getItem(k)!,key))).toEqual(save);
    await page.close();
  }
  const page=await context.newPage();
  await openOffline(page,save,'/result/6?source=campaign',{local:{[preference]:'1'}});
  await page.getByRole('button',{name:'На главный экран',exact:true}).click();
  await page.getByRole('button',{name:'К встречам',exact:true}).click();
  await expect(page.locator('.season-tabs button').nth(1)).toHaveAttribute('aria-pressed','true');
  const stored=(await page.evaluate(k=>localStorage.getItem(k),preference))!;
  await page.close();
  const reopened=await context.newPage();
  await openOffline(reopened,save,'/start',{local:{[preference]:stored}});
  await reopened.getByRole('button',{name:'К встречам',exact:true}).click();
  await expect(reopened.locator('.season-tabs button').nth(1)).toHaveAttribute('aria-pressed','true');
  await reopened.close();
});

test('an active trial selects its season while inaccessible chapter URLs keep the chosen tab',async({context})=>{
  const save=reduceSave(finishSix(),{type:'trial',chapter:6,attemptId:'map-trial-six'});
  const page=await context.newPage();await openOffline(page,save,'/play/6?mode=trial',{local:{[preference]:'1'}});
  await expect(page.locator('[data-node="c6.r3.entry"]')).toBeVisible();
  await page.getByRole('button',{name:'Открыть меню',exact:true}).click();
  await page.getByRole('dialog').getByRole('button',{name:'После титров',exact:true}).click();
  await expect(page.locator('.season-tabs button').nth(1)).toHaveAttribute('aria-pressed','true');
  expect(JSON.parse(await page.evaluate(k=>localStorage.getItem(k)!,key))).toEqual(save);await page.close();
  for(const route of ['/play/7','/result/7','/play/11']){
    const blocked=await context.newPage();await openOffline(blocked,finishSix(),route,{local:{[preference]:'1'}});
    await blocked.getByRole('button',{name:'К главам',exact:true}).click();
    await expect(blocked.locator('.season-tabs button').first()).toHaveAttribute('aria-pressed','true');await blocked.close();
  }
});

test('the same cover button opens only the map for fresh, active, completed and trial stories',async({context})=>{
  const done=finishFive();const states=[initialState(),reduceSave(initialState(),{type:'start'}),done,sixAt('c6.map'),finishArc(10),reduceSave(done,{type:'trial',chapter:1})];
  for(const save of states){const page=await context.newPage();await openOffline(page,save,'/start');await expect(page.locator('.cover-copy>button')).toHaveCount(1);await page.getByRole('button',{name:'К встречам',exact:true}).click();await expect(page.getByRole('heading',{name:'Каждая встреча — маленькая история',exact:true})).toBeVisible();await expect(page.locator('.chapter-list li')).toHaveCount(5);await expect(page.locator('[data-node],.postcard')).toHaveCount(0);expect(await page.evaluate(()=>location.hash)).toBe('#/chapters');expect(JSON.parse(await page.evaluate(k=>localStorage.getItem(k)!,key))).toEqual(save);if(save.trial)await expect(page.getByRole('button',{name:'Продолжить пробный вариант главы 1',exact:true})).toBeVisible();await page.close();}
});

test('the map remembers the selected season through home and a fresh app instance',async({page,context})=>{
  const save=finishSix();await openOffline(page,save,'/start');await page.getByRole('button',{name:'К встречам',exact:true}).click();await expect(page.locator('.season-tabs button').nth(1)).toHaveAttribute('aria-pressed','true');
  for(const season of [1,2] as const){await page.locator('.season-tabs button').nth(season-1).click();await expect.poll(()=>page.evaluate(k=>localStorage.getItem(k),preference)).toBe(String(season));await page.getByRole('button',{name:'На главный экран',exact:true}).click();await page.getByRole('button',{name:'К встречам',exact:true}).click();await expect(page.locator('.season-tabs button').nth(season-1)).toHaveAttribute('aria-pressed','true');const next=await context.newPage();await openOffline(next,save,'/start',{local:{[preference]:String(season)}});await next.getByRole('button',{name:'К встречам',exact:true}).click();await expect(next.locator('.season-tabs button').nth(season-1)).toHaveAttribute('aria-pressed','true');expect(JSON.parse(await next.evaluate(k=>localStorage.getItem(k)!,key))).toEqual(save);await next.close();}
});

test('an invalid or locked season preference and unavailable preference storage never block the map',async({context,page})=>{
  for(const value of ['2','invalid']){const initial=initialState(),next=await context.newPage();await openOffline(next,initial,'/start',{local:{[preference]:value}});await next.getByRole('button',{name:'К встречам',exact:true}).click();await expect(next.locator('.season-tabs')).toHaveCount(0);await expect(next.locator('.chapter-list li').first()).toContainText('Случайная встреча');expect(JSON.parse(await next.evaluate(k=>localStorage.getItem(k)!,key))).toEqual(initial);await next.close();}
  const save=finishSix(),errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));await openOffline(page,save,'/start');await page.evaluate(()=>{localStorage.setItem=()=>{throw new DOMException('Blocked','QuotaExceededError');};});await page.getByRole('button',{name:'К встречам',exact:true}).click();await page.locator('.season-tabs button').first().click();await page.getByRole('button',{name:'На главный экран',exact:true}).click();await page.getByRole('button',{name:'К встречам',exact:true}).click();await expect(page.locator('.season-tabs button').first()).toHaveAttribute('aria-pressed','true');expect(errors).toEqual([]);expect(JSON.parse(await page.evaluate(k=>localStorage.getItem(k)!,key))).toEqual(save);
});
