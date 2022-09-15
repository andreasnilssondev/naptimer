import { isSameDay } from 'date-fns';
import { Nap } from 'components/Nap';
import { useNaps } from 'hooks/useNaps';
import { useCurrentDate } from 'hooks/useCurrentDate';
import { Container, Item } from './styled';

export function NapList() {
  const { naps } = useNaps();
  const { currentDate } = useCurrentDate();

  return (
    <Container>
      {naps
        .filter(({ start }) => isSameDay(start, currentDate))
        .map(nap => (
          <Item>
            <Nap key={nap.id} id={nap.id} start={nap.start} end={nap.end} />
          </Item>
        ))}
    </Container>
  );
}
