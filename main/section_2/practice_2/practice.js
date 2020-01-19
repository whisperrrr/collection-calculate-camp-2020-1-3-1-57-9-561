function count_same_elements(collection) {
  let arrMap = collection.reduce((acc,cur) => {
    if (!acc.has(cur)) {
      acc.set(cur[0],{
        key: cur[0],
        count: cur[2]? parseInt(cur[2]):1
      });
    } else {
      acc.get(cur[0]).count += cur[2]? parseInt(cur[2]):1;
    }
    return acc;
  },(new Map()))
  return [...arrMap.values()];
}

module.exports = count_same_elements;
