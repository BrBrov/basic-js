const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(this.hasOwnProperty('links')){
      return this.links.length;
    }else{
      return 0;
    }    
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // chainable
    if(!value){
      value = '( )';
    }  
    if(this.hasOwnProperty('links')){
      this.links.push(`( ${value} )`);
    }else{
      this.links = [];
      this.links.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // chainable
    if(this.getLength() < position){
      throw new Error('You can\'t remove incorrect link!');
    }
    this.links.splice((position - 1), 1);
    return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // chainable
    this.links.reverse();
    return this;    
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.links.join('~~');
  }
};

module.exports = {
  chainMaker
};
