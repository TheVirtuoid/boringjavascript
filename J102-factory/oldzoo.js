import Cat from "./Cat.js";
import Dog from "./Dog.js";
import Horse from "./Horse.js";

const cat = new Cat({
	name: 'Fluffy',
	age: 4,
	height: 4.5,
	weight: 15
});

const dog = new Dog('Fido', 11, 5.6, 75);

const horse = new Horse();
horse.name = 'Mr. Ed';
horse.age = 20;
horse.height = 15;
horse.weight = 150;

console.log(`My cat is named ${cat.name}.`);
console.log(`My dog is named ${dog.name}.`);
console.log(`My horse is named ${horse.name}.`);