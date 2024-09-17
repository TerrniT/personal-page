import { type CollectionEntry, getCollection } from 'astro:content';

import { getLangFromSlug, type Language } from '@lib/i18n';

import { isDev } from './utils';

export type CollectionsType = 'articles' | 'uses' | 'about' | 'experiences' | 'projects'

export const isDraft = (post: CollectionEntry<CollectionsType>) => {
  return isDev || !post.data.draft;
};

export const sortCollectionDateDesc = (
  a: CollectionEntry<CollectionsType>,
  b: CollectionEntry<CollectionsType>,
) => {
  return new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf();
};

export const sortDateDesc = (
  a: { date: string | Date | number },
  b: { date: string | Date | number },
) => {
  return new Date(b.date).valueOf() - new Date(a.date).valueOf();
};

export const sortCollectionDateAsc = (
  a: CollectionEntry<CollectionsType>,
  b: CollectionEntry<CollectionsType>,
) => {
  return new Date(a.data.date).valueOf() - new Date(b.data.date).valueOf();
};

/**
 * @example ko/articles/svelte-useEffect -> svelte-useEffect
 * @example ru/articles/svelte-useEffect -> svelte-useEffect
 */
export const resolveSlug = (slug: string) => {
  const [_lang, _type, ...slugList] = slug.split('/');
  return _type
};

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
};

export const getPostInfoList = async (locale: Language = 'en') => {
  const posts = (await getCollection('articles'))
	.filter(isDraft)
	.filter((item) => getLangFromSlug(item.slug) === locale)
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
  }));
};

export type UsesInfo = CollectionEntry<'uses'> & {
	href: string
} 

export const getUsesInfoList = async (locale: Language = 'en') => {
  const useses = (await getCollection('uses'))
	.filter(isDraft)
	.filter((item) => getLangFromSlug(item.slug) === locale)
	.sort(sortCollectionDateDesc)

  return useses.map<UsesInfo>((item) => ({ ...item, href: `/uses/${resolveSlug(item.slug)}` }));
}



export type ProjectInfo = CollectionEntry<'projects'> & {
	href: string
}

export const getProjectsInfoList = async (locale: Language = 'en') => {
  const projects = (await getCollection('projects'))
	.filter(isDraft)
	.filter((item) => getLangFromSlug(item.slug) === locale)
	.sort(sortCollectionDateDesc)

  return projects.map<ProjectInfo>((item) => ({ ...item, href: `/projects/${resolveSlug(item.slug)}` }));
}