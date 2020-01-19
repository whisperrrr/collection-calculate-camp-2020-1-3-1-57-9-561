'use strict';

function hybrid_operation_to_uneven(collection) {
  return choose_uneven(collection).map(ele => ele * 3 + 2);
}
function choose_uneven(collection) {
  return collection.filter(ele => ele % 2 !== 0);
}
module.exports = hybrid_operation_to_uneven;

