import { finishSix } from './chapter6Helpers';
import { test,expect,type Page } from '@playwright/test';
import { expectSimpleResult } from './resultActions';
const prefix=`five-meetings:${process.env.VITE_BASE_PATH||'/'}:save`;
test('the short prologue shows only the cafe, survives reload and leads into the original meeting',async({page})=>{
  await page.setViewportSize({width:320,height:568});
  await page.goto('./');
  await page.getByRole('button',{name:'К встречам',exact:true}).click();
  await page.locator('.chapter-list li').first().getByRole('button',{name:'Начать встречу',exact:false}).click();
  await expect(page.locator('[data-node="c1.prologue"]')).toBeVisible();
  await expect(page.locator('.scene-background')).toHaveAttribute('src',/cafe-approach-day\.webp$/);
  await expect(page.locator('.scene-stage')).toHaveAttribute('aria-label','У «Паузы» · перед встречей');
  await expect(page.locator('.scene-stage .character,.scene-stage .scene-cat,.scene-stage .easter-hair,.fallen-tokens')).toHaveCount(0);
  await expect(page.getByText('Рабочий день наконец закончился.',{exact:false})).toBeVisible();
  await expect.poll(()=>page.locator('.scene-background').evaluate((el:HTMLImageElement)=>el.complete&&el.naturalWidth>0)).toBe(true);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.screenshot({path:'work/polish23/prologue-320.png',fullPage:true,animations:'disabled'});
  await page.getByRole('button',{name:'Дальше',exact:false}).click();
  await page.reload();
  await expect(page.getByText('На вывеске — «Пауза».',{exact:false})).toBeVisible();
  await page.setViewportSize({width:960,height:900});
  await page.screenshot({path:'work/polish23/prologue-960.png',fullPage:true,animations:'disabled'});
  for(let i=0;i<2;i++)await page.getByRole('button',{name:'Дальше',exact:false}).click();
  await expect(page.locator('[data-node="c1.before"]')).toBeVisible();
  await expect(page.locator('.scene-background')).toHaveAttribute('src',/cafe-entry\.webp$/);
  await expect(page.locator('.scene-stage .character')).toBeVisible();
  await page.reload();
  await expect(page.getByText('По ту сторону стекла Влад допивает остывший кофе.',{exact:false})).toBeVisible();
  await page.screenshot({path:'work/polish23/vlad-before-960.png',fullPage:true,animations:'disabled'});
  await page.setViewportSize({width:320,height:568});
  for(let i=0;i<2;i++)await page.getByRole('button',{name:'Дальше',exact:false}).click();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.screenshot({path:'work/polish23/vlad-before-320.png',fullPage:true,animations:'disabled'});
  await page.getByRole('button',{name:'Дальше',exact:false}).click();
  await expect(page.locator('[data-node="c1.entry"]')).toBeVisible();
  await expect(page.locator('.scene-stage .character')).toBeVisible();
  await expect(page.locator('.scene-stage .scene-cat')).toBeVisible();
});
async function advanceUntil(page:Page,target:string){for(let i=0;i<110;i++){if(await page.locator(`[data-node="${target}"]`).count())return;await page.getByRole('button',{name:'Дальше',exact:false}).click();}throw Error(`Did not reach ${target}`);}
async function start(page:Page){await page.goto('./');await page.getByRole('button',{name:'К встречам',exact:true}).click();await page.locator('.chapter-list li').first().getByRole('button',{name:'Начать встречу',exact:false}).click();await advanceUntil(page,'c1.approach');await page.getByRole('button',{name:'Давай сначала освободим проход'}).click();await advanceUntil(page,'c1.search');}
async function finish(page:Page,ending:'tea'|'banter'|'coop'){await advanceUntil(page,'c1.pace');await page.getByRole('button',{name:'Есть пять минут. Только давай спокойно'}).click();await advanceUntil(page,'c1.detail');await page.getByRole('button',{name:'На минуту отвлечься на окно'}).click();await advanceUntil(page,'c1.plan');await page.getByRole('button',{name:ending==='tea'?'Давай всё-таки возьмём чай':ending==='banter'?'У меня ещё пять минут на твою авторскую методику':'В следующий раз покажешь эту игру?'}).click();for(let i=0;i<30&&await page.locator('[data-node]').count();i++)await page.getByRole('button',{name:'Дальше',exact:false}).click();await expect(page.locator('.postcard')).toBeVisible();}
test('complete chapter, secret, reload, result navigation and trial',async({page})=>{
  const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`);});
  await start(page);await page.getByRole('button',{name:'Осмотреть: Кот',exact:true}).click();await page.waitForTimeout(280);await page.getByRole('button',{name:'Собрать вместе с Владом'}).click();await finish(page,'tea');
  await expect(page.getByRole('heading',{name:'Маленькая пауза'})).toBeVisible();await expect(page.getByText('Начальник найден · Пончик одобряет перерыв')).toBeVisible();
  const main=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).campaign,prefix);
  await page.reload();await expect(page.locator('.postcard')).toBeVisible();
  await expectSimpleResult(page);
  await page.getByRole('button',{name:'Посмотреть другой вариант →'}).click();await advanceUntil(page,'c1.approach');await page.getByRole('button',{name:'Это настолка или эффектное знакомство?'}).click();await advanceUntil(page,'c1.search');
  for(const area of ['Сумка','Листок','Стакан']){await page.getByRole('button',{name:`Осмотреть: ${area}`,exact:true}).click();await page.waitForTimeout(280);}await expect(page.getByText('3 / 3')).toBeVisible();await page.getByRole('button',{name:'Готово · все жетоны на месте'}).click();await finish(page,'coop');
  expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).campaign,prefix)).toEqual(main);
  await page.reload();await expect(page.getByRole('heading',{name:'Второй игрок найден'})).toBeVisible();
  expect(errors).toEqual([]);
});
test('banter ending remains reachable and layout fits a small phone',async({page})=>{await page.setViewportSize({width:320,height:568});await start(page);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);await page.getByRole('button',{name:'Собрать вместе с Владом'}).click();await finish(page,'banter');await expect(page.getByRole('heading',{name:'Нелепо познакомились'})).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);});
test('refresh preserves chosen consequences and restarts only unfinished search',async({page})=>{await start(page);await page.getByRole('button',{name:'Осмотреть: Сумка',exact:true}).click();await expect(page.getByText('1 / 3')).toBeVisible();await page.reload();await expect(page.getByText('0 / 3')).toBeVisible();expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).campaign.active.story.approach,prefix)).toBe('space');});
test('corrupt main offers backup without silently erasing either',async({page})=>{await start(page);await page.evaluate(k=>localStorage.setItem(k,'{broken'),prefix);await page.reload();await expect(page.getByRole('heading',{name:'Сохраним эту историю'})).toBeVisible();expect(await page.evaluate(k=>localStorage.getItem(k),prefix)).toBe('{broken');await page.getByRole('button',{name:'Восстановить резервную копию'}).click();await expect(page.getByRole('heading',{name:'Встречи',exact:true})).toBeVisible();});
test('locked and unavailable chapters do not start from direct URL',async({page})=>{await page.goto('./#/play/6');await expect(page.getByRole('heading',{name:'Эта встреча ждёт на карте глав'})).toBeVisible();await page.goto('./#/play/11');await expect(page.getByRole('heading',{name:'Такой встречи нет на карте'})).toBeVisible();});
test('storage denied does not block the story',async({page})=>{await page.addInitScript(()=>{Storage.prototype.setItem=()=>{throw new DOMException('Blocked','QuotaExceededError');};});await start(page);await expect(page.getByText(/В этом браузере прогресс сейчас не сохраняется/)).toBeVisible();});

test('home always opens the map and remembers its tab after a real reload without changing progress',async({page})=>{
  const save=finishSix();await page.addInitScript(({key,raw})=>{if(!localStorage.getItem(key))localStorage.setItem(key,raw);},{key:prefix,raw:JSON.stringify(save)});await page.goto('./#/start');await page.getByRole('button',{name:'К встречам',exact:true}).click();await expect(page.locator('.season-tabs button').nth(1)).toHaveAttribute('aria-pressed','true');await page.locator('.season-tabs button').first().click();await page.getByRole('button',{name:'На главный экран',exact:true}).click();await page.reload();await page.getByRole('button',{name:'К встречам',exact:true}).click();await expect(page.locator('.season-tabs button').first()).toHaveAttribute('aria-pressed','true');await expect(page.locator('.chapter-list li').first()).toContainText('Случайная встреча');expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),prefix)).toEqual(save);await page.locator('.season-tabs button').nth(1).click();await page.getByRole('button',{name:'На главный экран',exact:true}).click();await page.getByRole('button',{name:'К встречам',exact:true}).click();await expect(page.locator('.season-tabs button').nth(1)).toHaveAttribute('aria-pressed','true');await expect(page.locator('[data-node],.postcard')).toHaveCount(0);
});

test('the sixth result overrides an old first-season preference and survives a real reload',async({page})=>{
  const save=finishSix(),preference=`${prefix}:map-season`;
  await page.addInitScript(({key,raw})=>{if(!localStorage.getItem(key)){localStorage.setItem(key,raw);localStorage.setItem(`${key}:map-season`,'1');}},{key:prefix,raw:JSON.stringify(save)});
  await page.goto('./#/result/6?source=campaign');await expect(page.locator('.postcard')).toBeVisible();
  await page.getByRole('button',{name:'К встречам',exact:true}).click();
  await expect(page.locator('.season-tabs button').nth(1)).toHaveAttribute('aria-pressed','true');
  await expect(page.locator('.chapter-list li').first()).toContainText('Пока светло');
  await page.reload();await expect(page.locator('.season-tabs button').nth(1)).toHaveAttribute('aria-pressed','true');
  expect(await page.evaluate(k=>localStorage.getItem(k),preference)).toBe('2');
  expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),prefix)).toEqual(save);
});
