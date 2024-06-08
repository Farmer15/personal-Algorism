/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
  arr1 = arr1.sort((a, b) => a.id - b.id);
  arr2 = arr2.sort((a, b) => a.id - b.id);

  const resultArray = [];
  
  let indexArr1 = 0;
  let indexArr2 = 0;

  while (indexArr1 < arr1.length || indexArr2 < arr2.length) {
    if (arr1[indexArr1]?.id < arr2[indexArr2]?.id || !arr2[indexArr2]) {
      resultArray.push(arr1[indexArr1]);
      indexArr1++;
      continue;
    }

    if (arr1[indexArr1]?.id > arr2[indexArr2]?.id || !arr1[indexArr1]) {
      resultArray.push(arr2[indexArr2]);
      indexArr2++;
      continue;
    }

    if (arr1[indexArr1]?.id === arr2[indexArr2]?.id) {
      resultArray.push(Object.assign(arr1[indexArr1], arr2[indexArr2]));
      indexArr1++;
      indexArr2++;
    }
  }

  return resultArray;
};