import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { DateTime } from 'luxon';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    backend: {
      loadPath: 'src/locales/{{lng}}/{{ns}}.json',
    },
  });
i18n.services.formatter.add('DATE_LONG', (value, lng, _options) => {
  return DateTime.fromJSDate(value)
    .setLocale(lng)
    .toLocaleString(DateTime.DATE_HUGE);
});

i18n.services.formatter.add('DATE_SHORT', (value, lng, _options) => {
  return DateTime.fromJSDate(value)
    .setLocale(lng)
    .toLocaleString(DateTime.DATE_MED);
});

i18n.services.formatter.add('DATE_TIME', (value, lng, _options) => {
  return DateTime.fromJSDate(value)
    .setLocale(lng)
    .toLocaleString(DateTime.DATETIME_MED);
});
export default i18n;
