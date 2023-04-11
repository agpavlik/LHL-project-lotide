
const countOnly = function(allItems, itemsToCount) {
const results = {};
  for (const i of allItems) {
    if (itemsToCount[i]) {
      if (results[i]) {
        results[i] += 1;
      } else {
      results[i] = 1;
      }
    }
    
  } console.log(results); //check
  return results;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

/*
countOnly(result1["Jason"], 1);
countOnly(result1["Karima"], undefined);
countOnly(result1["Fang"], 2);
countOnly(result1["Agouhanna"], undefined);
*/

module.exports = countOnly;