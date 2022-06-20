<script setup lang="ts">
interface Props {
  observerKey: string
  title?: string
}
const props = withDefaults(defineProps<Props>(), {
  observerKey: undefined,
  title: '',
})

// used for lazy loading real hero background image
const observer = useState<IntersectionObserver>(props.observerKey)
const container = ref<Element | null>(null)

onActivated(async () => {
  await nextTick(() => {
    container.value = document.querySelector(`#${props.observerKey}`)
    if (container.value && observer.value)
      observer.value.observe(container.value)
  })
})
</script>

<template>
  <div
    :id="observerKey"
    class="page-hero backdrop-filter backdrop-brightness-70"
  >
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
