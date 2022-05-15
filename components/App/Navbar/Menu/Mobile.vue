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
          :class="`
            fixed inset-y-0 right-0 min-h-screen w-[clamp(210px,66%,320px)] z-50
            transform translate-x-full transition-all
          `"
        >
          <!-- Menu Body -->
          <FocusTrap
            :class="`
              relative flex flex-col h-full px-4 pb-36 overflow-y-auto
              border-l-8 border-red-900
              bg-warm-gray-300 dark:bg-zinc-800
            `"
          >
            <!-- Menu Logo -->
            <div class="grid place-items-center mt-6">
              <SVGDubsquaredSquareLogo
                alt="dubsquared logo"
                height="64px"
                width="64px"
                src="~assets/icons/dubsquared-logo-white_optimized.svg"
                class="bg-zinc-800 dark:bg-transparent"
              />
            </div>
            <!-- Divider -->
            <div class="mt-6 border-b-2 border-warm-gray-500/50" />
            <!-- Menu -->
            <nav class="mt-8 px-2">
              <ul class="grid gap-4">
                <!-- Menu Item -->
                <li
                  v-for="(item, i) in menu"
                  :key="i"
                  role="none"
                  :class="[
                    'flex place-items-center w-full',
                    item.type === 'link'
                      ? `rounded
                        hover:bg-warm-gray-100/90 dark:hover:bg-red-800/40
                        shadow shadow-warm-gray-300 hover:shadow-warm-gray-400
                        dark:shadow-zinc-800 dark:hover:shadow-zinc-900
                        transition-colors duration-300`
                      : '',
                  ]"
                >
                  <Anchor
                    v-if="item.type === 'link'"
                    role="menuitem"
                    :to="item.route ? item.route : undefined"
                    :href="item.href ? item.href : undefined"
                    :class="`
                      nav-link flex-1 px-2 py-1
                      rounded border-b-2 border-transparent hover:border-red-900/80
                      font-bold capitalize tracking-wider leading-8
                      text-warm-gray-700 hover:text-red-900
                      dark:text-warm-gray-300 dark:hover:text-warm-gray-100
                    `"
                  >
                    <template #icon>
                      <div v-if="item.icon" class="ml-2">
                        <component :is="item.icon" class="h-7 w-7" />
                      </div>
                    </template>
                    {{ item.text }}
                  </Anchor>
                  <Button
                    v-else-if="item.type === 'button'"
                    role="menuitem"
                    :text="item.text"
                    size="md"
                    :to="item.route ? item.route : undefined"
                    :href="item.href ? item.href : undefined"
                    class="nav-btn flex-1"
                  />
                </li>
              </ul>
            </nav>
            <!-- Divider -->
            <div class="mt-8 border-b-2 border-warm-gray-500/50" />
            <!-- Theme Toggle -->
            <div class="flex flex-col mt-8 px-2">
              <div class="ml-2 text-sm capitalize">
                {{ $t('components.theme_switcher.change_theme') }}
              </div>
              <div class="mt-2">
                <ThemeToggle type="select-box" />
              </div>
            </div>
            <!-- Divider -->
            <div class="mt-8 border-b-2 border-warm-gray-500/50" />
            <!-- Close Button -->
            <button
              text="Close"
              size="sm"
              :class="`
                mt-10 mx-2 p-2
                rounded border-2
                border-transparent hover:border-red-800/70
                dark:border-transparent dark:hover:border-red-800/50
                font-bold hover:text-red-800 dark:hover:text-white
                bg-warm-gray-200/90 hover:bg-warm-gray-100/90
                dark:bg-warm-gray-600/60 dark:hover:bg-warm-gray-500/30
                transition-colors duration-300
              `"
              @click.prevent="close"
            >
              Close
            </button>
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
