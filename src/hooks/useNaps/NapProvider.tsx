import { useState } from 'react';
import { addDays, addHours, differenceInDays, isToday, startOfDay } from 'date-fns';
import { useSelectedDate } from 'hooks/useSelectedDate';
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
  const { selectedDate } = useSelectedDate();

  const addNap = () => {
    const currentTime = new Date();
    const daysDifference = differenceInDays(startOfDay(selectedDate), startOfDay(currentTime));
    const uniqueStartTime = addDays(currentTime, daysDifference);

    const newNap: Nap = {
      id: String(uniqueStartTime.getTime()),
      start: uniqueStartTime.getTime(),
    };

    if (isToday(selectedDate) === false) {
      newNap.end = addHours(uniqueStartTime, 1).getTime();
    }

    const newNaps = naps.concat(newNap);

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

    const newNaps = naps.map(nap => {
      if (nap.id === id) {
        if (start !== undefined) {
          nap.start = start;
        }

        if (end !== undefined) {
          nap.end = end;
        }
      }

      return nap;
    });

    setNaps(newNaps);
    saveNaps(newNaps);
  };

  return (
    <Context.Provider value={{ naps, addNap, removeNap, editNap }}>{children}</Context.Provider>
  );
}
