import type { IContactFormBody } from '~/types'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const sendgridKey = config.sendgridApiKey.length
    ? config.sendgridApiKey
    : (globalThis as GS).NUXT_SENDGRID_API_KEY

  const body: IContactFormBody = await useBody(event)

  const emailBody = `
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

  const sendgridBody = {
    from: {
      email: 'contactform@dubsquared.com',
      name: 'dubsquared.com Contact Form',
    },
    personalizations: [
      {
        subject: body.subject,
        to: [{ email: 'brandon@dubsquared.com', name: 'Dubsquared Team' }],
      },
    ],
    subject: body.subject,
    content: [
      {
        type: 'text/html',
        value: emailBody,
      },
    ],
    reply_to: {
      email: body.email,
      name: `${body.nameFirst} ${body.nameLast}`,
    },
  }

  const response = await $fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'post',
    body: sendgridBody,
    headers: {
      Authorization: `Bearer ${sendgridKey}`,
      'Content-Type': 'application/json',
    },
  }).catch((error) => {
    return { error: 'Oops... Something went wrong ' + error }
  })

  return { response }
})
