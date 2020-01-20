'use strict';
function one_add_next_multiply_three(collection){
  let result = collection.map(function(ele, index, arr) {
    let eleNext = arr[index + 1] || 0;
    return (ele + eleNext) * 3;
  })
  result.pop();
  return result;
}
module.exports = one_add_next_multiply_three;
