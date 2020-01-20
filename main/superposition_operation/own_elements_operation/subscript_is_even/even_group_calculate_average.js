'use strict';
let even_group_calculate_average = function(collection){
  let evenArr = getEvenArr(collection);
  let evenArrLength = evenArr.length;
  if (evenArrLength) {
    let result = getArrGroupAverage(evenArr);
    return result;
  }
  else {
    return [0];
  }
  
};
function getArrGroupAverage(arr) {
  let arrOneSum = 0;
  let arrOneCount = 0;
  let arrTwoSum = 0;
  let arrTwoCount = 0;
  let arrThreeSum = 0;
  let arrThreeCount = 0;
  let arrLength = arr.length;
  let result = [];
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] < 10) {
      arrOneSum += arr[i];
      arrOneCount += 1;
    }
    else if(arr[i] < 100) {
      arrTwoSum += arr[i];
      arrTwoCount += 1;
    }
    else {
      arrThreeSum += arr[i];
      arrThreeCount += 1;
    }
  }
  if (arrOneCount === 0 && arrTwoCount == 0) {
    result.push(arrThreeSum / arrThreeCount);
  }
  else {
    result.push(arrOneSum / arrOneCount);
    result.push(arrTwoSum / arrTwoCount);
    result.push(arrThreeSum / arrThreeCount);
  }
  return result;
}
function getEvenArr(collection) {
  let evenArr = [];
  let arrLength = collection.length;
  for (let i = 1; i < arrLength;) {
    if (collection[i] % 2 === 0) {
      evenArr.push(collection[i]);
    }
    i += 2;
  }
  return evenArr;
}
module.exports = even_group_calculate_average;