import { useState } from 'react';
import { Context } from './Context';
import { CurrentDateProviderProps } from './types';

export function CurrentDateProvider(props: CurrentDateProviderProps) {
  const { children } = props;
  const [currentDate, setCurrentDate] = useState(new Date());
  return <Context.Provider value={{ currentDate, setCurrentDate }}>{children}</Context.Provider>;
}
