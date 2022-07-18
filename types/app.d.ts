import type { RouteLocationRaw } from 'vue-router'
import type UnpluginIcon from '~icons/*'

export type IDropdownItem = {
  to?: string
  icon?: UnpluginIcon
  text: string
}

export type IMenuItem = {
  variant: 'link' | 'button' | 'dropdown'
  text: string
  href?: any
  route?: RouteLocationRaw
  icon?: UnpluginIcon
  dropdownItems?: IDropdownItem[]
}

export type IContactBarItem = {
  text: string
  href: string
  ariaLabel: string
  title: string
  icon?: UnpluginIcon
}

export interface IApp {
  name: string
  author: {
    name: string
    link: string
  }
}

export type IPictureSrcSet = {
  media?: string
  srcSet?: string
  type?: string
}

export type IImageProps = {
  alt?: string
  height?: string
  width?: string
  src?: string
  srcSets?: SrcSet[]
  placeholder?: string
}

export type IContactFormBody = {
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
