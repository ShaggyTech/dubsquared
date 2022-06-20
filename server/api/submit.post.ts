import type { IContactFormBody } from '~/types'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const sendgridKey = config.sendgridApiKey.length
    ? config.sendgridApiKey
    : (globalThis as GS).NUXT_SENDGRID_API_KEY

  const body: IContactFormBody = await useBody(event)
  const { getEmailHtml, getSendgridBody } = useContactForm()
  const emailHtml = getEmailHtml(body)
  const sendgridBody = getSendgridBody(body, emailHtml)

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
