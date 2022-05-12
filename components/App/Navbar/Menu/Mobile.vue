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
          class="fixed inset-0 w-screen h-screen z-50 bg-white/30 dark:bg-zinc-900/80 backdrop-blur transition-opacity"
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
          class="fixed inset-y-0 right-0 h-screen w-[clamp(210px,66%,320px)] z-50 transform translate-x-full transition-all"
        >
          <!-- Menu Body -->
          <FocusTrap
            class="relative max-w-8xl h-full flex flex-col space-y-4 p-4 overflow-y-auto bg-neutral-200 dark:bg-zinc-800 border-l-4 border-red-900/70"
          >
            <!-- Menu Header -->
            <div class="text-xs font-bold text-center mb-2">
              <!-- <slot>{{ text }}</slot> -->
              {{ headerText }}
            </div>
            <!-- Slot for ActionSheetBody -->
            <!-- <slot /> -->
            <nav class="leading-6 font-bold text-gray-800 dark:text-gray-300">
              <ul class="flex flex-col space-y-4">
                <li
                  v-for="(item, i) in menu"
                  :key="i"
                  class="flex w-full"
                  :class="{
                    'pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]':
                      item.type === 'link',
                  }"
                >
                  <Anchor
                    v-if="item.type === 'link'"
                    :to="item.route ? item.route : undefined"
                    :href="item.href ? item.href : undefined"
                    class="flex-1 hover:no-underline capitalize"
                    >{{ item.text }}</Anchor
                  >
                  <Button
                    v-else-if="item.type === 'button'"
                    :text="item.text"
                    size="sm"
                    class="flex-1 mt-4 font-extrabold capitalize"
                    :to="item.route ? item.route : undefined"
                    :href="item.href ? item.href : undefined"
                  />
                </li>
              </ul>
            </nav>
            <!-- Theme Toggle -->
            <div class="flex flex-col mt-4">
              <div class="text-sm font-bold capitalize">
                {{ $t('components.theme_switcher.change_theme') }}
              </div>
              <div class="mt-2">
                <ThemeToggle type="select-box" />
              </div>
            </div>
            <!-- Close Button -->
            <Button
              text="Close"
              type="secondary"
              class="mt-4"
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
