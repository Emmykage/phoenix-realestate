const currentDate = (date) => new Date(date)

const formattedDate = (value) => currentDate(value).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

export { formattedDate }