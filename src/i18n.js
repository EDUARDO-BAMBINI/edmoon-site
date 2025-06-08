// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Імпортуємо файли перекладів
import enTranslation from './locales/en/translation.json';
import uaTranslation from './locales/ua/translation.json';
import ruTranslation from './locales/ru/translation.json';
// Додайте імпорти для інших 14 мов тут
// import deTranslation from './locales/de/translation.json';
// import itTranslation from './locales/it/translation.json';

const resources = {
  en: { translation: enTranslation },
  ua: { translation: uaTranslation },
  ru: { translation: ruTranslation },
  // Додайте ресурси для інших 14 мов тут
  // de: { translation: deTranslation },
  // it: { translation: itTranslation },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // Мова за замовчуванням
    interpolation: {
      escapeValue: false, 
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;