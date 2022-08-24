import Zoo from "./YourZoo.js";

const animalDatabase = [
	{ "type": "Cat", "name": "Fluffy", "id": 1},
	{ "type": "Dog", "name": "Fido", "id": 2},
	{ "type": "Horse", "name": "Mr. Ed", "id": 3},
	{ "type": "Cow", "name": "Betsy", "id": 4},
	{ "type": "Coyote", "name": "Wile E.", "id": 5},
	{ "type": "Road Runner", "name": "Beep Beep", "id": 6},
	{ "type": "Dolphin", "name": "Flipper",  "id": 7},
	{ "type": "Whale", "name": "Moby Dick", "id": 8},
	{ "type": "Lizard", "name": "Larry", "id": 9}
];

const myZoo = new Zoo();
animalDatabase.forEach((animal) => myZoo.addAnimal({
	name: animal.name,
	type: animal.type,
	id: animal.id
}));

console.log('\nMy Zoo in the Morning!');
console.log(myZoo.animals);

console.log('\nChanging the name of the cat.');
myZoo.changeAnimal({
	name: 'Mr. Tinkles',
	type: 'Cat',
	id: 1
})
console.log(myZoo.animals);

console.log('\nRemoving the Cow');
myZoo.removeAnimal({ id: 4 });
console.log(myZoo.animals);