'use strict';

function get_union(collection_a, collection_b) {
  let supplement = collection_b.filter(ele => collection_a.indexOf(ele) === -1);
  return collection_a.concat(supplement);
}

module.exports = get_union;

