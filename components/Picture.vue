<script setup lang="ts">
import type { IImageProps } from '~/types'

type Variant = 'default' | 'background'
type Variants = Record<
  Variant,
  { picture: string; source: string; img: string }
>

type Props = {
  image: IImageProps
  sourceClass?: string
  imgClass?: string
  lazy?: boolean
  seen?: boolean
  variant?: Variant
  observerKey?: string
}

const props = withDefaults(defineProps<Props>(), {
  image: () => ({
    alt: '',
    height: '',
    width: '',
    src: '',
    srcSets: [],
    placeholder: '',
  }),
  sourceClass: '',
  imgClass: '',
  lazy: false,
  seen: false,
  variant: 'default',
  observerKey: undefined,
})

// HTMLElement ref
const containerRef = ref<HTMLElement>()

// optional internal observer state, if props.observerKey
const observer = props.observerKey
  ? useState<IntersectionObserver | undefined>(props.observerKey)
  : undefined
const container = props.observerKey
  ? useState(`${props.observerKey}-container`, () => containerRef)
  : undefined
const seen = props.observerKey
  ? useState(`${props.observerKey}-seen`, () => false)
  : undefined

// image state
const srcSets = computed(() => {
  if (props.lazy && (props.seen || seen?.value)) return props.image.srcSets
  else return []
})
const imgSrc = computed(() => {
  if (props.lazy) {
    if (props.seen || seen?.value) {
      return props.image.src || props.image.placeholder || ''
    }
  } else {
    return props.image.src || props.image.placeholder || ''
  }
})

const styles = reactive<Variants>({
  default: {
    picture: '',
    source: '',
    img: 'w-full h-full object-cover object-center',
  },
  background: {
    picture: 'absolute inset-0 -z-1',
    source: 'relative',
    img: 'w-full h-full object-cover object-center',
  },
})
const selectedStyle = computed(() => styles[props.variant] || styles.default)

onMounted(async () => {
  await nextTick()
  // only if lazy and props.observerKey provided
  if (props.lazy && observer) {
    observer.value = new IntersectionObserver((entries) => {
      const el = entries[0]
      if (el.isIntersecting) {
        if (seen) seen.value = true
        observer?.value?.disconnect()
      }
    })

    if (container?.value && observer.value)
      observer.value.observe(container.value)
  }
})

onUnmounted(() => {
  observer?.value?.disconnect()
})
</script>

<script lang="ts">
export default { name: 'Picture' }
</script>

<template>
  <picture ref="containerRef" :class="`${selectedStyle.picture}`">
    <source
      v-for="(src, index) in srcSets"
      :key="index"
      :media="src.media"
      :srcset="src.srcSet"
      :type="src.type"
      :class="`${selectedStyle.source} ${sourceClass}`"
    />
    <img
      :src="imgSrc"
      :alt="image.alt"
      :width="image.width"
      :height="image.height"
      :class="`${selectedStyle.img} ${imgClass}`"
    />
  </picture>
</template>
