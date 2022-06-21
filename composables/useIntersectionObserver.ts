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
  observerRef: Ref<IntersectionObserver | undefined>
}

const useObserverRef = (key: string) =>
  useState<IntersectionObserver | undefined>(key)

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

  const observerRef = useObserverRef(useStateKey)

  if (isSupported) {
    observerRef.value = new IntersectionObserver(callback, {
      root,
      rootMargin,
      threshold,
    })
  } else observerRef.value = undefined

  return {
    isSupported,
    observerRef,
  }
}
