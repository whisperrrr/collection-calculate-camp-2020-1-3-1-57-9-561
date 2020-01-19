let choose_common_elements = require("../../../main/filter/two_collections_practice_1.js");

function collect_same_elements(collection_a, object_b) {
  return choose_common_elements(collection_a, object_b.value);
}

module.exports = collect_same_elements;
