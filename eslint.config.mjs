// eslint.config.js
import config from '@antfu/eslint-config'

export default config({
  // Enable stylistic formatting rules
  // stylistic: true,

  // Or customize the stylistic rules
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },

  // TypeScript and Vue are autodetected, you can also explicitly enable them:
  typescript: true,
  vue: true,
  astro: true,
  svelte: true,

  // Disable jsonc and yaml support
  jsonc: true,
  yaml: true,

  // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
  ignores: [
    '**/fixtures',
    '**/node_modules',
    '**/dist',
    '**/*.astro',
  ],
})
