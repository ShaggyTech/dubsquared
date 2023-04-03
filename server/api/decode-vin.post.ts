import type { DecodeVinValuesResults, DecodeVinValuesResponse } from '~/types'

export default defineEventHandler(
  async (event): Promise<DecodeVinValuesResults | undefined> => {
    const { vin }: { vin: string } = await readBody(event)

    const response: DecodeVinValuesResponse =
      await $fetch<DecodeVinValuesResponse>(
        `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json`
      ).catch((error) => error)

    // if any relevant data is returned from nhtsa api, return the Results object
    if (response.Count) return response.Results[0]
  }
)
