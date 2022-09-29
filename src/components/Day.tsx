import { getWeekdayName } from 'utils/date/getWeekdayName';
import { getDate } from 'date-fns';
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
        'border text-center p-4 border rounded-lg shadow-md',
        selectedDate === date ? 'bg-sky-900 text-slate-50' : 'bg-gray-50'
      )}
      onClick={() => setSelectedDate(date)}
    >
      <span className="block font-semibold text-4xl">{getDate(date)}</span>
      <span className="block text-xl">{getWeekdayName(date, true)}</span>
    </button>
  );
}
