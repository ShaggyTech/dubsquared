<script setup lang="ts">
import type { IImageProps } from '~/types'

interface Props {
  observerKey: string
  title?: string
  backgroundImage?: IImageProps
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  title: '',
  backgroundImage: () => ({
    alt: '',
    height: '',
    width: '',
    src: '',
    srcSets: [],
    placeholderSrc: '',
  }),
})

const observer = useState<IntersectionObserver | undefined>(props.observerKey)
const element = useState<HTMLElement | null>(`${props.observerKey}-element`)
const intersected = useState<boolean>(
  `${props.observerKey}-intersected`,
  () => false
)

const srcSets = computed(() => props.backgroundImage.srcSets)

const imgSrc = computed(() =>
  intersected.value
    ? props.backgroundImage.src
    : props.backgroundImage.placeholderSrc
    ? props.backgroundImage.placeholderSrc
    : ''
)

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    const el = entries[0]
    if (el.isIntersecting) {
      const timeout = setTimeout(() => {
        intersected.value = true
        observer?.value?.disconnect()
      }, 1000)
      clearTimeout(timeout)
    }
  })
  element.value = document.getElementById(`${props.observerKey}`)
  if (element.value && observer.value) observer.value.observe(element.value)
})

onUnmounted(() => {
  observer.value?.disconnect()
  observer.value = undefined
})
</script>

<script lang="ts">
export default { name: 'PageHero' }
</script>

<template>
  <div
    :id="observerKey"
    class="page-hero relative grid place-items-center min-h-[max(min(100vh,500px))] lg:(min-h-[max(min(85vh,800px))]) max-h-screen) w-full backdrop-filter backdrop-brightness-20"
  >
    <picture class="absolute inset-0 -z-1">
      <source
        v-for="(src, index) in srcSets"
        :key="index"
        :media="src.media"
        :srcset="src.srcSet"
        class="relative"
      />
      <img
        :src="imgSrc"
        :alt="backgroundImage.alt"
        :width="backgroundImage.width || ''"
        :height="backgroundImage.height || ''"
        class="w-full h-full object-cover object-center"
      />
    </picture>
    <div
      class="relative grid content-between place-items-center gap-14 bg-stone-900/80 h-full w-full pt-20"
    >
      <LazySVGDubsquaredSquareLogo
        class="h-36 w-36 md:(h-40 w-40) rounded bg-zinc-800/50 backdrop-filter backdrop-blur-sm"
      />
      <LazyPageTitle
        :text="title"
        class="font-kanit capitalize text-center text-4xl text-stone-100 text-shadow-xl bg-stone-900/90 py-8 w-full tracking-wider border-y-4 border-red-900 lg:text-5xl"
      />
    </div>
  </div>
</template>
