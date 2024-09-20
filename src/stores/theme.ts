import { persistentAtom } from '@nanostores/persistent'
import { STORAGE_THEME_KEY, THEME_MAP } from '@consts'
import { onMount } from 'nanostores'

export type ThemeKey = keyof typeof THEME_MAP
export type ThemeValue = (typeof THEME_MAP)[ThemeKey]

export const themeStore = persistentAtom<ThemeValue>(STORAGE_THEME_KEY, THEME_MAP.System)


const initThemeStoreSubscribe = () => {
  const applyTheme = (theme: ThemeValue, oldTheme?: ThemeValue) => {
    // const css = document.createElement('style')

    // css.appendChild(
    //   document.createTextNode(
    //     `* {
	// 			-webkit-transition: none !important;
	// 			-moz-transition: none !important;
	// 			-o-transition: none !important;
	// 			-ms-transition: none !important;
	// 			transition: none !important;
	// 		}
	// 		`,
    //   ),
    // )

    // document.head.appendChild(css)
	const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

	document.documentElement.classList.remove('light', 'dark')

	if(oldTheme) {
		document.documentElement.classList.remove(oldTheme)
	}

	document.documentElement.classList.add(theme ? theme : systemTheme)

    // window.getComputedStyle(css).opacity
    // document.head.removeChild(css)
  }

  const handleMediaQuery = (query: { matches: boolean }) => {
    applyTheme(query.matches ? THEME_MAP['Dark'] : THEME_MAP['Light'])
  }

  themeStore.subscribe((theme, oldTheme) => {
    if (theme !== THEME_MAP.System) {
      applyTheme(theme, oldTheme)
      return
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    if (!!mediaQuery.addEventListener) {
      mediaQuery.removeEventListener('change', handleMediaQuery)
      mediaQuery.addEventListener('change', handleMediaQuery)
    } else {
      mediaQuery.removeListener(handleMediaQuery)
      mediaQuery.addListener(handleMediaQuery)
    }
    handleMediaQuery(mediaQuery)
  })
}

if (typeof window !== 'undefined') {
  onMount(themeStore, () => {
    initThemeStoreSubscribe()
  })
}
