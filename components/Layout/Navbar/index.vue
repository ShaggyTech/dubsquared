<template>
  <AppNavbarBuilder>
    <!-- <template #banner>
      <AppContactBar
        type="detached"
        :items="contactBarItems"
        :class="`
            bg-red-700 dark:bg-red-900 py-2
            border-y-2 border-yellow-400/80 dark:border-yellow-400/90
            font-alatsi text-base sm:text-lg lg:text-2xl text-gray-200 dark:text-gray-200 hover:text-white
            tracking-wide sm:tracking-wider lg:tracking-widest
            flex flex-row items-center justify-center gap-x-4
            w-full h-auto max-h-[46px] lg:max-h-[54px]
            px-6 lg:py-6
          `"
        :anchor-style="`
            text-gray-100 font-semibold tracking-wide sm:tracking-wider lg:tracking-widest
            hover:text-white hover:bg-red-500/40 rounded
            py-1 border-x-2 border-transparent hover:border-red-700/50
            shadow-none hover:shadow-inner hover:shadow-red-500 dark:hover:shadow-red-400
          `"
        icon-style="hidden sm:block mr-4 lg:mr-6 "
      />
    </template> -->

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
import type { IMenuItem } from '@/types'

const { t } = useLang()

const menuItems = computed((): IMenuItem[] => [
  {
    type: 'link',
    text: t('pages.about.nav'),
    route: { name: 'about' },
    icon: MdiInformation,
  },
  {
    type: 'link',
    text: t('pages.services.nav'),
    route: { name: 'services' },
    icon: MdiCarCog,
  },
  {
    type: 'link',
    text: t('pages.gallery.nav'),
    route: { name: 'gallery' },
    icon: MakiArtGallery,
  },
  {
    type: 'link',
    text: t('pages.contact.nav'),
    route: { name: 'contact' },
    icon: FluentContactCard28Filled,
  },
  {
    type: 'button',
    text: t('pages.get_a_quote.nav'),
    route: { name: 'get-a-quote' },
  },
])

const mobileMenuItems = computed((): IMenuItem[] => [
  {
    type: 'link',
    text: t('pages.index.nav'),
    route: { name: 'index' },
    icon: MdiGarage,
  },
  ...menuItems.value,
])

// const contactBarItems: IContactBarItem[] = [
//   {
//     text: '817-277-5593',
//     href: 'tel:817-277-5593',
//     icon: 'phone',
//     ariaLabel: 'Call Dubsquared',
//   },
//   {
//     text: 'info@dubsquared.com',
//     href: 'mailto:info@dubsquared.com',
//     icon: 'email',
//     ariaLabel: 'Email Dubsquared',
//   },
// ]
</script>

<script lang="ts">
export default { name: 'LayoutNavbar' }
</script>
