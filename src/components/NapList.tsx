import { isSameDay } from 'date-fns';
import { Nap } from 'components/Nap';
import { useNaps } from 'hooks/useNaps';

interface NapListProps {
  date: Date;
}

export function NapList(props: NapListProps) {
  const { date } = props;
  const { naps } = useNaps();

  return (
    <ul className="mb-32">
      {naps
        .filter(({ start }) => isSameDay(start, date))
        .map(nap => (
          <li className="block border-b border-b-solid border-b-slate-300">
            <Nap key={nap.id} id={nap.id} start={nap.start} end={nap.end} />
          </li>
        ))}
    </ul>
  );
}
