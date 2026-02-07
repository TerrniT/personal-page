import type { Navigation, Site, Socials } from '@types'

export const SITE: Site = {
  TITLE: 'TerrniT',
  DESCRIPTION: 'TerrniT',
  NAME: 'Gleb Kotovsky',
  OG_IMAGE_URL: '/avatars/avatar.png',
  EMAIL: 'terrnitllc.work@gmail.com',
  DOMAIN: 'terrnit.vercel.app',
  NUM_POSTS_ON_HOMEPAGE: 4,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,

  AUTHOR: {
    name: 'TerrniT',
    avatar: '/avatars/avatar.png',
    url: 'https://github.com/terrnit',
    description: 'Software Engineer',
    isShowAuthor: false,
  },
}

export const SOCIALS: Socials = [
  {
    ICON: 'fa6-brands:github',
    NAME: 'Github',
    HREF: 'https://github.com/terrnit',
  },
  {
    ICON: 'fa6-brands:dev',
    NAME: 'Devto',
    HREF: 'https://dev.to/gaundergod',
  },
  // {
  //   ICON: 'fa6-brands:youtube',
  //   NAME: 'Youtube',
  //   HREF: 'https://www.youtube.com/channel/UC-Xu_hPhWucbV06VeyyIZig',
  // },
  {
    ICON: 'fa6-brands:telegram',
    NAME: 'Telegram',
    HREF: 'https://t.me/terrnit',
  },
]

export const NAVIGATION: Navigation[] = [
  {
    key: 'home',
    href: '/',
  },
  {
    key: 'about',
    href: '/about',
  },
  {
    key: 'articles',
    href: '/articles',
  },
  {
    key: 'projects',
    href: '/projects',
  },
  {
    key: 'people',
    href: '/people',
  },
  {
    key: 'uses',
    href: '/uses',
  },
  {
    key: 'contact',
    href: '/contact',
  },
]

export const HARD_SKILLS = [
  {
    name: 'Javascript',
    icon: 'devicon:javascript',
    link: 'https://reactjs.org',
  },
  {
    name: 'Typescript',
    icon: 'devicon:typescript',
    link: 'https://reactjs.org',
  },

  {
    name: 'Vue',
    icon: 'devicon:vuejs',
    link: 'https://reactjs.org',
  },
  {
    name: 'Nuxt',
    icon: 'devicon:nuxtjs',
    link: 'https://reactjs.org',
  },
  {
    name: 'React',
    icon: 'devicon:react',
    link: 'https://reactjs.org',
  },
  {
    name: 'Docker',
    icon: 'devicon:docker',
    link: 'https://reactjs.org',
  },
]

export const EXPERTISE = [
  {
    name: 'UI/UX Design',
    icon: 'icon-park-twotone:graphic-design',
  },
  {
    name: 'Software Development',
    icon: 'ph:devices-duotone',
  },
  {
    name: 'Time Management',
    icon: 'icon-park-twotone:time',
  },
]

export const THEME_MAP = {
  'Light': 'light',
  'Dark': 'dark',
  'Nike Pro Dark Theme': 'dark-green',
  'System': 'system',
} as const

export const STORAGE_THEME_KEY = 'theme' as const
