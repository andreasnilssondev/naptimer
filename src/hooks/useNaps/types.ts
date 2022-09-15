import { ReactNode } from 'react';

export interface Nap {
  id: string;
  start: number;
  end?: number;
}

export interface EditNapInput {
  start?: number;
  end?: number;
}

export interface ContextValues {
  naps: Nap[];
  addNap: (startTime: Date) => void;
  removeNap: (id: string) => void;
  editNap: (id: string, napToEdit: EditNapInput) => void;
}

export interface NapProviderProps {
  children?: ReactNode;
}
