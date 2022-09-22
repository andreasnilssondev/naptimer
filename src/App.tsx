import { Header } from 'components/Header';
import { AddButton } from 'components/AddButton';
import { NapList } from 'components/NapList';
import { useSelectedDate } from 'hooks/useSelectedDate';
import { addDays } from 'date-fns';
import { useSwipe } from 'hooks/useSwipe';
import { Container, Day, InnerContainer } from './styled';
import './App.css';

function App() {
  const { selectedDate } = useSelectedDate();

  const { style, onTransitionEnd } = useSwipe();

  return (
    <Container>
      <InnerContainer style={style} onTransitionEnd={onTransitionEnd}>
        <Day>
          <Header date={addDays(selectedDate, -1)} />
          <NapList date={addDays(selectedDate, -1)} />
          <AddButton />
        </Day>
        <Day>
          <Header date={selectedDate} />
          <NapList date={selectedDate} />
          <AddButton />
        </Day>
        <Day>
          <Header date={addDays(selectedDate, 1)} />
          <NapList date={addDays(selectedDate, 1)} />
          <AddButton />
        </Day>
      </InnerContainer>
    </Container>
  );
}

export default App;
