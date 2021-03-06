import { ThemeManager } from './theme'

import type { IApp } from '~/types'

export function AppSetup() {
  // declare app information
  const app: IApp = {
    name: 'Dubsquared - Audi VW Specialists',
    author: {
      name: 'ShaggyTech',
      link: 'https://github.com/ShaggyTech',
    },
  }
  useState('app', () => app)

  // use theme manager
  const themeManager = ThemeManager()

  return {
    app,
    themeManager,
  }
}
