'use strict';
var compute_elements_sum = require('../../../main/reduce/compute_sum.js');
function hybrid_operation_to_uneven(collection) {
  let arrNew = choose_uneven(collection).map(ele => ele * 3 + 5);
  return compute_elements_sum(arrNew);
}
function choose_uneven(collection) {
  return collection.filter(ele => ele % 2 !== 0);
}
module.exports = hybrid_operation_to_uneven;

