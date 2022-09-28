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
    <div className="fixed right-0 top-20 z-10">
      <Button
        onClick={handleClick}
        rounded
        appearance="secondary"
        style={{ visibility: isToday(selectedDate) ? 'hidden' : 'visible' }}
      >
        <FaChevronRight size="100%" />
      </Button>
    </div>
  );
}
