'use strict';

let compute_elements_sum = require('../../../main/reduce/compute_sum.js');

function average_uneven(collection) {
  return compute_elements_sum(choose_uneven(collection))/choose_uneven(collection).length;
}
function choose_uneven(collection) {
  return collection.filter(ele => ele % 2 !== 0);
}

module.exports = average_uneven;
