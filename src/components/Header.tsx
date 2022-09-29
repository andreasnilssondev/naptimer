import { getWeekdayName } from 'utils/date/getWeekdayName';
import { getDateName } from 'utils/date/getDateName';
import { Heading } from 'components/Heading';
import { useSelectedDate } from 'hooks/useSelectedDate';

export function Header() {
  const { selectedDate } = useSelectedDate();

  return (
    <div className="flex justify-center items-center p-6 bg-slate-300 text-center">
      <div>
        <Heading level="h1">{getWeekdayName(selectedDate)}</Heading>
        <p>{getDateName(selectedDate)}</p>
      </div>
    </div>
  );
}
