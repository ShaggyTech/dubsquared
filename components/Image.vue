<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  alt: string
  src: string
  lazy?: boolean | 'false' | 'true'
}>()
</script>

<script lang="ts">
export default {
  name: 'Image',
  inheritAttrs: false,
}
</script>

<template>
  <figure>
    <img
      v-bind="$attrs"
      :alt="alt"
      :src="src"
      :loading="Boolean(lazy) ? 'lazy' : 'eager'"
    />
  </figure>
</template>
