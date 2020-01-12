'use strict';

function get_integer_interval(number_a, number_b) {
    let interval = number_a - number_b > 0 ? -1 : 1;
    let result = [];
    while (number_a !== number_b) {
      result.push(number_a);
      number_a += interval;
    }
    result.push(number_b);
    return result;
  }
  


module.exports = get_integer_interval;

