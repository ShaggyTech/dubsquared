import type { FunctionalComponent } from 'vue'

export interface IMenuItem {
  type: 'link' | 'button'
  text: string
  href?: any
  route?: any
  icon?: FunctionalComponent
}

interface IContactBarItem {
  text: string
  href?: string
  icon: 'phone' | 'email'
  ariaLabel: string
}
