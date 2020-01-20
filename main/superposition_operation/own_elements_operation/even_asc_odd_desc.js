'use strict';
var even_asc_odd_desc = function(collection){
  let evenArr = [];
  let unEvenArr = [];
  let arrLength = collection.length;
  collection.sort((a,b) => a - b);
  for (let i = 0; i < arrLength; i++) {
    if (collection[i] % 2 === 0) {
      evenArr.push(collection[i]);
    } else {
      unEvenArr.unshift(collection[i]);
    }
  }
  return [...evenArr,...unEvenArr];
};
module.exports = even_asc_odd_desc;