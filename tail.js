const tail = function(actual) {
  let tailI = actual.slice(1);
  return tailI;
};


//console.log(tail([5,6,7]));
//console.log(tail(["Hello", "Lighthouse", "Labs"]));

module.exports = tail;