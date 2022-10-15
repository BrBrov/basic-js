const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = {};
  let arr = [];
  domains.forEach(el=>{
      let a = [...el];
      for(let i = a.length - 1; i >=0; i--){
          if(a[i]=== '.' || i === 0){
              arr.push(el.slice(i, el.length));
          }
      }
  })
  arr = arr.map(e=>{
      e = e.split('.');
      e.reverse();
      e = e.join('.')
      e = '.' + e;
      if(e.endsWith('.')){
          e = e.slice(0, e.length - 1);
      }
      return e;
  })
  // log(arr);  
  arr.forEach(elem=>{
      if(result.hasOwnProperty(elem)){
          result[elem]++;
      }else{
          result[elem] = 1;
      }
  })    
  return result;
}

module.exports = {
  getDNSStats
};
