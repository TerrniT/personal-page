import type { Navigation, Site, Socials } from '@types'

export const SITE: Site = {
  TITLE: 'Kotovsky',
  DESCRIPTION:
    'Внедряю ИИ в бизнес-процессы: LLM, RAG, ИИ-агенты, автоматизация и интеграции с CRM, 1С и Telegram.',
  NAME: 'Kotovsky',
  OG_IMAGE_URL: '/avatars/avatar.png',
  EMAIL: 'terrnit.work@gmail.com',
  TELEGRAM: 'https://t.me/terrnit',
  DOMAIN: 'terrnit.com',
  NUM_POSTS_ON_HOMEPAGE: 4,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,

  AUTHOR: {
    name: 'Gleb Kotovsky',
    avatar: '/avatars/avatar.png',
    url: 'https://github.com/terrnit',
    description: 'AI-интегратор и консультант',
    isShowAuthor: false,
  },
}

export const SOCIALS: Socials = [
  {
    ICON: 'fa6-brands:telegram',
    NAME: 'Telegram',
    HREF: 'https://t.me/terrnit',
  },
  {
    ICON: 'fa6-brands:github',
    NAME: 'Github',
    HREF: 'https://github.com/terrnit',
  },
]

export const NAVIGATION: Navigation[] = [
  {
    key: 'home',
    href: '/',
  },
  {
    key: 'services',
    href: '/services',
  },
  {
    key: 'cases',
    href: '/cases',
  },
  {
    key: 'articles',
    href: '/articles',
  },
  {
    key: 'about',
    href: '/about',
  },
  {
    key: 'hire',
    href: '/hire',
  },
  {
    key: 'contact',
    href: '/contact',
  },
]

export const HARD_SKILLS = [
  {
    name: 'LLM (OpenAI / Anthropic)',
    icon: 'simple-icons:openai',
    link: 'https://platform.openai.com/docs',
  },
  {
    name: 'GigaChat / YandexGPT',
    icon: 'ph:chat-circle-dots-duotone',
    link: 'https://developers.sber.ru/docs/ru/gigachat/overview',
  },
  {
    name: 'RAG',
    icon: 'ph:database-duotone',
    link: 'https://platform.openai.com/docs/guides/retrieval',
  },
  {
    name: 'ИИ-агенты',
    icon: 'ph:robot-duotone',
    link: 'https://modelcontextprotocol.io',
  },
  {
    name: 'n8n',
    icon: 'simple-icons:n8n',
    link: 'https://docs.n8n.io',
  },
  {
    name: 'CRM / 1С / Telegram',
    icon: 'ph:plugs-duotone',
    link: 'https://core.telegram.org/bots/api',
  },
  {
    name: 'Промпт-инжиниринг',
    icon: 'ph:terminal-window-duotone',
    link: 'https://platform.openai.com/docs/guides/prompt-engineering',
  },
  {
    name: 'Автоматизация процессов',
    icon: 'ph:gear-six-duotone',
    link: 'https://docs.n8n.io/workflows/',
  },
]

export const EXPERTISE = [
  {
    name: 'Внедрение LLM',
    icon: 'ph:brain-duotone',
  },
  {
    name: 'RAG и базы знаний',
    icon: 'ph:database-duotone',
  },
  {
    name: 'ИИ-агенты',
    icon: 'ph:robot-duotone',
  },
  {
    name: 'Автоматизация процессов',
    icon: 'ph:gear-six-duotone',
  },
]

export const THEME_MAP = {
  Light: 'light',
  Dark: 'dark',
  System: 'system',
} as const

export const STORAGE_THEME_KEY = 'theme' as const
