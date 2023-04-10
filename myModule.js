const sayHelloTo = function(person) {
 console.log(`Hello, ${person}`);
}
module.exports = sayHelloTo;




const sayHelloTo = require('./myModule');

// Just to check the value of what we just required here
console.log('sayHelloTo: ', sayHelloTo);
sayHelloTo('Bernie');

console.log(module)