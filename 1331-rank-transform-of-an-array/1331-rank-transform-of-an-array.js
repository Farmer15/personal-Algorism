/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  const sortArr = arr.slice().sort((a, b) => a - b)
  const map = new Map();
  let count = 0;
  
  for (let i = 0; i < sortArr.length; i++) {
    if (!map.has(sortArr[i])) {
      map.set(sortArr[i], count);
      count++
    } 
  } 
  
  console.log(map);
  
  return arr.map(function (value) {
    return map.get(value) + 1;
  });
};