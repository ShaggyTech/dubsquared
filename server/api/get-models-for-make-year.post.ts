import { GetModelsForMakeYear } from '@shaggytools/nhtsa-api-wrapper'

export default defineEventHandler(
  async (event): Promise<string[] | undefined> => {
    const { make, year }: { make: string; year: string } = await readBody(event)

    const response = await GetModelsForMakeYear({
      make,
      modelYear: year,
    })

    // if any relevant data is returned, return the array of model ames sorted alphabetically
    if (response.Count)
      return response.Results.map((value) => value.Model_Name).sort((a, b) =>
        a.localeCompare(b)
      )
  }
)
