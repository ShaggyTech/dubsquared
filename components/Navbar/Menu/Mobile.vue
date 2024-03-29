<script lang="ts" setup>
import { FocusTrap, TransitionRoot, TransitionChild } from '@headlessui/vue'

import type { IMenuItem } from '@/types'

interface Props {
  menu?: IMenuItem[]
  headerText?: string
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  headerText: 'Menu',
  menu: () => [],
})

// emits
const emit = defineEmits(['onClose'])

// state
const show = ref(false)

// methods
const close = () => {
  show.value = false
  setTimeout(() => emit('onClose'), 1000)
}

// lifecycle
onMounted(() => {
  show.value = true
})
</script>

<script lang="ts">
export default { name: 'NavbarMenuMobile' }
</script>

<template>
  <Teleport to="body">
    <TransitionRoot :show="show" appear>
      <!-- Full Background Overlay - click to close menu -->
      <TransitionChild
        as="template"
        enter="ease-out duration-300 delay-100"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-300 delay-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
        @click.prevent="close"
      >
        <div
          :class="`
            fixed inset-0 w-screen h-screen z-50 transition-opacity
            bg-stone-800/30 dark:bg-zinc-900/80 backdrop-blur
          `"
        />
      </TransitionChild>

      <!-- Menu Transition -->
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500 delay-300"
        enter-from="translate-x-full opacity-0"
        enter-to="translate-x-0 opacity-100"
        leave="ease-out duration-500 delay-100"
        leave-from="translate-x-0 opacity-100"
        leave-to="translate-x-full opacity-0"
      >
        <aside
          id="mobile-nav-menu"
          :class="`
            fixed inset-y-0 right-0 min-h-screen w-[clamp(210px,66%,320px)] z-50
            transform translate-x-full transition-all
          `"
        >
          <!-- Menu Body -->
          <FocusTrap
            :class="`
              relative grid grid-cols-1 gap-y-8 h-full w-full px-2 sm:px-4 pt-8 pb-32
              border-l-8 border-red-900/80 dark:border-red-900/70
              bg-zinc-200 dark:bg-zinc-800
              overflow-x-hidden overflow-y-auto
            `"
          >
            <!-- Close Button -->
            <div
              :class="`
                fixed top-4 apple-safe-area--fixed-right
                text-stone-600 dark:text-stone-300 hover:text-stone-100
                bg-stone-300/90 dark:bg-stone-700/40 hover:bg-red-900/80 hover:dark:bg-red-900/70
                rounded shadow transition-colors duration-300
              `"
            >
              <button
                class="flex items-center"
                aria-label="Close Menu"
                aria-controls="mobile-nav-menu"
                @click.prevent="close"
              >
                <span class="flex items-center p-2" aria-hidden="true">
                  <IconIon:close-round class="h-4 w-4" />
                </span>
              </button>
            </div>
            <!-- Menu Logo -->
            <div class="grid place-items-center">
              <LazySVGDubsquaredSquareLogo
                alt="dubsquared logo"
                height="64px"
                width="64px"
                class="bg-zinc-800 dark:bg-transparent"
              />
            </div>
            <!-- Mobile Social Media Icons -->
            <LazyContactSocialMedia class="text-2xl" />
            <!-- Divider -->
            <div class="border-b-2 border-stone-500/50" />
            <!-- Menu -->
            <nav class="apple-safe-area--right">
              <ul
                role="menu"
                aria-labelledby="mobile-nav-button"
                class="grid gap-y-5 px-2"
              >
                <!-- Menu Item -->
                <li
                  v-for="(item, i) in menu"
                  :key="i"
                  role="none"
                  :class="`
                    flex place-items-center w-full
                    rounded shadow shadow-zinc-300 transition-colors duration-200
                    hover:(bg-zinc-100/90 shadow-zinc-400 dark:bg-red-800/40 dark:shadow-zinc-900/60)
                    dark:shadow-zinc-900/20
                  `"
                >
                  <Anchor
                    v-if="item.variant === 'link'"
                    role="menuitem"
                    :to="item.route ? item.route : undefined"
                    :href="item.href ? item.href : undefined"
                    class="nav-link"
                    :class="`
                      flex-1 px-2 py-2 rounded border-b-2 border-transparent
                      font-bold capitalize tracking-wider leading-8 text-zinc-800 dark:text-zinc-200
                      hover:(text-red-900 border-red-900/80 dark:text-zinc-100)
                    `"
                  >
                    <template #icon>
                      <div v-if="item.icon" class="px-2">
                        <component :is="item.icon" class="h-7 w-7" />
                      </div>
                    </template>
                    {{ item.text }}
                  </Anchor>
                  <Button
                    v-else-if="item.variant === 'button'"
                    role="menuitem"
                    :text="item.text"
                    size="md"
                    :to="item.route ? item.route : undefined"
                    :href="item.href ? item.href : undefined"
                    class="nav-btn flex-1 py-5"
                  />
                  <NavbarMenuDropdown
                    v-else-if="item.variant === 'dropdown'"
                    :text="item.text"
                    :menu-items="item.dropdownItems"
                    variant="mobile"
                    to="/services"
                    class="text-zinc-800 dark:text-zinc-100"
                  >
                    <template #icon>
                      <div v-if="item.icon" class="px-2">
                        <component :is="item.icon" class="h-7 w-7" />
                      </div>
                    </template>
                  </NavbarMenuDropdown>
                </li>
              </ul>
            </nav>
            <!-- Divider -->
            <div class="border-b-2 border-stone-500/50" />
            <!-- Theme Toggle -->
            <div class="flex flex-col px-2 apple-safe-area--right">
              <div class="ml-2 text-sm capitalize">Change Theme</div>
              <div class="mt-2">
                <LazyThemeToggle variant="select-box" />
              </div>
            </div>
            <!-- Divider -->
            <div class="border-b-2 border-stone-500/50" />
            <!-- Close Button -->
            <div class="apple-safe-area--right">
              <Button
                id="mobile-nav-button"
                aria-controls="mobile-nav-menu"
                variant="close"
                text="Close"
                size="md"
                class="mx-auto"
                @click.prevent="close"
              />
            </div>
          </FocusTrap>
        </aside>
      </TransitionChild>
    </TransitionRoot>
  </Teleport>
</template>

<style lang="scss" scoped>
.nav-link.router-link-active,
.nav-btn.router-link-active {
  font-weight: normal;
}
.nav-link.router-link-exact-active {
  color: theme('colors.stone.700');
  border-left: 3px solid theme('colors.red.900');
  border-right: 3px solid theme('colors.red.900');
  border-bottom: 1px solid theme('colors.stone.400');
}
.nav-btn.router-link-exact-active {
  color: theme('colors.stone.700');
  border-left: 2px solid theme('colors.red.900');
  border-right: 2px solid theme('colors.red.900');
  background: transparent;
}
html.dark {
  .nav-link.router-link-exact-active {
    color: theme('colors.stone.300');
    border-left: 3px solid theme('colors.red.900');
    border-right: 3px solid theme('colors.red.900');
    border-bottom: 1px solid theme('colors.stone.900');
  }
  .nav-btn.router-link-exact-active {
    color: theme('colors.stone.300');
    border-left: 2px solid theme('colors.red.900');
    border-right: 2px solid theme('colors.red.900');
    background: transparent;
  }
}
</style>
