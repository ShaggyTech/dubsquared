<script setup lang="ts">
import type { IImageProps } from '~/types'

interface Props {
  image: IImageProps
  sourceClass?: string
  imgClass?: string
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
})

const srcSets = computed(() => props.image.srcSets)
const imgSrc = computed(() => props.image.src || '')
</script>

<script lang="ts">
export default { name: 'Picture' }
</script>

<template>
  <picture>
    <source
      v-for="(src, index) in srcSets"
      :key="index"
      :media="src.media"
      :srcset="src.srcSet"
      :class="{ sourceClass: true }"
    />
    <img
      :src="imgSrc"
      :alt="image.alt"
      :width="image.width || ''"
      :height="image.height || ''"
      :class="{ imgClass: true }"
    />
  </picture>
</template>
