<script setup lang="ts">
interface Props {
  starClass?: string
  numStars?: 0 | 1 | 2 | 3 | 4 | 5
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  starClass: 'h-4 w-4',
  numStars: 5,
})
</script>

<script lang="ts">
export default { name: 'TestimonialStars' }
</script>

<template>
  <div class="flex items-center mt-1">
    <SVGStar
      v-for="i in numStars"
      :key="i"
      :class="`${starClass}`"
      :filled="true"
    />
  </div>
</template>
