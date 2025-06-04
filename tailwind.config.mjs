import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import animate from 'tailwindcss-animate'
import defaultTheme from 'tailwindcss/defaultTheme'

/**
 * Convert a CSS variable (e.g. `--primary`) containing a HSL color to a HSLA color.
 * <alpha-value> - the opacity of the color passing by tailwind runtime
 * @param {string} color - The CSS variable containing a HSL color
 * @returns {string} A HSLA color string
 */
function parseHslColorToHsla(color) {
  return `color-mix(in hsl, var(${color}) calc(<alpha-value> * 100%), transparent)`
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',

  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Lora', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        main: {
          DEFAULT: parseHslColorToHsla('--background'),
          foreground: parseHslColorToHsla('--foreground'),
        },
        primary: {
          DEFAULT: parseHslColorToHsla('--primary'),
          foreground: parseHslColorToHsla('--primary-foreground'),
        },
        secondary: {
          DEFAULT: parseHslColorToHsla('--secondary'),
          foreground: parseHslColorToHsla('--secondary-foreground'),
        },
        destructive: {
          DEFAULT: parseHslColorToHsla('--destructive'),
          foreground: parseHslColorToHsla('--destructive-foreground'),
        },
        muted: {
          DEFAULT: parseHslColorToHsla('--muted'),
          foreground: parseHslColorToHsla('--muted-foreground'),
        },
        accent: {
          DEFAULT: parseHslColorToHsla('--accent'),
          foreground: parseHslColorToHsla('--accent-foreground'),
        },
        popover: {
          DEFAULT: parseHslColorToHsla('--popover'),
          foreground: parseHslColorToHsla('--popover-foreground'),
        },
        card: {
          DEFAULT: parseHslColorToHsla('--card'),
          foreground: parseHslColorToHsla('--card-foreground'),
        },

        selection: parseHslColorToHsla('--selection'),

        border: parseHslColorToHsla('--border'),
        input: parseHslColorToHsla('--input'),
        ring: parseHslColorToHsla('--ring'),
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
      },
    },
  },
  plugins: [animate, forms, typography],
}
