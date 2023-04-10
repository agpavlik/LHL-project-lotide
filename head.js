const assertEqual = require('./assertEqual');

// Head function
const head = function(actual) {
  let headI = actual[0];
  return headI;
};

// test code
// head([5,6,7]);
// head(["Hello", "Lighthouse", "Labs"]);

module.exports = head;
