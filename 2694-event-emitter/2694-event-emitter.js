class EventEmitter {
    constructor() {
      this.cache = {};
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {

        if (!this.cache[eventName]) {
          this.cache[eventName] = [];
        }

        this.cache[eventName].push(callback);

        return {
            unsubscribe: (index) => {
              if (this.cache[eventName][index]) {
                this.cache[eventName].splice(index, 1);
              } else {
                this.cache[eventName].pop();
              }
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
      const resultArr = [];
      
      if (this.cache[eventName]) {
        for (const func of this.cache[eventName]) {
          const result = func(...args);
          resultArr.push(result);
        } 
      }

      return resultArr;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */