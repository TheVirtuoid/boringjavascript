import AnimalClearingHouse from "./AnimalClearingHouse.js";

const ach = new AnimalClearingHouse();

const cat = ach.addAnimal('cat', { name: 'Fluffy', age: 4, height: 4.5, weight: 15 });
const dog = ach.addAnimal('dog', { name: 'Fido', age: 11, height: 5.6, weight: 75 });
const horse = ach.addAnimal('horse', { name: 'Mr. Ed', age: 20, height: 15, weight: 150 });

console.log(`My cat is named ${cat.name}.`);
console.log(`My dog is named ${dog.name}.`);
console.log(`My horse is named ${horse.name}.`);
