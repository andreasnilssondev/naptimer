import { useState } from 'react';
import { LOCALE } from 'constants/locale';
import { formatDistanceStrict, startOfMinute } from 'date-fns';
import { EditableNap } from 'components/EditableNap';
import { FaArrowRight, FaChevronRight, FaMoon } from 'react-icons/fa';
import { NapProps } from './types';
import { Item, Grid, Menu, VerticalItem, Title } from './styled';

const formatTime = (date: number) => {
  return new Intl.DateTimeFormat(LOCALE, { hour: 'numeric', minute: 'numeric' }).format(date);
};

export function Nap(props: NapProps) {
  const { id, start, end } = props;
  const [editing, setEditing] = useState(false);

  if (editing) {
    return <EditableNap id={id} start={start} end={end} onClose={() => setEditing(false)} />;
  }

  return (
    <Grid onClick={() => setEditing(true)}>
      <VerticalItem>
        <Title>
          {end === undefined
            ? 'In progress'
            : formatDistanceStrict(startOfMinute(end), startOfMinute(start))}
        </Title>
        <Item>
          <span>{formatTime(start)}</span>
          <FaArrowRight size="0.8rem" />
          {end !== undefined ? <span>{formatTime(end)}</span> : <FaMoon size="0.8rem" />}
        </Item>
      </VerticalItem>

      <Menu>
        <FaChevronRight size="1rem" />
      </Menu>
    </Grid>
  );
}
