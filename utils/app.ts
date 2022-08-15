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
  useAppStore(pinia)
  useThemeStore(pinia)
}
