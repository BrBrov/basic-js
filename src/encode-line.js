const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = [];
  let count = 0;
  let elem = '';
  [...str].forEach((e, i, arr) => {
      if(arr[i + 1] !== e){            
          if(count !== 0){
              count++;
              result.push(`${count}${e}`);
              count = 0;
          }else{
              result.push(e);
          }
          
      }else{
          count++;
      }
  });
  return result.join('');
}

module.exports = {
  encodeLine
};
