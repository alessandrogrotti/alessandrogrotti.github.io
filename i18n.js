import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en/common.json'
import it from './locales/it/common.json'

const resources = {
  en: { common: en },
  it: { common: it },
}

if (!i18n.isInitialized) {
  const detector = typeof window !== 'undefined' ? LanguageDetector : { init: () => {}, type: 'languageDetector', detect: () => 'en', cacheUserLanguage: () => {} }

  i18n
    .use(detector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'en',
      ns: ['common'],
      defaultNS: 'common',
      interpolation: { escapeValue: false },
      detection: { caches: ['localStorage', 'cookie'] },
    })
}

export default i18n
