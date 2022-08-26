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

export const useNavbarStore = defineStore('navbar', () => {
  // state
  const showAppDrawer = ref(false)
  const showMobileNav = ref(false)

  // getters
  const contactBarItems = computed((): IContactBarItem[] => [
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
  ])

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
      dropdownItems: servicesDropdownItems.value,
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

  const servicesDropdownItems = computed((): IDropdownItem[] => [
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
  ])

  // actions
  function toggleMobileNav(show?: boolean) {
    if (typeof show === 'boolean') {
      showMobileNav.value = show
    } else {
      showMobileNav.value = !showMobileNav.value
    }
  }

  function toggleAppDrawer(show?: boolean) {
    if (typeof show === 'boolean') {
      showAppDrawer.value = show
    } else {
      showAppDrawer.value = !showAppDrawer.value
    }
  }

  return {
    // state
    showAppDrawer,
    showMobileNav,
    // getters
    contactBarItems,
    menuItems,
    mobileMenuItems,
    servicesDropdownItems,
    // actions
    toggleAppDrawer,
    toggleMobileNav,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNavbarStore, import.meta.hot))
}
