export type VehicleModels = Record<string, string[]>

export type VehicleMakes = string[]

export type DecodedVehicle = {
  vin: string | undefined
  year: string | undefined
  make: string | undefined
  model: string | undefined
}
