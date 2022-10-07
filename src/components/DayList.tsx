import { useSelectedDate } from 'hooks/useSelectedDate';
import { Day } from 'components/Day';
import { addDays } from 'date-fns';
import { PreviousButton } from 'components/PreviousButton';
import { NextButton } from 'components/NextButton';
import { useSwipe } from 'hooks/useSwipe';

export function DayList() {
  const { selectedDate } = useSelectedDate();
  const { percentageSwiped, transitionInProgress, onTransitionEnd } = useSwipe();

  const style = {
    transform: `translate(${(64 * percentageSwiped) / 100}px)`,
    transition: transitionInProgress ? 'transform 0.2s ease-in-out' : undefined,
  };

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
    <div className="flex justify-center items-center gap-x-2 mb-4 p-4 bg-gray-50 border-b">
      <div>
        <PreviousButton />
      </div>
      <div className="overflow-x-hidden">
        <ul
          style={style}
          onTransitionEnd={onTransitionEnd}
          className="flex justify-center items-center w-full"
        >
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
