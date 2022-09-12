import { useCurrentDate } from 'hooks/useCurrentDate';
import { getWeekdayName } from 'utils/date/getWeekdayName';
import { getDateName } from 'utils/date/getDateName';
import { Container } from './styled';

export function Header() {
  const { currentDate } = useCurrentDate();

  return (
    <Container>
      <h1>{getWeekdayName(currentDate)}</h1>
      <p>{getDateName(currentDate)}</p>
    </Container>
  );
}
