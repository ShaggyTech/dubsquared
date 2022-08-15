import type { IContactFormBody } from '~/types'

export default defineEventHandler(async (event) => {
  // env variables either set in .env file during dev or set in production environment
  const config = useRuntimeConfig()
  const sendgridKey = config.sendgridApiKey.length
    ? config.sendgridApiKey
    : (globalThis as GS).NUXT_SENDGRID_API_KEY

  const sendgridFromEmail = config.sendgridFromEmail.length
    ? config.sendgridFromEmail
    : (globalThis as GS).NUXT_SENDGRID_FROM_EMAIL

  const sendgridFromName = config.sendgridFromName.length
    ? config.sendgridFromName
    : (globalThis as GS).NUXT_SENDGRID_FROM_NAME

  const sendgridToEmail = config.sendgridToEmail.length
    ? config.sendgridToEmail
    : (globalThis as GS).NUXT_SENDGRID_TO_EMAIL

  const sendgridToName = config.sendgridToName.length
    ? config.sendgridToName
    : (globalThis as GS).NUXT_SENDGRID_TO_NAME

  // get event body (form values)
  const body: IContactFormBody = await useBody(event)

  // factory for email html
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
      VIN: ${body.vehicleVin}
      <br />
      <br />
      Message:
      <br />
      ${body.message}
    </div>
  `

  // factory for body that will be posted to sendgrid api
  const getSendgridBody = (body: IContactFormBody, emailHtml: string) => {
    return {
      from: {
        email: sendgridFromEmail,
        name: sendgridFromName,
      },
      personalizations: [
        {
          subject: body.subject,
          to: [{ email: sendgridToEmail, name: sendgridToName }],
          cc: [
            { email: body.email, name: `${body.nameFirst} ${body.nameLast}` },
          ],
        },
      ],
      subject: body.subject,
      content: [
        {
          type: 'text/html',
          value: emailHtml,
        },
      ],
      reply_to_list: [
        {
          email: body.email,
          name: `${body.nameFirst} ${body.nameLast}`,
        },
        {
          email: sendgridToEmail,
          name: sendgridToName,
        },
      ],
    }
  }

  // prepare email html and body for sendgrid api
  const emailHtml = getEmailHtml(body)
  const sendgridBody = getSendgridBody(body, emailHtml)

  // send email
  const response = await $fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'post',
    body: sendgridBody,
    headers: {
      Authorization: `Bearer ${sendgridKey}`,
      'Content-Type': 'application/json',
    },
  })

  return { response }
})
