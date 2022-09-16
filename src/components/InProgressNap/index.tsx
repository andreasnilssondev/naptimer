import { ChangeEvent, useState } from 'react';
import {
  formatDistanceStrict,
  formatDistanceToNowStrict,
  setHours,
  setMinutes,
  startOfMinute,
} from 'date-fns';
import { LOCALE } from 'constants/locale';
import { useNaps } from 'hooks/useNaps';
import { Button } from 'components/Button';
import { FaArrowRight } from 'react-icons/fa';
import { Grid, Input, InnerGrid, Title, Arrow } from './styled';
import { InProgressNapProps } from './types';

const formatTime = (date: number) => {
  return new Intl.DateTimeFormat(LOCALE, { hour: 'numeric', minute: 'numeric' }).format(date);
};

export function InProgressNap(props: InProgressNapProps) {
  const { id, start } = props;
  const { editNap } = useNaps();
  const [editing, setEditing] = useState(false);

  const handleChangeStart = (event: ChangeEvent<HTMLInputElement>) => {
    const [hours, minutes] = event.target.value.split(':');
    const newStart = setMinutes(setHours(start, Number(hours)), Number(minutes));
    editNap(id, { start: newStart.getTime() });
  };

  const handleChangeEnd = (event: ChangeEvent<HTMLInputElement>) => {
    const [hours, minutes] = event.target.value.split(':');
    const newEnd = setMinutes(setHours(start, Number(hours)), Number(minutes));
    editNap(id, { end: newEnd.getTime() });
  };

  const endNow = () => {
    editNap(id, { end: newEnd.getTime() });
  };

  return (
    <Grid>
      <Title>{formatDistanceToNowStrict(startOfMinute(start))}</Title>
      <InnerGrid>
        <Input type="time" onChange={handleChangeStart} defaultValue={formatTime(start)} required />
        <Arrow>
          <FaArrowRight />
        </Arrow>
        <Button onClick={endNow}>Start timer</Button>
        <Button appearance="secondary" onClick={() => setEditing(true)}>
          Set time
        </Button>
        {editing && (
          <Input
            type="time"
            onChange={handleChangeEnd}
            defaultValue={formatTime(new Date().getTime())}
            required
          />
        )}
      </InnerGrid>
    </Grid>
  );
}
