console.log('------------------- string ----------------')
const myCharacters = Array.from('Fluffy');
console.log(myCharacters);

console.log('------------------- array -----------------')
const myArray = Array.from([ 1, 2, 3, 4]);
console.log(myArray);

console.log('------------------- map -------------------')
const myMap = new Map();
myMap.set('cat', 'Fluffy');
myMap.set('dog', 'Rover');
myMap.set('lizard', 'Larry');
const myArrayMap = Array.from(myMap);
console.log(myArrayMap);
console.log(Array.from(myMap.keys()));
console.log(Array.from(myMap.values()));

console.log('------------------- set -------------------')
const mySet = new Set();
mySet.add('Fluffy');
mySet.add('Rover');
mySet.add('Larry');
const myArraySet = Array.from(mySet);
console.log(myArraySet);

