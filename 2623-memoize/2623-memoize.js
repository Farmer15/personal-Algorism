/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = {};
    
    return function(...args) {
      const cachedKey = JSON.stringify(args);

      if(Object.hasOwn(cache, cachedKey)) {
        return cache[cachedKey];
      } else {
        return cache[cachedKey] = fn(...args);
      }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */