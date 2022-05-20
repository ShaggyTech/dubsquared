import type { Ref, ComponentPublicInstance } from 'vue'

export type VueInstance = ComponentPublicInstance
export type MaybeElement =
  | HTMLElement
  | SVGElement
  | VueInstance
  | undefined
  | null
export type MaybeRef<T> = T | Ref<T>
export type MaybeElementRef<T extends MaybeElement = MaybeElement> = MaybeRef<T>

export interface IntersectionObserverOptions {
  window?: Window
  /**
   * The Element or Document whose bounds are used as the bounding box when testing for intersection.
   */
  root?: any

  /**
   * A string which specifies a set of offsets to add to the root's bounding_box when calculating intersections.
   */
  rootMargin?: string

  /**
   * Either a single number or an array of numbers between 0.0 and 1.
   */
  threshold?: number | number[]
}

const isClient = typeof window !== 'undefined'
const defaultWindow = isClient ? window : undefined

export const useIntersectionObserver = (
  // target: MaybeElementRef,
  // callback: IntersectionObserverCallback,
  options: IntersectionObserverOptions = {}
) => {
  const {
    root,
    rootMargin = '0px',
    threshold = 0.1,
    window = defaultWindow,
  } = options

  const isSupported = window && 'IntersectionObserver' in window

  if (isSupported) {
    const lazyBackgrounds = [].slice.call(document.querySelectorAll('.bg-lazy'))
    const lazyBackgroundObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('bg-placeholder')
            lazyBackgroundObserver.unobserve(entry.target)
          }
        })
      },
      {
        root,
        rootMargin,
        threshold,
      }
    )

    lazyBackgrounds.forEach((lazyBackground) => {
      lazyBackgroundObserver.observe(lazyBackground)
    })
  }

  return {
    isSupported,
  }
}
