// get current time in CT timezone
export const getCurrentTime = () => {
  const date = new Date()

  const time = date.toLocaleTimeString('en-US', {
    timeZone: 'America/Chicago',
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
