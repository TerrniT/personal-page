<template>
  <div>
    <UiDropdownMenu>
      <UiDropdownMenuTrigger
        aria-label="change theme"
        class="p-1 items-center flex justify-center rounded-md size-8 hover:bg-secondary"
      >
        <IconsThemeIcon class="size-5" />
      </UiDropdownMenuTrigger>
      <UiDropdownMenuContent class="mx-3 w-56 bg-secondary border-border">
        <UiDropdownMenuLabel class="text-foreground">
          {{ $t('nav.select_theme') }}
        </UiDropdownMenuLabel>
        <UiDropdownMenuSeparator class="bg-border" />
        <UiDropdownMenuRadioGroup
          v-model="colorMode.value"
        >
          <UiDropdownMenuRadioItem
            v-for="theme in themeMods"
            :key="theme.value"
            :value="theme.value"
            :disabled="theme.is_disabled"
            class="text-foreground"
          >
            <template v-if="theme.locale_key">
              {{ $t('nav.' + theme.locale_key) }}
            </template>
            <template v-else>
              {{ theme.label }}
            </template>
          </UiDropdownMenuRadioItem>
        </UiDropdownMenuRadioGroup>
      </UiDropdownMenuContent>
    </UiDropdownMenu>
  </div>
</template>

<script setup lang="ts">
interface IThemes {
	value: string
	label: string
	locale_key?: string
	is_disabled?: boolean
}


const themeMods: IThemes[] = [
	{
  	value: 'system',
  	label: 'System',
		locale_key: 'theme_system'
	},
	{
		value: 'light',
		label: 'Light',
		locale_key: 'theme_light'
	},
	{
		value: 'dark',
		label: 'Dark',
		locale_key: 'theme_dark'
	},
	{
		value: 'solarized',
		label: 'Solarized',
		is_disabled: true
	}
]

const colorMode = useColorMode()
</script>