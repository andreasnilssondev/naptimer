import { getWeekdayName } from 'utils/date/getWeekdayName';
import { getDateName } from 'utils/date/getDateName';
import { Heading } from 'components/Heading';
import { useSelectedDate } from 'hooks/useSelectedDate';

export function Header() {
  const { selectedDate } = useSelectedDate();

  return (
    <div className="flex flex-col justify-center items-center text-center bg-sky-800 text-slate-50 -m-4 mb-4 p-16">
      <Heading level="h1">{getWeekdayName(selectedDate)}</Heading>
      <p>{getDateName(selectedDate)}</p>
    </div>
  );
}
