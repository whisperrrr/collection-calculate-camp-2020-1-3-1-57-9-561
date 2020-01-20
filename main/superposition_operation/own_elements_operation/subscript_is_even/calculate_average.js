'use strict';
let compute_average = require('../../../../main/reduce/compute_average.js');

var calculate_average = function(collection){
  return compute_average(choose_even_sub(collection));
};
function choose_even_sub(collection) {
  return collection.filter((ele,index) => index % 2 !== 0);
}
module.exports = calculate_average;
