<template>
  <div
    ref="navbar"
    :class="`
      top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50
      border-b-2 md:border-b-4 border-red-800/[0.8]
      bg-gray-200/[0.7] dark:bg-zinc-800/[0.7] backdrop-filter backdrop-blur
    `"
  >
    <!-- <div id="navbar-banner" class="banner">
      <slot name="banner" />
    </div> -->
    <div class="h-full w-full max-w-8xl mx-auto">
      <div class="h-full py-3 lg:px-8 mx-4 lg:mx-0">
        <div class="relative flex items-center">
          <!-- drawer:toggle -->
          <div
            v-if="$slots['drawer']"
            class="lg:hidden flex items-center self-center justify-center mr-2"
          >
            <button
              class="flex items-center focus:outline-none"
              aria-label="Toggle Drawer Menu"
              @click="toggleDrawer()"
            >
              <span
                class="flex items-center text-gray-600 dark:text-gray-300 text-lg"
                aria-hidden="true"
              >
                <IconUil:bars v-if="!showDrawer" />
                <IconUil:times v-else />
              </span>
            </button>
          </div>
          <!-- title -->
          <slot name="title" />

          <!-- desktop nav -->
          <slot name="menu" />

          <!-- mobile nav toggle (options:toggle) -->
          <div
            v-if="$slots['options']"
            class="flex flex-1 justify-end lg:hidden"
          >
            <button
              class="flex items-center"
              aria-label="Navigation Menu"
              aria-haspopup="menu"
              :aria-expanded="showOptions"
              @click="toggleOptions()"
            >
              <span
                class="flex items-center p-3 text-gray-600 dark:text-gray-300 text-lg"
                aria-hidden="true"
              >
                <icon-fa-solid:ellipsis-v />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <ClientOnly>
      <Teleport to="#app-after">
        <!-- drawer -->
        <Transition name="slide-fade-from-up" mode="out-in">
          <div
            v-if="showDrawer && $slots['drawer']"
            class="fixed lg:hidden bg-gray-100 dark:bg-slate-800 pt-16 top-0 left-0 w-screen h-screen z-30 flex flex-col"
          >
            <div class="flex-1 flex flex-col relative overflow-y-auto">
              <slot name="drawer" :toggleDrawer="toggleDrawer" />
            </div>
          </div>
        </Transition>

        <!-- options / mobile nav menu -->
        <div v-if="showOptions && $slots['options']">
          <slot
            name="options"
            :toggleOptions="toggleOptions"
            :showOptions="showOptions"
          />
        </div>
      </Teleport>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
// import { IApp } from '~/utils/app'

// const app = useState<IApp>('app')
const navbar = ref<HTMLElement | null>(null)
const showDrawer = useState<boolean>('navbar.showDrawer', () => false)
const showOptions = useState<boolean>('navbar.showOptions', () => false)

onMounted(() => {
  const { onScroll } = useSticky(navbar.value as HTMLElement, 0)
  setTimeout(() => onScroll(), 50)
})

const toggleDrawer = () => (showDrawer.value = !showDrawer.value)
const toggleOptions = (show?: boolean) => {
  if (show) {
    showOptions.value = show
  } else {
    showOptions.value = !showOptions.value
  }
}
</script>

<script lang="ts">
export default { name: 'AppNavbarBuilder' }
</script>

<style lang="scss">
.slide-fade-from-up-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-from-up-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-from-up-enter-from,
.slide-fade-from-up-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
