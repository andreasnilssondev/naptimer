import { ReactNode } from 'react';

export interface Nap {
  start: number;
  end: number;
}

export interface ContextValues {
  naps: Nap[];
  addNap: (startTime: Date) => void;
  removeNap: (startTime: Date) => void;
}

export interface NapProviderProps {
  children?: ReactNode;
}
