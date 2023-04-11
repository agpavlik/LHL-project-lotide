// test/assertEqualTest.js
const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
 it("returns 1 for [1, 2, 3]", () => {
   assert.notStrictEqual(assertEqual([1, 2, 3]), 1);
 });

 it("returns Lighthouse Labs for Bootcamp", () => {
  assert.notStrictEqual(assertEqual("Lighthouse Labs"), "Bootcamp"); 
 });

 it("returns 1 for 1", () => {
  assert.strictEqual(assertEqual(1), 1); 
 });

});

// test code
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);