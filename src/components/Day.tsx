import { Header } from 'components/Header';
import { NapList } from 'components/NapList';

interface DayProps {
  date: Date;
}

export function Day(props: DayProps) {
  const { date } = props;

  return (
    <div className="grow shrink-0 basis-full">
      <Header date={date} />
      <NapList date={date} />
    </div>
  );
}
