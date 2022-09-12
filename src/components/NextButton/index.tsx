import { useCurrentDate } from 'hooks/useCurrentDate';
import { addDays } from 'date-fns';

export function NextButton() {
  const { currentDate, setCurrentDate } = useCurrentDate();

  const handleClick = () => {
    const nextDay = addDays(currentDate, 1);
    setCurrentDate(nextDay);
  };

  return (
    <button type="button" onClick={handleClick}>
      Next
    </button>
  );
}
