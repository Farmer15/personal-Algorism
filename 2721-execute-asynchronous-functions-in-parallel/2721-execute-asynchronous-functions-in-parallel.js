/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
  const resultArray = [];

  for (const func of functions) {
    const result = func().catch((err) => { return err });
    resultArray.push(result);
  }

  for (let index = resultArray.length - 1; index >= 0; index--) {
    const result = await resultArray[index];

    if (result !== "Error") {
      resultArray[index] = result;
    } else {
      throw result;
    }
  }

  return resultArray;
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */