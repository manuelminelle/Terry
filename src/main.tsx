import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { TrainingProvider } from './context/TrainingContext';
import './styles/index.css';

function resolveRouterBaseName(rawBaseUrl: string): string {
  if (typeof window !== 'undefined') {
    if (!rawBaseUrl || rawBaseUrl === '/' || rawBaseUrl === '') {
      return '/';
    }

    if (rawBaseUrl === '.' || rawBaseUrl === './') {
      const basePath = new URL('.', window.location.href).pathname;
      if (!basePath || basePath === '/') {
        return '/';
      }
      return basePath.replace(/\/+$/, '');
    }
  }

  if (!rawBaseUrl || rawBaseUrl === '/' || rawBaseUrl === '' || rawBaseUrl === '.' || rawBaseUrl === './') {
    return '/';
  }

  return rawBaseUrl.endsWith('/') && rawBaseUrl !== '/' ? rawBaseUrl.slice(0, -1) : rawBaseUrl;
}

const routerBaseName = resolveRouterBaseName(import.meta.env.BASE_URL);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={routerBaseName}>
      <TrainingProvider>
        <App />
      </TrainingProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
