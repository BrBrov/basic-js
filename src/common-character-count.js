const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  s1 = [...s1];
  s2 = [...s2];
  let count1 = {};
  let count2 = {};
  s1.forEach(e =>{
    if(count1.hasOwnProperty(`${e}`)){
      count1[`${e}`]++;
    }else{
      count1[`${e}`] = 1;
    }
  })
  s2.forEach(e =>{
    if(count2.hasOwnProperty(`${e}`)){
      count2[`${e}`]++;
    }else{
      count2[`${e}`] = 1;
    }      
  }) 
  let summery = 0;
  for(const key in count1){
      if(count2.hasOwnProperty(key)){
          summery += (count2[key] > count1[key]) ? (count1[key]) : (count2[key]);
      }
  }
  return summery;
}

module.exports = {
  getCommonCharacterCount
};
