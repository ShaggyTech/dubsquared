<script lang="ts" setup>
type Variant = 'default' | 'background'
type Variants = {
  [key in Variant]: { figure: string; img: string }
}

interface Props {
  image: { path: string; id: string }
  placeholder?: { path: string | undefined; id: string | undefined }
  height?: string | number
  width?: string | number
  lazy?: boolean | 'false' | 'true'
  observerKey?: string
  seen?: boolean
  variant?: Variant
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: undefined,
  height: undefined,
  width: undefined,
  lazy: false,
  observerKey: undefined,
  seen: undefined,
  variant: 'default',
})

const containerRef = ref<HTMLElement>()

// optional internal observer state, if props.observerKey
const observer = props.observerKey
  ? useState<IntersectionObserver>(props.observerKey)
  : undefined
const container = props.observerKey
  ? useState(`${props.observerKey}-container`, () => containerRef)
  : undefined
const seen = props.observerKey
  ? useState(`${props.observerKey}-seen`, () => false)
  : undefined

// image state
const imageSrc = useCloudinary({
  path: props.image?.path,
  id: props.image?.id,
  height: props.height,
  width: props.width,
})

const placeholderSrc =
  props.placeholder?.path && props.placeholder?.id
    ? useCloudinary({
        path: props.placeholder.path,
        id: props.placeholder.id,
        height: props.height,
        width: props.width,
      })
    : useCloudinaryPlaceholder({
        height: props.height,
        width: props.width,
      })

const computedSrc = computed(() => {
  if (props.seen !== undefined || props.observerKey) {
    if (props.seen || seen?.value) {
      return imageSrc
    } else {
      return placeholderSrc
    }
  } else return imageSrc
})

// reactive styles based on props.variant
const styles = reactive<Variants>({
  default: {
    figure: '',
    img: '',
  },
  background: {
    figure: 'absolute inset-0 -z-1',
    img: 'w-full h-full object-cover',
  },
})
const selectedStyle = computed(() => styles[props.variant] || styles.default)

onMounted(async () => {
  await nextTick()
  // only if lazy and props.observerKey provided
  if (observer && container?.value) {
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
  name: 'CloudinaryImage',
  inheritAttrs: false,
}
</script>

<template>
  <figure ref="containerRef" :class="`${selectedStyle.figure}`">
    <img
      v-bind="$attrs"
      :src="computedSrc"
      :height="height"
      :width="width"
      :loading="Boolean(lazy) ? 'lazy' : 'eager'"
      :class="`${selectedStyle.img}`"
    />
  </figure>
</template>
