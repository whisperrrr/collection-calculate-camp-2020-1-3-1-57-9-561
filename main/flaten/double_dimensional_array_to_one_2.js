'use strict';

function double_to_one(collection) {
  return [...new Set(collection.flat(Infinity))];
}

module.exports = double_to_one;
