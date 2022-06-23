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
}

const props = withDefaults(defineProps<Props>(), {
  image: () => ({
    alt: '',
    height: '',
    width: '',
    src: '',
    srcSets: [],
    placeholderSrc: '',
  }),
  sourceClass: '',
  imgClass: '',
  lazy: false,
  seen: false,
  variant: 'default',
})

const srcSets = computed(() => {
  if (props.lazy && props.seen) return props.image.srcSets
  else return []
})
const imgSrc = computed(() => {
  if (props.lazy) {
    return props.seen
      ? props.image.src
      : props.image.placeholderSrc
      ? props.image.placeholderSrc
      : ''
  } else {
    return props.image.src ? props.image.src : ''
  }
})

const styles = reactive<Variants>({
  default: {
    picture: '',
    source: '',
    img: '',
  },
  background: {
    picture: 'absolute inset-0 -z-1',
    source: 'relative',
    img: 'w-full h-full object-cover object-center',
  },
})
const selectedStyle = computed(() => styles[props.variant] || styles.default)
</script>

<script lang="ts">
export default { name: 'Picture' }
</script>

<template>
  <picture :class="`${selectedStyle.picture}`">
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
