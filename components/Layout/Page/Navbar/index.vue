<script lang="ts" setup>
import MdiGarage from '~icons/mdi/garage'
import MdiInformation from '~icons/mdi/information'
import MdiCellphone from '~icons/mdi/cellphone'
import MdiEmailFast from '~icons/mdi/email-fast'
import RiTeamLine from '~icons/ri/team-line'
import MdiCarCog from '~icons/mdi/car-cog'
import MdiOilLevel from '~icons/mdi/oil-level'
import MdiCarClock from '~icons/mdi/car-clock'
import MdiEngineOffOutline from '~icons/mdi/engine-off-outline'
import MdiCarTurbocharger from '~icons/mdi/car-turbocharger'
import MdiCarInfo from '~icons/mdi/car-info'

import type { IMenuItem, IContactBarItem, IDropdownItem } from '@/types'

const servicesDropdownItems: IDropdownItem[] = [
  {
    to: '/oil-changes',
    icon: MdiOilLevel,
    text: 'Oil Changes',
  },
  {
    to: '/factory-maintenance',
    icon: MdiCarClock,
    text: 'Factory Maintenance',
  },
  {
    to: '/diagnostics',
    icon: MdiEngineOffOutline,
    text: 'Diagnostics',
  },
  {
    to: '/performance-upgrades',
    icon: MdiCarTurbocharger,
    text: 'Performance Upgrades',
  },
  {
    to: '/pre-purchase-inspections',
    icon: MdiCarInfo,
    text: 'Pre-purchase Inspections',
  },
]

const menuItems = computed((): IMenuItem[] => [
  {
    variant: 'link',
    text: 'About Us',
    route: { name: 'about' },
    icon: MdiInformation,
  },
  {
    variant: 'link',
    text: 'The Team',
    route: { name: 'meet-the-team' },
    icon: RiTeamLine,
  },
  {
    variant: 'dropdown',
    text: 'Services',
    dropdownItems: servicesDropdownItems,
    icon: MdiCarCog,
  },
  {
    variant: 'button',
    text: 'Contact Us',
    route: { name: 'contact' },
  },
])

const mobileMenuItems = computed((): IMenuItem[] => [
  {
    variant: 'link',
    text: 'Home',
    route: { name: 'index' },
    icon: MdiGarage,
  },

  ...menuItems.value,
])

const contactBarItems: IContactBarItem[] = [
  {
    text: '817-277-5593',
    href: 'tel:817-277-5593',
    ariaLabel: 'Call Dubsquared',
    title: 'Call Dubsquared',
    icon: MdiCellphone,
  },
  {
    text: 'info@dubsquared.com',
    href: 'mailto:info@dubsquared.com',
    ariaLabel: 'Email Dubsquared',
    title: 'Email Dubsquared',
    icon: MdiEmailFast,
  },
]
</script>

<script lang="ts">
export default { name: 'LayoutPageNavbar' }
</script>

<template>
  <NavbarBuilder
    :class="`
      border-b-2 border-red-600/80 shadow-md bg-stone-300/70
      backdrop-filter backdrop-blur transition-colors duration-300
      dark:(bg-zinc-800/70 border-red-600/80)
    `"
  >
    <!-- Banner -->
    <template #banner>
      <NavbarBanner
        :items="contactBarItems"
        :class="`
            grid-flow-col bg-red-800 border-t border-b border-stone-500/70
            transition-colors duration-300
          `"
        :anchor-class="`
            col-span-1 px-1 py-2
            text-stone-200 text-sm text-center tracking-widest
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
    <template #options="{ toggleOptions }">
      <NavbarMenuMobile
        header-text="Navigation"
        :menu="mobileMenuItems"
        @onClose="toggleOptions(false)"
      />
    </template>
  </NavbarBuilder>
</template>
