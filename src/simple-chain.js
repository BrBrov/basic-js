const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.hasOwnProperty('links')) {
      return this.links.length;
    } else {
      return 0;
    }
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // chainable
    if (!value) {
      switch (value) {
        case null:
          value = null;
          break;
        case 0:
          value = '0';
          break;
        case false:
          value = false;
          break;
        case true:
          value = true;
          break;
        case Infinity:
          value = Infinity;
          break;
        default:
          if (isNaN(value)) {
            value = NaN;
          } else {
            value = '( )';
          }
          break;
      }
    }
    if (this.hasOwnProperty('links')) {
      this.links.push(`( ${value} )`);
    } else {
      this.links = [];
      this.links.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // chainable
    if (typeof position === 'string' || position < 1 || position > this.getLength() - 1 || !Number.isInteger(position)) {
      delete this.links;
      let err = new Error('You can\'t remove incorrect link!');
      err.name = 'Fucking BasicJS';
      throw err;
    }
    this.links.splice((position - 1), 1);
    return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // chainable
    if (this.hasOwnProperty('links')) {
      this.links.reverse();
    } else {
      this.links = [];
    }
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.hasOwnProperty('links')) {
      let result = this.links.join('~~');
      delete this.links;
      return result;
    }else{
      delete this.links;
    }
  }
};

module.exports = {
  chainMaker
};
