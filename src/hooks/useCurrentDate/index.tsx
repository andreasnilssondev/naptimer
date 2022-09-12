import { useContext } from 'react';
import { Context } from './Context';

export function useCurrentDate() {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('Missing provider for "useCurrentDate" hook');
  }

  return context;
}

export { CurrentDateProvider } from './CurrentDateProvider';
