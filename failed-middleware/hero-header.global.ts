export default defineNuxtRouteMiddleware((_to, _from) => {
  const router = useRouter()
  const isClient = typeof document !== 'undefined'

  const useHeroElements = () => useState<Element[]>('heroElements')
  // const useHeroObserver = () =>
  //   useState<IntersectionObserver>('page-hero-observer')
  const heroElements = useHeroElements()
  // const heroObserver = useHeroObserver()

  const heroObserverCallback: IntersectionObserverCallback = (
    element,
    observer
  ) => {
    element.forEach(({ target, isIntersecting }) => {
      if (!target || !isIntersecting) {
        return
      }
      setTimeout(() => {
        target.classList.add('seen')
        observer.unobserve(target)
      }, 500)
    })
  }

  router.afterEach(async () => {
    await nextTick()
    if (isClient) {
      const { observerRef } = useIntersectionObserver({
        callback: heroObserverCallback,
        useStateKey: 'page-hero-observer',
      })
      await nextTick(() => {
        const elements = document
          ? document?.querySelectorAll('.page-hero')
          : []
        if (elements)
          elements.forEach((element) => {
            element.classList.remove('seen')
            heroElements.value.push(element)
          })

        if (heroElements.value && observerRef.value) {
          heroElements.value.forEach((element) => {
            observerRef?.value?.observe(element)
          })
        }

        console.log('from global middleware -------')
        console.log('elements: ', elements)
        console.log('heroElements: ', heroElements.value)
        console.log('observer: ', observerRef.value)
      })
    }
  })
})
