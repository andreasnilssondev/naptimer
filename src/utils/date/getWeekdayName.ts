import { LOCALE } from 'constants/locale';

export function getWeekdayName(date: Date) {
  return new Intl.DateTimeFormat(LOCALE, { weekday: 'long' }).format(date);
}
