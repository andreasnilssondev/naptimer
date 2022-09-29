import { LOCALE } from 'constants/locale';

export function getWeekdayName(date: Date, short?: boolean) {
  return new Intl.DateTimeFormat(LOCALE, { weekday: short ? 'short' : 'long' }).format(date);
}
