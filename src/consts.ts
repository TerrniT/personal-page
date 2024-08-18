import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "David Kotovsky",
  EMAIL: "terrnitllc.work@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};


export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "Twitter-x",
    HREF: "https://twitter.com/gaundergod",
  },
  { 
    NAME: "Github",
    HREF: "https://github.com/terrnit"
  },
  { 
    NAME: "Linkedin",
    HREF: "https://www.linkedin.com/in/terrnit",
  },
  {
    ICON: 'https://api.iconify.design/skill-icons:devto-dark.svg?color=%23888888',
    NAME: 'Devto',
    HREF: 'https://dev.to/terrnitllc',
  },
  {
    ICON: 'https://api.iconify.design/icomoon-free:youtube.svg?color=%23888888',
    NAME: 'Youtube',
    HREF: 'https://www.youtube.com/channel/UC-Xu_hPhWucbV06VeyyIZig',
  },
];

export const NAVIGATION = [
	{
	  title: 'Home',
	  href: '/',
	},
	{
	  title: 'About',
	  href: '/about',
	},
	{
	  title: 'Articles',
	  href: '/articles',
	},
	{
	  title: 'Projects',
	  href: '/projects',
	},
	{
	  title: 'Uses',
	  href: '/uses',
	},
	{
	  title: 'Contact',
	  href: '/contact',
	},
  ]