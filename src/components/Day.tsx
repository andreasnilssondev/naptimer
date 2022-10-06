import { getWeekdayName } from 'utils/date/getWeekdayName';
import { getDate, isFuture } from 'date-fns';
import { useSelectedDate } from 'hooks/useSelectedDate';
import classNames from 'classnames';

interface DayProps {
  date: Date;
}

export function Day(props: DayProps) {
  const { selectedDate, setSelectedDate } = useSelectedDate();
  const { date } = props;
  const disabled = isFuture(date);

  return (
    <button
      className={classNames(
        'w-16 h-16 text-center rounded-full',
        selectedDate === date && 'bg-sky-800 text-slate-50',
        disabled && 'opacity-40'
      )}
      onClick={() => setSelectedDate(date)}
      disabled={disabled}
    >
      <span className="block font-semibold text-xl">{getDate(date)}</span>
      <span className="block text-sm">{getWeekdayName(date, true)}</span>
    </button>
  );
}
