import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import ru from './locales/ru.json'
import tj from './locales/tj.json'

const savedLanguage =
  typeof window !== 'undefined' ? localStorage.getItem('app_language') : null

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    tj: { translation: tj },
  },
  lng: savedLanguage || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

if (typeof window !== 'undefined') {
  i18n.on('languageChanged', (language) => {
    localStorage.setItem('app_language', language)
  })
}

export default i18n
