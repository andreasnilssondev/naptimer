import { addDays } from 'date-fns';
import { useSelectedDate } from 'hooks/useSelectedDate';
import { useSwipe } from 'hooks/useSwipe';
import { NapList } from 'components/NapList';

export function SwipeContainer() {
  const { selectedDate, setSelectedDate } = useSelectedDate();
  const { percentageSwiped, transitionInProgress, onTransitionEnd } = useSwipe();

  const handleTransitionEnd = () => {
    if (percentageSwiped > 10) {
      setSelectedDate(addDays(selectedDate, -1));
    } else if (percentageSwiped < -10) {
      setSelectedDate(addDays(selectedDate, 1));
    }

    onTransitionEnd();
  };

  const style = {
    transform: `translate(${percentageSwiped}%)`,
    transition: transitionInProgress ? 'transform 0.2s ease-in-out' : undefined,
  };

  return (
    <div className="overflow-x-hidden w-full">
      <div
        style={style}
        onTransitionEnd={handleTransitionEnd}
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
