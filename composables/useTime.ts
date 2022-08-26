// get current time in CT timezone
export const getCurrentTime = (
  timezone?: Intl.DateTimeFormatOptions['timeZone']
) => {
  const date = new Date()

  const time = date.toLocaleTimeString('en-US', {
    timeZone: timezone || 'America/Chicago',
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  })
  const day = date.getDay()
  const hour = parseInt(time.split(':')[0])
  const minute = parseInt(time.split(':')[1])
  const second = parseInt(time.split(':')[2])

  return { time, day, hour, minute, second }
}

export const isNight = () => {
  const { hour } = getCurrentTime()

  return hour <= 7 || hour >= 19
}
