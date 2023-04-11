
let without = function (source, itemsToRemove ) {
// create a copy of source
  let sourceWithout = source.slice(0);
// compare all the elements of two given arrays
  for (let i = 0 ; i < sourceWithout.length; i++) {
    for (let j = 0 ; j < itemsToRemove.length; j++) {
// remove elements that match itemsToRemove from sourceWithout
      if (sourceWithout[i] === itemsToRemove[j]) {
        sourceWithout.splice(i, 1);
      } 
    
    } 
  } console.log (sourceWithout); // check 
  return sourceWithout; 
}

module.exports = without;

//without([1, 2, 3], [1]) // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
