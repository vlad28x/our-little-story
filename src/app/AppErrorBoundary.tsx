import { Component,type ErrorInfo,type ReactNode } from 'react';
type Props={children:ReactNode};
type State={error:Error|null};
export class AppErrorBoundary extends Component<Props,State>{
  state:State={error:null};
  static getDerivedStateFromError(error:unknown):State{return {error:error instanceof Error?error:new Error(String(error))};}
  componentDidCatch(error:Error,info:ErrorInfo){console.error('Не удалось отобразить игру:',error,info.componentStack);}
  render(){
    const error=this.state.error;if(!error)return this.props.children;
    return <main className="game-shell"><section className="page-content recovery" role="alert"><span className="eyebrow">МАЛЕНЬКАЯ ПАУЗА</span><h1>Не удалось показать сцену</h1><p>Сохранение не удалено. Попробуй обновить страницу — история загрузится из сохранённого прогресса.</p><div className="stack"><button className="primary" onClick={()=>location.reload()}>Обновить игру</button><button onClick={()=>{location.hash='/chapters';this.setState({error:null});}}>Вернуться к главам</button></div><details className="error-details" open><summary>Текст ошибки</summary><p>Если ошибка повторяется, пришли эту строку разработчику:</p><pre>{error.message}</pre></details></section></main>;
  }
}
