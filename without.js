const assertArrayEqual = function(actual, expected) {
  let output = eqArray(actual, expected);
  if (output === true) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {
  let output = true;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      output = false;
    }
    
  } console.log (output);
  return output;
};

let without = function (source, itemsToRemove ) {
// make a copy of source
  let sourceWithout = source.slice(0);
// compare all the elements of two arrays
  for (let i = 0 ; i < sourceWithout.length; i++) {
    for (let j = 0 ; j < itemsToRemove.length; j++) {
// remove elements that match itemsToRemove from sourceWithout
      if (sourceWithout[i] === itemsToRemove[j]) {
        sourceWithout.splice(i, 1);
      } 
    
    } 
  } console.log (sourceWithout); 
  return sourceWithout; 
}



without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
