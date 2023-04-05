
const middle = function(array) {
  var middleIndex = [];
  if (array.length > 2 && array.length % 2 === 0) {
    middleIndex.push(array[Math.floor((array.length - 1) / 2)], (array[Math.floor((array.length - 1) / 2)])+1);
  } else if (array.length > 2 && array.length % 2 !== 0) {
    middleIndex = array[Math.floor((array.length - 1) / 2)];
  }
console.log(middleIndex);
}



middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]