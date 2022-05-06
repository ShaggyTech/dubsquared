<template>
  <div class="relative hidden lg:flex items-center">
    <nav class="h-full text-base font-semibold">
      <ul class="h-full flex flex-1 gap-x-5 py-2">
        <li
          v-for="(item, i) in menu"
          :key="i"
          class="menu-list-item flex items-center h-full"
        >
          <Anchor
            v-if="item.type === 'link'"
            :to="item.route ? item.route : ''"
            :class="`
                  nav-link
                  flex items-center
                  h-auto p-2
                  border-b-4 border-transparent
                  hover:no-underline hover:border-red-600
                  font-ubuntu text-base xl:text-lg tracking-wide hover:text-zinc-900/90 hover:dark:text-white`"
            >{{ item.text }}</Anchor
          >
          <Button
            v-else-if="item.type === 'button'"
            :text="item.text"
            size="md"
            class="py-2 font-bold text-sm"
            :href="item.href ? item.href : false"
          />
        </li>
      </ul>
    </nav>
    <div
      class="relative ml-6 pl-6 border-l border-gray-900/10 dark:border-gray-50/[0.2]"
    >
      <ThemeToggleCustom />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IMenuItem } from '@/types'

interface Props {
  menu?: IMenuItem[]
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  menu: () => [],
})
</script>

<style lang="scss">
.menu-list-item {
  > .nav-link.router-link-exact-active {
    border-bottom: 3px solid theme('colors.red.800');
    max-width: fit-content;
  }
}
</style>
