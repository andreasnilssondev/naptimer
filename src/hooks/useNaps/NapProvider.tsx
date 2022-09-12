import { useState } from 'react';
import {
  addDays,
  addHours,
  differenceInDays,
  getDay,
  getMilliseconds,
  set,
  setDate,
  setDay,
  setMilliseconds,
  startOfDay,
} from 'date-fns';
import { Context } from './Context';
import { NapProviderProps, Nap } from './types';

function getNaps(): Nap[] {
  return JSON.parse(localStorage.getItem('naps') ?? '[]');
}

function saveNaps(naps: Nap[]) {
  localStorage.setItem('naps', JSON.stringify(naps));
}

export function NapProvider(props: NapProviderProps) {
  const { children } = props;
  const [naps, setNaps] = useState(getNaps());

  const addNap = (startTime: Date) => {
    const currentTime = new Date();
    const daysDifference = differenceInDays(startOfDay(startTime), startOfDay(currentTime));
    const uniqueStartTime = addDays(currentTime, daysDifference);

    const newNaps = naps.concat({
      start: uniqueStartTime.getTime(),
      end: addHours(startTime, 1).getTime(),
    });

    if (naps.some(nap => nap.start === uniqueStartTime.getTime())) {
      throw new Error('startTime of nap must be unique');
    }

    setNaps(newNaps);
    saveNaps(newNaps);
  };

  const removeNap = (startTime: Date) => {
    const newNaps = naps.filter(nap => nap.start !== startTime.getTime());
    setNaps(newNaps);
    saveNaps(newNaps);
  };

  return <Context.Provider value={{ naps, addNap, removeNap }}>{children}</Context.Provider>;
}
