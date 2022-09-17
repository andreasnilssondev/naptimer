import { ChangeEvent, useEffect, useState } from 'react';
import {
  formatDistanceToNow,
  formatDuration,
  intervalToDuration,
  setHours,
  setMinutes,
} from 'date-fns';
import { LOCALE } from 'constants/locale';
import { useNaps } from 'hooks/useNaps';
import { Button } from 'components/Button';
import { FaArrowRight, FaSpinner } from 'react-icons/fa';
import { Grid, Input, InnerGrid, Title, Arrow, Time, Progress, Rotate } from './styled';
import { InProgressNapProps } from './types';

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
    <Grid>
      <Title>{formatDuration(timePassed, { format: ['hours', 'minutes'] })}</Title>
      <InnerGrid>
        <Input type="time" onChange={handleChangeStart} defaultValue={formatTime(start)} required />
        <Arrow>
          <FaArrowRight />
        </Arrow>
        <Progress>
          <Rotate>
            <FaSpinner />
          </Rotate>
          <Time>In progress</Time>
        </Progress>
        <Button onClick={endNow}>End</Button>
      </InnerGrid>
    </Grid>
  );
}
