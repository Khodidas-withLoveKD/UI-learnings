export default {
  modifyDate (dateFields) {
    console.log('BEFORE this.datdateFieldses = ', dateFields)
    dateFields.forEach(function (element, index, array) {
      // array[index].value = array[index].value.toLocaleString('default', { month: 'long' })
      console.log(' array[index].value:', array[index].value.toLocaleString('default', { month: 'long' }))
    })
    console.log('afterwards this.dateFields = ', dateFields)
  }
}
