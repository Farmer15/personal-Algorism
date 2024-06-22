/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(heights) {
  let leftWallIndex = 0;
  let rightWallIndex = heights.length - 1;
  let maxWater = 0;

  while (leftWallIndex <= rightWallIndex) {
    const width = rightWallIndex - leftWallIndex;
    const height = Math.min(heights[leftWallIndex], heights[rightWallIndex]);
    const waterArea = height * width;
     
    if (waterArea >  maxWater) {
      maxWater = waterArea;
    }

    if (heights[leftWallIndex] >= heights[rightWallIndex]) {
      rightWallIndex--;
    } else {
      leftWallIndex++;
    }
  }

  return maxWater;
};