export const useAppStore = defineStore('app', () => {
  // state
  const appName = ref('Dubsquared - Audi and Volkswagen Specialists')
  const appAuthor = ref({
    name: 'Brandon Eichler',
    link: 'https://github.com/ShaggyTech',
  })

  const showAppDrawer = ref(false)
  const showMobileNav = ref(false)

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
    appAuthor,
    appName,
    showAppDrawer,
    showMobileNav,
    // actions
    toggleAppDrawer,
    toggleMobileNav,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
