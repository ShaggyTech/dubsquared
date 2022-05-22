export interface IntersectionObserverOptions extends IntersectionObserverInit {
  window?: Window
}

const isClient = typeof window !== 'undefined'
const defaultWindow = isClient ? window : undefined

export const useIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverOptions = {}
) => {
  const {
    root,
    rootMargin = '0px',
    threshold = 0.1,
    window = defaultWindow,
  } = options

  const isSupported = window && 'IntersectionObserver' in window
  let Observer: IntersectionObserver
  if (isSupported) {
    Observer = new IntersectionObserver(callback, {
      root,
      rootMargin,
      threshold,
    })
  } else Observer = undefined as unknown as IntersectionObserver

  return {
    isSupported,
    Observer,
  }
}
