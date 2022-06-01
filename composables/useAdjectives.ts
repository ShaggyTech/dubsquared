export interface UseAdjectivesState {
  adjectives: string[]
  currentAdjective: string
  currentAdjectiveIndex: number
  showAdjective: boolean
  delayFirstChange: number | undefined
  delayFirstChangeTimeout: NodeJS.Timeout | null
  delayAsEmpty: number | undefined
  delayAsEmptyTimeout: NodeJS.Timeout | null
  timeBetween: number | undefined
  timeBetweenInterval: NodeJS.Timer | null
}

export interface UseAdjectiveOptions {
  adjectives: string[]
}

export const useAdjectives = (
  options: UseAdjectiveOptions = {
    adjectives: [''],
  }
) => {
  const adjectivesState = useState<UseAdjectivesState>(
    'useAdjectivesState',
    () =>
      reactive({
        adjectives: options.adjectives,
        currentAdjective: '',
        currentAdjectiveIndex: 0,
        showAdjective: false,
        delayFirstChange: 4000,
        delayFirstChangeTimeout: null,
        delayAsEmpty: 500,
        delayAsEmptyTimeout: null,
        timeBetween: 7000,
        timeBetweenInterval: null,
      })
  )

  const {
    adjectives,
    currentAdjective,
    currentAdjectiveIndex,
    showAdjective,
    delayFirstChange,
    delayFirstChangeTimeout,
    delayAsEmpty,
    delayAsEmptyTimeout,
    timeBetween,
    timeBetweenInterval,
  } = toRefs(adjectivesState.value)

  const updateAdjective = () => {
    showAdjective.value = false

    if (currentAdjectiveIndex.value >= adjectives.value.length - 1) {
      currentAdjectiveIndex.value = -1
    }

    currentAdjective.value = adjectives.value[++currentAdjectiveIndex.value]

    delayAsEmptyTimeout.value = setTimeout(
      () => (showAdjective.value = true),
      delayAsEmpty.value
    )
  }

  onActivated(async () => {
    await nextTick(() => {
      currentAdjective.value = adjectives.value[0]
      showAdjective.value = true

      timeBetweenInterval.value = setInterval(
        updateAdjective,
        timeBetween.value
      )

      delayFirstChangeTimeout.value = setTimeout(
        () => timeBetweenInterval.value,
        delayFirstChange.value
      )
    })
  })

  onDeactivated(() => {
    clearTimeout(delayAsEmptyTimeout.value as NodeJS.Timeout)
    clearTimeout(delayFirstChangeTimeout.value as NodeJS.Timeout)
    clearInterval(timeBetweenInterval.value as NodeJS.Timer)
  })

  return {
    adjectives,
    currentAdjective,
    currentAdjectiveIndex,
    showAdjective,
    delayFirstChange,
    delayFirstChangeTimeout,
    delayAsEmpty,
    delayAsEmptyTimeout,
    timeBetween,
    timeBetweenInterval,
    updateAdjective,
  }
}
