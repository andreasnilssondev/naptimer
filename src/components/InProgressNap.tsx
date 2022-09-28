import { ChangeEvent, useEffect, useState } from 'react';
import { formatDuration, intervalToDuration, setHours, setMinutes } from 'date-fns';
import { LOCALE } from 'constants/locale';
import { useNaps } from 'hooks/useNaps';
import { Button } from 'components/Button';
import { FaArrowRight, FaSpinner } from 'react-icons/fa';
import { Heading } from 'components/Heading';
import { Input } from 'components/Input';

interface InProgressNapProps {
  id: string;
  start: number;
}

const formatTime = (date: number) => {
  return new Intl.DateTimeFormat(LOCALE, { hour: 'numeric', minute: 'numeric' }).format(date);
};

export function InProgressNap(props: InProgressNapProps) {
  const { id, start } = props;
  const { editNap } = useNaps();
  const [timePassed, setTimePassed] = useState(intervalToDuration({ start, end: new Date() }));

  const handleChangeStart = (event: ChangeEvent<HTMLInputElement>) => {
    const [hours, minutes] = event.target.value.split(':');
    const newStart = setMinutes(setHours(start, Number(hours)), Number(minutes));
    editNap(id, { start: newStart.getTime() });
    setTimePassed(intervalToDuration({ start: newStart, end: new Date() }));
  };

  const endNow = () => {
    editNap(id, { end: new Date().getTime() });
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimePassed(intervalToDuration({ start, end: new Date() }));
    }, 5000);

    return () => {
      window.clearInterval(interval);
    };
  }, [start]);

  return (
    <div className="p-4 shadow-sm">
      <Heading level="h3">{formatDuration(timePassed, { format: ['hours', 'minutes'] })}</Heading>
      <div className="flex justify-start items-center gap-x-4">
        <Input type="time" onChange={handleChangeStart} defaultValue={formatTime(start)} required />
        <div>
          <FaArrowRight />
        </div>
        <div className="flex justify-center items-center gap-x-2">
          <div className="w-4 h-4 leading-none animate-spin origin-center">
            <FaSpinner />
          </div>
          <p className="text-slate-500">In progress</p>
        </div>
        <Button onClick={endNow}>End</Button>
      </div>
    </div>
  );
}
