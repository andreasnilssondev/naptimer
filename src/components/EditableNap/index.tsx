import { ChangeEvent, useState } from 'react';
import { RemoveButton } from 'components/RemoveButton';
import { LOCALE } from 'constants/locale';
import { useNaps } from 'hooks/useNaps';
import { setHours, setMinutes } from 'date-fns';
import { Button } from 'components/Button';
import { FaCheck } from 'react-icons/all';
import { FaTrash } from 'react-icons/fa';
import { EditableNapProps } from './types';
import { Label, Grid, Input, Menu } from './styled';

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
      <Label>
        <span>Start</span>
        <Input type="time" onChange={handleChangeStart} defaultValue={formatTime(start)} required />
      </Label>

      <Label>
        <span>End</span>
        <Input type="time" onChange={handleChangeEnd} defaultValue={formatTime(end)} required />
      </Label>
      <Menu>
        <Button onClick={handleSave}>
          <FaCheck />
        </Button>
        <Button onClick={handleRemove} appearance="secondary">
          <FaTrash color="#ff5a5a" />
        </Button>
      </Menu>
    </Grid>
  );
}
