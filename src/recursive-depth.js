const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(/* array */) {
    const array = arguments[0]
    let result = 1;
    (function calc(array, depth)  {
      if (!depth) {
        depth = 1
      }
      for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            depth += 1
            if (i = array[i].length - 1 && result < depth) {
              result = depth
              depth = 1
            }
            calc(array[i], depth)
          }
      }
    })(array) 
    return result
}
}

module.exports = {
  DepthCalculator
};
