const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let max = 0;
  let newNumber = [...(n.toString())];
  for(let i = 0; i < newNumber.length; i++){
      let arr = [].concat(newNumber);
      arr.splice(i, 1);
      let number = Number(arr.join(''));
      max = (number > max) ? number : max;
  }
  return max;
}

module.exports = {
  deleteDigit
};
