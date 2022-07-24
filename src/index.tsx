import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './style.css';
import { ContextProvider } from 'Context';
import App from "./App";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
          <App />
        <Toaster position={'bottom-right'} />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
