import type { RouterConfig } from '@nuxt/schema'
import { useAppStore } from '~/stores/app'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior: (to: any, from: any, savedPosition: any) => {
    // ex: to="#some-section"
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    // if link is to same page - close mobile nav then scroll to top
    if (to === from) {
      const pinia = getActivePinia()
      const { toggleMobileNav } = useAppStore(pinia)
      toggleMobileNav(false)

      return {
        left: 0,
        top: 0,
        behavior: 'smooth',
      }
    }

    // use saved scroll position on browser forward/back navigation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          left: savedPosition?.left || 0,
          top: savedPosition?.top || 0,
        })
      }, 500)
    })
  },
}
