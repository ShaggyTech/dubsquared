<template>
  <NuxtLink v-if="to" tag="a" :to="to" :role="role" class="anchor__default">
    <slot name="icon"></slot>
    <div v-if="!$slots['icon'] && icon">
      <component :is="icon" />
    </div>
    <div :class="{ 'pl-2': icon || $slots['icon'] }">
      <slot>{{ text }}</slot>
    </div>
  </NuxtLink>
  <a v-else :href="href" :role="role" target="_blank" class="anchor__default">
    <slot name="icon"></slot>
    <div v-if="!$slots['icon'] && icon">
      <component :is="icon" />
    </div>
    <div :class="{ 'pl-2': icon || $slots['icon'] }">
      <slot>{{ text }}</slot>
    </div>
  </a>
</template>

<script lang="ts" setup>
import type { UnpluginIcon } from '~/types'

interface Props {
  to?: string | object
  href?: string
  role?: string
  text?: string
  icon?: UnpluginIcon
}
const props = withDefaults(defineProps<Props>(), {
  to: undefined,
  href: '',
  role: 'link',
  text: '',
  icon: undefined,
})

const to = toRef(props, 'to')
const href = toRef(props, 'href')
</script>

<style lang="scss" scoped>
.anchor {
  &__default {
    @apply flex self-center place-items-center font-bold tracking-wide
    hover:no-underline transition-colors duration-300;
  }
}
</style>
