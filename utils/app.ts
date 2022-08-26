import { useAppStore } from '~/stores/app'
import { useThemeStore } from '~/stores/theme'

/**
 *
 * App setup logic. Should be called as early as possible in app.vue
 * @example
 * ```ts
 * import { appSetup } from '~/utils/app'
 *
 * appSetup()
 * ```
 */
export function AppSetup() {
  const pinia = getActivePinia()

  // initialize stores
  const appStore = useAppStore(pinia)
  const themeStore = useThemeStore(pinia)

  // minimum store state we need to expose for easy usage in app.vue
  const { appCanonicalBaseURL, appFontsURL, appName } = storeToRefs(appStore)
  const { currentTheme } = storeToRefs(themeStore)

  return {
    appCanonicalBaseURL,
    appFontsURL,
    appName,
    currentTheme,
  }
}
