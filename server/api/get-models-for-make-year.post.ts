import type { GetModelsForMakeYearResponse } from '~/types/nhtsa'

export default defineEventHandler(
  async (event): Promise<string[] | undefined> => {
    const { make, year }: { make: string; year: string } = await useBody(event)
    const response: GetModelsForMakeYearResponse =
      await $fetch<GetModelsForMakeYearResponse>(
        `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${make}/modelyear/${year}?format=json`
      ).catch((error) => error)

    // if any relevant data is returned, return the array of model ames sorted alphabetically
    if (response.Count)
      return response.Results.map((value) => value.Model_Name).sort((a, b) =>
        a.localeCompare(b)
      )
  }
)
