import type {
  UseHeroAdjectivesState,
  UseHeroAdjectivesOptions,
} from './index.d'

export const useHeroAdjectives = (
  options: UseHeroAdjectivesOptions = {
    adjectives: [''],
  }
) => {
  const adjectivesState = useState<UseHeroAdjectivesState>(
    'useHeroAdjectivesState',
    () =>
      reactive({
        adjectives: options.adjectives,
        currentAdjective: '',
        currentAdjectiveIndex: 0,
        showAdjective: false,
        delayFirstChange: 7000,
        delayBetween: 800,
        timeBetween: 7000,
        delayFirstChangeTimeout: null,
        delayBetweenTimeout: null,
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
    delayBetween,
    delayBetweenTimeout,
    timeBetween,
    timeBetweenInterval,
  } = toRefs(adjectivesState.value)

  const updateAdjective = () => {
    showAdjective.value = false

    if (currentAdjectiveIndex.value >= adjectives.value.length - 1) {
      currentAdjectiveIndex.value = -1
    }

    currentAdjective.value = adjectives.value[++currentAdjectiveIndex.value]

    delayBetweenTimeout.value = setTimeout(
      () => (showAdjective.value = true),
      delayBetween.value
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
    clearTimeout(delayBetweenTimeout.value as NodeJS.Timeout)
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
    delayBetween,
    delayBetweenTimeout,
    timeBetween,
    timeBetweenInterval,
    updateAdjective,
  }
}
