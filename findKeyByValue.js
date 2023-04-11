const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = (obj, string) => {
  let keyValue;
  Object.entries(obj).forEach(([key, value]) => {
    if (value == string) {
      keyValue = key;
    } else {
      keyValue = undefined;
    }
  });
  return keyValue;
}; 

module.exports = findKeyByValue;

//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire")) /// "drama";
//console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show")) // undefined;