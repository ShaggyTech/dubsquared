import type { VehicleModels } from '~/types'

export const useVehicles = () => {
  const maxVehicleYear = ref<number>(new Date().getFullYear() + 1)
  const minVehicleYear = ref<number>(2004)

  const vehicleYears = ref<string[]>([])
  for (let i = maxVehicleYear.value; i >= 1972; i--) {
    vehicleYears.value.push(i.toString())
  }

  const vehicleMakes = ref<string[]>(['Audi', 'Volkswagen'])
  const vehicleModels = ref<VehicleModels>({
    Audi: [
      'A3',
      'A4',
      'A4 allroad',
      'A5',
      'A6',
      'A6 allroad',
      'A7',
      'A8',
      'A8 e',
      'A8 L',
      'allroad',
      'Cabriolet',
      'e-tron',
      'e-tron Sportback',
      'e-tron GT',
      'Q3',
      'Q4',
      'Q5',
      'Q5 e',
      'Q7',
      'Q8',
      'R8',
      'RS3',
      'RS4',
      'RS5',
      'RS6',
      'RS7',
      'RS Q8',
      'RS e-tron GT',
      'S3',
      'S4',
      'S5',
      'S6',
      'S7',
      'S8',
      'SQ5',
      'SQ7',
      'SQ8',
      'TT RS',
      'TTS',
      'Other',
    ],
    Volkswagen: [
      'Arteon',
      'Arteon 4Motion',
      'Atlas',
      'Atlas 4Motion',
      'Atlas Cross Sport',
      'Atlas Cross Sport 4Motion',
      'Beetle',
      'Corrado',
      'CC',
      'e-Golf',
      'Eos',
      'Golf',
      'Golf Alltrack',
      'Golf GTI',
      'Golf R',
      'Golf SportWagen',
      'GTI',
      'Rabbit',
      'ID.4',
      'Jetta',
      'Jetta GLI',
      'Jetta Wagon',
      'Passat',
      'Phaeton',
      'R32',
      'Routan',
      'Taos',
      'Taos 4Motion',
      'Tiguan',
      'Tiguan 4motion',
      'Tiguan Limited',
      'Touareg',
      'Other',
    ],
  })

  return {
    minVehicleYear,
    maxVehicleYear,
    vehicleMakes,
    vehicleModels,
    vehicleYears,
  }
}
