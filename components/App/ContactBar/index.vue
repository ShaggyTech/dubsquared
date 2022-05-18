<template>
  <div v-if="items.length" :class="`${defaultStyles} ${selectedVariant}`">
    <div
      v-for="(item, i) in items"
      :key="i"
      class="relative grid w-full h-full"
    >
      <Anchor
        :href="item.href"
        :aria-label="item.ariaLabel"
        :text="item.text"
        :class="`
          flex place-items-center place-content-center
          h-[fit-content] w-full cursor-pointer
          no-underline transition-colors duration-300
          ${anchorStyle} 
        `"
      >
        <template #icon>
          <IconCarbon:phoneOutgoingFilled
            v-if="item.icon === 'phone'"
            :class="`${iconStyle}`"
            height="1.2em"
            width="1.2em"
          />
          <IconDashicons:emailAlt
            v-else-if="item.icon === 'email'"
            :class="`${iconStyle}`"
            height="1.2em"
            width="1.2em"
          />
        </template>
      </Anchor>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IContactBarItem } from '@/types'
type Variant = 'detached' | 'attachedTop'
type Variants = Record<Variant, string>

interface Props {
  items?: IContactBarItem[]
  variant?: Variant
  anchorStyle?: string
  iconStyle?: string | string[]
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  items: (): IContactBarItem[] => [],
  variant: 'detached',
  anchorStyle: '',
  iconStyle: '',
})

const defaultStyles = `
  transition-colors duration-300
`
const variants = reactive<Variants>({
  detached: `
    relative grid grid-flow-col place-items-center gap-x-4
  `,
  attachedTop: `
    fixed top-0 left-0 right-0 z-50
    grid grid-flow-col place-items-center gap-x-4
  `,
})

// selected
const selectedVariant = computed(
  () => variants[props.variant] || variants.detached
)
</script>
