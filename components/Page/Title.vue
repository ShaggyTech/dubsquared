<template>
  <h1
    class="text-4x md:text-5xl lg:text-6xl tracking-wider font-kanit font-bold"
  >
    <slot>{{ text }}</slot>
  </h1>
</template>

<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>
