<script setup lang="ts">
type SrcSet = {
  media?: string
  srcSet?: string
}

interface Props {
  observerKey: string
  title?: string
  backgroundImage?: {
    alt?: string
    height?: string
    width?: string
    src?: string
    srcSets?: SrcSet[]
    placeholderSrc?: string
  }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  observerKey: undefined,
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
      intersected.value = true

      observer?.value?.disconnect()
    }
  })
  element.value = document.getElementById(`${props.observerKey}`)
  if (element.value && observer.value) observer.value.observe(element.value)
})

// used for lazy loading real hero background image
// const observer = useState<IntersectionObserver>(props.observerKey)
// const container = ref<Element | null>(null)

// onActivated(async () => {
//   await nextTick(() => {
//     container.value = document.querySelector(`#${props.observerKey}`)
//     if (container.value && observer.value)
//       observer.value.observe(container.value)
//   })
// })
</script>

<template>
  <div
    :id="observerKey"
    class="page-hero relative grid place-items-center min-h-[max(min(100vh,500px))] lg:min-h-[max(min(100vh,800px))] w-full backdrop-filter backdrop-brightness-20"
  >
    <picture class="absolute inset-0 -z-1">
      <!-- <source
          media="(max-width: 768px)"
          srcset="/images/shop-frontage--meetup-multicar-1280x780.webp"
        /> -->
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
      class="relative grid content-between place-items-center gap-14 bg-stone-900/50 h-full w-full pt-20"
    >
      <SVGDubsquaredSquareLogo
        class="h-36 w-36 md:(h-40 w-40) rounded bg-zinc-800/50 backdrop-filter backdrop-blur-sm"
      />
      <PageTitle
        :text="title"
        class="font-kanit capitalize text-center text-4xl text-stone-100 text-shadow-xl bg-stone-900/90 py-8 w-full tracking-wider border-y-4 border-red-900 lg:text-5xl"
      />
    </div>
  </div>
</template>
