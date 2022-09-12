import { useCurrentDate } from 'hooks/useCurrentDate';
import { addDays, isToday } from 'date-fns';
import { FaChevronCircleRight } from 'react-icons/all';
import { Button } from 'components/Button';

export function NextButton() {
  const { currentDate, setCurrentDate } = useCurrentDate();

  const handleClick = () => {
    const nextDay = addDays(currentDate, 1);
    setCurrentDate(nextDay);
  };

  if (isToday(currentDate)) {
    return <span aria-role="presentation" />;
  }

  return (
    <Button onClick={handleClick} rounded>
      <FaChevronCircleRight size="2rem" color="#333" />
    </Button>
  );
}
