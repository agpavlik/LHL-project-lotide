const countLetters = function (strings){
  let input = strings.split(' ').join('').toLowerCase();
  let output = {};
  for (let i of input) {
    if (output[i]) {
      output[i] += 1;
    } else {
      output[i] = 1;
    }
    
  } console.log(output); //check
  return output;
};

//countLetters("lighthouse in the house")
/*
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}*/

module.exports = countLetters;