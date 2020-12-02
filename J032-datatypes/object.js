const myObject = { a: 1, b: 2};
const myFunction = function (arg) {return arg};
const myArrowFunction = arg => arg + " (arrow) ";
const myOtherObject = { a: 1, b: 2};

console.log(`myObject is type '${typeof myObject}', value is ${JSON.stringify(myObject)}`);
console.log(`myFunction is type '${typeof myFunction}, value is ${myFunction('hello world')}`);
console.log(`myArrowFunction is type '${typeof myArrowFunction}, value is ${myArrowFunction('hello arrow world')}`);
console.log(`Are the two objects equal? ${myObject === myOtherObject ? 'YES!' : 'NO!'}`);
