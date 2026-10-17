import { test,expect } from '@playwright/test';
import { openOffline } from './offlineApp';
import { completeSave } from './helpers';
import { initialState } from '../src/state/initialState';
import { chapters } from '../src/content/chapters/manifest';
const key='five-meetings:/:save';

test('code input is visible at the top on 320px, locked chapter focuses it, errors recover and Enter opens a chapter',async({page})=>{
  await page.setViewportSize({width:320,height:568});const base=completeSave();await openOffline(page,base);
  const input=page.getByLabel('Код',{exact:true}),submit=page.getByRole('button',{name:'Открыть встречу',exact:true});
  await expect(input).toBeVisible();const box=await input.boundingBox();expect(box).not.toBeNull();expect(box!.y).toBeGreaterThanOrEqual(0);expect(box!.y+box!.height).toBeLessThanOrEqual(568);await expect(submit).toBeDisabled();const buttonBox=await submit.boundingBox();expect(buttonBox).not.toBeNull();expect(buttonBox!.y+buttonBox!.height).toBeLessThanOrEqual(568);
  expect(await page.locator('.code-entry').evaluate(el=>!!(el.compareDocumentPosition(document.querySelector('.chapter-list')!)&Node.DOCUMENT_POSITION_FOLLOWING))).toBe(true);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);await page.screenshot({path:'outputs/CHAPTER_CODE_MOBILE_PREVIEW.png',fullPage:false,animations:'disabled'});
  await page.locator('.chapter-list li').nth(1).getByRole('button',{name:'Ввести код',exact:true}).click();await expect(input).toBeFocused();
  await input.fill('wrong-code');await submit.click();await expect(page.getByRole('status')).toContainText('Код не подошёл');await expect(input).toHaveAttribute('aria-invalid','true');expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!).unlocked,key)).toEqual(base.unlocked);
  await input.fill(` ${chapters.find(c=>c.id===2)!.code!.toLowerCase()} `);await expect(input).toHaveAttribute('aria-invalid','false');await input.press('Enter');await expect(page.getByRole('status')).toContainText('Открыта встреча 2');await expect(input).toHaveValue('');
  const saved=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);expect(saved.campaign).toEqual(base.campaign);expect(saved.unlocked).toContain(2);await page.getByRole('button',{name:'Начать встречу 2',exact:false}).click();await expect(page.locator('[data-node="c2.arrival"]')).toBeVisible();
});

test('entering a later code early preserves progress and cannot bypass previous chapters',async({page,context})=>{
  const base=initialState();await openOffline(page,base);await page.getByLabel('Код',{exact:true}).fill(chapters.find(c=>c.id===3)!.code!);await page.getByRole('button',{name:'Открыть встречу',exact:true}).click();
  await expect(page.getByRole('status')).toContainText('Код сохранён');await expect(page.locator('.code-open-chapter')).toHaveCount(0);const saved=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)!),key);expect(saved.unlocked).toContain(3);expect(saved.campaign).toEqual(base.campaign);
  const restored=await context.newPage();await openOffline(restored,saved,'/play/3');await expect(restored.getByRole('heading',{name:'Эта встреча ждёт на карте глав'})).toBeVisible();await restored.getByRole('button',{name:'К главам',exact:true}).click();await expect(restored.getByLabel('Код',{exact:true})).toBeVisible();expect(await restored.evaluate(k=>JSON.parse(localStorage.getItem(k)!).unlocked,key)).toContain(3);
});
