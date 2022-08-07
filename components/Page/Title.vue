<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>

<script lang="ts">
export default { name: 'PageTitle' }
</script>

<template>
  <h1
    class="text-4xl md:text-5xl lg:text-6xl tracking-wider font-kanit font-bold"
  >
    <slot>{{ text }}</slot>
  </h1>
</template>
