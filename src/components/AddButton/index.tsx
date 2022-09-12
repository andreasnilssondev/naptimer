import { FaPlusCircle } from 'react-icons/fa';
import { useNaps } from 'hooks/useNaps';
import { useCurrentDate } from 'hooks/useCurrentDate';
import { isToday } from 'date-fns';
import { Button } from 'components/Button';

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
    <Button onClick={handleClick}>
      <FaPlusCircle color="#333" /> Add
    </Button>
  );
}
