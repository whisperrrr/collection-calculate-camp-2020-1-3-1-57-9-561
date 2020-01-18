'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(eleA => {
    for (let i of collection_b) {
      if (eleA % i === 0) {
        return true;
      }
    }
    return false;
  }) 
}

module.exports = choose_divisible_integer;
