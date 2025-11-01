import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './components/App';
import AppExp from './components/AppExp';
import './styles/index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    {/* <App /> */}
    <AppExp />
  </StrictMode>
);
