import { useState } from 'react';
import { Context } from './Context';
import { SelectedDateProviderProps } from './types';

export function SelectedDateProvider(props: SelectedDateProviderProps) {
  const { children } = props;
  const [selectedDate, setSelectedDate] = useState(new Date());
  return <Context.Provider value={{ selectedDate, setSelectedDate }}>{children}</Context.Provider>;
}
