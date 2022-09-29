import { useSelectedDate } from 'hooks/useSelectedDate';
import { addDays, isToday } from 'date-fns';
import { FaChevronRight } from 'react-icons/all';
import { Button } from 'components/Button';

export function NextButton() {
  const { selectedDate, setSelectedDate } = useSelectedDate();

  const handleClick = () => {
    const nextDay = addDays(selectedDate, 1);
    setSelectedDate(nextDay);
  };

  return (
    <Button
      onClick={handleClick}
      appearance="icon"
      style={{ visibility: isToday(selectedDate) ? 'hidden' : 'visible' }}
    >
      <FaChevronRight size="100%" />
    </Button>
  );
}
