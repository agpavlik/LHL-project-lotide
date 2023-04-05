
const countOnly = function(allItems, itemsToCount) {
const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
      results[item] = 1;
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

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

/*
countOnly(result1["Jason"], 1);
countOnly(result1["Karima"], undefined);
countOnly(result1["Fang"], 2);
countOnly(result1["Agouhanna"], undefined);
*/