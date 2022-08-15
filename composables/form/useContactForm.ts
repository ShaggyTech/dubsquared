import type { Ref } from 'vue'
import { titleCase } from '~/utils/string'
import type {
  IContactFormBody,
  VehicleMakes,
  VehicleModels,
  DecodedVehicle,
} from '~/types'

export const useContactForm = ({
  decodedVehicle,
  vehicleMakes,
  vehicleModels,
}: {
  decodedVehicle: Ref<DecodedVehicle>
  vehicleMakes: Ref<VehicleMakes>
  vehicleModels: Ref<VehicleModels>
}) => {
  const { decodeVin, getModelsForMakeYear } = useVehiclesApi()

  const formData = ref<IContactFormBody>({
    nameFirst: '',
    nameLast: '',
    phone: '',
    email: '',
    vehicleVin: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    subject: '',
    message: '',
  })

  const submitted = ref(false)
  const formSubmissionResult = ref()

  const submitHandler = async (event: FormData) => {
    formSubmissionResult.value = await $fetch('/api/submit', {
      method: 'post',
      body: event,
    }).catch((error) => {
      throwError(error)
    })

    submitted.value = true
  }

  watch(
    [() => formData.value.vehicleMake, () => formData.value.vehicleYear],
    async ([make, year], [oldMake, oldYear]) => {
      // reset formData.vehicleModel if (no make || make or year have changed)
      if (!make || make !== oldMake || year !== oldYear) {
        formData.value.vehicleModel = ''
      }

      // get models for selected make and year
      if (make && year) {
        formData.value.vehicleModel = ''

        const results = await getModelsForMakeYear({
          make,
          year,
        })

        //  assign results to vehicleModels
        if (results !== undefined && isRef(results) && results.value) {
          vehicleModels.value[make] = results.value
        }
      }
    }
  )

  watch(
    () => formData.value.vehicleVin,
    async (vin) => {
      // convert vin to uppercase and remove all spaces
      await nextTick(
        () =>
          (formData.value.vehicleVin = vin
            .toLocaleUpperCase()
            .replace(/\s/g, ''))
      )

      // reset decodedVehicle values
      decodedVehicle.value = {
        vin,
        year: '',
        make: '',
        model: '',
      }
      // reset form vehicle values
      formData.value.vehicleYear = ''
      formData.value.vehicleMake = ''
      formData.value.vehicleModel = ''

      // valid vin is exactly 17 characters
      if (vin.length === 17) {
        // decode vin and assign results to decodedVehicle ref
        const results = await decodeVin({ value: vin })

        if (results !== undefined && isRef(results) && results.value) {
          const make = titleCase(results.value.Make || '')
          if (make && !vehicleMakes.value.includes(make)) {
            vehicleMakes.value.push(make)
            vehicleMakes.value.sort((a, b) => a.localeCompare(b))
          }
          decodedVehicle.value = {
            vin: results.value.VIN || '',
            year: results.value.ModelYear || '',
            make: make || '',
            model: results.value.Model || '',
          }
        }
      }
    }
  )

  // populate formData with values from decodedVehicle
  watch(decodedVehicle, async (vehicle) => {
    if (vehicle.year) {
      formData.value.vehicleYear = vehicle.year
    }
    if (vehicle.make) {
      formData.value.vehicleMake = vehicle.make
    }
    await nextTick()
    if (vehicle.model) {
      formData.value.vehicleModel = vehicle.model
    }
  })

  return {
    formData,
    formSubmissionResult,
    submitted,
    submitHandler,
  }
}
