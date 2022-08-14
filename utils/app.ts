import { ThemeManager } from './theme'

import type { IApp } from '~/types'

export function AppSetup() {
  // declare app information
  const app: IApp = {
    name: 'Dubsquared - Audi and Volkswagen Specialists',
    author: {
      name: 'ShaggyTech',
      link: 'https://github.com/ShaggyTech',
    },
  }

  // app state
  useState('app', () => app)
  useState<boolean>('navbar.showDrawer', () => false)
  useState<boolean>('navbar.showOptions', () => false)

  // use theme manager
  const themeManager = ThemeManager()

  return {
    app,
    themeManager,
  }
}
