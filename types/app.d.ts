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

interface IContactFormBody {
  nameFirst: string
  nameLast: string
  phone: string
  email: string
  vehicleVIN: string
  vehicleYear: string
  vehicleMake: string
  vehicleModel: string
  subject: string
  message: string
}
