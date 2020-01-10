'use strict';

function collect_all_even(collection) {
  let result = collection.filter(x => x % 2 === 0);
  return result;
}

module.exports = collect_all_even;
