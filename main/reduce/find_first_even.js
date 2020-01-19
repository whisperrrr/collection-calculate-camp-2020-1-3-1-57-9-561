'use strict';
let choose_even = require("../../main/filter/choose_even.js");
function find_first_even(collection) {
  let evenArr = choose_even(collection);
  return evenArr[0];
}

module.exports = find_first_even;

