<script setup lang="ts">
interface Props {
  variant?: 'page' | 'hash'
}
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
export default { name: 'ServiceButtonGroup' }
</script>

<template>
  <div
    :class="`
      flex flex-wrap place-content-center max-w-4xl gap-x-8 gap-y-10 mt-16 px-4 py-16
      bg-stone-100/20 rounded-md shadow-lg sm:(gap-y-12 px-10) dark:(bg-zinc-800)
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
