<template>
  <AppNavbarBuilder
    :class="`
      border-b-2 border-red-800/80 dark:border-red-900/80 shadow-md
      bg-warm-gray-300/70 dark:bg-zinc-800/70 backdrop-filter backdrop-blur
      transition-colors duration-300
    `"
  >
    <!-- Banner -->
    <template #banner>
      <AppContactBar
        :items="contactBarItems"
        :class="`
            grid-flow-col py-1
            border-t border-b border-warm-gray-500/70
            bg-red-900 dark:bg-red-800/50
            transition-colors duration-300
          `"
        :anchor-class="`
            col-span-1 px-1 md:px-8 py-1
            text-xs sm:text-sm xl:text-base text-center tracking-widest
            text-warm-gray-200 hover:text-white
          `"
        icon-class="px-1"
      />
    </template>

    <!-- Title -->
    <template #title>
      <NuxtLink tag="a" class="mr-4" :to="{ name: 'index' }">
        <span class="sr-only">home</span>
        <div class="flex items-center h-full">
          <SVGDubsquaredTextLogo width="180px" />
        </div>
      </NuxtLink>
    </template>

    <!-- Desktop Menu -->
    <template #menu>
      <AppNavbarMenu :menu="menuItems" />
    </template>

    <!-- Mobile Menu -->
    <template #options="{ toggleOptions }">
      <AppNavbarMenuMobile
        header-text="Navigation"
        :menu="mobileMenuItems"
        @onClose="toggleOptions(false)"
      />
    </template>
  </AppNavbarBuilder>
</template>

<script lang="ts" setup>
import MdiGarage from '~icons/mdi/garage'
import MdiInformation from '~icons/mdi/information'
import MdiCarCog from '~icons/mdi/car-cog'
import MakiArtGallery from '~icons/maki/art-gallery'
import FluentContactCard28Filled from '~icons/fluent/contact-card-28-filled'
import MdiCellphone from '~icons/mdi/cellphone'
import MdiEmailFast from '~icons/mdi/email-fast'

import type { IMenuItem, IContactBarItem } from '@/types'

const { t } = useLang()

const menuItems = computed((): IMenuItem[] => [
  {
    variant: 'link',
    text: t('pages.about.nav'),
    route: { name: 'about' },
    icon: MdiInformation,
  },
  {
    variant: 'link',
    text: t('pages.services.nav'),
    route: { name: 'services' },
    icon: MdiCarCog,
  },
  {
    variant: 'link',
    text: t('pages.gallery.nav'),
    route: { name: 'gallery' },
    icon: MakiArtGallery,
  },
  {
    variant: 'link',
    text: t('pages.contact.nav'),
    route: { name: 'contact' },
    icon: FluentContactCard28Filled,
  },
  {
    variant: 'button',
    text: t('pages.get_a_quote.nav'),
    route: { name: 'get-a-quote' },
  },
])

const mobileMenuItems = computed((): IMenuItem[] => [
  {
    variant: 'link',
    text: t('pages.index.nav'),
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
export default { name: 'LayoutNavbar' }
</script>
