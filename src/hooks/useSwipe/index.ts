import { useContext } from 'react';
import { Context } from './Context';

export function useSwipe() {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('Missing provider for "useSwipe" hook');
  }

  return context;
}

export { SwipeProvider } from './SwipeProvider';
