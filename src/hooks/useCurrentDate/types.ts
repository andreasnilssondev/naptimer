import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface ContextValues {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
}

export interface CurrentDateProviderProps {
  children?: ReactNode;
}
