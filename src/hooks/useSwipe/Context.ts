import { createContext } from 'react';

interface ContextValues {
  percentageSwiped: number;
  transitionInProgress: boolean;
  onTransitionEnd: () => void;
}

export const Context = createContext<ContextValues | undefined>(undefined);
