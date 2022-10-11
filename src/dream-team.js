const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let codeName = [];
  if(!Array.isArray(members) || members.length === 0){
    return false;
  }
  for (let word of members) {
    if (typeof word === 'string' && word.search(/[0-9]/g) === -1) {
    word = word.trimStart().toUpperCase();
    codeName.push(word.slice(0,1));       
    }
  }
  codeName.sort();
  return codeName.join('');
}

module.exports = {
  createDreamTeam
};
