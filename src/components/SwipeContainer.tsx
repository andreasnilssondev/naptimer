import { addDays } from 'date-fns';
import { useSelectedDate } from 'hooks/useSelectedDate';
import { useSwipe } from 'hooks/useSwipe';
import { NapList } from 'components/NapList';

export function SwipeContainer() {
  const { selectedDate } = useSelectedDate();
  const { style, onTransitionEnd } = useSwipe();

  return (
    <div className="overflow-x-hidden w-full">
      <div
        style={style}
        onTransitionEnd={onTransitionEnd}
        className="flex justify-center items-start gap-x-4"
      >
        <div className="grow shrink-0 basis-full">
          <NapList date={addDays(selectedDate, -1)} />
        </div>
        <div className="grow shrink-0 basis-full">
          <NapList date={selectedDate} />
        </div>
        <div className="grow shrink-0 basis-full">
          <NapList date={addDays(selectedDate, 1)} />
        </div>
      </div>
    </div>
  );
}
