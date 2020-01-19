'use strict';
let choose_even = require("../../main/filter/choose_even.js");
function find_last_even(collection) {
  let evenArr = choose_even(collection);
  return evenArr[evenArr.length - 1];
}

module.exports = find_last_even;
