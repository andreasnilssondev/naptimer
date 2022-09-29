import { useSelectedDate } from 'hooks/useSelectedDate';
import { addDays } from 'date-fns';
import { FaChevronLeft } from 'react-icons/all';
import { Button } from 'components/Button';

export function PreviousButton() {
  const { selectedDate, setSelectedDate } = useSelectedDate();

  const handleClick = () => {
    const previousDay = addDays(selectedDate, -1);
    setSelectedDate(previousDay);
  };

  return (
    <Button onClick={handleClick} rounded appearance="secondary">
      <FaChevronLeft size="100%" />
    </Button>
  );
}
