const letterPositions = function(sentence) {
  const results = {};
  let newSentence = sentence.toLowerCase();
  for (let i = 0 ; i < newSentence.length ; i++) {
    if (newSentence[i] !== ' ') {
      if (results[newSentence[i]]){
          results[newSentence[i]].push(i);
        } else {
          results[newSentence[i]] = [i];
        }
    }
  } console.log(results);
  return results;
};

module.exports = letterPositions;

//letterPositions("lighthouse in the house")

/*
{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/
