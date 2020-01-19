function create_updated_collection(collection_a, object_b) {
  let arrSet = new Set(object_b.value);
  return collection_a.map(ele => {
    arrSet.has(ele.key)? ele.count--:ele.count;
    return ele;
  });
}

module.exports = create_updated_collection;
