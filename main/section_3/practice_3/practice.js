let count_same_elements = require("../../../main/section_2/practice_1/practice.js");
let create_updated_collection_three = require("../../../main/section_3/practice_2/practice.js");
function create_updated_collection(collection_a, object_b) {
  let arrMap = count_same_elements(collection_a);
  return create_updated_collection_three(arrMap,object_b); 
}

module.exports = create_updated_collection;
