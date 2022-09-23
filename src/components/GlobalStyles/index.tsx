import { Fragment } from 'react';
import { Reset } from './reset';
import { Layout } from './layout';

export function GlobalStyles() {
  return (
    <Fragment>
      <Reset />
      <Layout />
    </Fragment>
  );
}
