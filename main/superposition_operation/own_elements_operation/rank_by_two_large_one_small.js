'use strict';
let rank_desc = require('../../../main/map/rank_desc.js');

function rank_by_two_large_one_small(collection){
  let sortedArr = rank_desc(collection);
  for (let i = 0, arrLen = sortedArr.length ;i < arrLen - 3; i += 3) {
    [sortedArr[i],sortedArr[i+1],sortedArr[i+2]] = [sortedArr[i+1],sortedArr[i+2],sortedArr[i]];
  }
  return sortedArr;
}
module.exports = rank_by_two_large_one_small;
