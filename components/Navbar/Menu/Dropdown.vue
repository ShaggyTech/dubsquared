<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

import type { IDropdownItem, IUnpluginIcon } from '~/types'

type Variant = 'desktop' | 'mobile'
type Variants = Record<Variant, string>

interface Props {
  menuItems?: IDropdownItem[]
  icon?: IUnpluginIcon
  text?: string
  variant?: Variant
  to?: string
}
const props = withDefaults(defineProps<Props>(), {
  menuItems: () => [],
  icon: undefined,
  text: '',
  variant: 'desktop',
  to: undefined,
})

const rootStyles = reactive<Variants>({
  desktop: `flex items-center`,
  mobile: `flex-1`,
})

const menuButtonStyles = reactive<Variants>({
  desktop: `
    flex items-center p-2
    border-b-2 border-transparent
    text-lg font-bold text-center tracking-wide
    text-zinc-800 dark:text-zinc-200 cursor-pointer
    hover:(text-zinc-900 dark:text-white border-red-600 no-underline) transition
  `,
  mobile: `
    flex items-center w-full px-2 py-2
    rounded border-b-2 border-transparent
    font-bold capitalize tracking-wider leading-8
    text-zinc-800 dark:text-zinc-200 cursor-pointer
    hover:(text-red-900 dark:text-zinc-100 border-red-900/80 no-underline)
  `,
})

const menuItemsStyles = reactive<Variants>({
  desktop: `
    absolute top-0 mt-12 w-fit space-y-2 py-4 px-2
    rounded-md shadow-lg bg-stone-100 font-bold text-gray-700
    ring-1 ring-black ring-opacity-5 border border-stone-400 shadow-lg
    dark:(text-gray-300 bg-stone-800 border-stone-700) focus:(outline-none)
  `,
  mobile: `
    w-fit space-y-2 py-4 px-1
    rounded-b-md shadow-lg bg-stone-100 font-bold text-gray-700
    ring-1 ring-black ring-opacity-5
    dark:(text-gray-300 bg-stone-800) focus:(outline-none)
  `,
})

const selectedRootStyle = computed(() => rootStyles[props.variant])
const selectedMenuButtonStyle = computed(() => menuButtonStyles[props.variant])
const selectedMenuItemsStyle = computed(() => menuItemsStyles[props.variant])
</script>

<script lang="ts">
export default { name: 'NavbarMenuDropdown' }
</script>

<template>
  <Menu v-slot="{ close }" as="div" :class="selectedRootStyle">
    <MenuButton
      :id="`${text}-dropdown-menu-btn`"
      :class="`${selectedMenuButtonStyle}`"
    >
      <slot name="icon"></slot>
      <div v-if="!$slots['icon'] && icon">
        <component :is="icon" />
      </div>
      <div :class="{ 'pl-2': icon || $slots['icon'] }">
        <slot>{{ text }}</slot>
      </div>
      <IconMdi:chevronDown
        :class="{
          'h-5 w-5 text-stone-700 dark:text-stone-200': true,
          'ml-2 -mr-1': variant === 'desktop',
          'ml-auto': variant === 'mobile',
        }"
        aria-hidden="true"
      />
    </MenuButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-80 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-80 opacity-0"
    >
      <MenuItems
        :id="`${text}-dropdown-menu`"
        :class="`${selectedMenuItemsStyle}`"
        @click.prevent="close"
      >
        <MenuItem v-if="to" v-slot="{ active }">
          <NuxtLink
            :to="to"
            :class="[
              active
                ? 'bg-red-900 text-white'
                : 'text-stone-900 dark:text-stone-200',
              'flex w-full items-center px-3 py-2 place-content-center mb-4 transition border-b-2 border-red-900 rounded-t-md cursor-pointer',
            ]"
          >
            {{ text }}
          </NuxtLink>
        </MenuItem>
        <MenuItem
          v-for="(item, index) in menuItems"
          :key="index"
          v-slot="{ active }"
        >
          <NuxtLink
            :to="item.to"
            :class="[
              active
                ? 'bg-red-900 text-white'
                : 'text-stone-900 dark:text-stone-200',
              'flex w-full items-center rounded-md px-3 py-2 transition',
            ]"
          >
            <component
              :is="item.icon"
              :active="active"
              class="mr-2 h-6 w-6"
              aria-hidden="true"
            />
            {{ item.text }}
          </NuxtLink>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
