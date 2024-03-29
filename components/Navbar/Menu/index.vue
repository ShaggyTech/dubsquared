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
export default { name: 'NavbarMenu' }
</script>

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
            v-if="item.variant === 'link'"
            role="menuitem"
            :to="item.route ? item.route : undefined"
            :href="item.href ? item.href : undefined"
            class="nav-link"
            :class="`
              flex items-center p-2
              border-b-2 border-transparent
              text-lg font-bold text-center tracking-wide
              text-zinc-800 dark:text-gray-300
              hover:(border-red-600 text-zinc-900 dark:text-white no-underline)
            `"
            >{{ item.text }}</Anchor
          >
          <Button
            v-else-if="item.variant === 'button'"
            role="menuitem"
            :to="item.route ? item.route : undefined"
            :href="item.href ? item.href : undefined"
            :text="item.text"
            size="md"
            class="nav-btn whitespace-nowrap"
          />
          <NavbarMenuDropdown
            v-else-if="item.variant === 'dropdown'"
            :text="item.text"
            :menu-items="item.dropdownItems"
            to="/services"
          />
        </li>
      </ul>
    </nav>
    <!-- Desktop - Social Nav -->
    <ContactSocialMedia class="icon-section gap-6 text-xl" />
    <!-- Desktop - App Settings -->
    <div class="icon-section">
      <ThemeToggle />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon-section {
  @apply ml-6 pl-6 border-l border-gray-900/10 dark:border-gray-50/[0.2];
}

.nav-link.router-link-exact-active {
  color: theme('colors.slate.900');
  border-bottom: 3px solid theme('colors.red.800');
}

.nav-btn.router-link-exact-active {
  color: theme('colors.stone.600');
  border-bottom: 3px solid theme('colors.red.900');
  background: transparent;
}
html.dark {
  .nav-link.router-link-exact-active {
    color: theme('colors.stone.300');
  }
  .nav-btn.router-link-exact-active {
    color: theme('colors.stone.300');
    border-bottom: 3px solid theme('colors.red.900');
  }
}
</style>
