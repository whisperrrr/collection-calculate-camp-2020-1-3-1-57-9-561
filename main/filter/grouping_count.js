'use strict';

function grouping_count(collection) {
  return collection.reduce((acc,cur) => {
    (cur in acc)? acc[cur] += 1: acc[cur] = 1;
    return acc;
  },{})
}

module.exports = grouping_count;
