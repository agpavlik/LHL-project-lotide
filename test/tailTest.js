// test/tail.js
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
 it("returns [2, 3] for [1, 2, 3]", () => {
   assert.deepStrictEqual(tail([1, 2, 3]), [2, 3]);
 });

 it("returns [] for ['5']", () => {
  assert.deepStrictEqual(tail(['5']), []); 
 });

 it("returns [\"Lighthouse\", \"Labs\"] for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
  assert.deepStrictEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
 });

 it("returns [6, 7] for [5, 6, 7]", () => {
  assert.deepStrictEqual(tail([5, 6, 7]), [6, 7]); 
 });

});

// test code
// console.log(tail([5,6,7]));
// console.log(tail(["Hello", "Lighthouse", "Labs"]));