import { getWeekdayName } from 'utils/date/getWeekdayName';
import { getDateName } from 'utils/date/getDateName';
import { Heading } from 'components/Heading';

interface HeaderProps {
  date: Date;
}

export function Header(props: HeaderProps) {
  const { date } = props;

  return (
    <div className="flex justify-center items-center p-20 bg-slate-300 text-center">
      <div>
        <Heading level="h1">{getWeekdayName(date)}</Heading>
        <p>{getDateName(date)}</p>
      </div>
    </div>
  );
}
