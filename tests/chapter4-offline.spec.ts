import { legacyContent } from './legacySave';
import { test,expect,type Page } from '@playwright/test';
import { expectSimpleResult } from './resultActions';
import { openOffline } from './offlineApp';
import { completeTwo,defaultThird,finishThree } from './chapter3Helpers';
import { fourthCode,startFour,command4,finishFour } from './chapter4Helpers';
import { reduceSave } from '../src/state/reducer';
const key='five-meetings:/:save';
async function until(page:Page,id:string){for(let i=0;i<150;i++){if(await page.locator(`[data-node="${id}"]`).count())return;await page.getByRole('button',{name:'Дальше',exact:false}).click();}throw Error('Not reached '+id);}
async function finishGoodbye(page:Page){
  const trial=await page.evaluate(()=>location.hash.includes('mode=trial'));
  for(let i=0;i<20;i++){
    const before=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);
    if(!(trial?before.trial?.run:before.campaign.active))break;
    await page.getByRole('button',{name:'Дальше',exact:false}).click();
    await expect.poll(()=>page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).revision,key)).toBeGreaterThan(before.revision);
  }
  await expect(page.locator('.postcard')).toBeVisible();
}
async function wishAndEnd(page:Page,wish:'calm'|'adventure'='calm'){
  await until(page,'c4.wish');await page.getByRole('button',{name:wish==='calm'?'Больше спокойных вечеров':'Больше маленьких приключений'}).click();await until(page,'c4.goodbye');await page.getByRole('button',{name:'Давай сегодня без объятий. До завтра',exact:false}).click();await finishGoodbye(page);
}
test('author code, inherited callbacks, custom sky, friendship, result and trial work without any network',async({page})=>{
  const base=finishThree(completeTwo(),{...defaultThird,team:'dumpling',after:'rematch'}),errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  await openOffline(page,legacyContent(base,3) as unknown as typeof base);await expect(page.getByLabel('Код',{exact:true})).toBeVisible();await page.getByLabel('Код',{exact:true}).fill('ZVEZDY');await page.getByRole('button',{name:'Открыть встречу',exact:true}).click();await expect(page.getByRole('status')).toContainText('Код не подошёл');
  await page.getByLabel('Код',{exact:true}).fill(fourthCode.toLowerCase());await page.getByRole('button',{name:'Открыть встречу',exact:true}).click();await page.locator('.chapter-list li').nth(3).getByRole('button',{name:'Начать встречу'}).click();await expect(page.locator('[data-node="c4.walk"]')).toBeVisible();
  await until(page,'c4.team.dumpling');await expect(page.getByText('«пельмень и партнёры» сегодня на выезде. без доставки.')).toBeVisible();await until(page,'c4.after.rematch');await expect(page.getByText('про реванш помню. только сегодня без заказов на скорость.')).toBeVisible();
  await until(page,'c4.distance');await page.getByRole('button',{name:'Мне удобнее с этого края'}).click();await expect(page.locator('.scene-stage')).toHaveClass(/bench-space/);await page.screenshot({path:'outputs/CHAPTER_04_RIVER_PREVIEW.png',fullPage:true,animations:'disabled'});
  await until(page,'c4.stars');await page.getByRole('button',{name:'Геймпад',exact:true}).click();for(const id of [1,2,3])await page.getByRole('button',{name:`Звезда ${id}`,exact:true}).click();await page.getByRole('button',{name:'Отменить последнюю звезду'}).click();await expect(page.getByText('2 / 12',{exact:true})).toBeVisible();
  await expect(page.getByRole('button',{name:'Оставить наше созвездие',exact:false})).toBeDisabled();for(let id=3;id<=12;id++)await page.getByRole('button',{name:`Звезда ${id}`,exact:true}).click();await page.screenshot({path:'outputs/CHAPTER_04_STARS_PREVIEW.png',fullPage:true,animations:'disabled'});await page.getByRole('button',{name:'Оставить наше созвездие',exact:false}).click();
  await until(page,'c4.bond');await page.getByRole('button',{name:'Мне хорошо дружить с тобой'}).click();await expect(page.getByText('мне тоже хорошо. давай так и оставим.')).toBeVisible();await wishAndEnd(page);
  await expect(page.getByRole('heading',{name:'Созвездие передышки'})).toBeVisible();await expect(page.getByText('Наша команда',{exact:true})).toBeVisible();
  const main=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);expect(main.contentVersion).toBe(12);expect(main.campaign.completed).toEqual([1,2,3,4]);for(const id of [1,2,3] as const)expect(main.campaign.records[id]).toEqual(base.campaign.records[id]);expect(main.campaign.records[4].story).toMatchObject({bench:'space',constellation:'controllers',bond:'friendly',wish:'calm'});
  await page.screenshot({path:'outputs/CHAPTER_04_RESULT_PREVIEW.png',fullPage:true,animations:'disabled'});await expectSimpleResult(page);
  await page.getByRole('button',{name:'Посмотреть другой вариант',exact:false}).click();await until(page,'c4.distance');await page.getByRole('button',{name:'Посижу рядом'}).click();await until(page,'c4.stars');await page.getByRole('button',{name:'Выбрать готовый чайник'}).click();await until(page,'c4.bond');await page.getByRole('button',{name:'Мне нравится быть с тобой'}).click();await expect(page.getByText('мне с тобой тоже. даже когда ничего не происходит.')).toBeVisible();await wishAndEnd(page,'adventure');await expect(page.getByRole('heading',{name:'Созвездие приключений'})).toBeVisible();await expect(page.getByText('Выбрали готовую картинку · Чайник')).toBeVisible();expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).campaign,key)).toEqual(main.campaign);expect(errors).toEqual([]);
});
test('320px layout, keyboard, preset, undecided bond and reconstruction from saved cursor',async({page,context})=>{
  await page.setViewportSize({width:320,height:568});let s=startFour();for(let i=0;i<150&&s.campaign.active?.nodeId!=='c4.stars';i++)s=reduceSave(s,{type:'command',target:'campaign',command:command4(s.campaign.active!)});
  await openOffline(page,s,'/play/4');await page.getByRole('button',{name:'Кот',exact:true}).focus();await page.keyboard.press('Enter');await expect(page.getByRole('button',{name:'Звезда 1',exact:true})).toBeFocused();await page.keyboard.press('Enter');await page.keyboard.press('Enter');await expect(page.getByText('2 / 17',{exact:true})).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  const raw=await page.evaluate(k=>localStorage.getItem(k)!,key),reopened=await context.newPage();await reopened.setViewportSize({width:320,height:568});await openOffline(reopened,JSON.parse(raw),'/play/4');await expect(reopened.getByRole('heading',{name:'Какое созвездие нарисуем?',exact:true})).toBeVisible();await reopened.getByRole('button',{name:'Кот',exact:true}).click();await expect(reopened.getByText('0 / 17',{exact:true})).toBeVisible();await reopened.getByRole('button',{name:'Выбрать готовый чайник'}).click();await until(reopened,'c4.bond');await reopened.getByRole('button',{name:'Давай без названий'}).click();await expect(reopened.getByText('окей. вечер и без названия работает.')).toBeVisible();await wishAndEnd(reopened);const saved=await reopened.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);expect(saved.campaign.records[4].results.constellation.usedPreset).toBe(true);expect(saved.collection.achievements).not.toContain('own-sky');
});
test('a direct fourth-chapter link cannot bypass the code or third-chapter completion',async({page,context})=>{
  await openOffline(page,finishThree(),'/play/4');await expect(page.getByRole('heading',{name:'Эта встреча ждёт на карте глав'})).toBeVisible();const early=reduceSave(completeTwo(),{type:'unlock',code:fourthCode}),second=await context.newPage();await openOffline(second,early,'/play/4');await expect(second.getByRole('heading',{name:'Эта встреча ждёт на карте глав'})).toBeVisible();
});

test('all goodbye options work after friendship and choosing space, survive reload and keep trial isolated',async({context})=>{
  for(const trial of [false,true])for(const [choice,label] of [['accept','Можно. Иди сюда'],['her','Я сама'],['none','Давай сегодня без объятий. До завтра']] as const){
    const base=trial?finishFour():finishThree();let save=startFour(base,trial);
    for(let i=0;i<180;i++){
      const run=(trial?save.trial?.run:save.campaign.active)!;if(run.nodeId==='c4.goodbye')break;
      save=reduceSave(save,{type:'command',target:trial?'trial':'campaign',command:command4(run)});
    }
    const page=await context.newPage();await page.setViewportSize({width:320,height:568});
    const route='/play/4'+(trial?'?mode=trial':'');await openOffline(page,save,route);
    await expect(page.getByRole('heading',{name:'Как попрощаемся?',exact:true})).toBeVisible();
    await expect(page.locator('.choices button')).toHaveCount(3);
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
    await page.screenshot({path:'work/CHAPTER4_GOODBYE_CHOICES.png',fullPage:true,animations:'disabled'});
    await page.getByRole('button',{name:label,exact:false}).click();
    await expect(page.locator('[data-node="c4.goodbye.'+choice+'"]').first()).toBeVisible();
    const raw=JSON.parse(await page.evaluate(k=>localStorage.getItem(k)!,key));await openOffline(page,raw,route);
    await expect(page.locator('[data-node="c4.goodbye.'+choice+'"]').first()).toBeVisible();
    if(choice==='none')await expect(page.getByText('Давай сегодня без объятий. До завтра.',{exact:true})).toBeVisible();
    await finishGoodbye(page);
    await expect(page.getByRole('heading',{name:'Созвездие передышки',exact:true})).toBeVisible();
    const after=JSON.parse(await page.evaluate(k=>localStorage.getItem(k)!,key));
    expect(after.campaign.records[4].story).toMatchObject({bench:'space',bond:'friendly',wish:'calm'});
    if(trial)expect(after.campaign).toEqual(base.campaign);
    await page.close();
  }
});
