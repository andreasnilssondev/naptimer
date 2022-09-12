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

  if (isToday(currentDate)) {
    return <span />;
  }

  return (
    <Button onClick={handleClick} rounded>
      <FaChevronRight size="2rem" color="#333" />
    </Button>
  );
}
