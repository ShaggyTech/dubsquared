<script setup lang="ts">
interface Props {
  title?: string
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  title: '',
})
</script>

<script lang="ts">
export default { name: 'LayoutPageFooterCard' }
</script>

<template>
  <div class="flex flex-col w-full items-center">
    <h3 class="text-xl font-bold">{{ title }}</h3>
    <slot />
  </div>
</template>
