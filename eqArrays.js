const eqArrays = function(actual, expected) {
// output is always 'true' until actual does not mitch expected
  let output = true;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      output = false;
    }
  } console.log (output); // check
  return output;
};

eqArrays([1, 2, 3], [1, 2, 3]) // true
eqArrays([1, 2, 3], [3, 2, 1]) // false
eqArrays(["1", "2", "3"], ["1", "2", "3"]) // true
eqArrays(["1", "2", "3"], ["1", "2", "fffffffff"]) // false
