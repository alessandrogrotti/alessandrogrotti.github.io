import { useTranslation } from 'react-i18next'

export default function LocaleSwitcher() {
  const { i18n } = useTranslation()

  const switchLocale = (locale) => {
    i18n.changeLanguage(locale)
  }

  const getFlag = (locale) => {
    return locale === 'en' ? '🇬🇧' : '🇮🇹'
  }

  const getLabel = (locale) => {
    return locale === 'en' ? 'English' : 'Italiano'
  }

  const locales = ['en', 'it']

  return (
    <div className="flex items-center gap-1 bg-white border border-gray-200">
      {locales.map((locale) => (
        <button 
          key={locale} 
          onClick={() => switchLocale(locale)} 
          className={`px-4 py-2 font-light tracking-wide transition-all duration-300 flex items-center gap-2 ${
            i18n.language === locale 
              ? 'bg-black text-white' 
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <span className="text-sm">{getLabel(locale)}</span>
        </button>
      ))}
    </div>
  )
}
