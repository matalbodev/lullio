export const convertDateToReadableTime = (date: Date) => {
  const [hours, minutes]  = date.toLocaleTimeString('fr-FR').split(':')

  return `${hours}:${minutes}`
}