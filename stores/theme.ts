import type { ITheme, IThemeOptions } from '~/types'

export const useThemeStore = defineStore('theme', () => {
  // state
  const availableThemes = ref<
    {
      key: IThemeOptions
      text: string
    }[]
  >([
    { key: 'light', text: 'Light' },
    { key: 'dark', text: 'Dark' },
    { key: 'system', text: 'System' },
    { key: 'realtime', text: 'Realtime' },
  ])
  const currentTheme = ref<ITheme>('light')
  const selectedTheme = ref<IThemeOptions>('system')
  const themeCookie = useCookie<IThemeOptions>('theme')

  // actions
  function getUserSetting(): IThemeOptions {
    return themeCookie.value || 'system'
  }

  function getSystemTheme(): ITheme {
    try {
      return window
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        : 'dark'
    } catch (error) {
      return 'light'
    }
  }

  function getRealtimeTheme(): ITheme {
    const now = new Date()
    const hour = now.getHours()
    const isNight = hour >= 19 || hour <= 6
    return isNight ? 'dark' : 'light'
  }

  // watchers
  function onThemeSettingChange(themeSetting: IThemeOptions) {
    themeCookie.value = themeSetting
    if (themeSetting === 'realtime') {
      currentTheme.value = getRealtimeTheme()
    } else if (themeSetting === 'system') {
      currentTheme.value = getSystemTheme()
    } else {
      currentTheme.value = themeSetting
    }
  }

  watch(selectedTheme, (val) => onThemeSettingChange(val))

  // lifecycle
  function init() {
    selectedTheme.value = getUserSetting()
    currentTheme.value = getSystemTheme()
  }

  function onThemeSystemChange() {
    if (selectedTheme.value === 'system') {
      currentTheme.value = getSystemTheme()
    }
  }

  function onRealtimeCheck() {
    if (selectedTheme.value === 'realtime') {
      currentTheme.value = getRealtimeTheme()
    }
  }

  const intervalCheckTimer = ref<NodeJS.Timer>()

  onBeforeMount(() => init())
  onMounted(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', onThemeSystemChange)

    intervalCheckTimer.value = setInterval(onRealtimeCheck, 1000)
  })
  onBeforeUnmount(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', onThemeSystemChange)

    clearInterval(intervalCheckTimer.value)
  })

  return {
    // state
    availableThemes,
    currentTheme,
    selectedTheme,
    themeCookie,
    // actions
    getUserSetting,
    getSystemTheme,
    getRealtimeTheme,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
}
