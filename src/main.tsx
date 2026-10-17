import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GameProvider } from './app/GameProvider';
import { App } from './app/App';
import { AppErrorBoundary } from './app/AppErrorBoundary';
import './styles/game.css';
createRoot(document.getElementById('root')!).render(<StrictMode><AppErrorBoundary><GameProvider><App/></GameProvider></AppErrorBoundary></StrictMode>);
