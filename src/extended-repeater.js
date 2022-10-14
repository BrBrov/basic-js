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
 function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!str || typeof str !== 'string') {
    str = `${str}`;
  }
  if(options.hasOwnProperty(`addition`)){
    let addition = options.addition
    options.addition = `${addition}`;
  }
  if (!options.hasOwnProperty('separator')) {
    options.separator = `+`;
  }
  if (!options.additionSeparator) {
    options.additionSeparator = `|`;
  }
  let StringAddition = '';
  if(options.hasOwnProperty(`addition`)) {
    let preStringAddition = `${options.addition}${options.additionSeparator}`;
    if (options.additionRepeatTimes) {
      for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
        StringAddition += preStringAddition;
      }
      StringAddition += `${options.addition}`;
    }else{
      StringAddition = `${options.addition}`;
    }
  }
  let result = '';
  let preResult = '' 
  if(options.hasOwnProperty(`repeatTimes`)) {
    preResult = `${str}${StringAddition}${options.separator}`;
    for (let i = 0; i < options.repeatTimes - 1; i++) {
      result += preResult;
    }
    result += `${str}${StringAddition}`;
  }else{
    result = `${str}` + StringAddition;
  }
  return result;
}

module.exports = {
  repeater
};
