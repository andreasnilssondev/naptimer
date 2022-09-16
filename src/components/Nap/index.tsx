import { useState } from 'react';
import { LOCALE } from 'constants/locale';
import { formatDistanceStrict, startOfMinute } from 'date-fns';
import { EditableNap } from 'components/EditableNap';
import { FaArrowRight, FaChevronRight } from 'react-icons/fa';
import { InProgressNap } from 'components/InProgressNap';
import { NapProps } from './types';
import { Item, Grid, Menu, VerticalItem, Title, Time } from './styled';

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

  return (
    <Grid onClick={() => setEditing(true)}>
      <VerticalItem>
        <Title>{formatDistanceStrict(startOfMinute(end), startOfMinute(start))}</Title>
        <Item>
          <Time>{formatTime(start)}</Time>
          <FaArrowRight size="0.8rem" color="#565656" />
          <Time>{formatTime(end)}</Time>
        </Item>
      </VerticalItem>

      <Menu>
        <FaChevronRight size="1rem" />
      </Menu>
    </Grid>
  );
}
