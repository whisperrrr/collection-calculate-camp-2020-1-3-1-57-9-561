function count_same_elements(collection) {
  let arrMap = collection.reduce((acc,cur) => {
    if (!acc.has(cur[0])) {
      acc.set(cur[0],{
        name: cur[0],
        summary: cur[2]? getNum(cur):1
      });
    } else {
      acc.get(cur[0]).summary += cur[2]? getNum(cur):1;
    }
    return acc;
  },(new Map()))
  return [...arrMap.values()];
}
function getNum(cur) {
  if (cur[2] === "[") {
    return parseInt(cur.slice(2,-1));
  }
  else {
    return parseInt(cur.slice(2));
  }     
}
var collection = [
  "a", "a", "a",
  "e", "e", "e", "e", "e", "e", "e",
  "h", "h", "h", "h", "h", "h", "h[3]", "h", "h",
  "t", "t-2", "t", "t", "t", "t", "t", "t", "t[10]",
  "f", "f", "f", "f", "f", "f", "f", "f", "f",
  "c:8",
  "g", "g", "g", "g", "g", "g", "g",
  "b", "b", "b", "b", "b", "b",
  "d-5"
];
count_same_elements(collection);
module.exports = count_same_elements;
