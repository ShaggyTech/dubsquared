<template>
  <div class="relative hidden lg:flex items-center ml-auto">
    <!-- Desktop - Navigation -->
    <nav class="h-full">
      <ul role="menu" class="h-full flex flex-1 gap-x-5">
        <li
          v-for="(item, i) in menu"
          :key="i"
          role="none"
          class="flex items-center capitalize"
        >
          <Anchor
            v-if="item.type === 'link'"
            role="menuitem"
            :to="item.route ? item.route : undefined"
            :href="item.href ? item.href : undefined"
            class="nav-link"
            :class="`
              flex items-center p-2
              border-b-2 border-transparent hover:border-red-600
              text-lg font-bold text-center tracking-wide
              text-zinc-800 dark:text-gray-300
              hover:text-zinc-900 hover:dark:text-white
              hover:no-underline
            `"
            >{{ item.text }}</Anchor
          >
          <Button
            v-else-if="item.type === 'button'"
            role="menuitem"
            :to="item.route ? item.route : undefined"
            :href="item.href ? item.href : undefined"
            :text="item.text"
            size="md"
            class="nav-btn"
          />
        </li>
      </ul>
    </nav>
    <!-- Desktop - Social Nav -->
    <div class="menu-icon-section">
      <Anchor href="https://www.instagram.com/dubsquared.llc" title="Instagram">
        <IconCib:instagram style="color: #df3ae8; font-size: 1.2em" />
      </Anchor>
      <Anchor href="https://www.facebook.com/vwaudirepair/" title="Facebook">
        <IconLogos:facebook style="font-size: 1.2em" />
      </Anchor>
      <Anchor href="https://goo.gl/maps/PGKJBqnGrKajR7En7" title="Google">
        <IconLogos:googleIcon style="font-size: 1.2em" />
      </Anchor>
    </div>
    <!-- Desktop - App Options -->
    <div class="menu-icon-section">
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

<script lang="ts">
export default { name: 'AppNavbarMenu' }
</script>

<style lang="scss" scoped>
.menu-icon-section {
  @apply flex flex-1 space-x-5 ml-6 pl-6
    border-l border-gray-900/10 dark:border-gray-50/[0.2];
}

.nav-btn {
  white-space: nowrap;
}
.nav-link.router-link-active {
  font-weight: bold;
}
.nav-link.router-link-exact-active {
  color: theme('colors.slate.900');
  border-bottom: 3px solid theme('colors.red.800');
  max-width: fit-content;
}
html.dark {
  .nav-link.router-link-exact-active {
    color: theme('colors.warm-gray.300');
  }
}
</style>
