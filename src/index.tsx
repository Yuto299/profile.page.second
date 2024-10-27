import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  );
}
