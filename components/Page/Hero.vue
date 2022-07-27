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
    alt: undefined,
    height: undefined,
    width: undefined,
    src: undefined,
    placeholderSrc: undefined,
    cloudinaryId: undefined,
  }),
})

// background image state
const { width: windowWidth } = useWindowSize()
const imgHeight = computed(() => (windowWidth.value < 1024 ? 720 : 1280))
const imgWidth = computed(() => (windowWidth.value < 1024 ? 1080 : 1920))
</script>

<script lang="ts">
export default { name: 'PageHero' }
</script>

<template>
  <div
    :class="`
      relative grid place-items-center w-full min-h-[max(min(100vh,500px))]
      lg:(min-h-[max(min(85vh,900px))]) max-h-screen)
    `"
  >
    <CloudinaryImage
      v-if="backgroundImage.cloudinaryId"
      :image="{
        path: backgroundImage.src,
        id: backgroundImage.cloudinaryId,
      }"
      :placeholder="{
        path: backgroundImage.placeholderSrc,
        id: backgroundImage.cloudinaryId,
      }"
      :alt="backgroundImage.alt"
      :height="imgHeight"
      :width="imgWidth"
      :observer-key="observerKey"
      variant="background"
    />
    <Image
      v-else
      :src="backgroundImage.src"
      :alt="backgroundImage.alt"
      :height="imgHeight"
      :width="imgWidth"
      :observer-key="observerKey"
      :placeholder-src="backgroundImage.placeholderSrc"
      variant="background"
    />
    <div
      class="relative grid content-between place-items-center gap-14 bg-stone-900/70 h-full w-full pt-20"
    >
      <LazySVGDubsquaredSquareLogo
        class="h-36 w-36 md:(h-40 w-40) rounded bg-zinc-800/50 backdrop-filter backdrop-blur-sm"
      />
      <PageTitle
        :text="title"
        :class="`
          w-full py-8 bg-stone-900/90 border-y-4 border-red-900
          font-kanit capitalize text-center text-4xl text-stone-100 text-shadow-xl tracking-wider
          lg:(text-5xl)
        `"
      />
    </div>
  </div>
</template>
