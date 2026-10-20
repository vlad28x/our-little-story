import { test,expect,type Locator,type Page } from '@playwright/test';

async function expectLoaded(image:Locator) {
  await expect(image).toBeVisible();
  await expect.poll(()=>image.evaluate(el=>{
    const img=el as HTMLImageElement;
    return img.complete&&img.naturalWidth>0;
  })).toBe(true);
}

async function startScene(page:Page) {
  await page.goto('./');
  await page.getByRole('button',{name:'К встречам',exact:true}).click();await page.locator('.chapter-list li').first().getByRole('button',{name:'Начать встречу',exact:false}).click();
  await expect(page.locator('[data-node="c1.entry"]')).toBeVisible();
}

async function reachAwkwardExpression(page:Page) {
  for(let i=0;i<4;i++)await page.getByRole('button',{name:'Дальше',exact:false}).click();
}

test('a failed expression keeps the background and cat, then retries only the failed asset',async({page})=>{
  let unavailable=true;
  const attempts:string[]=[];
  await page.route('**/assets/characters/vlad/city-awkward.webp*',route=>{
    attempts.push(route.request().url());
    return unavailable?route.abort('failed'):route.continue();
  });
  await startScene(page);
  await expectLoaded(page.locator('.scene-background'));
  await reachAwkwardExpression(page);
  await expect(page.getByRole('button',{name:'Повторить загрузку'})).toBeVisible();
  await expectLoaded(page.locator('.scene-background'));
  await expectLoaded(page.locator('.scene-cat'));
  const cursor=await page.locator('[data-node]').getAttribute('data-node');
  unavailable=false;
  await page.getByRole('button',{name:'Повторить загрузку'}).click();
  await expectLoaded(page.locator('.character'));
  await expect(page.locator('.art-error')).toHaveCount(0);
  expect(await page.locator('[data-node]').getAttribute('data-node')).toBe(cursor);
  expect(attempts).toHaveLength(2);
  expect(attempts[1]).not.toBe(attempts[0]);
});

test('an expression failure does not stick when the scene moves to another image',async({page})=>{
  await page.route('**/assets/characters/vlad/city-awkward.webp*',route=>route.abort('failed'));
  await startScene(page);
  await reachAwkwardExpression(page);
  await expect(page.getByRole('button',{name:'Повторить загрузку'})).toBeVisible();
  await page.getByRole('button',{name:'Дальше',exact:false}).click();
  await expect(page.locator('[data-node="c1.door"]')).toBeVisible();
  await expectLoaded(page.locator('.character'));
  await expectLoaded(page.locator('.scene-background'));
  await expect(page.locator('.art-error')).toHaveCount(0);
});

test('a failed background preserves the character and cat and can recover',async({page})=>{
  let unavailable=true;
  await page.route('**/assets/backgrounds/cafe-entry.webp*',route=>unavailable?route.abort('failed'):route.continue());
  await page.goto('./');
  await expect(page.getByRole('button',{name:'Повторить загрузку'})).toBeVisible();
  await expectLoaded(page.locator('.character'));
  await expectLoaded(page.locator('.scene-cat'));
  unavailable=false;
  await page.getByRole('button',{name:'Повторить загрузку'}).click();
  await expectLoaded(page.locator('.scene-background'));
  await expect(page.locator('.art-error')).toHaveCount(0);
});
