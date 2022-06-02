export interface UseHeroAdjectivesState {
  adjectives: string[]
  currentAdjective: string
  currentAdjectiveIndex: number
  showAdjective: boolean
  delayFirstChange: number | undefined
  delayBetween: number | undefined
  timeBetween: number | undefined
  delayFirstChangeTimeout: NodeJS.Timeout | null
  delayBetweenTimeout: NodeJS.Timeout | null
  timeBetweenInterval: NodeJS.Timer | null
}

export interface UseHeroAdjectivesOptions {
  adjectives: string[]
}
