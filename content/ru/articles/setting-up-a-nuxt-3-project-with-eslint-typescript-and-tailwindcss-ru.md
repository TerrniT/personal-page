---
title: Настройка проекта Nuxt 3 с помощью ESLint, TypeScript и Tailwind CSS
createdAt: 2024/03/24
published: 2024/03/24
tags:
  - vue
  - nuxt 3
  - typescript
topic: Разработка
slug: setting-up-a-nuxt-3-project-with-eslint-typescript-and-tailwindcss-ru
cover_type: image
author: TerrniT
type: article
---

## Introduction

**Nuxt.js** - это надежный и универсальный фреймворк, который в основном используется для создания серверных рендеринговых приложений с Vue.js. В этом подробном руководстве мы рассмотрим процесс создания шаблона проекта Nuxt 3. Этот шаблон будет интегрирован с ESLint, TypeScript и Tailwind CSS. Сочетание этих инструментов позволяет значительно повысить производительность, обеспечить высокий стандарт качества кода и упростить процесс создания стиля.

Переведено с помощью DeepL.com (бесплатная версия)

## Ингредиенты

- Node (В этом примере я использовал версию 20.10.0, но может подойти и любая более старая версия. )
- Npm (проверено на v7)
- Pnpm (но вы можете использовать просто npm / yarn)

## Настройка Nuxt 3

**Nuxt 3** - это последняя итерация фреймворка Nuxt.js. В нем реализовано множество значительных улучшений и инновационных функций, которые делают процесс разработки Vue.js более эффективным и приятным. Процесс настройки нового проекта с **Nuxt 3** очень прост.

Во-первых, вам нужно будет установить Node.js и npm. Они являются основополагающими для работы фреймворка Nuxt 3. После их установки вы можете создать новый проект Nuxt 3 с помощью команды `nuxi@latest`. Эта команда запускает процесс, который проведет вас через различные этапы настройки, позволяя вам настроить проект в соответствии с вашими конкретными потребностями. В этом руководстве я буду использовать pnpm в качестве менеджера пакетов. Итак, давайте запустим наш проект:

```bash
pnpm dlx nuxi@latest init nuxt3-template
cd nuxt3-template
pnpm i && pnpm run dev
```

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6kiq3827myvu1ohggc4j.png)

## Что мы получаем

После инициализации мы получаем шаблонный проект на nuxt 3. Так давайте сделаем его еще лучше!

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t3pu8b1rj2fnu1xrmu53.png)

## Интеграция ESLint и TypeScript

**ESLint** - это широко известный инструмент, который выявляет и сообщает о шаблонах, найденных в коде ECMAScript/JavaScript. Интеграция ESLint может значительно улучшить качество вашего кода и помочь предотвратить появление потенциальных ошибок в будущем.

С другой стороны, TypeScript - это сильно типизированный супернабор JavaScript, добавляющий статические типы. Это бесценный инструмент, который помогает обнаружить ошибки на ранней стадии разработки, что экономит время и ресурсы.

Чтобы добавить их в свой проект Nuxt, вам нужно установить необходимые зависимости, а затем реализовать соответствующие конфигурации в настройках проекта. С интеграцией ESLint и TypeScript ваша среда разработки становится более надежной, обеспечивая хорошую практику разработки

```bash
# Добавляем модули eslint и typescript в проект
pnpm install -D eslint eslint-plugin-vue@latest

pnpm add -D @nuxtjs/eslint-module

pnpm install -D typescript @typescript-eslint/parser@latest @typescript-eslint/eslint-plugin@latest
```

Обновляем `nuxt.config.ts` файл:

```tsx
// nuxt.config.ts

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/eslint-module"],
});
```

Создайте файл `.eslintrc.cjs` и добавьте в него следующие строки кода:

```jsx
// .eslintrc.cjs

module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: {
      ts: "@typescript-eslint/parser",
    },
  },
  env: {
    node: true,
    browser: true,
  },
  extends: ["plugin:vue/vue3-recommended"],
  rules: {
    "no-trailing-spaces": ["warn"],
    "prefer-promise-reject-errors": "off",
    "vue/no-v-html": "off",
    "no-trailing-spaces": ["warn"],
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["error", "Error"],
      },
    ],
  },
  ignorePatterns: ["dist", "node_modules", "build", "coverage", "docs", "test"],
  overrides: [
    {
      files: ["components/**/**/*.vue"],
      rules: { "vue/multi-word-component-names": "off" },
    },
  ],
};
```

Если eslint не работает с первого раза, вам нужно удалить `node_modules` и установить проект заново.

После этих действий в проекте уже будет сконфигурирован eslint, который также выполняет роль форматера

## Incorporating Tailwind CSS

Tailwind CSS is a utility-first CSS framework that offers an unprecedented level of customization. It allows developers to build responsive designs with relative ease. To include Tailwind CSS in your Nuxt project, you need to install it as a project dependency.

Once installed, you should create a Tailwind config file. This file is crucial as it allows you to customize your design according to your project's needs. Following this, you need to update your Nuxt config file to include Tailwind CSS in your project's build step.

One of the main advantages of Tailwind CSS is that you can write custom styles directly in your HTML. This reduces the need for separate CSS files and makes your styles easier to manage and maintain

Let’s init tailwind css config file:

```bash
pnpm install -D postcss autoprefixer
pnpm dlx tailwindcss init
pnpm add --save-dev @nuxtjs/tailwindcss
```

Our tailwind.config.js file should look like this:

```jsx
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

And update `nuxt.config.ts` file:

```jsx
// nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/eslint-module",
    // add tailwindcss module
    "@nuxtjs/tailwindcss",
  ],
  // add postcss support for tailwindcss
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
```

You should also remember to create a root file for tailwindcss

```bash
// in project root
mkdir assets/
cd assets
mkdir css/
cd css
touch tailwind.css
```

```css
/* tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

If you want to see if tailwindcss works just copy this template and add it to `app.vue`

```html
<!-- app.vue -->
<template>
  <div
    class="flex flex-col w-full h-screen bg-zinc-950 items-center justify-center"
  >
    <div class="mx-auto">
      <h1 class="text-3xl text-blue-400 font-bold underline">
        Nuxt 3 template
      </h1>
      <ul class="text-white flex flex-col gap-y-3 mt-6 ">
        <li class="hover:text-blue-950">
          <a href="https://www.typescriptlang.org/">Typescript</a>
        </li>
        <li class="hover:text-blue-950">
          <a href="https://eslint.org/">Eslint</a>
        </li>
        <li class="hover:text-blue-950">
          <a href="https://tailwindcss.com/">TailwindCSS</a>
        </li>
      </ul>
    </div>
  </div>
</template>
```

## Conclusion

While setting up a Nuxt 3 project with ESLint, TypeScript, and Tailwind CSS may initially seem like a daunting task, the benefits that these tools bring to the table make the effort worthwhile. They streamline your development process, ensure that your code maintains a high standard of quality, and offer a highly customizable styling solution.

By integrating these tools in your Nuxt project, you can elevate your Vue.js development to the next level, making for a more efficient, enjoyable, and productive coding experience

Check out the [Github repo](https://github.com/TerrniTLLC/nuxt3-template) for the entire template!

Until next time, thank you for reading! 🐾
