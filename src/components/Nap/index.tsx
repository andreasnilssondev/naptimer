import { useState } from 'react';
import { LOCALE } from 'constants/locale';
import { formatDistanceStrict, startOfMinute } from 'date-fns';
import { EditableNap } from 'components/EditableNap';
import { FaArrowRight, FaChevronRight } from 'react-icons/all';
import { NapProps } from './types';
import { Item, Grid, Menu, VerticalItem, Title } from './styled';

const formatTime = (date: number) => {
  return new Intl.DateTimeFormat(LOCALE, { hour: 'numeric', minute: 'numeric' }).format(date);
};

export function Nap(props: NapProps) {
  const { id, start, end } = props;
  const [editing, setEditing] = useState(false);

  if (editing) {
    return <EditableNap id={id} start={start} end={end} />;
  }

  return (
    <Grid onClick={() => setEditing(true)}>
      <VerticalItem>
        <Title>{formatDistanceStrict(startOfMinute(end), startOfMinute(start))}</Title>
        <Item>
          <span>{formatTime(start)}</span>
          <FaArrowRight size="0.8rem" />
          <span>{formatTime(end)}</span>
        </Item>
      </VerticalItem>

      <Menu>
        <FaChevronRight size="1rem" />
      </Menu>
    </Grid>
  );
}
