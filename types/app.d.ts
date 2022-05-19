import type { FunctionalComponent } from 'vue'

export type UnpluginIcon = FunctionalComponent

export interface IMenuItem {
  variant: 'link' | 'button'
  text: string
  href?: any
  route?: any
  icon?: UnpluginIcon
}

interface IContactBarItem {
  text: string
  href: string
  ariaLabel: string
  title: string
  icon?: UnpluginIcon
}
