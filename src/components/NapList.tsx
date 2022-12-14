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
    <ul className="mb-32 mx-4 flex flex-col gap-y-4">
      {naps
        .filter(({ start }) => isSameDay(start, date))
        .map(nap => (
          <li
            key={nap.id}
            className="flex-grow flex-shrink-0 basis-full bg-gray-50 shadow-md rounded-xl border"
          >
            <Nap id={nap.id} start={nap.start} end={nap.end} />
          </li>
        ))}
    </ul>
  );
}
