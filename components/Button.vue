<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'
import type { IUnpluginIcon } from '~/types'

type ButtonType = 'button' | 'submit' | 'reset' | undefined

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'none'
type Sizes = Record<Size, string>

type Variant = 'primary' | 'secondary' | 'close'
type Variants = Record<Variant, string>

interface Props {
  to?: RouteLocationRaw
  href?: string
  role?: string
  type?: ButtonType
  text?: string
  variant?: Variant
  size?: Size
  icon?: IUnpluginIcon
}

const props = withDefaults(defineProps<Props>(), {
  to: undefined,
  href: undefined,
  role: 'button',
  type: 'button',
  text: '',
  variant: 'primary',
  size: 'md',
  icon: undefined,
})

// state:styles
const defaultStyle = `
  flex items-center justify-center
  border-2 shadow-none hover:shadow
  hover:border-red-800/70 hover:dark:border-red-800/50
  dark:text-stone-200 hover:dark:text-red-800
  font-bold capitalize tracking-wide
  focus:outline-none focus:ring-1 focus:ring-offset-1
  focus:ring-gray-600/[0.6] focus:ring-offset-gray-800/[0.6]
  focus:dark:ring-gray-600 focus:dark:ring-offset-gray-50 
  cursor-pointer transition-colors duration-300
`
const styles = reactive<Variants>({
  primary: `
    border-transparent
    text-stone-200 hover:text-red-800 hover:dark:text-red-800
    bg-red-900/90 hover:bg-stone-200 hover:dark:bg-stone-200
  `,
  secondary: `
    border-stone-200/70
    text-stone-700 hover:text-stone-100
    bg-stone-200 dark:bg-zinc-800
    hover:bg-stone-700 hover:dark:bg-stone-200
  `,
  close: `
    border-stone-500/20
    hover:text-red-800 dark:hover:text-white
    bg-stone-200 dark:bg-stone-800/80
    hover:bg-stone-100 hover:dark:bg-stone-700
  `,
})
const sizes = reactive<Sizes>({
  xs: 'h-6 px-3 rounded text-xs',
  sm: 'h-8 px-4 rounded text-sm',
  md: 'h-10 px-6 rounded text-base',
  lg: 'h-12 px-8 rounded-lg text-lg',
  none: '',
})

// state
const selectedStyle = computed(() => styles[props.variant] || styles.primary)
const selectedSize = computed(() => sizes[props.size] || sizes.md)
</script>

<script lang="ts">
export default { name: 'Button' }
</script>

<template>
  <NuxtLink
    v-if="to || href"
    tag="a"
    :to="to ? to : undefined"
    :href="!to ? href : undefined"
    :role="role"
    :class="`${defaultStyle} ${selectedStyle} ${selectedSize}`"
  >
    <slot name="icon"></slot>
    <div v-if="!$slots['icon'] && icon">
      <component :is="icon" />
    </div>
    <div :class="{ 'ml-2': icon || $slots['icon'] }">
      <slot>{{ text }}</slot>
    </div>
  </NuxtLink>
  <button
    v-else
    :type="type"
    :class="`${defaultStyle} ${selectedStyle} ${selectedSize}`"
  >
    <slot>{{ text }}</slot>
  </button>
</template>
