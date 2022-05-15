import type { FunctionalComponent } from 'vue'

export type UnpluginIcon = FunctionalComponent

export interface IMenuItem {
  type: 'link' | 'button'
  text: string
  href?: any
  route?: any
  icon?: UnpluginIcon
}

interface IContactBarItem {
  text: string
  href?: string
  icon: 'phone' | 'email'
  ariaLabel: string
}
