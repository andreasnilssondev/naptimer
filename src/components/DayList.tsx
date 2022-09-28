import { Day } from 'components/Day';
import { addDays } from 'date-fns';
import { useSelectedDate } from 'hooks/useSelectedDate';
import { useSwipe } from 'hooks/useSwipe';
import { PreviousButton } from 'components/PreviousButton';
import { NextButton } from 'components/NextButton';
import { AddButton } from 'components/AddButton';

export function DayList() {
  const { selectedDate } = useSelectedDate();
  const { style, onTransitionEnd } = useSwipe();

  return (
    <div className="overflow-x-hidden w-full h-full">
      <PreviousButton />
      <NextButton />
      <AddButton />

      <div
        style={style}
        onTransitionEnd={onTransitionEnd}
        className="flex justify-center items-start h-full"
      >
        <Day date={addDays(selectedDate, -1)} />
        <Day date={selectedDate} />
        <Day date={addDays(selectedDate, 1)} />
      </div>
    </div>
  );
}
