import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SelectedDateProvider } from 'hooks/useSelectedDate';
import { NapProvider } from 'hooks/useNaps';
import { GlobalStyles } from 'components/GlobalStyles';
import App from './App';

createRoot(document.getElementById('app') as HTMLElement).render(
  <StrictMode>
    <SelectedDateProvider>
      <NapProvider>
        <GlobalStyles />
        <App />
      </NapProvider>
    </SelectedDateProvider>
  </StrictMode>
);
