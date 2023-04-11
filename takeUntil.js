const takeUntil = (array, callback) => {
  let output = [];
  for (let i in array) {
    if (callback(array[i])) {
      output = array.slice(0, i);
    }
  }
  return output;
};

module.exports = takeUntil;

/*The function will return a "slice of the array 
with elements taken from the beginning." 
It should keep going until the callback/predicate returns 
a truthy value.

To keep things simple, the callback should only 
be provided one value: The item in the array.

Instruction
Implement takeUntil which will keep collecting 
items from a provided array until the callback 
provided returns a truthy value.

Expected Output
[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]*/