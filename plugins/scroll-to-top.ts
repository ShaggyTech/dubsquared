export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.options.scrollBehavior = (
    to: any,
    from: any,
    savedPosition: any
  ) => {
    // ex: to="#some-section"
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    // scroll to top if link is to same page
    if (to === from) {
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
  }
})
