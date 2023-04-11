
const eqObjects = function(object1, object2) {
  const arrayOne = Object.keys(object1);
  const arrayTwo = Object.keys(object2);
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } else {
    for (const key of arrayOne) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if(!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
};


//const shirtObject = { color: "red", size: "medium" };
//const anotherShirtObject= { size: "medium", color: "red" };
//eqObjects(shirtObject , anotherShirtObject); // => true

//const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
//eqObjects(shirtObject , longSleeveShirtObject); // => false

module.exports = eqObjects;
