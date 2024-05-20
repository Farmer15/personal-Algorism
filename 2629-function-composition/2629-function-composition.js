/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    let temp;

    return function(x) {
      temp = x;

      for (let i = functions.length - 1; i >= 0; i--) {
        temp = functions[i](temp);
      }

      return temp; 
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */