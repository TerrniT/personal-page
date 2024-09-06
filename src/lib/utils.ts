import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const startMonth = startDate.toLocaleString("default", { month: "short" });
  const startYear = startDate.getFullYear().toString();
  let endMonth;
  let endYear;

  if (endDate) {
    if (typeof endDate === "string") {
      endMonth = "";
      endYear = endDate;
    } else {
      endMonth = endDate.toLocaleString("default", { month: "short" });
      endYear = endDate.getFullYear().toString();
    }
  }

  return `${startMonth}${startYear} - ${endMonth}${endYear}`;
}

export const langIconResolver: Record<
  string,
  { icon: string; title: string }
> = {
  ru: {
	icon: "twemoji:flag-russia",
	title: 'Русский'
  },
  en: {
	// icon: "twemoji:flag-united-states",
	icon: "devicon:nuxtjs",
	title: 'English'
  },
  es: {
	icon: "twemoji:flag-spain",
	title: 'Español'
  },
  zh: {
	icon: "twemoji:flag-china",
	title: '简体中文'
  },
  ko: {
	icon: "twemoji:flag-south-korea",
	title: '한국어'
  },
  nl: {
	icon: "twemoji:flag-netherlands",
	title: 'Nederlands'
  },
  da: {
	icon: "twemoji:flag-denmark",
	title: 'Dansk'
  }
}

export const devIconResolver: Record<
  string,
  { icon: string; description: string; link: string }
> = {
  nuxt: {
    icon: "devicon:nuxtjs",
    description: "Nuxt",
    link: "https://nuxtjs.org/",
  },
  react: {
    icon: "devicon:react",
    description: "React",
    link: "https://reactjs.org",
  },
  vue: {
    icon: "devicon:vuejs",
    description: "Vue",
    link: "https://vuejs.org/",
  },
  svelte: {
    icon: "devicon:svelte",
    description: "Svelte",
    link: "https://svelte.dev/docs",
  },
  next: {
    icon: "devicon:nextjs",
    description: "Next.js",
    link: "https://nextjs.org/docs/getting-started",
  },
  tauri: {
    icon: "devicon:tauri",
    description: "Tauri",
    link: "https://tauri.dev/docs/getting-started",
  },
  typescript: {
    icon: "devicon:typescript",
    description: "TypeScript",
    link: "https://www.typescriptlang.org",
  },
  javascript: {
    icon: "devicon:javascript",
    description: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  go: {
    icon: "devicon:go-wordmark",
    description: "Go",
    link: "https://golang.org/doc/",
  },
  astro: {
    icon: "devicon:astro",
    description: "Astro",
    link: "https://astro.build/docs/getting-started/",
  },
  qwik: {
    icon: "devicon:qwik",
    description: "Qwik",
    link: "https://qwik.dev/docs/getting-started",
  },
  tailwindcss: {
    icon: "devicon:tailwindcss",
    description: "TailwindCSS",
    link: "https://tailwindcss.com/docs/installation",
  },
  sveltekit: {
    icon: "devicon:svelte",
    description: "SvelteKit",
    link: "https://kit.svelte.dev/docs/getting-started",
  },
  vite: {
    icon: "devicon:vitejs",
    description: "Vite",
    link: "https://vitejs.dev/guide/",
  },
  solidity: {
    icon: "devicon:solidity",
    description: "Solidity",
    link: "https://docs.soliditylang.org/",
  },
  solidjs: {
    icon: "devicon:solidjs",
    description: "SolidJS",
    link: "https://solidjs.com",
  },
  rust: {
    icon: "devicon:rust",
    description: "Rust",
    link: "https://doc.rust-lang.org/book/",
  },
  "react native": {
    icon: "devicon:react",
    description: "React Native",
    link: "https://reactnative.dev/docs/getting-started",
  },
  nodejs: {
    icon: "devicon:nodejs",
    description: "Node.js",
    link: "https://nodejs.org/en/docs/",
  },
  expo: {
    icon: "logos:expo-icon",
    description: "Expo",
    link: "https://docs.expo.dev/get-started/",
  },
  angular: {
    icon: "devicon:angular",
    description: "Angular",
    link: "https://angular.io/docs",
  },
  kubernetes: {
    icon: "devicon:kubernetes",
    description: "Kubernetes",
    link: "https://kubernetes.io/docs/",
  },
  docker: {
    icon: "devicon:docker",
    description: "Docker",
    link: "https://docs.docker.com/engine/userguide/",
  },
  git: {
    icon: "devicon:git",
    description: "Git",
    link: "https://git-scm.com/docs/",
  },
  grafana: {
    icon: "devicon:grafana",
    description: "Grafana",
    link: "https://grafana.com/docs/",
  },
  graphql: {
    icon: "devicon:graphql",
    description: "GraphQL",
    link: "https://graphql.org/learn/",
  },
  helm: {
    icon: "devicon:helm",
    description: "Helm",
    link: "https://helm.sh/docs/",
  },
  lua: {
    icon: "devicon:lua",
    description: "Lua",
    link: "https://www.lua.org/docs/",
  },
  redux: {
    icon: "devicon:redux",
    description: "Redux",
    link: "https://redux.js.org",
  },
  supabase: {
    icon: "devicon:supabase",
    description: "Supabase",
    link: "https://supabase.com",
  },
  firebase: {
    icon: "devicon:firebase",
    description: "Firebase",
    link: "https://firebase.com",
  },
  thirdwebjs: {
    icon: "simple-icons:thirdweb",
    description: "Thirdweb JS",
    link: "https://thirdweb.com",
  },
  chakraui: {
    icon: "devicon:chakraui",
    description: "Chakra UI",
    link: "https://chakra-ui.com",
  },
  "redux toolkit": {
    icon: "devicon:redux",
    description: "Redux Toolkit",
    link: "https://redux-toolkit.js.org",
  },
};
