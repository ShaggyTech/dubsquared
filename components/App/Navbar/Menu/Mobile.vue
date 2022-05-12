<template>
  <Teleport to="body">
    <TransitionRoot :show="show" appear>
      <!-- <ActionSheetOverlay @click="close" />
        -- Opaque Full Background Overlay
        -- ActionSheetOverlay-->
      <TransitionChild
        class="fixed bg-black opacity-70 z-50 top-0 left-0 w-screen h-screen"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
        @click.prevent="close"
      >
      </TransitionChild>

      <!-- ActionSheet (original) -->
      <TransitionChild
        class="fixed right-0 top-0 bottom-0 h-screen w-[clamp(210px,66%,320px)] z-50 opacity-100"
        enter="transition-all ease-in-out duration-300 transform"
        enter-from="translate-x-full opacity-0"
        enter-to="-translate-x-0 opacity-100"
        leave="transition-all ease-in-out duration-300 transform"
        leave-from="-translate-x-0 opacity-100"
        leave-to="translate-x-full opacity-0"
      >
        <!-- Main Slot (original) -->
        <!-- <slot /> -->
        <!-- ActionSheetBody -->

        <FocusTrap
          class="relative max-w-8xl h-full mx-auto flex flex-col space-y-2 overflow-y-auto h-full bg-gray-100/[0.8] dark:bg-slate-800/[0.8] backdrop-blur supports-backdrop-blur:bg-white/60 p-4"
        >
          <!-- ActionSheetHeader -->
          <div class="text-xs font-bold text-center mb-2">
            <!-- <slot>{{ text }}</slot> -->
            Menu
          </div>
          <!-- Slot for ActionSheetBody -->
          <!-- <slot /> -->
          <nav class="leading-6 font-semibold text-gray-600 dark:text-gray-300">
            <ul class="flex flex-col">
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
                  size="xs"
                  class="flex-1 font-extrabold capitalize"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                />
              </li>
            </ul>
          </nav>
          <div class="mt-6 text-sm font-bold capitalize">
            {{ $t('components.theme_switcher.change_theme') }}
          </div>
          <div class="mt-2">
            <ThemeToggle type="select-box" />
          </div>
          <Button text="Close" type="secondary" @click.prevent="close" />
        </FocusTrap>
      </TransitionChild>
    </TransitionRoot>
  </Teleport>
</template>

<script lang="ts" setup>
import { FocusTrap, TransitionRoot, TransitionChild } from '@headlessui/vue'

import type { IMenuItem } from '@/types'

interface Props {
  menu?: IMenuItem[]
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
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
export default { name: 'ActionSheet' }
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
