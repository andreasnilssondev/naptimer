import { Header } from 'components/Header';
import { AddButton } from 'components/AddButton';
import { NapList } from 'components/NapList';
import { Container } from './styled';
import './App.css';

function App() {
  return (
    <Container>
      <Header />
      <NapList />
      <AddButton />
    </Container>
  );
}

export default App;
