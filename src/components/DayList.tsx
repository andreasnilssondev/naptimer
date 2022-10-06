import { useSelectedDate } from 'hooks/useSelectedDate';
import { Day } from 'components/Day';
import { addDays } from 'date-fns';
import { PreviousButton } from 'components/PreviousButton';
import { NextButton } from 'components/NextButton';

export function DayList() {
  const { selectedDate } = useSelectedDate();

  const dates = [
    addDays(selectedDate, -3),
    addDays(selectedDate, -2),
    addDays(selectedDate, -1),
    selectedDate,
    addDays(selectedDate, 1),
    addDays(selectedDate, 2),
    addDays(selectedDate, 3),
  ];

  return (
    <div className="flex justify-around items-center mb-4">
      <div className="flex-grow flex-shrink-0 basis-auto flex justify-start items-center">
        <PreviousButton />
      </div>
      <div className="flex-grow-0 flex-shrink overflow-x-hidden flex justify-center items-center">
        <ul className="flex justify-center items-center w-full">
          {dates.map(date => (
            <li key={date.toString()}>
              <Day date={date} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-grow flex-shrink-0 basis-auto flex justify-end items-center">
        <NextButton />
      </div>
    </div>
  );
}
