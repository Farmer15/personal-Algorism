/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
  const cache = {};

  this.forEach((element, index) => {
    const cachedKey = String(fn(element));
    console.log(cachedKey);

    if (cache[cachedKey]) {
      cache[cachedKey].push(element);
    } else {
      cache[cachedKey] = [element];
    }
  });

  return cache;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */