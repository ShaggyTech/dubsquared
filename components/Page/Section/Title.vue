<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>

<script lang="ts">
export default { name: 'PageSectionTitle' }
</script>

<template>
  <div class="mb-1 text-2xl font-semibold">
    <slot>{{ text }}</slot>
  </div>
</template>
