import { createContext, Dispatch, SetStateAction } from 'react';

interface ContextValues {
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
}

export const Context = createContext<ContextValues | undefined>(undefined);
