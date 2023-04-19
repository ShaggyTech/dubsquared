import { DecodeVinValues } from '@shaggytools/nhtsa-api-wrapper'

import type { DecodeVinValuesResults } from '@shaggytools/nhtsa-api-wrapper'

export default defineEventHandler(
  async (event): Promise<DecodeVinValuesResults | undefined> => {
    const { vin }: { vin: string } = await readBody(event)

    const response = await DecodeVinValues(vin)

    // if any relevant data is returned from nhtsa api, return the Results object
    if (response.Count) return response.Results[0]
  }
)
