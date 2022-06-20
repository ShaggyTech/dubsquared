import { isValidVin } from '~/utils/isValidVin'

export const useVehicles = () => {
  const validateVIN = function ({ value }: { value: string }) {
    return isValidVin(value)
  }
  const maxVehicleYear = ref<number>(new Date().getFullYear())
  const minVehicleYear = ref<number>(2004)
  const vehicleMakes = ref<string[]>(['Audi', 'Volkswagen'])
  const vehicleModels = ref({
    audi: [
      'A3',
      'A4',
      'A5',
      'A6',
      'A7',
      'A8',
      'Allroad',
      'Q3',
      'Q4',
      'Q5',
      'Q7',
      'Q8',
      'R8',
      'RS Q8',
      'RS3',
      'RS4',
      'RS5',
      'RS6',
      'RS7',
      'S3',
      'S4',
      'S5',
      'S6',
      'S7',
      'S8',
      'SQ5',
      'SQ7',
      'SQ8',
      'TT',
      'TTRS',
      'TTS',
      'E-tron',
      'Other',
    ],
    volkswagen: [
      'Golf R32',
      'Golf R',
      '337/20th',
      'Alltrack',
      'Arteon',
      'Atlas',
      'Atlas Cross Sport',
      'Beetle (12+)',
      'CC',
      'EOS',
      'Golf',
      'Golf Sportwagen',
      'GTI',
      'Rabbit',
      'ID.4',
      'Jetta',
      'New Beetle (98-10)',
      'Passat',
      'Phaeton',
      'Taos',
      'Tiguan',
      'Touareg',
      'Other',
    ],
  })

  const vehicleYears: number[] = []
  for (let i = maxVehicleYear.value; i >= 1972; i--) {
    vehicleYears.push(i)
  }

  return {
    validateVIN,
    minVehicleYear,
    maxVehicleYear,
    vehicleMakes,
    vehicleModels,
    vehicleYears,
  }
}
