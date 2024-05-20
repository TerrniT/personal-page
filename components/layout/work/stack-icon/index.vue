<script setup lang="ts">
const props = defineProps<{name: StackNames}>()

type StackNames =
    | 'nuxt'
    | 'react'
    | 'vue'
    | 'svelte'
    | 'next'
    | 'tauri'
    | 'typescript'
    | 'javascript'
    | 'go'
    | 'astro'
    | 'qwik'
    | 'tailwindcss'
    | 'sveltekit'
    | 'vite'
    | 'solidity'
    | 'solidjs'
    | 'rust'
    | 'react native'
    | 'nodejs'
    | 'expo'
    | 'angular'
    | 'kubernetes'
    | 'docker'
    | 'git'
    | 'grafana'
    | 'graphql'
    | 'helm'
    | 'lua'

const iconsResolver: Record<StackNames, {icon: string, description: string, link: string}> = {
    nuxt: { icon: 'logos:nuxt-icon', description: 'Nuxt', link: 'https://nuxtjs.org/' },
    react: { icon: 'devicon:react', description: 'React', link: 'https://reactjs.org' },
    vue: { icon: 'devicon:vuejs', description: 'Vue', link: 'https://vuejs.org/' },
    svelte: { icon: 'devicon:svelte', description: 'Svelte', link: 'https://svelte.dev/docs' },
    next: { icon: 'devicon:nextjs', description: 'Next.js', link: 'https://nextjs.org/docs/getting-started' },
    tauri: { icon: 'devicon:tauri', description: 'Tauri', link: 'https://tauri.dev/docs/getting-started' },
    typescript: { icon: 'devicon:typescript', description: 'TypeScript', link: 'https://www.typescriptlang.org' },
    javascript: { icon: 'devicon:javascript', description: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    go: { icon: 'devicon:go-wordmark', description: 'Go', link: 'https://golang.org/doc/' },
    astro: { icon: 'devicon:astro', description: 'Astro', link: 'https://astro.build/docs/getting-started/' },
    qwik: { icon: 'devicon:qwik', description: 'Qwik', link: 'https://qwik.dev/docs/getting-started' },
    tailwindcss: { icon: 'devicon:tailwindcss', description: 'TailwindCSS', link: 'https://tailwindcss.com/docs/installation' },
    sveltekit: { icon: 'devicon:svelte', description: 'SvelteKit', link: 'https://kit.svelte.dev/docs/getting-started' },
    vite: { icon: 'devicon:vitejs', description: 'Vite', link: 'https://vitejs.dev/guide/' },
    solidity: { icon: 'devicon:solidity', description: 'Solidity', link: 'https://docs.soliditylang.org/' },
    solidjs: { icon: 'devicon:solidjs', description: 'SolidJS', link: 'https://solidjs.com' },
    rust: { icon: 'devicon:rust', description: 'Rust', link: 'https://doc.rust-lang.org/book/' },
    'react native': { icon: 'devicon:react', description: 'React Native', link: 'https://reactnative.dev/docs/getting-started' },
    nodejs: { icon: 'devicon:nodejs', description: 'Node.js', link: 'https://nodejs.org/en/docs/' },
    'expo': { icon: 'logos:expo-icon', description: 'Expo', link: 'https://docs.expo.dev/get-started/' },
    angular: { icon: 'devicon:angular', description: 'Angular', link: 'https://angular.io/docs' },
    'kubernetes': { icon: 'devicon:kubernetes', description: 'Kubernetes', link: 'https://kubernetes.io/docs/' },
    docker: { icon: 'devicon:docker', description: 'Docker', link: 'https://docs.docker.com/engine/userguide/' },
    git: { icon: 'devicon:git', description: 'Git', link: 'https://git-scm.com/docs/' },
    grafana: { icon: 'devicon:grafana', description: 'Grafana', link: 'https://grafana.com/docs/' },
    graphql: { icon: 'devicon:graphql', description: 'GraphQL', link: 'https://graphql.org/learn/' },
    helm: { icon: 'devicon:helm', description: 'Helm', link: 'https://helm.sh/docs/' },
    lua: { icon: 'devicon:lua', description: 'Lua', link: 'https://www.lua.org/docs/' },
}

</script>

<template>
  <UiTooltipProvider>
    <UiTooltip>
      <UiTooltipTrigger>
        <Icon
          v-if="iconsResolver[props.name]"
          :name="iconsResolver[props.name].icon"
          size="1.5em"
        />
        <template v-else>
          Error: Icon doesnt exist
        </template>
      </UiTooltipTrigger>
      <UiTooltipContent>
        <template
          v-if="iconsResolver[props.name]"
        >
          <div class="flex gap-x-2 items-center">
            <p class="text-foreground font-bold">
              {{ props.name }}
            </p>
            <div class="flex text-sm items-center">
              <p>[</p>
              <Icon
                :name="iconsResolver[props.name].icon"
              />
              <p>]</p>
            </div>
          </div>
          <div class="flex flex-col gap-y-2">
            <p class="text-muted-foreground">
              {{ iconsResolver[props.name].description }}
            </p>
            <a
              class="text-primary hover:underline-offset-2 hover:underline"
              :href="iconsResolver[props.name].link"
              target="_blank"
            >
              {{ iconsResolver[props.name].link }}
            </a>
          </div>
        </template>
      </UiTooltipContent>
    </UiTooltip>
  </UiTooltipProvider>
</template>