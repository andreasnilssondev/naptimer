import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface ContextValues {
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
}

export interface SelectedDateProviderProps {
  children?: ReactNode;
}
