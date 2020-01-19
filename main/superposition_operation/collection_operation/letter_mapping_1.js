'use strict';
let choose_even = require("../../../main/filter/choose_even.js");
let number_map_to_word = require('../../../main/map/number_map_to_word.js');
function even_to_letter(collection) {
  return number_map_to_word(choose_even(collection));
}

module.exports = even_to_letter;
