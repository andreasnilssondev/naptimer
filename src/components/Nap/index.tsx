import { ChangeEvent } from 'react';
import { NapProps } from 'components/Nap/types';
import { RemoveButton } from 'components/RemoveButton';
import { LOCALE } from 'constants/locale';
import { useNaps } from 'hooks/useNaps';
import { setHours, setMinutes } from 'date-fns';
import { Label, Grid, Input } from './styled';

const formatTime = (date: number) => {
  return new Intl.DateTimeFormat(LOCALE, { hour: 'numeric', minute: 'numeric' }).format(date);
};

export function Nap(props: NapProps) {
  const { id, start, end } = props;
  const { editNap } = useNaps();

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

  return (
    <Grid>
      <Label>
        <span>Start</span>
        <Input type="time" onChange={handleChangeStart} defaultValue={formatTime(start)} required />
      </Label>

      <Label>
        <span>End</span>
        <Input type="time" onChange={handleChangeEnd} defaultValue={formatTime(end)} required />
      </Label>

      <RemoveButton id={id} />
    </Grid>
  );
}
