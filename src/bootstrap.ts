import './styles/game.css';
// Keep a recovery screen available even if loading an application module fails.
void import('./main').catch((error:unknown)=>{
  console.error('Не удалось загрузить игру:',error);
  const root=document.getElementById('root');if(!root)return;
  const main=document.createElement('main');main.className='game-shell';
  const section=document.createElement('section');section.className='page-content recovery';section.setAttribute('role','alert');
  const title=document.createElement('h1');title.textContent='Не удалось загрузить игру';
  const text=document.createElement('p');text.textContent='Сохранения не удалены. Обнови страницу, чтобы загрузить актуальные файлы игры.';
  const button=document.createElement('button');button.className='primary';button.textContent='Обновить игру';button.onclick=()=>location.reload();
  const details=document.createElement('pre');details.className='boot-error';details.textContent=error instanceof Error?error.message:String(error);
  section.append(title,text,button,details);main.append(section);root.replaceChildren(main);
});
