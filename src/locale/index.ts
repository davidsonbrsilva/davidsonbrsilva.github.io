import { createI18n } from 'vue-i18n';
import en from './en';
import pt from './pt';

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, pt },
});

export const languages = {
  en: 'English',
  pt: 'Português',
};
