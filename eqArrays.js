const assertEqual = require('./assertEqual');

// eqArrays function

const eqArrays = function(actual, expected) {
// output is always 'true' until actual does not mitch expected
  if (actual.length !== expected.length)
      return false;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  } //console.log (output); // check
  return true;
};

// eqArrays([1, 2, 3], [1, 2, 3]) // true
// eqArrays([1, 2, 3], [3, 2, 1]) // false
// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // true
// eqArrays(["1", "2", "3"], ["1", "2", "fffffffff"]) // false

module.exports = eqArrays;