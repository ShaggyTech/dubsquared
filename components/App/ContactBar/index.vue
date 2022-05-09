<template>
  <div v-if="items.length" :class="`${defaultStyle} ${selectedStyle}`">
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

interface Props {
  type?: 'detached' | 'attachedTop'
  anchorStyle?: string
  iconStyle?: string | string[]
  items?: IContactBarItem[]
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  type: 'detached',
  anchorStyle: '',
  iconStyle: '',
  items: (): IContactBarItem[] => [],
})

const defaultStyle = `
  transition-colors duration-300
`
const styles = reactive({
  detached: 'relative',
  attachedTop: `
    absolute top-0 left-0 right-0 z-[200]
    flex flex-row items-center justify-center gap-x-4
    w-full h-auto max-h-[46px] lg:max-h-[54px]
    px-6 lg:py-6
  `,
})

// selected
const selectedStyle = computed(() => styles[props.type] || styles.detached)
</script>
