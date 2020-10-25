import { setDay, format } from 'date-fns';
import {
  enUS as en,
  es,
  pt,
  fr,
  de,
  pl,
  it,
  ru,
  ja,
  ko,
  tr,
  sv,
  nl,
  da,
  th,
  cs,
  zhCN as zh,
  uk,
  nb as no,
} from 'date-fns/locale';
import { convertTokens } from '@date-fns/upgrade/v2';

const MONTHS_INDEXES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const locales = {
  en,
  es,
  pt,
  fr,
  de,
  pl,
  it,
  ru,
  ja,
  ko,
  tr,
  sv,
  no,
  nl,
  da,
  th,
  cs,
  zh,
  uk,
};

const getLocale = locale =>
  typeof locale === 'string' ? locales[locale] : locale;

export const formatDate = (date, dateFormat, locale) =>
  format(date, convertTokens(dateFormat), {
    locale: getLocale(locale),
  });

export const formatDateV2 = (date, dateFormatV2, locale) =>
  format(date, dateFormatV2, {
    locale: getLocale(locale),
  });

export default locale => ({
  formatMonthTitle: date =>
    format(date, 'LLLL yyyy', {
      locale: getLocale(locale),
    }),

  formatWeekdayShort: index =>
    format(setDay(new Date(), index), 'iiiiii', {
      locale: getLocale(locale),
    }),

  formatWeekdayLong: index =>
    format(setDay(new Date(), index), 'iiii', {
      locale: getLocale(locale),
    }),

  formatDay: date =>
    format(date, 'iii	PP', {
      locale: getLocale(locale),
    }),

  getMonths: () =>
    MONTHS_INDEXES.map(i =>
      format(new Date(2018, i), 'LLLL', {
        locale: getLocale(locale),
      }),
    ),
});
