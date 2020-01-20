'use strict';
var is_exist_element = function(collection,element){
  return new Set(choose_even_sub(collection)).has(element);
};
function choose_even_sub(collection) {
  return collection.filter((ele,index) => index % 2 === 0);
}
module.exports = is_exist_element;
