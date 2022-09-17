import { isSameDay } from 'date-fns';
import { Nap } from 'components/Nap';
import { useNaps } from 'hooks/useNaps';
import { useSelectedDate } from 'hooks/useSelectedDate';
import { Container, Item } from './styled';

export function NapList() {
  const { naps } = useNaps();
  const { selectedDate } = useSelectedDate();

  return (
    <Container>
      {naps
        .filter(({ start }) => isSameDay(start, selectedDate))
        .map(nap => (
          <Item>
            <Nap key={nap.id} id={nap.id} start={nap.start} end={nap.end} />
          </Item>
        ))}
    </Container>
  );
}
