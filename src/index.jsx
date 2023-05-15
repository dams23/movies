import React from 'react';
import ReactDOM from 'react-dom/client';
import MoviesApp from './MoviesApp';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoviesApp />

  </React.StrictMode>
);
