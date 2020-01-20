'use strict';
var compute_median = require('../../../main/reduce/compute_median.js');

function median_to_letter(collection) {
  return numToLetter(Math.ceil(compute_median(collection)));
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
module.exports = median_to_letter;
