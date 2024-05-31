/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    const cachedObj = {};

    return function(...args) {
      const timeId = setTimeout(() => {
        fn(...args);
        delete cachedObj.timer;
      },t);

      if (cachedObj.timer) {
        clearTimeout(cachedObj.timer);
      }

      cachedObj.timer = timeId
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */