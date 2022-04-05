import Animal from './Animal.js';

const cat = new Animal({ "type": "Cat", "name": "Fluffy", "classification": "Mammalia"});
const dog = new Animal({ "type": "Dog", "name": "Fido", "classification": "Mammalia"});
const horse = new Animal({ "type": "Horse", "name": "Mr. Ed", "classification": "Mammalia"});

console.log(cat);
console.log(dog);
console.log(horse);

console.log(cat.type);

