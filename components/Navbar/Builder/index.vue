<script setup lang="ts">
import { useAppStore } from '~/stores/app'

const appStore = useAppStore()
const { showMobileNav, showAppDrawer } = storeToRefs(appStore)
const { toggleMobileNav, toggleAppDrawer } = appStore

const navbar = ref<HTMLElement | null>(null)

onMounted(() => {
  const { onScroll } = useSticky(navbar.value as HTMLElement, 0)
  setTimeout(() => onScroll(), 50)
})
</script>

<script lang="ts">
export default { name: 'NavbarBuilder' }
</script>

<template>
  <div ref="navbar" class="top-0 z-40 h-auto w-full lg:z-50">
    <!-- Banner -->
    <slot name="banner" />
    <!-- Nav Bar Container-->
    <div class="h-full w-full max-w-8xl mx-auto">
      <div class="h-full py-0.2rem lg:py-2 lg:px-8 mx-4 lg:mx-0">
        <div class="relative grid grid-flow-col items-center apple-safe-area">
          <!-- drawer:toggle -->
          <div
            v-if="$slots['drawer']"
            class="lg:hidden flex items-center self-center justify-center mr-2"
          >
            <button
              class="flex items-center focus:outline-none"
              aria-label="Toggle Drawer Menu"
              @click="toggleAppDrawer()"
            >
              <span
                class="flex items-center text-gray-600 dark:text-gray-300 text-lg"
                aria-hidden="true"
              >
                <IconUil:bars v-if="!showAppDrawer" />
                <IconUil:times v-else />
              </span>
            </button>
          </div>
          <!-- title -->
          <slot name="title" />

          <!-- desktop nav -->
          <slot name="menu" />

          <!-- mobile nav menu toggle -->
          <div
            v-if="$slots['mobile-nav']"
            class="flex flex-1 justify-end lg:hidden"
          >
            <button
              class="flex items-center"
              aria-label="Navigation Menu"
              aria-haspopup="menu"
              :aria-expanded="showMobileNav"
              @click="toggleMobileNav()"
            >
              <span
                class="flex items-center p-2 text-gray-600 dark:text-gray-300 text-lg"
                aria-hidden="true"
              >
                <IconMdi:menu class="text-1.2em" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <ClientOnly>
      <Teleport to="#app-after">
        <!-- app drawer -->
        <Transition name="slide-fade-from-up" mode="out-in">
          <div
            v-if="showAppDrawer && $slots['drawer']"
            class="fixed lg:hidden bg-gray-100 dark:bg-slate-800 pt-16 top-0 left-0 w-screen h-screen z-30 flex flex-col"
          >
            <div class="flex-1 flex flex-col relative overflow-y-auto">
              <slot name="drawer" :toggle-drawer="toggleAppDrawer" />
            </div>
          </div>
        </Transition>

        <!-- mobile nav -->
        <div v-if="showMobileNav && $slots['mobile-nav']">
          <slot
            name="mobile-nav"
            :toggle-mobile-nav="toggleMobileNav"
            :show-mobile-nav="showMobileNav"
          />
        </div>
      </Teleport>
    </ClientOnly>
  </div>
</template>

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
