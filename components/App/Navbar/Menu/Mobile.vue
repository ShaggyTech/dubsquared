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
        <div
          :class="`
            fixed inset-y-0 right-0 h-screen w-[clamp(210px,66%,320px)] z-50
            transform translate-x-full transition-all
          `"
        >
          <!-- Menu Body -->
          <FocusTrap
            :class="`
              relative h-full flex flex-col p-6 pb-14 overflow-y-auto
              bg-warm-gray-200 dark:bg-zinc-800 border-l-8 border-red-900
            `"
          >
            <!-- Menu Header -->
            <div
              class="pb-4 tracking-wider font-bold text-center border-b-2 border-red-800/90 dark:border-red-800/50"
            >
              <!-- <slot>{{ text }}</slot> -->
              {{ headerText }}
            </div>
            <!-- Slot for ActionSheetBody -->
            <!-- <slot /> -->
            <nav class="mt-6">
              <ul class="grid gap-4">
                <li
                  v-for="(item, i) in menu"
                  :key="i"
                  role="none"
                  class="flex w-full"
                  :class="[
                    item.type === 'link'
                      ? `text-zinc-900 dark:text-neutral-100 tracking-wider leading-8
                        border-b border-gray-900/50 dark:border-gray-500/50
                        hover:bg-warm-gray-300/80 dark:hover:bg-red-800/40`
                      : '',
                  ]"
                >
                  <Anchor
                    v-if="item.type === 'link'"
                    :to="item.route ? item.route : undefined"
                    :href="item.href ? item.href : undefined"
                    role="menuitem"
                    class="flex-1 px-2 font-bold capitalize hover:no-underline"
                    >{{ item.text }}</Anchor
                  >
                  <Button
                    v-else-if="item.type === 'button'"
                    :text="item.text"
                    size="md"
                    class="flex-1 mt-2 font-extrabold capitalize"
                    :to="item.route ? item.route : undefined"
                    :href="item.href ? item.href : undefined"
                  />
                </li>
              </ul>
            </nav>
            <!-- Theme Toggle -->
            <div class="flex flex-col mt-8">
              <div class="px-2 text-sm font-bold capitalize">
                {{ $t('components.theme_switcher.change_theme') }}
              </div>
              <div class="mt-2">
                <ThemeToggle type="select-box" />
              </div>
            </div>
            <!-- Close Button -->
            <Button
              text="Close"
              size="md"
              type="secondary"
              class="mt-8 font-bold"
              @click.prevent="close"
            />
          </FocusTrap>
        </div>
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
  menu: () => [],
  headerText: 'Menu',
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
// .slide-fade-from-bottom-enter-active {
//   transition: all 0.3s ease-out;
// }
// .slide-fade-from-bottom-leave-active {
//   transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
// }
// .slide-fade-from-bottom-enter-from,
// .slide-fade-from-bottom-leave-to {
//   transform: translateY(20px);
//   opacity: 0;
// }
</style>
