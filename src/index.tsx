import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Toaster } from 'react-hot-toast';
import './style.css';
import { ContextProvider } from 'Context';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App />
        <Toaster position={'bottom-center'} />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
