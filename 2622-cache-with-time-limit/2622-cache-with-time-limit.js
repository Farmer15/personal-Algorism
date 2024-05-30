var TimeLimitedCache = function() {
  this.keyCount = 0;
  this.time = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
  if (this[key]) {
    this[key] = value;
    clearTimeout(this.time[key]);
    
    this.time[key] = setTimeout(() => {
      delete this[key];
      this.keyCount--;
    }, duration);

    return true;
  } else {
    this[key] = value;
    this.keyCount++;

    this.time[key] = setTimeout(() => {
      delete this[key];
      this.keyCount--;
    }, duration);

    return false;
  }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
  return this[key] ? this[key] : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
  return this.keyCount;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */