'use strict';

function choose_even(collection) {
  return collection.filter(ele => ele % 2 === 0);
}

module.exports = choose_even;
