<script setup lang="ts">
import type { IImage } from '~/types'

interface Props {
  title?: string
  image?: IImage
  observerKey?: string
}
const props = withDefaults(defineProps<Props>(), {
  title: '',
  image: () => ({
    path: undefined,
    cloudinaryId: undefined,
    height: undefined,
    width: undefined,
    alt: undefined,
    placeholder: {
      path: undefined,
      cloudinaryId: undefined,
      local: undefined,
    },
  }),
  observerKey: undefined,
})

// background image state
const { width: windowWidth } = useWindowSize()
const imgHeight = computed(() => {
  return props.image.height || windowWidth.value < 1024 ? 720 : 1280
})
const imgWidth = computed(() => {
  return props.image.width || windowWidth.value < 1024 ? 1080 : 1920
})
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
      v-if="image.cloudinaryId"
      :image="{
        path: image.path,
        cloudinaryId: image.cloudinaryId,
      }"
      :placeholder="{
        path: image.placeholder?.path,
        cloudinaryId: image.placeholder?.cloudinaryId,
        local: image.placeholder?.local,
      }"
      :height="imgHeight"
      :width="imgWidth"
      :alt="image.alt"
      :observer-key="observerKey"
      variant="background"
    />
    <Image
      v-else
      :src="image.path"
      :height="imgHeight"
      :width="imgWidth"
      :alt="image.alt"
      :placeholder-src="image.placeholder?.path"
      :observer-key="observerKey"
      variant="background"
    />
    <div
      class="relative grid content-between place-items-center gap-14 bg-stone-900/50 h-full w-full pt-20"
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
