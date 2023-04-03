<script setup lang="ts">
import type { IContactBarItem } from '@/types'

type Variant = 'detached' | 'attachedTop'
type Variants = Record<Variant, string>

type Props = {
  items: IContactBarItem[]
  variant?: Variant
  anchorClass?: string
  iconClass?: string | string[]
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'detached',
  anchorClass: '',
  iconClass: '',
})

const variants = reactive<Variants>({
  detached: `
    relative grid place-items-center
  `,
  attachedTop: `
    fixed top-0 left-0 right-0 z-50
    grid place-items-center
  `,
})

// selected
const selectedStyles = computed(
  () => variants[props.variant] || variants.detached
)
</script>

<script lang="ts">
export default { name: 'NavbarBanner' }
</script>

<template>
  <div v-if="items.length" :class="`${selectedStyles}`">
    <Anchor
      v-for="(item, i) in items"
      :key="i"
      :href="item.href"
      :aria-label="item.ariaLabel"
      :title="item.title"
      :class="`
          relative flex place-items-center place-content-center
          whitespace-nowrap no-underline
          ${anchorClass} 
        `"
    >
      <template #icon>
        <div v-if="item.icon" :class="`${iconClass}`">
          <component :is="item.icon" />
        </div>
      </template>
      {{ item.text }}
    </Anchor>
  </div>
</template>
