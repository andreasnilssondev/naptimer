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
    <div className="flex justify-center items-center gap-x-2 mb-4 p-4 bg-gray-50 border-b border-t-2 border-t-gray-300 border-solid">
      <div>
        <PreviousButton />
      </div>
      <div className="overflow-x-hidden">
        <ul className="flex justify-center items-center w-full">
          {dates.map(date => (
            <li key={date.toString()}>
              <Day date={date} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <NextButton />
      </div>
    </div>
  );
}
