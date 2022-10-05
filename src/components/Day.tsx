import { getWeekdayName } from 'utils/date/getWeekdayName';
import { getDate, isFuture } from 'date-fns';
import { useSelectedDate } from 'hooks/useSelectedDate';
import classNames from 'classnames';
import { Heading } from 'components/Heading';

interface DayProps {
  date: Date;
}

export function Day(props: DayProps) {
  const { selectedDate, setSelectedDate } = useSelectedDate();
  const { date } = props;

  return (
    <button
      className={classNames(
        'w-16 h-16 text-center rounded-full',
        selectedDate === date && 'bg-sky-800 text-slate-50',
        isFuture(date) && 'invisible'
      )}
      onClick={() => setSelectedDate(date)}
    >
      <span className="block font-semibold text-xl">{getDate(date)}</span>
      <span className="block text-sm">{getWeekdayName(date, true)}</span>
    </button>
  );
}
