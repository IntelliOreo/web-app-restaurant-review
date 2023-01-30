import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom'
import App from './App.jsx';
import styles from './style.css';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter className='main' >
      <App />
      
    </BrowserRouter>
  </React.StrictMode>  
);