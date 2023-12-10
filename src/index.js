//kirjastot ja komponentit jne
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//tehään paikka root
const root = ReactDOM.createRoot(document.getElementById('root'));
//käsketään reactia tekemään (renderöimään) tämä sovellus paikkaan root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);