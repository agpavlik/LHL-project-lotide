
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return console.log(`❌ Assertion Failed: ${actual} !== ${expected}`)
    } 
  }
  return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
};

console.log(`Example label: ${inspect(actual)}`);
