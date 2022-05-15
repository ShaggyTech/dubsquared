<template>
  <NuxtLink
    v-if="to"
    tag="a"
    :to="to"
    :class="`
      flex w-full place-items-center
      dark:hover:text-white hover:text-gray-900 hover:no-underline
      transition-colors duration-300
    `"
  >
    <div v-if="icon || $slots['icon']">
      <slot name="icon">{{ icon }}</slot>
    </div>
    <div :class="{ 'ml-4': icon || $slots['icon'] }">
      <slot>{{ text }}</slot>
    </div>
  </NuxtLink>
  <a
    v-else
    :href="href"
    :class="`
      dark:hover:text-white hover:text-gray-900 hover:no-underline
      transition-colors duration-300   
    `"
  >
    <div v-if="icon || $slots['icon']">
      <slot name="icon">{{ icon }}</slot>
    </div>
    <div :class="{ 'ml-4': icon || $slots['icon'] }">
      <slot>{{ text }}</slot>
    </div>
  </a>
</template>

<script lang="ts" setup>
import type { UnpluginIcon } from '~/types'

interface Props {
  href?: string
  text?: string
  to?: string | object
  anchorStyle?: string
  icon?: UnpluginIcon
}
const props = withDefaults(defineProps<Props>(), {
  href: '',
  text: '',
  to: undefined,
  anchorStyle: '',
  icon: undefined,
})

const href = toRef(props, 'href')
const to = toRef(props, 'to')
</script>
