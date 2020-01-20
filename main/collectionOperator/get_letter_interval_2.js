'use strict';
var get_integer_interval = require('../../main/collectionOperator/get_integer_interval.js');
var number_map_to_word = require('../../main/map/number_map_to_word.js');

function get_letter_interval_2(number_a, number_b) {
  return number_map_to_word(get_integer_interval(number_a,number_b));
}

module.exports = get_letter_interval_2;

