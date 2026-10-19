import { test,expect,type Page } from '@playwright/test';
import { openOffline } from './offlineApp';
import { defaultSixth,finishSix,sixAt,sixthCode,type SixthPath } from './chapter6Helpers';
import { finishFive } from './chapter5Helpers';
import { reduceSave } from '../src/state/reducer';
import { expectSimpleResult } from './resultActions';
import type { SaveV1 } from '../src/state/types';
const key='five-meetings:/:save';
test('advisers fill the scene while staying clear of the location label on phones and desktop',async({page})=>{
  for(const [width,height] of [[320,568],[390,844],[960,900],[785,600]]){
    await page.setViewportSize({width,height});
    await openOffline(page,sixAt('c6.guide'),'/play/6');
    const portraits=page.locator('.adviser-council img');
    await expect(portraits).toHaveCount(2);
    await expect.poll(()=>portraits.evaluateAll(images=>images.every(image=>(image as HTMLImageElement).complete&&(image as HTMLImageElement).naturalWidth>0))).toBe(true);
    const stage=(await page.locator('.scene-stage').boundingBox())!;
    const label=(await page.locator('.location-tag').boundingBox())!;
    const panel=(await page.locator('.story-panel').boundingBox())!;
    const first=(await portraits.nth(0).boundingBox())!;
    const second=(await portraits.nth(1).boundingBox())!;
    for(const portrait of [first,second]){
      expect(portrait.y).toBeGreaterThanOrEqual(label.y+label.height);
      expect(portrait.y+portrait.height).toBeLessThanOrEqual(Math.min(stage.y+stage.height,portrait.x+portrait.width>panel.x?panel.y:Infinity));
      expect(portrait.x).toBeGreaterThanOrEqual(stage.x);
      expect(portrait.x+portrait.width).toBeLessThanOrEqual(stage.x+stage.width);
      expect(portrait.height).toBeGreaterThan(stage.height*.65);
    }
    expect(first.x+first.width).toBeLessThan(second.x);
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
    await page.screenshot({path:`outputs/CHAPTER_06_ADVISERS_${width}_LARGER.png`,fullPage:true,animations:'disabled'});
  }
});
async function until(page:Page,id:string){for(let i=0;i<160;i++){if(await page.locator(`[data-node="${id}"]`).count())return;await page.getByRole('button',{name:'Дальше',exact:false}).click();}throw Error('Not reached '+id);}
async function finish(page:Page,path:SixthPath=defaultSixth){
  for(let i=0;i<200;i++){
    const state=await page.locator('.story-screen,.postcard').first().evaluate(el=>({finished:el.matches('.postcard'),node:el.getAttribute('data-node')}));
    if(state.finished)return;
    const node=state.node;
    const choices:Record<string,number>={'c6.guide':['angel','devil','none'].indexOf(path.guide),'c6.thought':['linger','tease','quiet'].indexOf(path.thought),'c6.voice':['stay','tease','quiet'].indexOf(path.voice),'c6.gesture':['her','asked','none'].indexOf(path.contact),'c6.envelope.offer':path.bonus?0:1,'c6.ending':['hand','lap','home'].indexOf(path.ending)};
    if(node&&node in choices){await page.locator('.choices button').nth(choices[node]).click();continue;}
    if(node==='c6.map'){
      if(path.route.mode==='skipped')await page.getByRole('button',{name:'Пройтись без карты',exact:true}).click();
      else if(path.route.mode==='shared'){await page.getByRole('button',{name:'Выберем вместе',exact:true}).click();await page.getByRole('button',{name:'Да, пойдём',exact:true}).click();}
      else{
        const labels={water:'К воде',lights:'Под фонари',window:'К витрине'};
        for(const stop of path.route.stops){const point=page.getByRole('button',{name:labels[stop],exact:true});if(await point.getAttribute('aria-pressed')!=='true')await point.click();}
        await page.getByRole('button',{name:'Пойдём так',exact:true}).click();
      }continue;
    }
    if(node==='c6.note'){
      if(path.note){await page.getByLabel('Твой ответ',{exact:true}).fill(path.note);await page.getByRole('button',{name:'Сохранить для себя',exact:true}).click();}
      else await page.getByRole('button',{name:'Пропустить',exact:true}).click();continue;
    }
    await page.getByRole('button',{name:'Дальше',exact:false}).click();
  }
  throw Error('Did not finish chapter six');
}
test('opens the second season by code, plays the full chapter on a small phone and preserves the original story',async({page})=>{
  await page.setViewportSize({width:320,height:568});const prior=reduceSave(finishFive(),{type:'continuation',value:'decline'}),errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  await openOffline(page,prior);await expect(page.getByRole('group',{name:'Выбрать историю'})).toHaveCount(0);await expect(page.locator('.chapter-list li')).toHaveCount(5);
  await page.getByLabel('Код',{exact:true}).fill(sixthCode);await page.getByRole('button',{name:'Открыть встречу',exact:true}).click();await expect(page.getByRole('button',{name:'После титров',exact:false})).toHaveAttribute('aria-pressed','true');await expect(page.locator('.chapter-list li')).toHaveCount(2);
  await page.getByRole('button',{name:'Начать встречу 6',exact:false}).click();await until(page,'c6.guide');await expect(page.locator('.adviser-council img')).toHaveCount(2);await page.screenshot({path:'outputs/CHAPTER_06_ADVISERS_320.png',fullPage:true,animations:'disabled'});
  await page.locator('.choices button').nth(1).click();await until(page,'c6.thought');await page.locator('.choices button').nth(0).click();await until(page,'c6.voice');await page.locator('.choices button').nth(0).click();await until(page,'c6.map');
  await page.getByRole('button',{name:'К витрине',exact:true}).click();await page.getByRole('button',{name:'К воде',exact:true}).click();await page.screenshot({path:'outputs/CHAPTER_06_ROUTE_320.png',fullPage:true,animations:'disabled'});await page.getByRole('button',{name:'Пойдём так',exact:true}).click();await expect(page.locator('[data-node="c6.first.window"]')).toBeVisible();await page.screenshot({path:'outputs/CHAPTER_06_WINDOW_320.png',fullPage:true,animations:'disabled'});
  await finish(page);await expect(page.getByRole('heading',{name:'Рука в руке',exact:true})).toBeVisible();await expectSimpleResult(page);await expect(page.getByText('Хочу ещё немного погулять.',{exact:true})).toBeVisible();await page.screenshot({path:'outputs/CHAPTER_06_RESULT_320.png',fullPage:true,animations:'disabled'});
  const saved=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key) as SaveV1;expect(saved.campaign.completed).toEqual([1,2,3,4,5,6]);for(const id of [1,2,3,4,5] as const)expect(saved.campaign.records[id]).toEqual(prior.campaign.records[id]);expect(saved.continuation).toBe('decline');expect(saved.collection.bonuses).toEqual(['c6.bonus.devil']);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);expect(errors).toEqual([]);
});
test('restores the route draft, shared suggestion and local answer draft without restarting the chapter',async({page,context})=>{
  await openOffline(page,sixAt('c6.map'),'/play/6');await page.getByRole('button',{name:'К витрине',exact:true}).click();await page.getByRole('button',{name:'Выберем вместе',exact:true}).click();
  const s=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);const restored=await context.newPage();await restored.setViewportSize({width:390,height:844});await openOffline(restored,s,'/play/6');await expect(restored.getByText('Влад предлагает: фонари → вода. Подойдёт?')).toBeVisible();await restored.getByRole('button',{name:'Я выберу иначе',exact:true}).click();await expect(restored.getByRole('button',{name:'К витрине',exact:true})).toHaveAttribute('aria-pressed','true');await restored.getByRole('button',{name:'К воде',exact:true}).click();await restored.getByRole('button',{name:'Пойдём так',exact:true}).click();
  const note=sixAt('c6.note');const writing=await context.newPage();await openOffline(writing,note,'/play/6');await writing.getByLabel('Твой ответ',{exact:true}).fill('Пока ещё только черновик');await expect.poll(()=>writing.evaluate(k=>localStorage.getItem(`${k}:note-draft`),key)).toContain('черновик');
  const draft=await writing.evaluate(k=>localStorage.getItem(`${k}:note-draft`)!,key);const reopened=await context.newPage();await openOffline(reopened,note,'/play/6',{local:{[`${key}:note-draft`]:draft}});await expect(reopened.getByLabel('Твой ответ',{exact:true})).toHaveValue('Пока ещё только черновик');await reopened.getByRole('button',{name:'Сохранить для себя',exact:true}).click();expect(await reopened.evaluate(k=>localStorage.getItem(`${k}:note-draft`),key)).toBeNull();
});
test('all three endings remain reachable without a route or touching, and unavailable chapter ten is safe',async({context})=>{
  const p={...defaultSixth,route:{kind:'evening-route' as const,mode:'skipped' as const,stops:[] as []},contact:'none' as const,note:undefined};
  for(const [ending,title] of [['hand','Рука в руке'],['lap','Ещё один круг'],['home','До следующего вечера']] as const){
    const page=await context.newPage();await page.setViewportSize({width:320,height:568});await openOffline(page,sixAt('c6.ending',p),'/play/6');await finish(page,{...p,ending});await expect(page.getByRole('heading',{name:title,exact:true})).toBeVisible();const saved=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);expect(saved.campaign.records[6].episode.sparks).toHaveLength(2);await expectSimpleResult(page);await page.close();
  }
  const missing=await context.newPage();await openOffline(missing,finishFive(),'/play/10');await expect(missing.getByRole('heading',{name:'Такой встречи нет на карте'})).toBeVisible();
});
test('edits and deletes local notes and keeps a completed trial separate from canon',async({page})=>{
  const main=finishSix();await openOffline(page,main,'/result/6');await page.getByRole('button',{name:'Редактировать',exact:true}).click();await page.locator('#edit-personal-note').fill('Моя новая заметка');await page.getByRole('button',{name:'Сохранить изменения',exact:true}).click();let saved=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);expect(saved.revision).toBe(main.revision);expect(saved.privateNotes.campaign.text).toBe('Моя новая заметка');
  await page.getByRole('button',{name:'Удалить заметку',exact:true}).click();await page.getByRole('button',{name:'Удалить',exact:true}).click();await expect(page.getByText('Заметка удалена на этом устройстве.')).toBeVisible();saved=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);const canonical=saved.campaign;
  await page.getByRole('button',{name:'Посмотреть другой вариант',exact:false}).click();await expect(page.locator('[data-node="c6.entry"]')).toBeVisible();await finish(page,{...defaultSixth,guide:'angel',ending:'home',route:{kind:'evening-route',mode:'shared',stops:['lights','water']},note:'Отдельная пробная записка'});await expect(page.getByText('Отдельная пробная записка',{exact:true})).toBeVisible();saved=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);expect(saved.campaign).toEqual(canonical);expect(saved.privateNotes.campaign.status).toBe('deleted');expect(saved.privateNotes.trial.text).toBe('Отдельная пробная записка');expect(saved.collection.bonuses).toEqual(['c6.bonus.devil','c6.bonus.angel']);
});
test('Telegram carries chapter progress and sparks to another device while the written answer stays local',async({page,context})=>{
  const main=finishSix(),id=6060;await openOffline(page,main,'/result/6',{telegram:{id,data:{}}});await page.getByRole('button',{name:'Перенести историю из этого браузера',exact:false}).click();await expect(page.getByText('✓ История сохранена в Telegram',{exact:true})).toBeVisible();await expect(page.getByText(defaultSixth.note!,{exact:true})).toBeVisible();
  const data=await page.evaluate(()=>(window as unknown as {testCloud:{data:Record<string,string>}}).testCloud.data);expect(JSON.stringify(data)).not.toContain(defaultSixth.note);const next=await context.newPage();await openOffline(next,main,'/result/6',{seedBrowser:false,telegram:{id,data}});await expect(next.getByRole('heading',{name:'Рука в руке',exact:true})).toBeVisible();await expect(next.getByText('Личная заметка осталась на другом устройстве.')).toBeVisible();const telegramKey=`five-meetings:/:telegram:our_little_story_game_bot:${id}:save`;const restored=await next.evaluate(k=>JSON.parse(localStorage.getItem(k)!),telegramKey);expect(restored.campaign).toEqual(main.campaign);expect(restored.privateNotes).toEqual({});
  for(const recovery of [false,true]){
    const local=structuredClone(main);local.revision--;const device=await context.newPage();await openOffline(device,main,'/result/6',{seedBrowser:false,telegram:{id,data},local:recovery?{[telegramKey]:'{broken',[telegramKey.replace(/:save$/,':backup')]:JSON.stringify(local)}:{[telegramKey]:JSON.stringify(local)}});await device.getByRole('button',{name:'Продолжить из Telegram',exact:false}).click();await expect(device.getByText(defaultSixth.note!,{exact:true})).toBeVisible();const selected=await device.evaluate(k=>JSON.parse(localStorage.getItem(k)!),telegramKey);expect(selected.privateNotes).toEqual(main.privateNotes);expect(selected.campaign).toEqual(main.campaign);
  }
});

test('keyboard choices, pause and a short viewport keep the route and personal question usable',async({page,context})=>{
  await page.setViewportSize({width:785,height:600});await page.emulateMedia({reducedMotion:'reduce'});await openOffline(page,sixAt('c6.map'),'/play/6');
  const water=page.getByRole('button',{name:'К воде',exact:true});await water.focus();await page.keyboard.press('Enter');await expect(water).toHaveAttribute('aria-pressed','true');await page.getByRole('button',{name:'Открыть меню',exact:true}).click();await expect(water).toBeDisabled();await page.getByRole('button',{name:'Вернуться к истории',exact:true}).click();await expect(water).toHaveAttribute('aria-pressed','true');await page.getByRole('button',{name:'К витрине',exact:true}).focus();await page.keyboard.press('Space');await page.getByRole('button',{name:'Пойдём так',exact:true}).click();await expect(page.locator('[data-node="c6.first.water"]')).toBeVisible();
  const writing=await context.newPage();await writing.setViewportSize({width:390,height:500});await openOffline(writing,sixAt('c6.note'),'/play/6');const answer=writing.getByLabel('Твой ответ',{exact:true});await answer.fill('Первая строка');await answer.focus();await writing.keyboard.press('End');await writing.keyboard.press('Enter');await writing.keyboard.type('Another line');await expect(answer).toHaveValue('Первая строка\nAnother line');await expect(writing.locator('[data-node="c6.note"]')).toBeVisible();await writing.screenshot({path:'outputs/CHAPTER_06_NOTE_390.png',fullPage:true,animations:'disabled'});await writing.getByRole('button',{name:'Сохранить для себя',exact:true}).click();await expect(writing.locator('[data-node="c6.note.after"]')).toBeVisible();expect(await writing.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
