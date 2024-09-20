import type { PeopleInfo } from '@lib/mdx'

export type Locales = 'ru' | 'en'

export interface Author {
  name: string
  avatar: string
  url: string
  description: string
  isShowAuthor: boolean
}

export type Site = {
  NAME: string
  EMAIL: string
  DOMAIN: string
  NUM_POSTS_ON_HOMEPAGE: number
  NUM_WORKS_ON_HOMEPAGE: number
  NUM_PROJECTS_ON_HOMEPAGE: number
} & { AUTHOR: PeopleInfo | Author } & Metadata

export type Metadata = {
  TITLE: string
  DESCRIPTION: string
  OG_IMAGE_URL?: string
}

export type Socials = {
  NAME: string
  HREF: string
  ICON?: string
}[]

export type NavigationKeys =
  | 'home'
  | 'about'
  | 'articles'
  | 'projects'
  | 'uses'
  | 'contact'
  | 'friends'
  | 'photos'
  | 'playlist'

export type Navigation = {
  key: NavigationKeys
  href: string | unknown
}

export interface Experience {
  job_title: string
  company_name: string
  live_url?: string
  duration: string
  description?: string
  icon?: string
  stack?: string[]
  location?: string
}
