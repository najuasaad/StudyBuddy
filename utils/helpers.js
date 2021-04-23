module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_time: (time) => {
    return time.toLocaleTimeString("en-US",options)
  }
}