<template>
  <NuxtLink
    v-if="to"
    tag="a"
    :to="to"
    :role="role"
    :class="`${defaultStyle} ${selectedStyle} ${selectedSize}`"
  >
    <slot name="icon"></slot>
    <div v-if="!$slots['icon'] && icon">
      <component :is="icon" class="h-7 w-7" />
    </div>
    <div :class="{ 'ml-2': icon || $slots['icon'] }">
      <slot>{{ text }}</slot>
    </div>
  </NuxtLink>
  <a
    v-else
    target="_blank"
    :href="href"
    :role="role"
    :class="`${defaultStyle} ${selectedStyle} ${selectedSize}`"
  >
    <slot name="icon"></slot>
    <div v-if="!$slots['icon'] && icon">
      <component :is="icon" class="h-7 w-7" />
    </div>
    <div :class="{ 'ml-2': icon || $slots['icon'] }">
      <slot>{{ text }}</slot>
    </div>
  </a>
</template>

<script lang="ts" setup>
import type { UnpluginIcon } from '~/types'

type Size = 'xs' | 'sm' | 'md' | 'lg'
type Sizes = Record<Size, string>

type Style = 'primary' | 'secondary'
type Styles = Record<Style, string>

interface Props {
  href?: string
  size?: Size
  text?: string
  to?: string | object
  type?: Style
  role?: string
  icon?: UnpluginIcon
}

const props = withDefaults(defineProps<Props>(), {
  href: '',
  size: 'md',
  text: '',
  to: undefined,
  type: 'primary',
  role: 'button',
  icon: undefined,
})

// state:styles
const defaultStyle: string = `
  flex items-center justify-center
  border-2 shadow-none hover:shadow
  font-extrabold capitalize tracking-wide
  focus:outline-none focus:ring-1 focus:ring-offset-1
  focus:ring-gray-600/[0.6] focus:ring-offset-gray-800/[0.6]
  focus:dark:ring-gray-600 focus:dark:ring-offset-gray-50 
  cursor-pointer transition-colors duration-300
`
const sharedStyles: string = `
  hover:border-red-800/70 hover:dark:border-red-800
  dark:text-warm-gray-200 hover:dark:text-red-800
  hover:dark:bg-warm-gray-200
`
const styles = reactive<Styles>({
  primary: `
    ${sharedStyles}
    border-transparent
    text-warm-gray-100 hover:text-red-800 hover:dark:text-red-800
    bg-red-900/90 hover:bg-warm-gray-200 hover:dark:bg-warm-gray-200
  `,
  secondary: `
    ${sharedStyles}
    border-red-800/70
    text-warm-gray-700 hover:text-warm-gray-100
    bg-warm-gray-200 dark:bg-zinc-800 hover:bg-warm-gray-700
  `,
})
const sizes = reactive<Sizes>({
  xs: 'h-6 px-3 rounded text-xs',
  sm: 'h-8 px-4 rounded text-sm',
  md: 'h-10 px-6 rounded text-base',
  lg: 'h-12 px-8 rounded-lg text-lg',
})

// state
const selectedStyle = computed(() => styles[props.type] || styles.primary)
const selectedSize = computed(() => sizes[props.size] || sizes.md)
</script>
