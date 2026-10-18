import { test,expect } from '@playwright/test';
import { openOffline } from './offlineApp';
import { startFour,command4,finishFour,defaultFourth } from './chapter4Helpers';
import { reduceSave } from '../src/state/reducer';
import { constellationDrawings,drawingStars,drawingSegments,skyShapes } from '../src/minigames/constellationModel';
const key='five-meetings:/:save';
function atDrawing(){let save=startFour();for(let i=0;i<150&&save.campaign.active?.nodeId!=='c4.stars';i++)save=reduceSave(save,{type:'command',target:'campaign',command:command4(save.campaign.active!)});return save;}

for(const shape of skyShapes)test(`approved ${shape} drawing works on a 320px phone, including separate contours, pause and the same postcard`,async({page,context})=>{
  await page.setViewportSize({width:320,height:568});const save=atDrawing(),errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));await openOffline(page,save,'/play/4');
  await expect(page.locator('.scene-stage')).toBeHidden();await page.getByRole('button',{name:constellationDrawings[shape].label,exact:true}).click();
  const stars=drawingStars(shape),finish=page.getByRole('button',{name:'Оставить наше созвездие',exact:false});await expect(finish).toBeDisabled();
  for(const star of stars){
    const target=page.getByRole('button',{name:`Звезда ${star.id+1}`,exact:true});await expect(page.locator('.star-target')).toHaveCount(1);const box=(await target.boundingBox())!;expect(box.width).toBeGreaterThanOrEqual(48);expect(box.height).toBeGreaterThanOrEqual(48);
    if(star.id===3){await page.getByRole('button',{name:'Открыть меню',exact:true}).click();await expect(target).toBeDisabled();await page.getByRole('button',{name:'Вернуться к истории',exact:true}).click();await expect(target).toBeEnabled();}
    if(star.id>0&&star.stroke!==stars[star.id-1].stroke)await expect(page.locator('.sky-status')).toContainText('Новый контур');
    await target.click();await expect(page.getByLabel('Соединено звёзд',{exact:true})).toHaveText(`${star.id+1} / ${stars.length}`);
    const lines=await page.locator('.star-board .sky-lines line').evaluateAll(elements=>elements.map(el=>['x1','y1','x2','y2'].map(a=>Number(el.getAttribute(a)))));
    expect(lines).toEqual(drawingSegments(shape,star.id+1).map(s=>[...s.from,...s.to]));
  }
  await expect(finish).toBeEnabled();await expect(page.locator('.star-board .sky-details')).toHaveCount(1);const fullLines=await page.locator('.star-board .sky-lines').innerHTML();
  expect(JSON.parse((await page.evaluate(k=>localStorage.getItem(k),key))!)).toEqual(save);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.locator('.star-board').scrollIntoViewIfNeeded();await page.screenshot({path:`outputs/CONSTELLATION_GAME_${shape.toUpperCase()}_320.png`,fullPage:false,animations:'disabled'});
  await page.getByRole('button',{name:'Отменить последнюю звезду',exact:true}).click();await expect(finish).toBeDisabled();await expect(page.locator('.star-board .sky-details')).toHaveCount(0);await page.getByRole('button',{name:`Звезда ${stars.length}`,exact:true}).click();
  await finish.click();const after=JSON.parse((await page.evaluate(k=>localStorage.getItem(k),key))!);expect(after.campaign.active.results.constellation).toEqual({kind:'constellation',outcome:shape,usedPreset:false});expect(after.campaign.active.turn).toBe(save.campaign.active!.turn+1);
  const postcard=await context.newPage();await openOffline(postcard,finishFour(undefined,{...defaultFourth,result:{kind:'constellation',outcome:shape,usedPreset:false}}),'/result/4');expect(await postcard.locator('.postcard .sky-lines').innerHTML()).toBe(fullLines);await expect(postcard.getByText(constellationDrawings[shape].name,{exact:true})).toBeVisible();expect(errors).toEqual([]);
});

test('changing a sketch resets only the local drawing and keyboard completion focuses the explicit finish',async({page})=>{
  const save=atDrawing();await openOffline(page,save,'/play/4');await page.getByRole('button',{name:'Кот',exact:true}).click();await page.getByRole('button',{name:'Звезда 1',exact:true}).click();await page.getByRole('button',{name:'Другой рисунок',exact:true}).click();
  await page.getByRole('button',{name:'Геймпад',exact:true}).focus();await page.keyboard.press('Enter');await expect(page.getByLabel('Соединено звёзд',{exact:true})).toHaveText('0 / 12');
  const target=page.getByRole('button',{name:'Звезда 1',exact:true});await target.dispatchEvent('keydown',{key:'Enter',repeat:true});await expect(page.getByLabel('Соединено звёзд',{exact:true})).toHaveText('0 / 12');
  for(let i=0;i<12;i++)await page.keyboard.press('Enter');await expect(page.getByRole('button',{name:'Оставить наше созвездие',exact:false})).toBeFocused();expect(JSON.parse((await page.evaluate(k=>localStorage.getItem(k),key))!)).toEqual(save);
});
