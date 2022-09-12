import { NapProps } from 'components/Nap/types';
import { RemoveButton } from 'components/RemoveButton';
import { LOCALE } from 'constants/locale';
import { Label, Grid } from './styled';

const formatTime = (date: number) => {
  return new Intl.DateTimeFormat(LOCALE, { hour: 'numeric', minute: 'numeric' }).format(date);
};

export function Nap(props: NapProps) {
  const { start, end } = props;

  return (
    <Grid>
      <Label>
        <span>Start</span>
        <input type="time" defaultValue={formatTime(start)} required />
      </Label>

      <Label>
        <span>End</span>
        <input type="time" defaultValue={formatTime(end)} required />
      </Label>

      <RemoveButton startTime={new Date(start)} />
    </Grid>
  );
}
