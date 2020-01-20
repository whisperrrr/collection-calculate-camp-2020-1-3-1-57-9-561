'use strict';
var choose_even = require("../../../main/filter/choose_even.js");
var compute_elements_sum = require('../../../main/reduce/compute_sum.js');

function amount_even(collection) {
  return compute_elements_sum(choose_even(collection));
}

module.exports = amount_even;
