const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function (bestTVShowsByGenre, show) {
  let keyValue = undefined;
  for (let key in bestTVShowsByGenre) {
    if (bestTVShowsByGenre[key] === show) {
      keyValue = key;
    }
  } console.log (keyValue)
  return;
};
findKeyByValue(bestTVShowsByGenre, "The Wire") /// "drama";
findKeyByValue(bestTVShowsByGenre, "That '70s Show") // undefined;