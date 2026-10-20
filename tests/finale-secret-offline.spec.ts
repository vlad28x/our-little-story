import { test,expect,type Page } from '@playwright/test';
import { openOffline } from './offlineApp';
import { finishFive } from './chapter5Helpers';
import { finishFour } from './chapter4Helpers';
import { finishSix,sixAt,sixthCode } from './chapter6Helpers';
import { reduceSave } from '../src/state/reducer';
import { chapters } from '../src/content/chapters/manifest';
import { parseSave } from '../src/persistence/validateSave';
const key='five-meetings:/:save';
const secretName='Псс… Маленький секрет';
const state=async(page:Page)=>parseSave(await page.evaluate(k=>localStorage.getItem(k)!,key));
const readSecret=async(page:Page)=>{await page.getByRole('button',{name:secretName,exact:true}).click();await page.getByRole('button',{name:'И какие же?',exact:true}).click();};

test('the devil is visible beside the postcard below the invitation; the optional dialogue closes without changing the save',async({context})=>{
  for(const [width,height] of [[320,568],[390,844],[785,600],[960,900]]){
    const page=await context.newPage();await page.setViewportSize({width,height});await page.emulateMedia({reducedMotion:'reduce'});
    const save=finishFive(undefined,{memory:'skipped',ending:'romantic'});await openOffline(page,save,'/result/5?source=campaign');
    await page.getByRole('button',{name:'Продолжить разговор',exact:false}).click();await page.getByRole('button',{name:'Продолжить разговор',exact:false}).click();const peek=page.getByRole('button',{name:secretName,exact:true});await peek.scrollIntoViewIfNeeded();const box=(await peek.boundingBox())!;
    expect(box.y).toBeGreaterThanOrEqual(0);expect(box.y+box.height).toBeLessThan(height);expect(box.x).toBeGreaterThanOrEqual(0);expect(box.x+box.width).toBeLessThanOrEqual(width);await expect(peek).toHaveCSS('animation-name','none');
    await expect.poll(()=>peek.locator('.secret-peek-body').evaluate(image=>(image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    await expect(peek.locator('.secret-peek-body')).toHaveCSS('clip-path','none');await expect(peek.locator('img')).toHaveCount(1);expect(await peek.locator('.secret-peek-crop').evaluate(el=>getComputedStyle(el,'::after').content)).toBe('none');
    const sprite=(await peek.locator('.secret-peek-body').boundingBox())!,frame=(await page.locator('.final-postcard .postcard').boundingBox())!;
    const silhouette=await peek.locator('img').evaluate(el=>{const image=el as HTMLImageElement,canvas=document.createElement('canvas');canvas.width=image.naturalWidth;canvas.height=image.naturalHeight;const ctx=canvas.getContext('2d')!;ctx.drawImage(image,0,0);const rowEnd=(y:number)=>{const row=ctx.getImageData(0,Math.round(canvas.height*y),canvas.width,1).data;for(let x=canvas.width-1;x>=0;x--)if(row[x*4+3]>180)return x;return 0;};return {edge:canvas.width*.762,hair:rowEnd(.3),hand:rowEnd(.65),width:canvas.width};});
    expect(silhouette.hair).toBeLessThanOrEqual(silhouette.edge+1);expect(silhouette.hand-silhouette.edge).toBeGreaterThan(silhouette.width*.05);
    // The final raster has a transparent cut at76.2% and an entire hand
    // protruding beyond it. There is no drawn line or CSS hand mask.
    expect(sprite.width).toBeGreaterThanOrEqual(110);if(width<=600)expect(sprite.width).toBeLessThanOrEqual(148);expect(Math.abs(sprite.x+sprite.width*.762-frame.x-frame.width)).toBeLessThan(3);const badge=(await page.locator('.postcard-number').boundingBox())!;expect(badge.x+badge.width).toBeLessThan(box.x);
    await expect(page.locator('.after-credits-teaser,.invitation-privacy')).toHaveCount(0);await expect(page.locator('.invitation-options button').nth(0)).toHaveText(/Игровой вечер/);await expect(page.locator('.invitation-options button').nth(1)).toHaveText(/Киновечер/);await expect(page.locator('.invitation-options')).not.toContainText('у тебя');
    await page.screenshot({path:`outputs/FINALE_SECRET_${width}.png`,fullPage:false,animations:'disabled'});
    await peek.focus();await page.keyboard.press('Enter');const dialog=page.getByRole('dialog',{name:'Маленький секрет',exact:true});await expect(dialog).toBeVisible();await expect(dialog).toContainText('так, титры были. а кто сказал, что всё?');
    const portrait=(await dialog.locator('.secret-portrait').boundingBox())!,surface=(await dialog.locator('.modal-surface').boundingBox())!;expect(portrait.y).toBeGreaterThanOrEqual(0);expect(portrait.y).toBeLessThan(surface.y-40);await expect(dialog).toHaveCSS('overflow','visible');expect(await dialog.locator('.secret-portrait').evaluate(el=>el.parentElement?.tagName)).toBe('DIALOG');await expect.poll(()=>dialog.locator('.secret-portrait img').evaluate(image=>(image as HTMLImageElement).naturalWidth)).toBe(640);
    for(const button of await dialog.getByRole('button').all()){const b=(await button.boundingBox())!;expect(b.height).toBeGreaterThanOrEqual(48);expect(b.y).toBeGreaterThanOrEqual(0);expect(b.y+b.height).toBeLessThanOrEqual(height);}
    await page.screenshot({path:`outputs/FINALE_SECRET_DIALOG_${width}.png`,fullPage:false,animations:'disabled'});await page.keyboard.press('Escape');await expect(dialog).toHaveCount(0);await expect(peek).toBeFocused();expect(await state(page)).toEqual(save);
    await peek.click();await page.getByRole('button',{name:'Пока оставим интригу',exact:true}).click();expect(await state(page)).toEqual(save);await peek.click();await page.getByRole('button',{name:'Закрыть',exact:true}).click();await expect(peek).toBeFocused();expect(await state(page)).toEqual(save);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);await page.close();
  }
});

test('the invitation has its own inset surface with readable dialogue, choices and reaction',async({context})=>{
  for(const width of [320,390,620,960]){
    const page=await context.newPage();await page.setViewportSize({width,height:900});const save=reduceSave(finishFive(),{type:'continuation',value:'game'});await openOffline(page,save,'/result/5?source=campaign');
    const panel=page.locator('.final-conversation .invitation-panel'),bounds=(await panel.boundingBox())!;await expect(panel).toHaveCSS('border-top-style','solid');
    for(const item of [panel.locator('h2'),panel.locator('.invitation-speech'),panel.locator('.invitation-options'),panel.locator('.invitation-response')]){const box=(await item.boundingBox())!;expect(box.x-bounds.x).toBeGreaterThanOrEqual(18);expect(bounds.x+bounds.width-box.x-box.width).toBeGreaterThanOrEqual(18);}
    for(const button of await panel.locator('.invitation-options button').all()){const b=(await button.boundingBox())!;expect(b.height).toBeGreaterThanOrEqual(48);expect(b.x).toBeGreaterThan(bounds.x+16);expect(b.x+b.width).toBeLessThan(bounds.x+bounds.width-16);}
    await page.locator('.final-conversation').screenshot({path:`outputs/FINALE_INVITATION_${width}.png`,animations:'disabled'});expect(await state(page)).toEqual(save);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);await page.close();
  }
});

test('a short landscape viewport scrolls the code form without clipping the portrait or close button',async({page})=>{
  await page.setViewportSize({width:667,height:375});await openOffline(page,finishFive(),'/result/5');await readSecret(page);const dialog=page.getByRole('dialog',{name:'Маленький секрет',exact:true});
  const portrait=(await dialog.locator('.secret-portrait').boundingBox())!;expect(portrait.y).toBeGreaterThanOrEqual(0);const input=page.getByLabel('Код от Влада',{exact:true});await input.fill('not-a-code');await input.press('Enter');await expect(input).toHaveAttribute('aria-invalid','true');await page.getByRole('button',{name:'Пока оставим интригу',exact:true}).scrollIntoViewIfNeeded();const close=dialog.getByRole('button',{name:'Закрыть',exact:true}),box=(await close.boundingBox())!;expect(box.y).toBeGreaterThanOrEqual(0);expect(box.y+box.height).toBeLessThanOrEqual(375);await close.click();await expect(page.getByRole('button',{name:secretName,exact:true})).toBeFocused();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});

test('the secret accepts only chapter six, persists the right and waits for an explicit start',async({page,context})=>{
  const save=reduceSave(finishFive(),{type:'continuation',value:'decline'});await openOffline(page,save,'/result/5');await readSecret(page);
  const input=page.getByLabel('Код от Влада',{exact:true});await expect(input).toBeFocused();await expect(page.getByRole('button',{name:'Проверить код',exact:true})).toBeDisabled();await input.fill('НЕВЕРНО');await input.press('Enter');await expect(input).toHaveAttribute('aria-invalid','true');expect(await state(page)).toEqual(save);
  await input.fill(chapters.find(c=>c.id===7)!.code!);await input.press('Enter');await expect(page.getByRole('status')).toContainText('Это код другой встречи');expect(await state(page)).toEqual(save);
  await input.fill(` ${sixthCode.toLowerCase()} `);await input.press('Enter');await expect(page.getByRole('button',{name:'Начать шестую встречу',exact:false})).toBeVisible();const unlocked=await state(page);expect(unlocked.campaign).toEqual(save.campaign);expect(unlocked.continuation).toBe('decline');expect(unlocked.unlocked).toEqual([...save.unlocked,6]);expect(unlocked.revision).toBe(save.revision+1);expect(await page.evaluate(()=>location.hash)).toBe('#/result/5');
  const reopened=await context.newPage();await openOffline(reopened,unlocked,'/result/5');await readSecret(reopened);await expect(reopened.getByLabel('Код от Влада',{exact:true})).toHaveCount(0);await reopened.getByRole('button',{name:'Начать шестую встречу',exact:false}).click();await expect(reopened.locator('[data-node="c6.r3.entry"]')).toBeVisible();const started=await state(reopened);expect(started.campaign.records).toEqual(save.campaign.records);expect(started.continuation).toBe('decline');expect(started.campaign.active?.attemptId).toBeTruthy();await reopened.close();
});

test('an open sixth chapter resumes its cursor and a completed sixth opens its own result',async({context})=>{
  for(const save of [sixAt('c6.map'),finishSix()]){
    const page=await context.newPage();await openOffline(page,save,'/result/5?source=campaign');await readSecret(page);
    if(save.campaign.active){await page.getByRole('button',{name:'Продолжить шестую встречу',exact:false}).click();await expect(page.locator('[data-node="c6.r3.route"]')).toBeVisible();}else{await page.getByRole('button',{name:'Мой финал шестой встречи',exact:false}).click();await expect(page.getByRole('heading',{name:'Рука в руке',exact:true})).toBeVisible();}
    expect(await state(page)).toEqual(save);await page.close();
  }
});

test('album postcards, an active trial and unavailable fifth results do not show a shortcut',async({context})=>{
  const main=finishFive(),trial=reduceSave(main,{type:'trial',chapter:5});
  for(const [save,route] of [[main,'/result/5?card=c5.friendly'],[trial,'/result/5?source=campaign'],[finishFour(),'/result/5'],[finishFour(),'/result/4']] as const){
    const page=await context.newPage();await openOffline(page,save,route);await expect(page.getByRole('button',{name:secretName,exact:true})).toHaveCount(0);expect(await state(page)).toEqual(save);await page.close();
  }
});
