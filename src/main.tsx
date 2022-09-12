import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CurrentDateProvider } from 'hooks/useCurrentDate';
import { NapProvider } from 'hooks/useNaps';
import App from './App';
import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <NapProvider>
      <CurrentDateProvider>
        <App />
      </CurrentDateProvider>
    </NapProvider>
  </StrictMode>
);
