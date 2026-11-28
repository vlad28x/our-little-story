import { expect, test } from '@playwright/test';
import { completeSave } from './helpers';

const key = `five-meetings:${process.env.VITE_BASE_PATH || '/'}:save`;

test('the map starts a chapter and reload restores the current scene', async ({ page }) => {
  await page.goto('./');
  await page.getByRole('button', { name: 'К встречам', exact: true }).click();
  await page.locator('.chapter-list li').first().getByRole('button', { name: 'Начать встречу' }).click();
  await expect(page.locator('[data-node="c1.prologue"]')).toBeVisible();
  await page.getByRole('button', { name: 'Дальше' }).click();
  const line = page.getByText('На вывеске — «Пауза».', { exact: false });
  await expect(line).toBeVisible();
  await page.reload();
  await expect(page.locator('[data-node="c1.prologue"]')).toBeVisible();
  await expect(line).toBeVisible();
});

test('closing a trial keeps the completed campaign', async ({ page }) => {
  const save = completeSave();
  await page.addInitScript(({ key, save }) => {
    if (!localStorage.getItem(key)) localStorage.setItem(key, JSON.stringify(save));
  }, { key, save });
  await page.goto('./#/chapters');
  await page.getByRole('button', { name: 'Посмотреть другой вариант' }).click();
  await expect(page.locator('[data-node="c1.prologue"]')).toBeVisible();
  await page.getByRole('button', { name: 'Дальше' }).click();
  await page.getByRole('button', { name: 'Открыть меню' }).click();
  await page.getByRole('button', { name: 'Закрыть пробный вариант', exact: true }).click();
  await page.getByRole('button', { name: 'Закрыть вариант', exact: true }).click();
  await expect(page.locator('.chapter-map')).toBeVisible();
  await page.reload();
  const stored = await page.evaluate(key => JSON.parse(localStorage.getItem(key)!), key);
  expect(stored.trial).toBeNull();
  expect(stored.campaign).toEqual(save.campaign);
});
