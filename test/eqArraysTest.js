// test/eqArrays.js
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "fffffffff"]), false) // false




