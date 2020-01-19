'use strict';
let compute_median = require('../../main/reduce/compute_median.js');

function compute_chain_median(collection) {
  let arr = collection.split("->").map(ele => parseInt(ele));
  return compute_median(arr);
}
var chain = '1->4->6->2->3->10->9->8->11->20->19->30';
compute_chain_median(chain)
module.exports = compute_chain_median;
