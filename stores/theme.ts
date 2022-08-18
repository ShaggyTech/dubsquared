import type { ITheme, IThemeOptions } from '~/types'

export type AvailableThemes = {
  key: IThemeOptions
  text: string
}[]

export const useThemeStore = defineStore('theme', () => {
  // state
  const availableThemes = ref<AvailableThemes>([
    { key: 'light', text: 'Light' },
    { key: 'dark', text: 'Dark' },
    { key: 'system', text: 'System' },
    { key: 'realtime', text: 'Realtime' },
  ])
  const cookieTheme = skipHydrate(useCookie<IThemeOptions>('theme'))
  const currentTheme = ref<ITheme>('dark')
  const selectedTheme = ref<IThemeOptions>()

  // actions
  function getRealtimeTheme(): ITheme {
    const now = new Date()
    const hour = now.getHours()
    const isNight = hour <= 7 || hour >= 19
    return isNight ? 'dark' : 'light'
  }

  // defaults to dark if no window object present
  function getSystemTheme(): ITheme {
    try {
      if (window && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      } else return 'light'
    } catch (error) {
      return 'dark'
    }
  }

  // watchers
  /** @private */
  function onThemeSettingChange(selected: IThemeOptions) {
    cookieTheme.value = selected

    switch (selected) {
      case 'realtime':
        currentTheme.value = getRealtimeTheme()
        break
      case 'system':
        currentTheme.value = getSystemTheme()
        break
      default:
        currentTheme.value = selected
        break
    }
  }
  watch(selectedTheme, (selected) => {
    if (selected) onThemeSettingChange(selected)
  })

  // lifecycle
  /** @private */
  function init() {
    if (!selectedTheme.value)
      selectedTheme.value = cookieTheme.value || 'system'
    onThemeSettingChange(selectedTheme.value)
  }
  /** @private */
  function onThemeSystemChange() {
    if (selectedTheme.value === 'system') {
      currentTheme.value = getSystemTheme()
    }
  }
  /** @private */
  function onRealtimeCheck() {
    if (selectedTheme.value === 'realtime') {
      currentTheme.value = getRealtimeTheme()
    }
  }
  /** @private */
  const intervalCheckTimer = ref<NodeJS.Timer>()

  onBeforeMount(() => init())
  onMounted(() => {
    // event listener to watch for system theme changes
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', onThemeSystemChange)

    // check every minute for realtime theme changes
    intervalCheckTimer.value = setInterval(onRealtimeCheck, 60 * 1000)
  })
  onBeforeUnmount(() => {
    // cleanup listeners and intervals
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', onThemeSystemChange)

    clearInterval(intervalCheckTimer.value)
  })

  return {
    // state
    availableThemes,
    cookieTheme,
    currentTheme,
    selectedTheme,
    // actions
    getRealtimeTheme,
    getSystemTheme,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
}
