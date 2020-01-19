'use strict';

function compute_average(collection) {
  let sumAll = collection.reduce((acc,cur) => acc + cur);
  return sumAll / collection.length;
}

module.exports = compute_average;

