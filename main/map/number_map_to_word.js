'use strict';
var number_map_to_word = function(collection){
  return collection.map(ele => numToLetter(ele));
};
function numToLetter(num) {
  if (num <= 26) {
    return String.fromCharCode(96 + num);
  }
  else {
    let letterNow = String.fromCharCode(97 + (num - 1) % 26);
    return numToLetter(parseInt((num - 1) / 26)) + letterNow;
  }
}
module.exports = number_map_to_word;
