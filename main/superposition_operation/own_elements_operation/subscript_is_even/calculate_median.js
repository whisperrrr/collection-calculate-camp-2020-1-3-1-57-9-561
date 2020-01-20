'use strict';
let compute_median = require('../../../../main/reduce/compute_median.js');

var calculate_median = function(collection){
  return compute_median(choose_even_sub(collection));
};

function choose_even_sub(collection) {
  return collection.filter((ele,index) => index % 2 !== 0);
}
module.exports = calculate_median;
