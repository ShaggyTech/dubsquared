<script lang="ts" setup>
import { IApp } from '~/utils/app'

const app = useState<IApp>('app')

const observer = useState<IntersectionObserver | undefined>(
  'PageLayoutFooter-observer'
)
const container = ref<HTMLElement>()
const seen = ref<boolean>(false)

const objectDataUrl = ref(
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d107441.24127096374!2d-97.19730196382534!3d32.6983079!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d2df9e608cb%3A0x7cd9aab902cff64b!2sDubsquared!5e0!3m2!1sen!2sus!4v1645761293912!5m2!1sen!2sus'
)
const objectData = computed<string>(() =>
  seen.value ? objectDataUrl.value : ''
)

onMounted(async () => {
  await nextTick()
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting }) => {
      if (isIntersecting) {
        seen.value = true
        observer?.value?.disconnect()
      }
    })
  })
  if (container.value && observer.value) observer.value.observe(container.value)
})

onUnmounted(() => {
  observer.value?.disconnect()
  observer.value = undefined
})
</script>

<script lang="ts">
export default { name: 'PageLayoutFooter' }
</script>

<template>
  <footer
    ref="container"
    class="relative w-full h-fit border-t lg:border-gray-900/10 dark:border-gray-50/[0.2]"
  >
    <section
      class="flex flex-col h-fit w-full max-w-8xl mx-auto apple-safe-area"
    >
      <object
        :data="objectData"
        height="800"
        width="800"
        class="border-none h-64 w-full mx-auto py-8 px-4 lg:px-8"
        allowfullscreen
        loading="lazy"
        title="Google Maps Dubsquared"
        type="text/html"
      ></object>
      <div class="w-full py-4 px-4 lg:px-8 text-center md:text-left">
        <div class="mb-1">
          {{ app.name }}
        </div>
        <div class="text-xs text-gray-600 dark:text-gray-400">
          Copyright © 2022 <a :href="app.author.link">{{ app.author.name }}</a
          >. All rights reserved. Original template design by
          <a href="https://github.com/viandwi24">viandwi24</a>
        </div>
      </div>
    </section>
  </footer>
</template>
