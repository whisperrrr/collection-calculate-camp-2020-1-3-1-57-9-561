
function collect_same_elements(collection_a, object_b) {
  return collection_a.reduce((acc,cur) => {
    if (object_b.value.indexOf(cur.key) > -1){
      acc.push(cur.key);
    }
    return acc;
  },[])
}

module.exports = collect_same_elements;
