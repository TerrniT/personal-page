import type { Language } from './ui'
import { defaultLang, languages, ui } from './ui'

export function getLangFromUrl(url: URL) {
  return getLangFromSlug(url.pathname)
}

/**
 * Resolves the locale from a pathname or collection slug.
 *
 * @example '/en' -> 'en'
 * @example '/en/' -> 'en'
 * @example '/en/services' -> 'en'
 * @example 'en/services' -> 'en'
 * @example '/' -> 'ru'
 */
export function getLangFromSlug(slug: string) {
  const normalized = slug.startsWith('/') ? slug : `/${slug}`

  for (const lang in languages) {
    if (normalized === `/${lang}` || normalized.startsWith(`/${lang}/`)) {
      return lang as Language
    }
  }

  return defaultLang
}

export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, l: string = lang) {
    const normalized = path.startsWith('/') ? path : `/${path}`

    if (l === defaultLang) {
      return normalized
    }

    if (normalized === `/${l}` || normalized.startsWith(`/${l}/`)) {
      return normalized
    }

    return normalized === '/' ? `/${l}/` : `/${l}${normalized}`
  }
}

export function useTranslations(lang: Language) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}

export function useI18n(url: URL) {
  const lang = getLangFromUrl(url)
  const p = useTranslatedPath(lang)
  const t = useTranslations(lang)
  return { lang, p, t }
}

/**
 * Removes the locale prefix from a pathname so it can be re-localized.
 *
 * @example /post/en/slug -> /post/slug
 * @example /en/writing -> /writing
 * @example /en -> /
 */
export function getDefaultPathname(url: string | URL) {
  let result = typeof url === 'string' ? url : url.pathname

  for (const lang in languages) {
    if (result === `/${lang}`) {
      return '/'
    }

    result = result.replace(`/${lang}/`, '/')
  }

  return result
}
