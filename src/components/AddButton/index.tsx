import { useNaps } from 'hooks/useNaps';
import { useCurrentDate } from 'hooks/useCurrentDate';
import { isToday } from 'date-fns';

export function AddButton() {
  const { addNap } = useNaps();
  const { currentDate } = useCurrentDate();

  const handleClick = () => {
    if (isToday(currentDate)) {
      addNap(new Date());
    } else {
      addNap(currentDate);
    }
  };

  return (
    <button type="button" onClick={handleClick}>
      + Add
    </button>
  );
}
