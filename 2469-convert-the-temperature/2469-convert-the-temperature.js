/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
  let kelvin  = (celsius +273.15).toFixed(5);
  let farenheit=((celsius * 1.8) +32).toFixed(5);
  return ([kelvin,farenheit])
};