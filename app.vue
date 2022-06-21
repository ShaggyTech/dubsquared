<script lang="ts" setup>
import '@formkit/themes/genesis'
import { AppSetup } from './utils/app'
import type { ITheme } from './utils/theme'

AppSetup()

const theme = useState<ITheme>('theme.current')
const locale = useState<string>('locale.setting')

const heroObserverCallback: IntersectionObserverCallback = (
  element,
  observer
) => {
  element.forEach(({ target, isIntersecting }) => {
    if (!target || !isIntersecting) {
      return
    }
    setTimeout(() => {
      target.classList.add('seen')
      observer.unobserve(target)
    }, 100)
  })
}

const heroObserverName = useState<string>(
  'heroObserverName',
  () => 'page-hero-observer'
)
useState<Element[]>('pageHeroElements', () => [])
useState<Element[]>('homeHeroElements', () => [])

useState<IntersectionObserver | undefined>(heroObserverName.value)

onMounted(() => {
  useIntersectionObserver({
    callback: heroObserverCallback,
    useStateKey: heroObserverName.value,
  })
})

// const heroElements = useState<Element[]>('heroElements', () => [])

// const { observerRef } = useIntersectionObserver({
//   callback: heroObserverCallback,
//   useStateKey: heroObserverName.value,
// })

// // router.beforeResolve(async () => {
// //   heroElements.value = []
// //   await nextTick()

// //   const elements = document ? document?.querySelectorAll('.page-hero') : []
// //   if (elements)
// //     elements.forEach((element) => {
// //       // element.classList.remove('seen')
// //       heroElements.value.push(element)
// //     })

// //   if (heroElements.value && observerRef.value) {
// //     heroElements.value.forEach((element) => {
// //       observerRef?.value?.observe(element)
// //     })
// //   }

// //   console.log('from beforeEach -------')
// //   console.log('elements: ', elements)
// //   console.log('heroElements: ', heroElements.value)
// //   console.log('observer: ', observerRef.value)

// //   // await nextTick()
// //   // await nextTick(() => {
// //   //   const elements = document.querySelectorAll('.page-hero')
// //   //   elements.forEach((element) => heroElements.value.push(element))

// //   //   heroElements.value.forEach((element) => {
// //   //     heroObserverRef?.value?.observe(element)
// //   //   })

// //   //   console.log('from beforeResolve -------')
// //   //   console.log('elements: ', elements)
// //   //   console.log('heroElements: ', heroElements.value)
// //   //   console.log('observer: ', heroObserverRef.value)
// //   // })
// // })

// onMounted(async () => {
//   heroElements.value = []
//   await nextTick()
//   const elements = document ? document?.querySelectorAll('.page-hero') : []
//   if (elements)
//     elements.forEach((element) => {
//       // element.classList.remove('seen')
//       heroElements.value.push(element)
//     })

//   if (heroElements.value && observerRef.value) {
//     heroElements.value.forEach((element) => {
//       observerRef?.value?.observe(element)
//     })
//   }

//   console.log('from onMounted -------')
//   console.log('elements: ', elements)
//   console.log('heroElements: ', heroElements.value)
//   console.log('observer: ', observerRef.value)

//   // await nextTick()
//   // await nextTick(() => {
//   //   const elements = document.querySelectorAll('.page-hero')
//   //   elements.forEach((element) => heroElements.value.push(element))

//   //   heroElements.value.forEach((element) => {
//   //     heroObserverRef?.value?.observe(element)
//   //   })

//   //   console.log('from onMounted -------')
//   //   console.log('elements: ', elements)
//   //   console.log('heroElements: ', heroElements.value)
//   //   console.log('observer: ', heroObserverRef.value)
//   // })
//   // await nextTick()
// })
</script>

<template>
  <Html :class="`${theme === 'dark' ? 'dark' : ''}`" :lang="locale">
    <Head>
      <Title>Dubsquared - VW & Audi Specialists - Arlington, TX</Title>
      <Meta
        name="viewport"
        content="width=device-width, initial-scale=1 viewport-fit=cover"
      />
      <Meta
        name="description"
        content="Dubsquared - Volkswagen & Audi Shop located in Arlington, TX"
      />
      <Link rel="icon" type="image/png" href="/favicon.png" />
    </Head>
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-zinc-800"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<style lang="scss">
// padding for phone screen 'notches'
.apple-safe-area {
  @supports (padding: max(0px)) {
    padding-left: max(0vmin, env(safe-area-inset-left));
    padding-right: max(0vmin, env(safe-area-inset-right));
  }
  &--left {
    @supports (padding: max(0px)) {
      padding-left: max(0vmin, env(safe-area-inset-left));
    }
  }
  &--right {
    @supports (padding: max(0px)) {
      padding-right: max(0vmin, env(safe-area-inset-right));
    }
  }
  &--bottom {
    @supports (padding: max(0px)) {
      padding-bottom: max(0vmin, env(safe-area-inset-bottom));
    }
  }
  &--fixed-right {
    @supports (right: max(0px)) {
      right: max(1rem, env(safe-area-inset-right) - 8px);
    }
  }
}
</style>
