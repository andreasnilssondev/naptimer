import { Layout } from 'components/Layout';
import { SwipeContainer } from 'components/SwipeContainer';
import { Header } from 'components/Header';
import { AddButton } from 'components/AddButton';
import { DayList } from 'components/DayList';

export function Root() {
  return (
    <Layout>
      <Header />
      <AddButton />
      <DayList />
      <SwipeContainer />
    </Layout>
  );
}
