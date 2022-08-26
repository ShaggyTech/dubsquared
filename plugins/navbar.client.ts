import { useNavbarStore } from '~/stores/navbar'

export default defineNuxtPlugin(({ hook, $pinia }) => {
  // when page redirects on mobile device, close mobile nav and app drawer
  const { toggleAppDrawer, toggleMobileNav } = useNavbarStore($pinia)

  hook('page:finish', () => {
    toggleAppDrawer(false)
    toggleMobileNav(false)
  })
})
