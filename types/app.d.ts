import type { FunctionalComponent } from 'vue'

export type UnpluginIcon = FunctionalComponent

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

export type IMenuItem = {
  variant: 'link' | 'button'
  text: string
  href?: any
  route?: any
  icon?: UnpluginIcon
}

export type IContactBarItem = {
  text: string
  href: string
  ariaLabel: string
  title: string
  icon?: UnpluginIcon
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
