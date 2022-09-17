import { useSelectedDate } from 'hooks/useSelectedDate';
import { getWeekdayName } from 'utils/date/getWeekdayName';
import { getDateName } from 'utils/date/getDateName';
import { PreviousButton } from 'components/PreviousButton';
import { NextButton } from 'components/NextButton';
import { Container } from './styled';

export function Header() {
  const { selectedDate } = useSelectedDate();

  return (
    <Container>
      <PreviousButton />
      <div>
        <h1>{getWeekdayName(selectedDate)}</h1>
        <p>{getDateName(selectedDate)}</p>
      </div>
      <NextButton />
    </Container>
  );
}
