import { useSelectedDate } from 'hooks/useSelectedDate';
import { addDays, isToday } from 'date-fns';
import { FaChevronRight } from 'react-icons/all';
import { Button } from 'components/Button';
import { Container } from './styled';

export function NextButton() {
  const { selectedDate, setSelectedDate } = useSelectedDate();

  const handleClick = () => {
    const nextDay = addDays(selectedDate, 1);
    setSelectedDate(nextDay);
  };

  return (
    <Container>
      <Button
        onClick={handleClick}
        rounded
        appearance="secondary"
        style={{ visibility: isToday(selectedDate) ? 'hidden' : 'visible' }}
      >
        <FaChevronRight size="2rem" />
      </Button>
    </Container>
  );
}
