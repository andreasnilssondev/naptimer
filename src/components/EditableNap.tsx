import { ChangeEvent, useState } from 'react';
import { LOCALE } from 'constants/locale';
import { useNaps } from 'hooks/useNaps';
import { formatDuration, intervalToDuration, setHours, setMinutes, startOfMinute } from 'date-fns';
import { Button } from 'components/Button';
import { FaArrowRight, FaTrash } from 'react-icons/fa';
import { Heading } from 'components/Heading';
import { Input } from 'components/Input';

interface EditableNapProps {
  id: string;
  start: number;
  end: number;
  onClose: () => void;
}

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

  const timePassed = intervalToDuration({
    start: startOfMinute(startInput),
    end: startOfMinute(endInput),
  });

  return (
    <div className="p-4 shadow-sm">
      <div className="flex justify-start items-end gap-4 mb-4">
        <Heading level="h3">{formatDuration(timePassed)}</Heading>
        <div className="ml-auto mb-auto">
          <Button onClick={handleRemove} appearance="secondary">
            <FaTrash color="#ff5a5a" />
          </Button>
        </div>
      </div>

      <div className="flex justify-start items-end gap-4 mb-4">
        <label className="flex flex-col items-start">
          <span>Start</span>
          <Input type="time" onChange={handleChangeStart} value={formatTime(startInput)} required />
        </label>

        <div className="mb-1">
          <FaArrowRight />
        </div>

        <label className="flex flex-col items-start">
          <span>End</span>
          <input
            className="p-1.5"
            type="time"
            onChange={handleChangeEnd}
            value={formatTime(endInput)}
            required
          />
        </label>
      </div>
      <div className="flex justify-end items-center ml-auto gap-x-4">
        <Button onClick={onClose} appearance="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
}
