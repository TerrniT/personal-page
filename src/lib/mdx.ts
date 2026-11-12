import type { Language } from '@lib/i18n'

import type { CollectionEntry } from 'astro:content'
import { SITE } from '@consts'

import { getLangFromSlug } from '@lib/i18n'
import { getCollection } from 'astro:content'

export type CollectionsType = 'articles' | 'about' | 'experiences' | 'cases' | 'services'
export type SlugItemType = CollectionEntry<CollectionsType>

export function isPublished(item: CollectionEntry<CollectionsType>) {
  return !item.data.draft
}

export function filterByLocale(item: CollectionEntry<CollectionsType>, locale: Language) {
  return getLangFromSlug(item.slug) === locale
}

export function sortCollectionDateDesc(a: CollectionEntry<CollectionsType>, b: CollectionEntry<CollectionsType>) {
  return new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
}

export function sortDateDesc(a: { date: string | Date | number }, b: { date: string | Date | number }) {
  return new Date(b.date).valueOf() - new Date(a.date).valueOf()
}

export function sortCollectionDateAsc(a: CollectionEntry<CollectionsType>, b: CollectionEntry<CollectionsType>) {
  return new Date(a.data.date).valueOf() - new Date(b.data.date).valueOf()
}

/**
 * @example ko/articles/svelte-useEffect -> svelte-useEffect
 * @example ru/articles/svelte-useEffect -> svelte-useEffect
 * @example en/ai-audit -> ai-audit
 */
export function resolveSlug(slug: string) {
  const [_lang, type, ..._slugList] = slug.split('/')
  return type
}

export interface ArticleInfo {
  title: string
  description?: string
  date: Date
  tags?: string[]
  topic?: string
  category: string
  author?: string
  cover_url?: string
  type?: 'article' | 'note'

  href: string
  isExternal?: boolean
  lang: Language
}

export async function getPostInfoList(locale: Language = 'ru', author?: string) {
  const posts = (await getCollection('articles'))
    .filter(isPublished)
    .filter(item => filterByLocale(item, locale))
    .sort(sortCollectionDateDesc)

  const result = posts.map<ArticleInfo>(item => ({
    title: item.data.title,
    description: item.data.description ?? '',
    date: item.data.date,
    tags: item.data.tags,
    topic: item.data.topic,
    category: item.data.category ?? 'development',
    author: item.data.author,
    cover_url: item.data.cover_url,
    type: item.data.type ?? 'article',
    href: `/articles/${resolveSlug(item.slug)}`,
    lang: getLangFromSlug(item.slug),
  }))

  if (author) {
    return result.filter(item => item.author === author)
  }

  return result
}

export type CaseInfo = CollectionEntry<'cases'> & {
  href: string
}

export async function getCasesInfoList(locale: Language = 'ru') {
  const cases = (await getCollection('cases'))
    .filter(isPublished)
    .filter(item => filterByLocale(item, locale))
    .sort(sortCollectionDateDesc)

  return cases.map<CaseInfo>(item => ({ ...item, href: `/cases/${resolveSlug(item.slug)}` }))
}

export async function getServicesInfoList(locale: Language = 'ru') {
  const services = (await getCollection('services'))
    .filter(isPublished)
    .filter(item => filterByLocale(item, locale))
    .sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0))

  return services
}

/**
 * Resolves an article author. The people collection was removed,
 * so the site author is always returned.
 */
export async function resolveAuthor(author: string, locale: Language = 'ru') {
  void author
  void locale

  return SITE.AUTHOR
}

export async function getSlugItem<T extends CollectionsType>(collection: T, locale: Language = 'ru') {
  const items = (await getCollection(collection)).filter(isPublished)

  const result = items
    .filter(item => filterByLocale(item as CollectionEntry<CollectionsType>, locale))
    .map((data) => {
      return {
        params: { slug: resolveSlug(data.slug) },
        props: {
          lang: locale,
          data,
        },
      }
    })

  return result as {
    params: { slug: string }
    props: {
      lang: Language
      data: CollectionEntry<T>
    }
  }[]
}
