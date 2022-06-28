<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'
import type { UnpluginIcon } from '~/types'

type Props = {
  to?: RouteLocationRaw
  href?: string
  role?: string
  text?: string
  icon?: UnpluginIcon
}
const props = withDefaults(defineProps<Props>(), {
  to: undefined,
  href: undefined,
  role: 'link',
  text: '',
  icon: undefined,
})

const to = toRef(props, 'to')
const href = toRef(props, 'href')
</script>

<script lang="ts">
export default { name: 'Anchor' }
</script>

<template>
  <NuxtLink
    :to="to ? to : undefined"
    :href="!to ? href : undefined"
    :role="role"
    class="flex font-bold tracking-wide transition-colors duration-300 hover:no-underline"
  >
    <slot name="icon"></slot>
    <div v-if="!$slots['icon'] && icon">
      <component :is="icon" />
    </div>
    <div :class="{ 'pl-2': icon || $slots['icon'] }">
      <slot>{{ text }}</slot>
    </div>
  </NuxtLink>
</template>
