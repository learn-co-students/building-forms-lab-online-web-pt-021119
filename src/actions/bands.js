export const addBand = band => {
  console.log(band)
  return {
    type: 'ADD_BAND',
    band
  }
}
