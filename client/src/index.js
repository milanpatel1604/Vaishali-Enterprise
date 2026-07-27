import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

// Apply saved dark mode setting synchronously before the first paint
try {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') {
        document.documentElement.classList.add('dark-mode');
    } else if (saved === 'false') {
        document.documentElement.classList.remove('dark-mode');
    }
} catch (e) {
    // ignore (e.g. localStorage not available)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

document.documentElement.classList.add('js-loaded');
