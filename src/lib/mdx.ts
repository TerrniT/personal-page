import type { Language } from '@lib/i18n'

import type { CollectionEntry } from 'astro:content'
import { SITE } from '@consts'

import { getLangFromSlug } from '@lib/i18n'
import { getCollection } from 'astro:content'

export type CollectionsType = 'articles' | 'uses' | 'about' | 'experiences' | 'projects' | 'people'
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
  author?: string
  cover_url?: string
  type?: 'article' | 'note'

  href: string
  isExternal?: boolean
  lang: Language
}

export async function getPostInfoList(locale: Language = 'en', author?: string) {
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

export type UsesInfo = CollectionEntry<'uses'> & {
  href: string
}

export type PeopleInfo = CollectionEntry<'people'> & {
  href?: string
}

export async function getUsesInfoList(locale: Language = 'en') {
  const useses = (await getCollection('uses'))
    .filter(isPublished)
    .filter(item => filterByLocale(item, locale))
    .sort(sortCollectionDateDesc)

  return useses.map<UsesInfo>(item => ({ ...item, href: `/uses/${resolveSlug(item.slug)}` }))
}

export async function getPeopleInfoList(locale: Language = 'en') {
  const peoples = (await getCollection('people'))
    .filter(isPublished)
    .filter(item => filterByLocale(item, locale))
    .sort(sortCollectionDateDesc)

  return peoples.map<PeopleInfo>(item => ({ ...item, href: `/people/${resolveSlug(item.slug)}` }))
}

export async function resolveAuthor(author: string, locale: Language = 'en') {
  const authors = await getPeopleInfoList(locale)
  const resolvedAuthor = authors.find(item => item.data.nickname === author)

  if (resolvedAuthor) {
    return {
      ...resolvedAuthor.data,
      href: `/people/${resolveSlug(resolvedAuthor.slug)}`,
    }
  }
  else {
    return SITE.AUTHOR
  }
}

export type ProjectInfo = CollectionEntry<'projects'> & {
  href: string
}

export async function getProjectsInfoList(locale: Language = 'en') {
  const projects = (await getCollection('projects'))
    .filter(isPublished)
    .filter(item => filterByLocale(item, locale))
    .sort(sortCollectionDateDesc)

  return projects.map<ProjectInfo>(item => ({ ...item, href: `/projects/${resolveSlug(item.slug)}` }))
}

export async function getSlugItem(collection: CollectionsType, locale: Language = 'en') {
  const items = (await getCollection(collection)).filter(isPublished)

  const result = items
    .filter(item => filterByLocale(item, locale))
    .map((data) => {
      return {
        params: { slug: resolveSlug(data.slug) },
        props: {
          lang: locale,
          data,
        },
      }
    })

  return result as unknown as {
    params: { slug: string }
    props: {
      lang: Language
      data: CollectionEntry<CollectionsType>
    }
  }
}
