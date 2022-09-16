import { ChangeEvent, useState } from 'react';
import { LOCALE } from 'constants/locale';
import { useNaps } from 'hooks/useNaps';
import { formatDistanceStrict, setHours, setMinutes, startOfMinute } from 'date-fns';
import { Button } from 'components/Button';
import { FaArrowRight, FaTrash } from 'react-icons/fa';
import { EditableNapProps } from './types';
import { Label, Grid, InnerGrid, Input, Menu, Remove, Arrow, Title } from './styled';

const formatTime = (date: number) => {
  return new Intl.DateTimeFormat(LOCALE, { hour: 'numeric', minute: 'numeric' }).format(date);
};

export function EditableNap(props: EditableNapProps) {
  const { id, start, end, onClose } = props;
  const [startInput, setStartInput] = useState(start);
  const [endInput, setEndInput] = useState(end);
  const { removeNap, editNap } = useNaps();

  const handleChangeStart = (event: ChangeEvent<HTMLInputElement>) => {
    const [hours, minutes] = event.target.value.split(':');
    const newStart = setMinutes(setHours(start, Number(hours)), Number(minutes));
    setStartInput(newStart.getTime());
  };

  const handleChangeEnd = (event: ChangeEvent<HTMLInputElement>) => {
    const [hours, minutes] = event.target.value.split(':');
    const newEnd = setMinutes(setHours(start, Number(hours)), Number(minutes));
    setEndInput(newEnd.getTime());
  };

  const handleSave = () => {
    editNap(id, { start: startInput, end: endInput });
    onClose();
  };

  const handleRemove = () => {
    removeNap(id);
    onClose();
  };

  return (
    <Grid>
      <InnerGrid>
        <Title>
          {formatDistanceStrict(startOfMinute(endInput), startOfMinute(startInput), {
            roundingMethod: 'floor',
          })}
        </Title>
        <Remove>
          <Button onClick={handleRemove} appearance="secondary">
            <FaTrash color="#ff5a5a" />
          </Button>
        </Remove>
      </InnerGrid>

      <InnerGrid>
        <Label>
          <span>Start</span>
          <Input
            type="time"
            onChange={handleChangeStart}
            value={formatTime(startInput)}
            defaultValue={formatTime(start)}
            required
          />
        </Label>

        <Arrow>
          <FaArrowRight />
        </Arrow>

        <Label>
          <span>End</span>
          <Input
            type="time"
            onChange={handleChangeEnd}
            value={formatTime(endInput)}
            defaultValue={formatTime(end)}
            required
          />
        </Label>
      </InnerGrid>
      <Menu>
        <Button onClick={onClose} appearance="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave}>Save</Button>
      </Menu>
    </Grid>
  );
}
