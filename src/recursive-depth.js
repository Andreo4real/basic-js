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
  // constructor() {
  //   this.result = 1
  // }
  calculateDepth(/* arr */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // let arr = arguments[0]
    // for (let i = 0; i < arr.length; i++) {
    //   if (Array.isArray(arr[i])) {
    //     this.result += 1
    //     if (i === arr.length - 1) {
    //       return this.result
    //     }
    //     const flated = arr.flat()
    //     this.calculateDepth(flated)
    //   }
    // }
}
}

module.exports = {
  DepthCalculator
};
