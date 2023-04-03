<script lang="ts" setup>
import { useNavbarStore } from '~/stores/navbar'

const { contactBarItems, menuItems, mobileMenuItems } = storeToRefs(
  useNavbarStore()
)
</script>

<script lang="ts">
export default { name: 'LayoutPageNavbar' }
</script>

<template>
  <NavbarBuilder
    :class="`
      border-b-2 border-red-700 shadow-md bg-zinc-300/70
      backdrop-filter backdrop-blur transition-colors duration-300
      dark:(bg-zinc-800/70 border-red-700)
    `"
  >
    <!-- Banner -->
    <template #banner>
      <NavbarBanner
        :items="contactBarItems"
        class="grid-flow-col bg-red-800 transition-colors duration-300"
        :anchor-class="`
            col-span-1 px-1 py-2 text-stone-200 text-sm text-center tracking-widest
            sm:px-4 lg:text-base hover:text-white
          `"
        icon-class="px-1"
      />
    </template>

    <!-- Title -->
    <template #title>
      <NuxtLink tag="a" class="mr-4 py-1" :to="{ name: 'index' }">
        <span class="sr-only">home</span>
        <SVGDubsquaredTextLogo class="h-12 w-36 xl:(h-14 w-40)" />
      </NuxtLink>
    </template>

    <!-- Desktop Menu -->
    <template #menu>
      <NavbarMenu :menu="menuItems" />
    </template>

    <!-- Mobile Menu -->
    <template #mobile-nav="{ toggleMobileNav }">
      <NavbarMenuMobile
        header-text="Navigation"
        :menu="mobileMenuItems"
        @on-close="toggleMobileNav(false)"
      />
    </template>
  </NavbarBuilder>
</template>
