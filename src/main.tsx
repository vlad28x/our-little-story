import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TelegramEntry } from './telegram/TelegramEntry';
import { App } from './app/App';
import { AppErrorBoundary } from './app/AppErrorBoundary';
import './styles/game.css';
createRoot(document.getElementById('root')!).render(<StrictMode><AppErrorBoundary><TelegramEntry><App/></TelegramEntry></AppErrorBoundary></StrictMode>);
