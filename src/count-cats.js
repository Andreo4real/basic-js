const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(/* matrix */) {
  // throw new NotImplementedError('Not implemented');
  let result = 0
  const array = arguments[0]
  for (i = 0; i < array.length; i++) {
      array[i].forEach(function(item) {
        if (item === "^^") {
          result += 1
        }
      })

  }
  return result
}


module.exports = {
  countCats
};
