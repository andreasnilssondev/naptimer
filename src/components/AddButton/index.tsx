import { FaPlus } from 'react-icons/fa';
import { useNaps } from 'hooks/useNaps';
import { useCurrentDate } from 'hooks/useCurrentDate';
import { isToday } from 'date-fns';
import { Button } from 'components/Button';
import { Container } from './styled';

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
    <Container>
      <Button rounded onClick={handleClick}>
        <FaPlus size="2rem" />
      </Button>
    </Container>
  );
}
