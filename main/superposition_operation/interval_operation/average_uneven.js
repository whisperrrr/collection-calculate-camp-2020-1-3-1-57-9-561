'use strict';
var amount_even = require("../../../main/superposition_operation/interval_operation/amount_even.js");
var compute_elements_sum = require('../../../main/reduce/compute_sum.js');

function average_uneven(collection) {
  return compute_elements_sum(collection) - amount_even(collection);
}

module.exports = average_uneven;
