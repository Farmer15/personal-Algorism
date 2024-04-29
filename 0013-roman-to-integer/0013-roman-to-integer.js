/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const subInstances = {'CM' : 0, 'CD': 0, 'XC' : 0, 'XL' : 0, 'IX' : 0, 'IV' : 0};
    const romanNumeral = {"M" : 0, "D" : 0, "C" : 0, "L" : 0, "X" : 0, "V" : 0, "I" : 0};
    let resultStr = s;

    function popString(str, index) {
      return str.slice(0,index) + str.slice(index + 2);
    }

    for (const key in subInstances) {
      if (resultStr.indexOf(key) >= 0) {
        resultStr = popString(resultStr, resultStr.indexOf(key));
        subInstances[key]++;
      }
    }

    for (const value of resultStr) {
      if (Object.hasOwn(romanNumeral, value)) {
        romanNumeral[value]++;
      }
    }

    return `${romanNumeral['M'] * 1000 + romanNumeral['D'] * 500 + romanNumeral['C'] * 100 + romanNumeral['L'] * 50 + romanNumeral['X'] * 10 + romanNumeral['V'] * 5 + romanNumeral['I'] * 1 + subInstances['CM'] * 900 + subInstances['CD'] * 400 + subInstances['XC'] * 90 + subInstances['XL'] * 40 + subInstances['IX'] * 9 + subInstances['IV'] * 4}`;
}