import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/index';
import './assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initStorage } from './core/data/storage';

const container = document.getElementById('app');
const root = createRoot(container);
initStorage();
root.render(<App />);
