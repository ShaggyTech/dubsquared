export default defineNuxtPlugin((nuxtApp) => {
  // when page redirect on mobile device, close drawer navbar
  nuxtApp.hook('page:finish', () => {
    const showDrawer = useState<boolean>('navbar.showDrawer')
    const showOptions = useState<boolean>('navbar.showOptions')
    showDrawer.value = false
    showOptions.value = false
  })
})
