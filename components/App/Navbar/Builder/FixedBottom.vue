<template>
  <!-- bottom navbar with full hero banner -->
  <header
    ref="header"
    :class="`
      nav-bottom--full-banner
      relative h-full max-w-8xl mx-auto
      bg-black
      overflow-hidden z-[98]
      transition-colors duration-500
      shadow-lg shadow-zinc-700/20
    `"
  >
    <slot name="banner">
      <AppBannerHome />
    </slot>

    <!-- navbar -->
    <div
      ref="navbar"
      :class="[
        `grid place-items-center
        h-[clamp(68px,var(--app-height)_*_0.1,100px)] w-full
        border-y-2 border-transparent
        transition duration-300
        z-[100]`,
        $windowScrollPosY >= $appHeight - navbarHeight
          ? `fixed top-0 left-0
            backdrop-blur bg-gray-200/80 dark:bg-zinc-800/90
            text-black dark:text-white
            border-b-red-800/80`
          : `absolute bottom-0 left-0
            bg-gray-200 dark:bg-zinc-800
            text-zinc-900 dark:text-gray-300`,
      ]"
    >
      <!-- navbar container -->
      <div
        :class="`
          relative flex justify-between lg:justify-around
          h-full w-full
          pl-6 lg:pl-8 lg:pr-6
        `"
      >
        <AppContactBar
          type="attachedTop"
          :items="contactBarItems"
          :class="`
            bg-red-700 dark:bg-red-900 py-2
            border-y-2 border-yellow-400/80 dark:border-yellow-400/90
            font-alatsi text-base sm:text-lg lg:text-2xl text-gray-200 dark:text-gray-200 hover:text-white
            tracking-wide sm:tracking-wider lg:tracking-widest
          `"
          :anchor-style="`
            text-gray-100 font-semibold tracking-wide sm:tracking-wider lg:tracking-widest
            hover:text-white hover:bg-red-500/40 rounded
            py-1 border-x-2 border-transparent hover:border-red-700/50
            shadow-none hover:shadow-inner hover:shadow-red-500 dark:hover:shadow-red-400
          `"
          icon-style="hidden sm:block mr-4 lg:mr-6 "
        />
        <!-- left drawer toggle -->
        <div v-if="$slots['drawer']" class="lg:hidden">
          <button class="flex items-center mr-2" @click="toggleDrawer()">
            <span class="text-lg text-gray-600 dark:text-gray-300">
              <IconUil:bars v-if="!showDrawer" />
              <IconUil:times v-else />
            </span>
          </button>
        </div>

        <!-- navbar title -->
        <slot name="title">
          <NuxtLink
            tag="a"
            class="flex flex-1 items-center justify-center max-w-[250px] mr-6"
            :to="{ name: 'index' }"
          >
            <span class="sr-only">home</span>
            <span class="flex items-center">
              <SVGDubsquaredTextLogo
                width="200"
                height="64"
                class="title-logo h-auto w-[200px]"
              />
            </span>
          </NuxtLink>
        </slot>

        <!-- desktop menu -->
        <slot name="menu" />

        <!-- mobile menu toggle -->
        <div
          v-if="$slots['mobile-nav-menu']"
          class="flex items-center h-full lg:hidden"
        >
          <button
            class="w-24 h-full"
            aria-label="menu"
            aria-haspopup="menu"
            :aria-expanded="showMobileNav"
            @click="toggleMobileNav()"
          >
            <span class="text-gray-600 dark:text-gray-300 text-lg">
              <icon-fa-solid:ellipsis-v class="mx-auto" />
            </span>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu and drawer -->
    <ClientOnly>
      <Teleport to="#app-after">
        <!-- mobile menu -->
        <div v-if="showMobileNav && $slots['mobile-nav-menu']">
          <slot name="mobile-nav-menu" />
        </div>
        <!-- left drawer -->
        <Transition name="slide-fade-from-up" mode="out-in">
          <div
            v-if="showDrawer && $slots['drawer']"
            :class="`
              fixed top-0 left-0 flex flex-col lg:hidden
              pt-16 z-30
              w-screen h-screen
            bg-gray-100 dark:bg-slate-800
            `"
          >
            <div class="relative flex flex-col overflow-y-auto">
              <slot name="drawer" />
            </div>
          </div>
        </Transition>
      </Teleport>
    </ClientOnly>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useResizeObserver } from '@vueuse/core'
import { useAppStore } from '@/stores/app'
import type { IContactBarItem } from '@/types'

const { $appHeight, $windowScrollPosY } = useNuxtApp()
const appStore = useAppStore()
const { toggleDrawer, toggleMobileNav } = appStore
const { showDrawer, showMobileNav } = storeToRefs(appStore)

const contactBarItems: IContactBarItem[] = [
  {
    text: '817-277-5593',
    href: 'tel:817-277-5593',
    icon: 'phone',
    ariaLabel: 'Call Dubsquared',
  },
  {
    text: 'info@dubsquared.com',
    href: 'mailto:info@dubsquared.com',
    icon: 'email',
    ariaLabel: 'Email Dubsquared',
  },
]

const header = ref<HTMLElement>(null)
// const headerBanner = ref<HTMLElement>(null);
const navbar = ref<HTMLElement>(null)

const headerHeight = ref<number>(null)
// const headerBannerHeight = ref<number>(null);
const navbarHeight = ref<number>(null)

onMounted(() => {
  headerHeight.value = header.value.clientHeight
  // headerBannerHeight.value = headerBanner.value.clientHeight;
  navbarHeight.value = navbar.value.clientHeight
})

useResizeObserver(
  header,
  (entries) => {
    const entry = entries[0]
    const { height } = entry.contentRect
    headerHeight.value = height
  },
  { box: 'border-box' }
)

// useResizeObserver(
//   headerBanner,
//   (entries) => {
//     const entry = entries[0];
//     const { height } = entry.contentRect;
//     headerBannerHeight.value = height;
//   },
//   { box: 'border-box' }
// );

useResizeObserver(
  navbar,
  (entries) => {
    const entry = entries[0]
    const { height } = entry.contentRect
    navbarHeight.value = height
  },
  { box: 'border-box' }
)

watch(
  headerHeight,
  (next) => header.value?.style.setProperty('--header-height', `${next}px`),
  { flush: 'post' }
)
// watch(
//   headerBannerHeight,
//   (next) =>
//     header.value?.style.setProperty('--header-banner-height', `${next}px`),
//   { flush: 'post' }
// );
watch(
  navbarHeight,
  (next) => header.value?.style.setProperty('--navbar-height', `${next}px`),
  { flush: 'post' }
)
</script>

<style lang="scss">
:root {
  --header-height: 1000px;
  // --header-banner-height: 1000px;
  --navbar-height: 64px;
}

header.nav-bottom--full-banner {
}

.three-d-text {
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
}

.linear-wipe-text {
  $color1: theme('colors.red.500');
  $color2: theme('colors.gray.100');
  background: linear-gradient(
    to right,
    $color1 20%,
    $color2 40%,
    $color2 60%,
    $color1 80%
  );
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 15s ease-in-out infinite;
  @keyframes shine {
    to {
      background-position: -200% center;
    }
  }
}

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
