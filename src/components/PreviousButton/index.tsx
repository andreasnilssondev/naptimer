import { useCurrentDate } from 'hooks/useCurrentDate';
import { addDays } from 'date-fns';
import { FaChevronCircleLeft } from 'react-icons/all';
import { Button } from 'components/Button';

export function PreviousButton() {
  const { currentDate, setCurrentDate } = useCurrentDate();

  const handleClick = () => {
    const previousDay = addDays(currentDate, -1);
    setCurrentDate(previousDay);
  };

  return (
    <Button onClick={handleClick} rounded>
      <FaChevronCircleLeft size="2rem" color="#333" />
    </Button>
  );
}
