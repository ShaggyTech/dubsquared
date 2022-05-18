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
            bg-warm-gray-800/30 dark:bg-zinc-900/80 backdrop-blur
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
              bg-warm-gray-300 dark:bg-zinc-800
              overflow-x-hidden overflow-y-auto
            `"
          >
            <!-- Close Button -->
            <div
              :class="`
                fixed right-4 top-2
                text-warm-gray-600 dark:text-gray-300 hover:text-warm-gray-100
                bg-transparent hover:bg-red-900/90
                rounded-sm shadow transition-colors duration-300
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
              <SVGDubsquaredSquareLogo
                alt="dubsquared logo"
                height="64px"
                width="64px"
                src="~assets/icons/dubsquared-logo-white_optimized.svg"
                class="bg-zinc-800 dark:bg-transparent"
              />
            </div>
            <!-- Divider -->
            <div class="border-b-2 border-warm-gray-500/50" />
            <!-- Menu -->
            <nav class="px-2">
              <ul
                role="menu"
                aria-labelledby="mobile-nav-button"
                class="grid gap-4"
              >
                <!-- Menu Item -->
                <li
                  v-for="(item, i) in menu"
                  :key="i"
                  role="none"
                  :class="[
                    'flex place-items-center w-full',
                    item.variant === 'link'
                      ? `rounded
                        hover:bg-warm-gray-100/90 hover:dark:bg-red-800/40
                        shadow shadow-warm-gray-300 dark:shadow-zinc-800 
                        hover:shadow-warm-gray-400 hover:dark:shadow-zinc-900
                        transition-colors duration-300`
                      : '',
                  ]"
                >
                  <Anchor
                    v-if="item.variant === 'link'"
                    role="menuitem"
                    :to="item.route ? item.route : undefined"
                    :href="item.href ? item.href : undefined"
                    class="nav-link"
                    :class="`
                      flex-1 px-2 py-1
                      rounded border-b-2 border-transparent hover:border-red-900/80
                      font-bold capitalize tracking-wider leading-8
                      text-warm-gray-700 dark:text-warm-gray-300
                      hover:text-red-900 hover:dark:text-warm-gray-100
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
                    size="sm"
                    :to="item.route ? item.route : undefined"
                    :href="item.href ? item.href : undefined"
                    class="nav-btn flex-1"
                  />
                </li>
              </ul>
            </nav>
            <!-- Divider -->
            <div class="border-b-2 border-warm-gray-500/50" />
            <!-- Theme Toggle -->
            <div class="flex flex-col px-2">
              <div class="ml-2 text-sm capitalize">
                {{ $t('components.theme_switcher.change_theme') }}
              </div>
              <div class="mt-2">
                <ThemeToggle variant="select-box" />
              </div>
            </div>
            <!-- Divider -->
            <div class="border-b-2 border-warm-gray-500/50" />
            <!-- Close Button -->
            <Button
              id="mobile-nav-button"
              aria-controls="mobile-nav-menu"
              variant="close"
              text="Close"
              size="md"
              class="mx-2"
              @click.prevent="close"
            />
          </FocusTrap>
        </aside>
      </TransitionChild>
    </TransitionRoot>
  </Teleport>
</template>

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

// micro compiler
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
export default { name: 'AppNavbarMenuMobile' }
</script>

<style lang="scss" scoped>
.nav-link.router-link-active {
  font-weight: bold;
}
.nav-link.router-link-exact-active {
  @apply border-b border-b-warm-gray-400/20;
  color: theme('colors.warm-gray.600');
  border-left: 3px solid theme('colors.red.900');
  border-right: 3px solid theme('colors.red.900');
}
html.dark {
  .nav-link.router-link-exact-active {
    @apply border-b border-b-warm-gray-700/20;
    color: theme('colors.warm-gray.400');
    border-left: 3px solid theme('colors.red.900');
    border-right: 3px solid theme('colors.red.900');
  }
}
</style>
