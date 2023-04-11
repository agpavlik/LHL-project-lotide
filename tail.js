const tail = function(actual) {
  return actual.slice(1);
};


//console.log(tail([5,6,7]));
//console.log(tail(["Hello", "Lighthouse", "Labs"]));
//console.log(tail([1,2,3]));
//console.log(tail(["5"]));

module.exports = tail;