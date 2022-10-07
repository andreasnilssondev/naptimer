import { getWeekdayName } from 'utils/date/getWeekdayName';
import { getDate, isFuture } from 'date-fns';
import { useSelectedDate } from 'hooks/useSelectedDate';
import classNames from 'classnames';
import { useSwipe } from 'hooks/useSwipe';

interface DayProps {
  date: Date;
}

export function Day(props: DayProps) {
  const { selectedDate, setSelectedDate } = useSelectedDate();
  const { date } = props;
  const disabled = isFuture(date);
  const { percentageSwiped, transitionInProgress, onTransitionEnd } = useSwipe();

  const style = {
    transform: `translate(${(64 * -percentageSwiped) / 100}px)`,
    transition: transitionInProgress ? 'transform 0.2s ease-in-out' : undefined,
  };

  return (
    <button
      className={classNames(
        'w-16 h-16 text-center rounded-full relative transition-colors',
        selectedDate === date && 'text-slate-50',
        disabled && 'opacity-40'
      )}
      onClick={() => setSelectedDate(date)}
      disabled={disabled}
    >
      <span
        style={style}
        onTransitionEnd={onTransitionEnd}
        className={classNames(
          'absolute left-0 top-0 w-16 h-16 rounded-full -z-10',
          selectedDate === date && 'bg-sky-800'
        )}
      />
      <span className="block font-semibold text-xl">{getDate(date)}</span>
      <span className="block text-sm">{getWeekdayName(date, true)}</span>
    </button>
  );
}
