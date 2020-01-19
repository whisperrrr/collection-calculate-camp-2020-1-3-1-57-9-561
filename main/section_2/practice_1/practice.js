function count_same_elements(collection) {
  let arrMap = collection.reduce((acc,cur) => {
    if (!acc.has(cur)) {
      acc.set(cur,{
        key: cur,
        count: 1
      });
    } else {
      acc.get(cur).count++;
    }
    return acc;
  },(new Map()))
  return [...arrMap.values()];
}

module.exports = count_same_elements;
