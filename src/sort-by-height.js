const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(/* arr */) {
  const array = arguments[0]
  let result = []
  let values = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] === -1) {
      result[i] = array[i]
    }
    else {
      result[i] = 'temp'
      values.push(array[i])
    }
  }
  console.log(values)
  for (let i = 0; i < result.length; i++) {
    if (result[i] != -1) {
      let m = Math.min(...values)
      result[i] = m
      values.splice(values.indexOf(m), 1)
    } 
  }
  return result
}

module.exports = {
  sortByHeight
};
