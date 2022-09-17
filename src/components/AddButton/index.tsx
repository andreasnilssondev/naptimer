import { FaPlus } from 'react-icons/fa';
import { useNaps } from 'hooks/useNaps';
import { useSelectedDate } from 'hooks/useSelectedDate';
import { addDays, addHours, differenceInDays, isToday, startOfDay } from 'date-fns';
import { Button } from 'components/Button';
import { Container } from './styled';

export function AddButton() {
  const { addNap } = useNaps();

  return (
    <Container>
      <Button rounded onClick={addNap}>
        <FaPlus size="2rem" />
      </Button>
    </Container>
  );
}
