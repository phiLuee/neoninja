import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/AppComponent/App';
import './styles/index.css';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
