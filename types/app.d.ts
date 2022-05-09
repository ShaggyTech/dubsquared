export interface IMenuItem {
  type: 'link' | 'button'
  text: string
  href?: any
  route?: any
}

interface IContactBarItem {
  text: string
  href?: string
  icon: 'phone' | 'email'
  ariaLabel: string
}
