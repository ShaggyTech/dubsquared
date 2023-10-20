import { skipHydrate } from 'pinia'
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
    return isNight() ? 'dark' : 'light'
  }

  // defaults to dark if no window object present
  function getSystemTheme(): ITheme {
    try {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      } else return 'light'
    } catch (error) {
      return 'dark'
    }
  }

  function onThemeSettingChange(theme: IThemeOptions) {
    cookieTheme.value = theme

    switch (theme) {
      case 'realtime':
        currentTheme.value = getRealtimeTheme()
        break
      case 'system':
        currentTheme.value = getSystemTheme()
        break
      default:
        currentTheme.value = theme
    }
  }

  // watchers
  watch(selectedTheme, (theme) => {
    if (theme) onThemeSettingChange(theme)
  })

  // lifecycle
  /** @private */
  function init() {
    if (!selectedTheme.value)
      selectedTheme.value = cookieTheme.value || 'system'
    onThemeSettingChange(selectedTheme.value)
  }
  /** @private */
  function onSystemThemeChange() {
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
      .addEventListener('change', onSystemThemeChange)

    // check every 5 minutes for realtime theme changes
    intervalCheckTimer.value = setInterval(onRealtimeCheck, 5 * 60 * 1000)
  })
  onBeforeUnmount(() => {
    // cleanup listeners and intervals
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', onSystemThemeChange)

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
    onThemeSettingChange,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
}
