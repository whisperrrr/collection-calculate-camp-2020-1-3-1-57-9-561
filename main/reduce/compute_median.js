'use strict';
let rank_desc = require('../../main/map/rank_asc.js');

function compute_median(collection) {
  let arrLen = collection.length;
  let sortedArr = rank_desc(collection);
  if (arrLen % 2 === 0) {
    return (sortedArr[arrLen / 2 - 1] + sortedArr[arrLen / 2]) / 2;
  }
  else {
    return sortedArr[(arrLen - 1) / 2];
  }
}
var collection = [1, 1, 1, 2, 3];
compute_median(collection)
module.exports = compute_median;


