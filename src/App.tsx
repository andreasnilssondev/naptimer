import { Header } from 'components/Header';
import { AddButton } from 'components/AddButton';
import { NapList } from 'components/NapList';
import { useSelectedDate } from 'hooks/useSelectedDate';
import { addDays } from 'date-fns';
import { useSwipe } from 'hooks/useSwipe';
import { NextButton } from 'components/NextButton';
import { PreviousButton } from 'components/PreviousButton';
import { Fragment } from 'react';
import { Container, Day, InnerContainer } from './styled';

function App() {
  const { selectedDate } = useSelectedDate();

  const { style, onTransitionEnd } = useSwipe();

  return (
    <Fragment>
      <PreviousButton />
      <NextButton />
      <AddButton />
      <Container>
        <InnerContainer style={style} onTransitionEnd={onTransitionEnd}>
          <Day>
            <Header date={addDays(selectedDate, -1)} />
            <NapList date={addDays(selectedDate, -1)} />
          </Day>
          <Day>
            <Header date={selectedDate} />
            <NapList date={selectedDate} />
          </Day>
          <Day>
            <Header date={addDays(selectedDate, 1)} />
            <NapList date={addDays(selectedDate, 1)} />
          </Day>
        </InnerContainer>
      </Container>
    </Fragment>
  );
}

export default App;
