const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const seasons = ['summer', 'spring', 'autumn', 'winter', 'Unable to determine the time of year!']
  if (!date) {
    return seasons[4]
  }

  if (date.hasOwnProperty('getHours') || date.hasOwnProperty('toString')) {
    throw new Error('Invalid date!')
  }


  
  if (date instanceof Date) {
    if (typeof(date.getMonth == 'function') && date.getMonth){
      const month = date.getMonth()
      if (month === 5 || month === 6 || month === 7){
        return seasons[0]
      }
      if (month === 2 || month === 3 || month === 4){
        return seasons[1]
      }
      if (month === 8 || month === 9 || month === 10){
        return seasons[2]
      }
      if (month === 11 || month === 0 || month === 1){
        return seasons[3]
      }
      else {
        throw new Error('Invalid date!')
      }
    }
  }
  else {
    throw new Error('Invalid date!')
  }
}

module.exports = {
  getSeason
};
