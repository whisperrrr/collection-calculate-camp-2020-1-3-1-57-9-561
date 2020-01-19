function create_updated_collection(collection_a, object_b) {
  let arrSet = new Set(object_b.value);
  return collection_a.map(ele => {
    ele.count = arrSet.has(ele.key)? ele.count - Math.floor(ele.count / 3) :ele.count;
    return ele;
  });
}

module.exports = create_updated_collection;
