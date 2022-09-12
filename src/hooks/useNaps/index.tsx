import { useContext } from 'react';
import { Context } from './Context';

export function useNaps() {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('Missing provider for "useNaps" hook');
  }

  return context;
}

export { NapProvider } from './NapProvider';
