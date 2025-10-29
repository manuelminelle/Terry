import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { TrainingProvider } from './context/TrainingContext';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <TrainingProvider>
        <App />
      </TrainingProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
