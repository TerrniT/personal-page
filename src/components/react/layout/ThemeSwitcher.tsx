import type { ThemeKey } from '@stores/theme'

import { DotIcon, MoonIcon, SunIcon } from '@components/react/icons/icons'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/react/ui/dropdown-menu'

import { THEME_MAP } from '@consts'

import { useI18n } from '@lib/i18n'

import { useStore } from '@nanostores/react'
import { themeStore } from '@stores/theme'

interface Props {
  url: URL
  side: 'left' | 'right' | 'bottom' | 'top'
}

const THEME_LABELS: Record<ThemeKey, 'navigation.theme_light' | 'navigation.theme_dark' | 'navigation.theme_system'> = {
  Light: 'navigation.theme_light',
  Dark: 'navigation.theme_dark',
  System: 'navigation.theme_system',
}

export default function ThemeSwitcher({ url, side }: Props) {
  const theme = useStore(themeStore)
  const { t } = useI18n(url)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="group flex h-10 w-10 items-center justify-center rounded-full">
          {/* TODO: There is gonna be not sun/moon icon but actually image of the theme */}
          <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t('navigation.select_theme')}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side={side} alignOffset={40}>
        {Object.keys(THEME_MAP).map((key) => {
          const themeKey = key as ThemeKey
          return (
            <DropdownMenuItem
              key={key}
              className="justify-between"
              onClick={() => themeStore.set(THEME_MAP[themeKey])}
            >
              {t(THEME_LABELS[themeKey])}
              {theme === THEME_MAP[themeKey] && <DotIcon />}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
