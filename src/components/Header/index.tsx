import { useCurrentDate } from 'hooks/useCurrentDate';
import { getWeekdayName } from 'utils/date/getWeekdayName';
import { getDateName } from 'utils/date/getDateName';
import { PreviousButton } from 'components/PreviousButton';
import { NextButton } from 'components/NextButton';
import { Container } from './styled';

export function Header() {
  const { currentDate } = useCurrentDate();

  return (
    <Container>
      <PreviousButton />
      <div>
        <h1>{getWeekdayName(currentDate)}</h1>
        <p>{getDateName(currentDate)}</p>
      </div>
      <NextButton />
    </Container>
  );
}
