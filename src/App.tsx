import { isSameDay } from 'date-fns';
import { useCurrentDate } from 'hooks/useCurrentDate';
import { Header } from 'components/Header';
import { NextButton } from 'components/NextButton';
import { PreviousButton } from 'components/PreviousButton';
import { useNaps } from 'hooks/useNaps';
import { Nap } from 'components/Nap';
import { AddButton } from 'components/AddButton';
import { Container, Grid } from './styled';
import './App.css';

function App() {
  const { naps } = useNaps();
  const { currentDate } = useCurrentDate();

  return (
    <Container>
      <Header />
      <Grid>
        <PreviousButton />
        <div>
          {naps
            .filter(({ start }) => isSameDay(start, currentDate))
            .map(nap => (
              <Nap key={nap.id} id={nap.id} start={nap.start} end={nap.end} />
            ))}
        </div>
        <NextButton />
      </Grid>
      <AddButton />
    </Container>
  );
}

export default App;
