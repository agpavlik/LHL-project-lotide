

const assertArrayEqual = function(actual, expected) {
  let output = eqArray(actual, expected);
  if (output === true) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3])) // => true
assertArrayEqual(eqArrays([1, 2, 3], [3, 2, 1])) // => false
assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false