'use strict';

function spilt_to_zero(number, interval) {
  let result = [number];
  while (number > 0) {
    number = Math.round((number - interval) * 10) / 10;
    result.push(number);
  }
  return result;
}

module.exports = spilt_to_zero;
