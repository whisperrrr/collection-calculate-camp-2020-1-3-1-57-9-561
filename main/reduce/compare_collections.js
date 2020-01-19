'use strict';

function compare_collections(collection_a, collection_b) {
  return collection_a.length === collection_b.length 
        && collection_a.every((ele,index) => ele === collection_b[index]);
}

module.exports = compare_collections;


