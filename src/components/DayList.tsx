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
  ];

  return (
    <div className="flex justify-around items-center mb-4">
      <PreviousButton />
      <ul className="flex justify-end items-center gap-x-8">
        {dates.map(date => (
          <li key={date.toString()}>
            <Day date={date} />
          </li>
        ))}
      </ul>
      <NextButton />
    </div>
  );
}
