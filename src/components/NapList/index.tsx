import { isSameDay } from 'date-fns';
import { Nap } from 'components/Nap';
import { useNaps } from 'hooks/useNaps';
import { NapListProps } from 'components/NapList/types';
import { Container, Item } from './styled';

export function NapList(props: NapListProps) {
  const { date } = props;
  const { naps } = useNaps();

  return (
    <Container>
      {naps
        .filter(({ start }) => isSameDay(start, date))
        .map(nap => (
          <Item>
            <Nap key={nap.id} id={nap.id} start={nap.start} end={nap.end} />
          </Item>
        ))}
    </Container>
  );
}
