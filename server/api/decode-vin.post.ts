export default defineEventHandler(async (event) => {
  const { vin }: { vin: string } = await useBody(event)
  const { Results }: any = await $fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json`
  ).catch((error) => {
    return { error: 'Oops... Something went wrong ' + error }
  })
  return Results[0]
})
