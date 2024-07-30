/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  return timeSeries.reduce((sumPoison, currentTime, index) => {
    const nextTime = timeSeries[index + 1];
  
    if (!nextTime || nextTime - currentTime >= duration) {
      return sumPoison + duration;
    } else {
      return sumPoison + nextTime - currentTime;
    }
  }, 0);
};