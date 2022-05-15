<template>
  <NuxtLink
    v-if="to"
    tag="a"
    :role="role"
    :to="to"
    :class="`${defaultStyle} ${selectedStyle} ${selectedSize}`"
  >
    <slot>{{ text }}</slot>
  </NuxtLink>
  <a
    v-else
    :role="role"
    :href="href"
    :class="`${defaultStyle} ${selectedStyle} ${selectedSize}`"
    @click="onClick"
  >
    <slot>{{ text }}</slot>
  </a>
</template>

<script lang="ts" setup>
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
}

const props = withDefaults(defineProps<Props>(), {
  href: '',
  size: 'md',
  text: '',
  to: undefined,
  type: 'primary',
  role: 'button',
})

// state:styles
const defaultStyle: string = `
  flex items-center justify-center
  border-2 border-transparent 
  font-extrabold capitalize
  shadow-none hover:shadow
  focus:outline-none focus:ring-1 focus:ring-offset-1
  focus:ring-gray-600/[0.6] focus:ring-offset-gray-800/[0.6]
  focus:dark:ring-gray-600 focus:dark:ring-offset-gray-50 
  cursor-pointer transition-colors duration-300
`
const styles = reactive<Styles>({
  primary: `
    hover:border-red-800/70 dark:hover:border-red-800
    text-warm-gray-100 hover:text-red-800
    dark:text-neutral-100 dark:hover:text-red-800
    bg-red-900/80 hover:bg-neutral-100
    dark:bg-red-800/50 dark:hover:bg-neutral-200
  `,
  secondary: `
    hover:border-red-800/70 dark:hover:border-red-800
    text-gray-800 dark:text-white
    bg-warm-gray-200 dark:bg-zinc-800
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

// methods
const onClick = () => {
  const router = useRouter()
  if (props.to) {
    router.push(props.to)
  }
}
</script>
