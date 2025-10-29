import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { TrainingProvider } from './context/TrainingContext';
import './styles/index.css';

const rawBaseUrl = import.meta.env.BASE_URL;
const sanitizedBaseUrl = rawBaseUrl.endsWith('/') ? rawBaseUrl.slice(0, -1) : rawBaseUrl;
const routerBaseName = !sanitizedBaseUrl || sanitizedBaseUrl === '.' ? '/' : sanitizedBaseUrl;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={routerBaseName}>
      <TrainingProvider>
        <App />
      </TrainingProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
