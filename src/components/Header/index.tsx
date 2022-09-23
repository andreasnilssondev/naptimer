import { getWeekdayName } from 'utils/date/getWeekdayName';
import { getDateName } from 'utils/date/getDateName';
import { HeaderProps } from 'components/Header/types';
import { Container } from './styled';

export function Header(props: HeaderProps) {
  const { date } = props;

  return (
    <Container>
      <div>
        <h1>{getWeekdayName(date)}</h1>
        <p>{getDateName(date)}</p>
      </div>
    </Container>
  );
}
