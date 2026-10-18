import { expect,type Page } from '@playwright/test';
export async function expectSimpleResult(page:Page){
  await expect(page.locator('.result-actions button')).toHaveText(['К главам']);
  for(const name of ['Сохранить открытку','Поделиться','Копировать текст'])await expect(page.getByRole('button',{name,exact:true})).toHaveCount(0);
  await expect(page.getByText('Не получается скачать изображение?',{exact:true})).toHaveCount(0);
}
