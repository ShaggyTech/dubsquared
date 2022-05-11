<template>
  <div class="relative hidden lg:flex items-center ml-auto">
    <!-- Desktop - Navigation -->
    <nav class="">
      <ul class="h-full flex flex-1 gap-x-5">
        <li
          v-for="(item, i) in menu"
          :key="i"
          class="menu-list-item flex items-center capitalize leading-6"
        >
          <Anchor
            v-if="item.type === 'link'"
            :to="item.route ? item.route : undefined"
            :href="item.href ? item.href : undefined"
            :class="`
              nav-link flex items-center p-2
              border-b-4 border-transparent
              text-lg text-zinc-800 dark:text-gray-200 font-bold tracking-wide
              hover:text-zinc-900 hover:dark:text-white hover:border-red-600 hover:no-underline
            `"
            >{{ item.text }}</Anchor
          >
          <Button
            v-else-if="item.type === 'button'"
            :to="item.route ? item.route : undefined"
            :href="item.href ? item.href : undefined"
            :text="item.text"
            size="md"
            class="nav-btn flex items-center font-extrabold text-md text-center"
          />
        </li>
      </ul>
    </nav>
    <!-- Desktop - Social Nav -->
    <div
      class="flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]"
    >
      <Anchor
        class="hover:no-underline flex self-center items-center"
        href="https://www.instagram.com/dubsquared.llc"
        title="Instagram"
        target="_blank"
      >
        <IconCib:instagram style="color: #df3ae8; font-size: 1.2em" />
      </Anchor>
      <Anchor
        class="hover:no-underline flex self-center items-center"
        href="https://www.facebook.com/vwaudirepair/"
        title="Facebook"
        target="_blank"
      >
        <IconLogos:facebook style="font-size: 1.2em" />
      </Anchor>
      <Anchor
        class="hover:no-underline flex self-center items-center"
        href="https://goo.gl/maps/PGKJBqnGrKajR7En7"
        title="Google"
        target="_blank"
      >
        <IconLogos:googleIcon style="font-size: 1.2em" />
      </Anchor>
    </div>
    <!-- Desktop - App Options -->
    <div
      class="flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]"
    >
      <ThemeToggle />
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

<style lang="scss" scoped>
.nav-link.router-link-active {
  font-weight: bold;
}
.nav-link.router-link-exact-active {
  color: theme('colors.slate.900');
  border-bottom: 3px solid theme('colors.red.800');
  max-width: fit-content;
}
.nav-btn.nav-link.router-link-exact-active {
  color: theme('colors.white');
}
html.dark {
  .nav-link.router-link-exact-active {
    color: theme('colors.white');
  }
}
</style>
