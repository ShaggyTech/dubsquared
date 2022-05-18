<template>
  <AppNavbarBuilder class="h-auto">
    <!-- Banner -->
    <template #banner>
      <div
        class="tracking-wider text-warm-gray-100 text-sm text-center py-2 px-4 lg:py-3 lg:px-8 bg-red-900"
      >
        <AppContactBar :items="contactBarItems" />
      </div>
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
</script>

<script lang="ts">
export default { name: 'LayoutNavbar' }
</script>
