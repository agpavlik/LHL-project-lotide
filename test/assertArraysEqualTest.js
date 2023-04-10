// test/assertArraysEqual.js
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

// test code
eqArrays(assertArraysEqual([1, 2, 3], [1, 2, 3]), true)
eqArrays(assertArraysEqual([1, 2, 3], [3, 2, 1]), false)