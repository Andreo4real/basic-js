const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/* str, options */) {
  let str = arguments[0]
  const options = arguments[1]
  let strAddition
  if (!options.hasOwnProperty('separator')) {
    options.separator = '+'
  }
  if (!options.hasOwnProperty('repeatTimes')) {
    options.repeatTimes = 1
  }
  if (!options.hasOwnProperty('additionSeparator')) {
    options.additionSeparator = '|'
  }
  if (typeof(options.addition) == 'object' && typeof(str) == 'object' && !options.hasOwnProperty('additionRepeatTimes')) {
    options.addition = 'STRING_OR_DEFAULT'
  }

  if (options.hasOwnProperty('addition') && options.hasOwnProperty('additionRepeatTimes') && options.hasOwnProperty('additionSeparator')) {
    let temp = options.addition + options.additionSeparator
    strAddition = temp.repeat(options.additionRepeatTimes).slice(0, -options.additionSeparator.length)
  } else {
      if (options.hasOwnProperty('addition') && options.hasOwnProperty('additionRepeatTimes')) {
        strAddition = options.addition.repeat(options.additionRepeatTimes)
      } 
          if (options.hasOwnProperty('addition') && !options.hasOwnProperty('additionRepeatTimes'))  {
            strAddition = options.addition
          }
        }
  

  if (typeof(strAddition) == 'string') {
     str = str + strAddition + options.separator
    } else {
      str = str + options.separator
    }
  let result = str.repeat(options.repeatTimes).slice(0, -options.separator.length)

  return result
}

module.exports = {
  repeater
};
