import { Layout } from 'components/Layout';
import { SwipeContainer } from 'components/SwipeContainer';
import { Header } from 'components/Header';
import { PreviousButton } from 'components/PreviousButton';
import { NextButton } from 'components/NextButton';
import { AddButton } from 'components/AddButton';

export function Root() {
  return (
    <Layout>
      <Header />
      <PreviousButton />
      <NextButton />
      <AddButton />
      <SwipeContainer />
    </Layout>
  );
}
