import { useContext } from 'react';
import { Context } from './Context';

export function useSelectedDate() {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('Missing provider for "useSelectedDate" hook');
  }

  return context;
}

export { SelectedDateProvider } from './SelectedDateProvider';
