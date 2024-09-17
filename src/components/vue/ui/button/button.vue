<script setup lang="ts">
import { cn } from '@lib/utils'
import { buttonVariants } from '.'

interface Props {
	variant?: NonNullable<Parameters<typeof buttonVariants>[0]>['variant']
	size?: NonNullable<Parameters<typeof buttonVariants>[0]>['size']
	to?: string | null
	href?: string | null
	classes?: string
	external?: boolean
}
defineEmits(['click'])

defineProps<Props>()
</script>

<template>
	<component
	 :is="to ? 'a' : 'button'" 
	 :href="to ?? href"
	 type="button"
	 :target="external ? '_blank' : '_self'"
	 :class="cn(buttonVariants({ variant, size }), classes)"
	 @click="$emit('click')"
	>
		<slot name="prepend" />
		<slot name="default" />
		<slot name="append" />
	</component>
</template>