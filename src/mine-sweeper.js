const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = [];
  matrix.forEach((row, index, arr)=>{
      let saver = [];
      row.forEach((elem, i)=>{
          let count = 0;
          //up
          if((i - 1) >=0 && (index - 1) >=0 && arr[index - 1][i - 1] === true){
              count++;
          }
          if((index - 1) >=0 && arr[index - 1][i] === true){
              count++;
          }
          if((index - 1) >=0 && arr[index - 1][i + 1] === true){
              count++;
          }
          // middle
          if((i - 1) >=0 && arr[index][i - 1] === true){
              count++;
          }
          if((i + 1) < arr[index].length && arr[index][i + 1] === true){
              count++;
          }
          // down
          if((index + 1) < arr.length && (i - 1) >= 0 && arr[index + 1][i - 1] === true){
              count++;
          }
          if((index + 1)< arr.length && arr[index + 1][i] === true){
              count++;
          }
          if((index + 1)< arr.length && (i + 1)<arr[index].length && arr[index + 1][i + 1] === true){
              count++;
          }
          //default
          saver.push(count);
      }, arr);
      result.push(saver);
  });    
  return result;
}

module.exports = {
  minesweeper
};
