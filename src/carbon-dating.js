const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let value = undefined;
  if(typeof sampleActivity === 'string'){
    let value = parseFloat(sampleActivity);
  }else{
    return false;
  }  
  if(!value || value < 0 || value > 9999){
    return false;
  }
  let k = Math.LN2/HALF_LIFE_PERIOD;
  let kt = Math.log2(MODERN_ACTIVITY/sampleActivity);
  let age = Math.ceil((kt/k));
  return age;

}

module.exports = {
  dateSample
};
