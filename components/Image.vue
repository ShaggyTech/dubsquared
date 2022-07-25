<script lang="ts" setup>
interface Props {
  src: string
  placeholderSrc?: string
  alt?: string
  lazy?: boolean | 'false' | 'true'
  observerKey?: string
  seen?: boolean | 'false' | 'true'
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  src: undefined,
  placeholderSrc: undefined,
  alt: undefined,
  lazy: false,
  observerKey: undefined,
  seen: undefined,
})

const containerRef = ref<HTMLElement>()

// optional internal observer state, if props.observerKey
const observer = props.observerKey
  ? useState<IntersectionObserver | undefined>(props.observerKey)
  : undefined
const container = props.observerKey
  ? useState(`${props.observerKey}-container`, () => containerRef)
  : undefined
const seen = props.observerKey
  ? useState(`${props.observerKey}-seen`, () => false)
  : undefined

// image state
const imgSrc = computed(() => {
  if (props.seen !== undefined || props.observerKey) {
    if (props.seen || seen?.value) {
      return props.src
    } else {
      return props.placeholderSrc
    }
  } else return props.src
})

onMounted(async () => {
  await nextTick()
  // only if lazy and props.observerKey provided
  if (props.lazy && observer && container?.value) {
    observer.value = new IntersectionObserver((entries) => {
      const el = entries[0]
      if (el.isIntersecting) {
        if (seen) seen.value = true
        observer.value?.disconnect()
      }
    })

    if (observer.value) observer.value.observe(container.value)
  }
})

onUnmounted(() => {
  observer?.value?.disconnect()
})
</script>

<script lang="ts">
export default {
  name: 'Image',
  inheritAttrs: false,
}
</script>

<template>
  <figure ref="containerRef">
    <img
      v-bind="$attrs"
      :alt="alt"
      :src="imgSrc"
      :loading="Boolean(lazy) ? 'lazy' : 'eager'"
    />
  </figure>
</template>
