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

  const getEmailHtml = (body: IContactFormBody) => `
    <head>
    <style>
    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }
    
    td, th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }
    
    tr:nth-child(even) {
      background-color: #dddddd;
    }
    </style>
    </head>
    <body>
    
    <h2>Contact Form Submission</h2>
    
    <div>
      From:
      <br />
      First Name: ${body.nameFirst}
      <br />
      Last Name: ${body.nameLast}
      <br />
      Phone: ${body.phone}
      <br />
      Email: ${body.email}
      <br />
      <br />
      Vehicle: ${body.vehicleYear} ${body.vehicleMake} ${body.vehicleModel}
      <br />
      VIN: ${body.vehicleVIN}
      <br />
      <br />
      Message:
      <br />
      ${body.message}
    </div>
  `

  const getSendgridBody = (body: IContactFormBody, emailHtml: string) => {
    return {
      from: {
        email: 'contactform@dubsquared.com',
        name: 'dubsquared.com Contact Form',
      },
      personalizations: [
        {
          subject: body.subject,
          to: [{ email: 'info@dubsquared.com', name: 'Dubsquared Team' }],
        },
      ],
      subject: body.subject,
      content: [
        {
          type: 'text/html',
          value: emailHtml,
        },
      ],
      reply_to: {
        email: body.email,
        name: `${body.nameFirst} ${body.nameLast}`,
      },
    }
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
    getEmailHtml,
    getSendgridBody,
  }
}
