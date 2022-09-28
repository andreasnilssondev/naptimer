import { LOCALE } from 'constants/locale';
import { isToday, isTomorrow, isYesterday } from 'date-fns';

export function getDateName(date: Date) {
  if (isToday(date)) {
    return 'Today';
  }

  if (isTomorrow(date)) {
    return 'Tomorrow';
  }

  if (isYesterday(date)) {
    return 'Yesterday';
  }

  return new Intl.DateTimeFormat(LOCALE, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}
