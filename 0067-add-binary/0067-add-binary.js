/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let binaryA = a;
  let binaryB = b;
  
  if (binaryA.length >= binaryB.length) {
    binaryB = binaryB.padStart(binaryA.length, "0");
  } else {
    binaryA = binaryA.padStart(binaryB.length, "0");
  }
  
  let indexA = binaryA.length - 1;
  let indexB = binaryB.length - 1;
  let temp = 0;
  let resultBinary = "";
  
  while(indexA >= 0 || indexB >= 0) {
    const result = temp + Number(binaryA[indexA]) + Number(binaryB[indexB]);
    temp = 0;
    
    if (result < 2) {
      resultBinary = result + resultBinary;
    }
    
    if (result >= 2) {
      resultBinary = result - 2 + resultBinary;
      temp = 1;
    }
    
    indexA--;
    indexB--;
  }
  
  if (temp >= 1) {
    return "1" + resultBinary;
  }
  
  return resultBinary;
};