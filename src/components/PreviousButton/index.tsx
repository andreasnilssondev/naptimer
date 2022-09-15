import { useCurrentDate } from 'hooks/useCurrentDate';
import { addDays } from 'date-fns';
import { FaChevronLeft } from 'react-icons/all';
import { Button } from 'components/Button';

export function PreviousButton() {
  const { currentDate, setCurrentDate } = useCurrentDate();

  const handleClick = () => {
    const previousDay = addDays(currentDate, -1);
    setCurrentDate(previousDay);
  };

  return (
    <Button onClick={handleClick} rounded appearance="secondary">
      <FaChevronLeft size="2rem" />
    </Button>
  );
}
