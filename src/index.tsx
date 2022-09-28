import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SelectedDateProvider } from 'hooks/useSelectedDate';
import { NapProvider } from 'hooks/useNaps';
import { Root } from './pages/Root';
import './index.css';

createRoot(document.getElementById('app') as HTMLElement).render(
  <StrictMode>
    <SelectedDateProvider>
      <NapProvider>
        <Root />
      </NapProvider>
    </SelectedDateProvider>
  </StrictMode>
);
