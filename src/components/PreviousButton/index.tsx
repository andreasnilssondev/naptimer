import { useCurrentDate } from 'hooks/useCurrentDate';
import { addDays } from 'date-fns';

export function PreviousButton() {
  const { currentDate, setCurrentDate } = useCurrentDate();

  const handleClick = () => {
    const previousDay = addDays(currentDate, -1);
    setCurrentDate(previousDay);
  };

  return (
    <button type="button" onClick={handleClick}>
      Previous
    </button>
  );
}
