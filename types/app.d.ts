import type { RouteLocationRaw } from 'vue-router'
import type UnpluginIcon from '~icons/*'

export interface IApp {
  name: string
  author: {
    name: string
    link: string
  }
}

export type ITheme = 'dark' | 'light'
export type IThemeOptions = 'dark' | 'light' | 'system' | 'realtime'

export type IUnpluginIcon = UnpluginIcon

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

export type IPictureSrcSet = {
  media?: string
  srcSet?: string
  type?: string
}

export type IImageProps = {
  alt?: string
  height?: string | number
  width?: string | number
  src?: string
  srcSets?: SrcSet[]
  placeholderSrc?: string
  cloudinaryId?: string
}

export type IImage = {
  path?: string
  cloudinaryId?: string
  height?: number | string
  width?: number | string
  alt?: string
  placeholder?: {
    path?: string
    cloudinaryId?: string
    local?: boolean
  }
}
