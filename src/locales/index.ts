import type { LanguageCode } from '../types'
import { da } from './da'
import { en } from './en'
import { es } from './es'
import type { Translation } from './en'

export const texts: Record<LanguageCode, Translation> = { da, en, es }

export type { Translation }
export type TranslationKey = keyof Translation