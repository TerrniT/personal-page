export interface Config {
  name: string;
  domain: string;
  image: string;
  email: string;
  googleAnalyticsV4: { enabled: boolean };
  social: Record<string, string>;
  work: { enabled: boolean };
  articles: { enabled: boolean };
  resume: { enabled: boolean; url: string };
  languageSwitcher: { enabled: boolean };
}

export default {
  name: "Gleb Kotovsky",
  domain: "www-terrnit.vercel.app.com", // add without https:// , used in meta tags and share urls
  image: "/cat_log.png",
  email: "terrnitllc.work@gmail.com",
  googleAnalyticsV4: {
    enabled: false,
  },
  social: {
    github: "terrnitllc",
    linkedin: "terrnit",
    facebook: "terrnit",
    twitter: "terrnit",
    instagram: "gaundergud",
  },
  work: {
    enabled: true,
  },
  articles: {
    enabled: true,
  },
  resume: {
    enabled: false,
    url: "example.pdf", // add files in static folder
  },
  languageSwitcher: {
    enabled: true,
  },
} satisfies Config;
