<script setup lang="ts">
type Props = {
  data: string
  height: string
  width: string
  name: string
  type: string
  lazy?: boolean
  seen?: boolean
  observerKey?: string
}

const props = withDefaults(defineProps<Props>(), {
  lazy: false,
  seen: false,
  observerKey: undefined,
})

// HTMLElement ref
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

// set object data attribute when either props.seen or seen ref via internal observer
const objectData = computed<string>(() => {
  if (props.lazy && (props.seen || seen?.value)) return props.data
  else return ''
})

onMounted(async () => {
  await nextTick()
  // only if lazy and props.observerKey provided
  if (props.lazy && observer) {
    observer.value = new IntersectionObserver((entries) => {
      const el = entries[0]
      if (el.isIntersecting) {
        if (seen) seen.value = true
        observer?.value?.disconnect()
      }
    })

    if (container?.value && observer.value)
      observer.value.observe(container.value)
  }
})

onUnmounted(() => {
  observer?.value?.disconnect()
})
</script>

<script lang="ts">
export default { name: 'Object' }
</script>

<template>
  <object
    ref="containerRef"
    :data="objectData"
    :height="height"
    :width="width"
    :name="name"
    :type="type"
  ></object>
</template>
