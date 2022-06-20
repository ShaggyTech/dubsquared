<template>
  <div
    class="text-4x md:text-5xl lg:text-6xl tracking-wider font-kanit font-bold"
  >
    <slot>{{ text }}</slot>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>
