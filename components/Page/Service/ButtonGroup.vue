<script setup lang="ts">
interface Props {
  variant?: 'page' | 'hash'
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  variant: 'page',
})

const toPrefix = computed(() => {
  if (props.variant === 'page') return '/'
  if (props.variant === 'hash') return '#'
})

const buttons = [
  {
    to: 'oil-changes',
    text: 'Oil Changes',
  },
  {
    to: 'factory-maintenance',
    text: 'Factory Maintenance',
  },
  {
    to: 'diagnostics',
    text: 'Diagnostics',
  },
  {
    to: 'performance-upgrades',
    text: 'Performance Upgrades',
  },
  {
    to: 'pre-purchase-inspections',
    text: 'Pre-purchase Inspections',
  },
]
</script>

<script lang="ts">
export default { name: 'PageServiceButtonGroup' }
</script>

<template>
  <div
    :class="`
      flex flex-wrap w-full gap-x-8 gap-y-6 sm:gap-y-12
      mt-12 px-4 sm:px-10 py-16 place-content-center
      rounded-md shadow-lg
    `"
  >
    <Button
      v-for="(button, i) in buttons"
      :key="i"
      :to="`${toPrefix}${button.to}`"
      :text="button.text"
      size="md"
      class="flex-1 whitespace-nowrap"
    />
  </div>
</template>
