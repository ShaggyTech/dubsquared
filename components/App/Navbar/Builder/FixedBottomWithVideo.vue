<template>
  <!-- bottom navbar with full hero banner -->
  <header
    ref="header"
    :class="`
      nav-bottom--full-banner
      relative h-full w-full m-w-8xl
      bg-black
      overflow-hidden z-[98]
    `"
  >
    <!-- header background container -->
    <div
      :class="`
        absolute inset-0 overflow-hidden z-[-1]
        brightness-[0.4] dark:brightness-[0.3]
      `"
    >
      <!-- header background image -->
      <video
        class="video-intro"
        playsinline
        preload="auto"
        autoplay
        muted
        loop
        poster="/images/dubsquared_hardpoint_r8.jpg"
        :class="`
          relative h-full w-full
          object-cover

          aspect-video
        `"
      >
        <source
          src="~/assets/videos/dubsquared-intro-720p.webm"
          type="video/webm"
        />
        <source
          src="~/assets/videos/dubsquared-intro-720p.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <!-- header hero banner-->
    <div
      ref="headerBanner"
      :class="`
        header-banner
        relative flex flex-col justify-around place-items-center
        gap-2 md:gap-4 lg:gap-8
        pb-24
        h-full
        max-h-[calc(var(--header-height))]
        w-full
        overlflow-hidden z-[99]
      `"
    >
      <!-- banner logo -->
      <AppNavbarBannerLogo />
    </div>
    <!-- navbar -->
    <div
      ref="navbar"
      :class="[
        `grid place-items-center
        h-[clamp(68px,var(--app-height)_*_0.1,100px)]
        w-full
        border-y-2 border-transparent
        transition duration-300
        overflow-hidden z-[100]`,
        $windowScrollPosY >= $appHeight - navbarHeight
          ? `fixed top-0 left-0
            backdrop-blur bg-gray-200/80 dark:bg-zinc-800/90
            text-black dark:text-white
            border-b-red-800/80`
          : `absolute bottom-0 left-0
            bg-gray-200 dark:bg-zinc-800
            text-zinc-900 dark:text-gray-300
            border-t-red-800/80`,
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
            :class="`
              flex flex-1 items-center justify-center
              max-w-[250px] mr-6
            `"
            :to="{ name: 'index' }"
          >
            <span class="sr-only">home</span>
            <span class="flex items-center">
              <SVGDubsquaredTextLogo
                width="200"
                height="64"
                class="title-logo w-[200px] h-auto"
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

const { $appHeight, $windowScrollPosY } = useNuxtApp()
const appStore = useAppStore()
const { toggleDrawer, toggleMobileNav } = appStore
const { showDrawer, showMobileNav } = storeToRefs(appStore)

const header = ref<HTMLElement>(null)
const headerBanner = ref<HTMLElement>(null)
const navbar = ref<HTMLElement>(null)

const headerHeight = ref<number>(null)
const headerBannerHeight = ref<number>(null)
const navbarHeight = ref<number>(null)

onMounted(() => {
  headerHeight.value = header.value.clientHeight
  headerBannerHeight.value = headerBanner.value.clientHeight
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

useResizeObserver(
  headerBanner,
  (entries) => {
    const entry = entries[0]
    const { height } = entry.contentRect
    headerBannerHeight.value = height
  },
  { box: 'border-box' }
)

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
watch(
  headerBannerHeight,
  (next) =>
    header.value?.style.setProperty('--header-banner-height', `${next}px`),
  { flush: 'post' }
)
watch(
  navbarHeight,
  (next) => header.value?.style.setProperty('--navbar-height', `${next}px`),
  { flush: 'post' }
)
</script>

<style lang="scss">
:root {
  --header-height: 1000px;
  --header-banner-height: 1000px;
  --navbar-height: 64px;
}

header.nav-bottom--full-banner {
  .headline {
    grid:
      'logo-vw logo-audi' auto
      'headline-text headline-text' auto
      / auto auto;
    @media (min-width: theme('screens.lg')) {
      grid:
        'logo-vw headline-text logo-audi' auto
        / 1fr 4fr 1fr;
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
