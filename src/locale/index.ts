import { createI18n } from "vue-i18n";

export default createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: {
      title: "About Me",
    },
    pt: {
      title: "Sobre Mim",
    },
  },
});

export const languages = {
  en: "English",
  pt: "Português",
};
