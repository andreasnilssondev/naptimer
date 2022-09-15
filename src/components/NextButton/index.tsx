import { useCurrentDate } from 'hooks/useCurrentDate';
import { addDays, isToday } from 'date-fns';
import { FaChevronRight } from 'react-icons/all';
import { Button } from 'components/Button';

export function NextButton() {
  const { currentDate, setCurrentDate } = useCurrentDate();

  const handleClick = () => {
    const nextDay = addDays(currentDate, 1);
    setCurrentDate(nextDay);
  };

  return (
    <Button
      onClick={handleClick}
      rounded
      appearance="secondary"
      style={{ visibility: isToday(currentDate) ? 'hidden' : 'visible' }}
    >
      <FaChevronRight size="2rem" />
    </Button>
  );
}
