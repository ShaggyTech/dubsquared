<template>
  <ActionSheet @on-close="toggleMobileNav(false)">
    <ActionSheetBody>
      <ActionSheetHeader text="Navigation" class="font-ubuntu tracking-wide" />
      <FocusTrap>
        <nav
          role="navigation"
          aria-label="Site Navigation"
          :class="`
            font-ubuntu font-semibold text-gray-800 dark:text-gray-200
            p-4 rounded-lg border-4 border-red-600/60 dark:border-red-700/30 shadow-md
          `"
        >
          <ul role="menubar" aria-label="Navigation Menu" class="grid gap-2">
            <li
              v-for="(item, i) in menu"
              :key="i"
              role="none"
              class="mobile-menu-list-item flex w-full"
              :class="[
                item.type === 'link'
                  ? `mb-1 p-2 transition-colors duration-300 rounded-sm
                    border-b-2 border-gray-900/10 dark:border-gray-50/20
                    hover:bg-gray-100/80 dark:hover:bg-red-800/40`
                  : '',
              ]"
            >
              <Anchor
                v-if="item.type === 'link'"
                :to="item.route ? item.route : ''"
                class="nav-link-mobile flex-1 ml-6 hover:no-underline"
                role="menuitem"
                >{{ item.text }}</Anchor
              >
              <Button
                v-else-if="item.type === 'button'"
                :text="item.text"
                size="md"
                class="flex-1 max-w-[66%] mx-auto my-4 font-bold dark:bg-gray-300 dark:hover:bg-red-900/50"
                :href="item.href ? item.href : false"
              />
            </li>
          </ul>
        </nav>
        <div class="mt-6 text-sm font-bold">Theme</div>
        <div class="mt-2">
          <ThemeToggleCustom type="select-box" />
        </div>
        <hr class="hr mt-8 mb-6" />
        <Button
          text="Close"
          type="close"
          size="md"
          class="max-w-[66%] mx-auto py-4"
          @click.prevent="toggleMobileNav(false)"
        />
      </FocusTrap>
    </ActionSheetBody>
  </ActionSheet>
</template>

<script setup lang="ts">
import { FocusTrap } from '@headlessui/vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'
import type { IMenuItem } from '@/types'

interface Props {
  menu?: IMenuItem[]
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  menu: () => [],
})

const appStore = useAppStore()
const { toggleMobileNav } = appStore
const { showMobileNav } = storeToRefs(appStore)
const navMenu = ref<HTMLElement>(null)

watch(showMobileNav, (open) =>
  open ? nextTick(() => navMenu.value.focus()) : ''
)
</script>

<style lang="scss">
.mobile-menu-list-item {
  > .nav-link-mobile.router-link-exact-active {
    border-bottom: 4px solid theme('colors.red.600');
    max-width: fit-content;
  }
}
</style>
