'use strict';
let count_same_elements = require("../../../../main/section_2/practice_1/practice.js");


var single_element = function(collection){
  let countArr = count_same_elements(choose_even_sub(collection));
  let result = [];
  countArr.filter(ele => {
    if (ele.count === 1) {
      result.push(ele.key);
    }
    return ele.count === 1;
  });
  return result;
};
function choose_even_sub(collection) {
  return collection.filter((ele,index) => index % 2 !== 0);
}
module.exports = single_element;
