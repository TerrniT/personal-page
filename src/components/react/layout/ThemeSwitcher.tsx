import type { ThemeKey } from '@stores/theme'

import { DotIcon, MoonIcon, SunIcon } from '@components/react/icons/icons'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/react/ui/dropdown-menu'

import { THEME_MAP } from '@consts'

import { useStore } from '@nanostores/react'
import { themeStore } from '@stores/theme'

interface Props {
  side: 'left' | 'right' | 'bottom' | 'top'
}

export default function ThemeSwitcher({ side }: Props) {
  const theme = useStore(themeStore)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="group flex h-10 w-10 items-center justify-center rounded-full">
          {/* TODO: There is gonna be not sun/moon icon but actually image of the theme */}
          <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side={side} alignOffset={40}>
        {Object.keys(THEME_MAP).map((key) => {
          const themeKey = key as ThemeKey
          return (
            <DropdownMenuItem
              key={key}
              className="justify-between capitalize"
              onClick={() => themeStore.set(THEME_MAP[themeKey])}
            >
              {themeKey}
              {theme === THEME_MAP[themeKey] && <DotIcon />}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
