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
 function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let a = arr.filter(e=>{
      return e !== -1;
  })
  a.sort((a,b)=>{return a-b})
  arr.forEach((e, i) => {
      if(e === -1){
          a.splice(i, 0, e);
      }
  });
  return a;
}

module.exports = {
  sortByHeight
};
