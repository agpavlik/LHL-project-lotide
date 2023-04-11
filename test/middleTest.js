// test/middle.js

const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

describe("#middle", () => {
 it("returns [2, 3] for [1, 2, 3, 4]", () => {
   assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
 });

 it("returns [3] for [1, 2, 3, 4, 5]", () => {
  assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]); 
 });

 it("returns [] for [1]", () => {
  assert.deepEqual(middle([1]), []); 
 });

});


// test code
//assertArraysEqual(middle([1]), [])
//assertArraysEqual(middle([1, 2]), [])
//assertArraysEqual(middle([1, 2, 3]), [2])
//assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
//assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
//assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
