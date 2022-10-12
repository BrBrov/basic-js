const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  try{
    date.getTime();
    date.getDate();
    date.toJSON();
    date.toISOString();
    date.getTimezoneOffset();
  }catch(err){
    throw new Error('Invalid date!');
  }    
  if (!(date instanceof Date) || isNaN(date.getMonth() || Date.length !== 7)) {
    let err = new Error('Invalid date!');
    err.name = 'Unknown Date';
    throw err
  } else { 
    if (date.getMonth() < 2 || date.getMonth() == 11) {
      return 'winter';
    } else if (date.getMonth() >= 2 && date.getMonth() < 5) {
      return 'spring';
    } else if (date.getMonth() >= 5 && date.getMonth() < 8) {
      return 'summer';
    } else {
      return 'fall';
    }
  }
}

module.exports = {
  getSeason
};
