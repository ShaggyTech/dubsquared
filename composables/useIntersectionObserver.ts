import type { Ref } from 'vue'
export interface IntersectionObserverOptions extends IntersectionObserverInit {
  window?: Window
}
export type UseIntersectionObserver = (params: {
  callback: IntersectionObserverCallback
  useStateKey: string
  options?: IntersectionObserverOptions
}) => {
  isSupported: boolean
  observer: IntersectionObserver | undefined
  observerRef: Ref<IntersectionObserver | undefined>
}

const isClient = typeof window !== 'undefined'
const defaultWindow = isClient ? window : undefined

export const useIntersectionObserver: UseIntersectionObserver = ({
  callback,
  options = {},
  useStateKey,
}) => {
  const {
    root,
    rootMargin = '0px',
    threshold = 0.1,
    window = defaultWindow,
  } = options

  const isSupported: boolean =
    (window && 'IntersectionObserver' in window) || false

  let observer: IntersectionObserver | undefined

  if (isSupported) {
    observer = new IntersectionObserver(callback, {
      root,
      rootMargin,
      threshold,
    })
  } else observer = undefined

  const observerRef = useState<IntersectionObserver | undefined>(useStateKey)

  return {
    isSupported,
    observer,
    observerRef,
  }
}
