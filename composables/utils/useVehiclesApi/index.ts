import { isValidVin as _isValidVin } from '~/utils/isValidVin'

export const useVehiclesApi = () => {
  const isValidVin = ({ value }: { value: string }) => _isValidVin(value)

  // decode VIN
  const decodeVin = async ({ value }: { value: string }) => {
    if (!isValidVin({ value })) return

    const { data } = await useFetch('/api/decode-vin', {
      method: 'post',
      body: { vin: value },
      key: value,
    })

    if (data.value) {
      return data
    }
  }

  const getModelsForMakeYear = async ({
    make,
    year,
  }: {
    make: string
    year: string
  }) => {
    if (!make || !year) return

    const { data } = await useFetch('/api/get-models-for-make-year', {
      method: 'post',
      body: { make, year },
      key: `${make}-${year}`,
    })

    if (data.value) {
      return data
    }
  }

  return {
    decodeVin,
    getModelsForMakeYear,
    isValidVin,
  }
}
