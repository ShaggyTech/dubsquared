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
const element = ref<HTMLElement>()
const seen = ref<boolean>(false)

onMounted(async () => {
  await nextTick()
  observer.value = new IntersectionObserver((entries) => {
    const el = entries[0]
    if (el.isIntersecting) {
      seen.value = true
      observer?.value?.disconnect()
    }
  })
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
    ref="element"
    :class="`
      page-hero
      relative grid place-items-center w-full min-h-[max(min(100vh,500px))]
      lg:(min-h-[max(min(85vh,900px))]) max-h-screen)
    `"
  >
    <LazyPicture
      :image="backgroundImage"
      variant="background"
      :lazy="true"
      :seen="seen"
    />
    <div
      class="relative grid content-between place-items-center gap-14 bg-stone-900/70 h-full w-full pt-20"
    >
      <LazySVGDubsquaredSquareLogo
        class="h-36 w-36 md:(h-40 w-40) rounded bg-zinc-800/50 backdrop-filter backdrop-blur-sm"
      />
      <LazyPageTitle
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
