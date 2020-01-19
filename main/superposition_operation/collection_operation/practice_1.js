'use strict';

var compute_elements_sum = require('../../../main/reduce/compute_sum.js');
function hybrid_operation(collection) {
  return compute_elements_sum(collection.map(ele => ele * 3 + 2));
}

module.exports = hybrid_operation;

