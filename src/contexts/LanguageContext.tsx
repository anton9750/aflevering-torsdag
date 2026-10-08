import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { texts } from '../locales'
import type { TranslationKey } from '../locales'
import type { LanguageCode } from '../types'

const Context = createContext<{
  language: LanguageCode
  t: (key: TranslationKey) => string
  setLanguage: (language: LanguageCode) => void
}>({
  language: 'en',
  t: (key) => texts.en[key],
  setLanguage: () => {},
})

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [language, setLanguage] =
    useLocalStorage<LanguageCode>(
      'travelmate-language',
      'en',
    )

  const value = {
    language,
    setLanguage,

    t: (key: TranslationKey) => texts[language][key],
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export const useLanguage = () =>
  useContext(Context)