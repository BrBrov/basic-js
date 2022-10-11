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
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let count = 0;
  if(matrix.length === 0){
    return count;
  }
  matrix = matrix.flat(1);
  matrix.find(e=>{
    if(e === '^^'){
      count++;
    }
  })
  return count;
}

module.exports = {
  countCats
};
