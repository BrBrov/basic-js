const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let array = [].concat(arr);
  let newArr = [];
  for (let index = 0; index < array.length; index++) {
    let elem = array[index];
    switch (elem) {
      case '--discard-next':
        array[index + 1] = null;
        break;
      case '--discard-prev':
        if(array[index - 1] !== null && array[index - 1] !== undefined){
          newArr.pop();
        }        
        break;
      case '--double-next':
        if(array[index + 1] !== 'string' && array[index + 1] !== undefined){
          newArr.push(array[index + 1]);
        }        
        break;
      case '--double-prev':
        if((array[index - 1]) !== null && (array[index - 1]) !== undefined){
          newArr.push(array[index - 1]);
        }        
        break;
        case null:
          break;
      default:
        newArr.push(array[index]);
        break;
    }    
  }
  return newArr;
}


module.exports = {
  transform
};
