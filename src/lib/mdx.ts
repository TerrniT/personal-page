import { type CollectionEntry, getCollection } from 'astro:content'

import { getLangFromSlug, type Language } from '@lib/i18n'

import { isDev } from './utils'
import { SITE } from '@consts'

export type CollectionsType = 'articles' | 'uses' | 'about' | 'experiences' | 'projects' | 'people'
export type SlugItemType = CollectionEntry<CollectionsType>

export const isPublished = (item: CollectionEntry<CollectionsType>) => {
  return isDev || !item.data.draft
}

export const filterByLocale = (item: CollectionEntry<CollectionsType>, locale: Language) => {
  return getLangFromSlug(item.slug) === locale
}

export const sortCollectionDateDesc = (a: CollectionEntry<CollectionsType>, b: CollectionEntry<CollectionsType>) => {
  return new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
}

export const sortDateDesc = (a: { date: string | Date | number }, b: { date: string | Date | number }) => {
  return new Date(b.date).valueOf() - new Date(a.date).valueOf()
}

export const sortCollectionDateAsc = (a: CollectionEntry<CollectionsType>, b: CollectionEntry<CollectionsType>) => {
  return new Date(a.data.date).valueOf() - new Date(b.data.date).valueOf()
}

/**
 * @example ko/articles/svelte-useEffect -> svelte-useEffect
 * @example ru/articles/svelte-useEffect -> svelte-useEffect
 */
export const resolveSlug = (slug: string) => {
  const [_lang, _type, ...slugList] = slug.split('/')
  return _type
}

export type ArticleInfo = {
  title: string
  description?: string
  date: Date
  tags?: string[]
  topic?: string
  author?: string
  cover_url?: string
  type?: 'article'

  href: string
  isExternal?: boolean
  lang: Language
}

export const getPostInfoList = async (locale: Language = 'en') => {
  const posts = (await getCollection('articles'))
    .filter(isPublished)
    .filter((item) => filterByLocale(item, locale))
    .sort(sortCollectionDateDesc)

  return posts.map<ArticleInfo>((item) => ({
    title: item.data.title,
    description: item.data.description ?? '',
    date: item.data.date,
    tags: item.data.tags,
    topic: item.data.topic,
    author: item.data.author,
    cover_url: item.data.cover_url,
    type: 'article',
    href: `/articles/${resolveSlug(item.slug)}`,
    lang: getLangFromSlug(item.slug),
  }))
}

export type UsesInfo = CollectionEntry<'uses'> & {
  href: string
}

export type PeopleInfo = CollectionEntry<'people'> & {
  href?: string
}

export const getUsesInfoList = async (locale: Language = 'en') => {
  const useses = (await getCollection('uses'))
    .filter(isPublished)
    .filter((item) => filterByLocale(item, locale))
    .sort(sortCollectionDateDesc)

  return useses.map<UsesInfo>((item) => ({ ...item, href: `/uses/${resolveSlug(item.slug)}` }))
}

export const getPeopleInfoList = async (locale: Language = 'en') => {
  const peoples = (await getCollection('people'))
    .filter(isPublished)
    .filter((item) => filterByLocale(item, locale))
    .sort(sortCollectionDateDesc)

  return peoples.map<PeopleInfo>((item) => ({ ...item, href: `/uses/${resolveSlug(item.slug)}` }))
}

export async function resolveAuthor(author: string, locale: Language = 'en') {
  const authors = await getPeopleInfoList(locale)

  return authors.find((item) => item.data.name === author)
    ? authors.find((item) => item.data.name === author)?.data
    : SITE.AUTHOR
}

export type ProjectInfo = CollectionEntry<'projects'> & {
  href: string
}

export const getProjectsInfoList = async (locale: Language = 'en') => {
  const projects = (await getCollection('projects'))
    .filter(isPublished)
    .filter((item) => filterByLocale(item, locale))
    .sort(sortCollectionDateDesc)

  return projects.map<ProjectInfo>((item) => ({ ...item, href: `/projects/${resolveSlug(item.slug)}` }))
}

export const getSlugItem = async (collection: CollectionsType, locale: Language = 'en') => {
  const items = (await getCollection(collection)).filter(isPublished)

  const result = items
    .filter((item) => filterByLocale(item, locale))
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
