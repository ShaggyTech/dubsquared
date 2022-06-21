<script setup lang="ts">
interface Props {
  title?: string
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  title: '',
})

// const heroObserverCallback: IntersectionObserverCallback = (
//   element,
//   observer
// ) => {
//   element.forEach(({ target, isIntersecting }) => {
//     if (!target || !isIntersecting) {
//       return
//     }
//     target.classList.add('seen')
//     observer.unobserve(target)
//   })
// }

const heroObserverName = useState<string>('heroObserverName')
const heroElements = useState<Element[]>('pageHeroElements')
const heroObserver = useState<IntersectionObserver | undefined>(
  heroObserverName.value
)

// const { observerRef } = useIntersectionObserver({
//   callback: heroObserverCallback,
//   useStateKey: heroObserverName.value,
// })

onMounted(async () => {
  const elements = document ? document?.querySelectorAll('.page-hero') : []
  if (elements)
    elements.forEach((element) => {
      // element.classList.remove('seen')
      heroElements.value.push(element)
    })
  await nextTick()
  if (heroElements.value && heroObserver.value) {
    heroElements.value.forEach((element) => {
      heroObserver?.value?.observe(element)
    })
  }

  console.log('from onMounted page hero -------')
  console.log('elements: ', elements)
  console.log('heroElements: ', heroElements.value)
  console.log('observer: ', heroObserver.value)
})

// // used for lazy loading real hero background image
// const observer = useState<IntersectionObserver>(props.observerKey)
// const container = useState<HTMLElement | null>(`${props.observerKey}-container`)

// onMounted(async () => {
//   await nextTick(() => {
//     container.value = document.querySelector(`#${props.observerKey}`)
//     console.log('container: ', container.value, 'observer: ', observer.value)
//     if (container.value && observer.value)
//       observer.value.observe(container.value)
//   })
// })
</script>

<script lang="ts">
export default { name: 'ComponentPageHero' }
</script>

<template>
  <div class="page-hero backdrop-filter backdrop-brightness-70">
    <div class="grid place-items-center bg-stone-900/30 h-full w-full py-10">
      <SVGDubsquaredSquareLogo
        class="h-36 w-36 md:(h-40 w-40) rounded bg-zinc-800/50 backdrop-filter backdrop-blur-sm"
      />
      <PageTitle
        :text="title"
        class="capitalize text-center text-stone-100 text-shadow-xl bg-stone-900/90 py-8 w-full tracking-wider lg:text-5xl font-kanit border-y-4 border-red-900"
      />
    </div>
  </div>
</template>
