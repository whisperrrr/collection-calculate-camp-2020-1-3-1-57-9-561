'use strict';
let compute_average = require('../../../main/reduce/compute_average.js');

function average_to_letter(collection) {
  return numToLetter(Math.ceil(compute_average(collection)));
}
function numToLetter(num) {
  if (num <= 26) {
    return String.fromCharCode(96 + num);
  }
  else {
    let letterNow = String.fromCharCode(97 + (num - 1) % 26);
    return numToLetter(parseInt((num - 1) / 26)) + letterNow;
  }
}
module.exports = average_to_letter;

