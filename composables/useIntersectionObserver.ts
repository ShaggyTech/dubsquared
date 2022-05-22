import type { Ref } from 'vue'
export interface IntersectionObserverOptions extends IntersectionObserverInit {
  window?: Window
}
export type UseIntersectionObserver = (params: {
  callback: IntersectionObserverCallback
  options: IntersectionObserverOptions
  useStateKey: string
}) => {
  isSupported: boolean
  observer: IntersectionObserver
  observerRef: Ref<IntersectionObserver>
}

const isClient = typeof window !== 'undefined'
const defaultWindow = isClient ? window : undefined

export const useIntersectionObserver: UseIntersectionObserver = ({
  callback,
  options,
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

  let observer: IntersectionObserver

  if (isSupported) {
    observer = new IntersectionObserver(callback, {
      root,
      rootMargin,
      threshold,
    })
  } else observer = undefined as unknown as IntersectionObserver

  const observerRef = useState<IntersectionObserver>(useStateKey)

  return {
    isSupported,
    observer,
    observerRef,
  }
}
