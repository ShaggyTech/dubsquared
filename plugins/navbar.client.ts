import { useAppStore } from '~/stores/app'

export default defineNuxtPlugin(({ hook, $pinia }) => {
  // when page redirects on mobile device, close mobile nav and app drawer
  const { toggleAppDrawer, toggleMobileNav } = useAppStore($pinia)

  hook('page:finish', () => {
    toggleAppDrawer(false)
    toggleMobileNav(false)
  })
})
