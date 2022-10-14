const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(param) {
    if (param === false) {
      this.flag = false;
    } else {
      this.flag = true;
    }
    this.alfabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  }
  encrypt(str, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here    
    this._check(str, key);
    str = str.toUpperCase();
    key = key.toUpperCase();
    str = [...str];
    let processingStr = [].concat(str);
    str = str.filter(e => {
      let reg = new RegExp(/[A-Z]/g);
      if (reg.test(e)) {
        return e;
      }
    })
    let srtCtrlLength = str.length;
    key = [...key];
    let chiperKey = [];
    if (key.length > str.length) {
      [key, str] = [str, key];
    }
    let mod = str.length % key.length;
    let count = (str.length - mod) / key.length;
    chiperKey.push(key);
    for (let i = 0; i < count - 1; i++) {
      chiperKey.push(key);
    }
    for (let i = 0; i < mod; i++) {
      chiperKey.push(key[i]);
    }
    chiperKey = chiperKey.join('').replace(/,/g, '');
    key = [...chiperKey];
    let chiper = [];
    for (let index = 0; index < str.length; index++) {
      let openLetterStr = this.alfabet.indexOf(str[index]);
      let openLetterKey = this.alfabet.indexOf(key[index]);
      let chiperLetter = (openLetterKey + openLetterStr) % 26;
      chiper.push(this.alfabet[chiperLetter]);
    }
    if (srtCtrlLength < chiper.length) {
      chiper = chiper.slice(0, srtCtrlLength);
    }
    processingStr.forEach((letter, index) => {
      let reg = new RegExp(/[A-Z]/);
      if (!reg.test(letter)) {
        chiper.splice(index, 0, letter);
      }
    })
    if (this.flag) {
      return chiper.join('');
    } else {
      chiper.reverse();
      return chiper.join('');
    }

  }
  decrypt(str, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this._check(str, key);
    str = str.toUpperCase();
    key = key.toUpperCase();
    str = [...str];
    let processingStr = [].concat(str);
    str = str.filter(e => {
      let reg = new RegExp(/[A-Z]/g);
      if (reg.test(e)) {
        return e;
      }
    })
    let strCtrlLength = str.length;
    key = [...key];
    let chiperKey = [];
    let mod = str.length % key.length;
    let count = (str.length - mod) / key.length;
    chiperKey.push(key);
    for (let i = 0; i < count - 1; i++) {
      chiperKey.push(key);
    }
    for (let i = 0; i < mod; i++) {
      chiperKey.push(key[i]);
    }
    chiperKey = chiperKey.join('').replace(/,/g, '');
    key = [...chiperKey];
    let decode = []
    for (let index = 0; index < str.length; index++) {
      let chipherLetter = this.alfabet.indexOf(str[index]);
      let keyLetter = this.alfabet.indexOf(key[index]);
      let openLetter = (chipherLetter - keyLetter) % 26;
      if (openLetter < 0) {
        openLetter = 26 + openLetter;
      }
      decode.push(this.alfabet[openLetter]);
    }
    if (strCtrlLength < decode.length) {
      decode = decode.slice(0, strCtrlLength);
    }
    processingStr.forEach((letter, index) => {
      let reg = new RegExp(/[A-Z]/);
      if (!reg.test(letter)) {
        decode.splice(index, 0, letter);
      }
    })

    if (this.flag) {
      return decode.join('');
    } else {
      decode.reverse();
      return decode.join('');
    }
  }
  _check(str, key) {
    if (!str || !key) {
      let err = new Error('Incorrect arguments!');
      err.name = 'You are a moron!';
      throw err;
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
