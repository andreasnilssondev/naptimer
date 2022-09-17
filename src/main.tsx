import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SelectedDateProvider } from 'hooks/useSelectedDate';
import { NapProvider } from 'hooks/useNaps';
import App from './App';
import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <SelectedDateProvider>
      <NapProvider>
        <App />
      </NapProvider>
    </SelectedDateProvider>
  </StrictMode>
);
