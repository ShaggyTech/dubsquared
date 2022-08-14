import type { DecodeVinValuesResults, DecodeVinValuesResponse } from '~/types'

export default defineEventHandler(
  async (event): Promise<DecodeVinValuesResults | undefined> => {
    const { vin }: { vin: string } = await useBody(event)
    const response = await $fetch<DecodeVinValuesResponse>(
      `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json`
    ).catch((error) => error)
    if (response.Count) return response.Results[0]
  }
)
