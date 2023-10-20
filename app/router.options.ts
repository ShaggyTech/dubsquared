import type { RouterConfig } from '@nuxt/schema'
import { useNavbarStore } from '~/stores/navbar'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior: (to, from, savedPosition) => {
    // scroll to hash, useful for using to="#some-id" in NuxtLink
    // ex: <NuxtLink to="#top"> To Top </NuxtLink>
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    // if link is to same page - close mobile nav then scroll to top
    if (to === from) {
      const { toggleMobileNav } = useNavbarStore(usePinia())
      toggleMobileNav(false)

      return {
        left: 0,
        top: 0,
        behavior: 'smooth',
      }
    }

    // use saved scroll position on browser forward/back navigation
    if (savedPosition) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(savedPosition)
        }, 500)
      })
    }

    // scroll to top by default, delay needed so user doesn't see scroll before new page is loaded
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          left: 0,
          top: 0,
        })
      }, 500)
    })
  },
}
