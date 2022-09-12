import { Fragment } from 'react';
import { useCurrentDate } from 'hooks/useCurrentDate';
import { getWeekdayName } from 'utils/date/getWeekdayName';
import { getDateName } from 'utils/date/getDateName';

export function Header() {
  const { currentDate } = useCurrentDate();

  return (
    <Fragment>
      <h1>{getWeekdayName(currentDate)}</h1>
      <p>{getDateName(currentDate)}</p>
    </Fragment>
  );
}
