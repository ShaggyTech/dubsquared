import type { IContactFormBody } from '~/types'

export const useContactForm = () => {
  const submitted = ref(false)
  const formData = reactive<IContactFormBody>({
    nameFirst: '',
    nameLast: '',
    phone: '',
    email: '',
    vehicleVIN: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    subject: '',
    message: '',
  })
  const formDataRef = toRefs(formData)
  const formSubmissionResult = ref()
  const submitHandler = async (event: FormData) => {
    formSubmissionResult.value = await $fetch('/api/submit', {
      method: 'post',
      body: event,
    })

    submitted.value = true
  }

  watch(
    () => formDataRef.vehicleMake.value,
    (newInput, oldInput) => {
      if (newInput !== oldInput) formDataRef.vehicleModel.value = ''
    }
  )
  watch(
    () => formDataRef.vehicleVIN.value,
    (newInput, oldInput) => {
      if (newInput && newInput.length && newInput !== oldInput)
        formDataRef.vehicleVIN.value = newInput.trim()
    }
  )

  return {
    submitted,
    formData,
    formDataRef,
    formSubmissionResult,
    submitHandler,
  }
}
