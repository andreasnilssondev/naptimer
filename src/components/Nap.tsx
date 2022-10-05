import { useState } from 'react';
import { LOCALE } from 'constants/locale';
import { formatDuration, intervalToDuration, startOfMinute } from 'date-fns';
import { EditableNap } from 'components/EditableNap';
import { FaArrowRight, FaChevronRight } from 'react-icons/fa';
import { InProgressNap } from 'components/InProgressNap';
import { Heading } from 'components/Heading';

interface NapProps {
  id: string;
  start: number;
  end?: number;
}

const formatTime = (date: number) => {
  return new Intl.DateTimeFormat(LOCALE, { hour: 'numeric', minute: 'numeric' }).format(date);
};

export function Nap(props: NapProps) {
  const { id, start, end } = props;
  const [editing, setEditing] = useState(false);

  if (end === undefined) {
    return <InProgressNap id={id} start={start} />;
  }

  if (editing) {
    return <EditableNap id={id} start={start} end={end} onClose={() => setEditing(false)} />;
  }

  const timePassed = intervalToDuration({ start: startOfMinute(start), end: startOfMinute(end) });

  return (
    <div className="flex justify-start items-center p-4" onClick={() => setEditing(true)}>
      <div>
        <Heading level="h3">{formatDuration(timePassed)}</Heading>
        <div className="flex justify-start items-center gap-x-2">
          <div className="text-slate-600">{formatTime(start)}</div>
          <div className="w-4 h-4">
            <FaArrowRight size="100%" color="#565656" />
          </div>
          <div className="text-slate-600">{formatTime(end)}</div>
        </div>
      </div>

      <div className="ml-auto">
        <div className="w-4 h-4">
          <FaChevronRight size="100%" />
        </div>
      </div>
    </div>
  );
}
