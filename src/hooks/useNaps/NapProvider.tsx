import { useState } from 'react';
import { addDays, addHours, differenceInDays, startOfDay } from 'date-fns';
import { Context } from './Context';
import { NapProviderProps, Nap, EditNapInput } from './types';

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
      id: String(uniqueStartTime.getTime()),
      start: uniqueStartTime.getTime(),
    });

    if (naps.some(nap => nap.start === uniqueStartTime.getTime())) {
      throw new Error('startTime of nap must be unique');
    }

    setNaps(newNaps);
    saveNaps(newNaps);
  };

  const removeNap = (id: string) => {
    const newNaps = naps.filter(nap => nap.id !== id);
    setNaps(newNaps);
    saveNaps(newNaps);
  };

  const editNap = (id: string, napToEdit: EditNapInput) => {
    const { start, end } = napToEdit;

    if (start !== undefined) {
      const newNaps = naps.map(nap => {
        if (nap.id === id) {
          return { ...nap, start };
        }

        return nap;
      });

      setNaps(newNaps);
      saveNaps(newNaps);
    }

    if (end !== undefined) {
      const newNaps = naps.map(nap => {
        if (nap.end === end) {
          return { ...nap, end };
        }

        return nap;
      });

      setNaps(newNaps);
      saveNaps(newNaps);
    }
  };

  return (
    <Context.Provider value={{ naps, addNap, removeNap, editNap }}>{children}</Context.Provider>
  );
}
