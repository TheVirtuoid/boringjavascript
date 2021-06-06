/*
const animals = [
	{ "type": "Cat", "name": "Fluffy", "class": "Mammalia" },
	{ "type": "Dog", "name": "Fido", "class": "Mammalia"},
	{ "type": "Horse", "name": "Mr. Ed", "class": "Mammalia"},
	{ "type": "Cow", "name": "Betsy", "class": "Mammalia"},
	{ "type": "Coyote", "name": "Wile E.", "class": "Mammalia"},
	{ "type": "Road Runner", "name": "Beep Beep", "class": "Aves"},
	{ "type": "Dolphin", "name": "Flipper",  "class": "Mammalia"},
	{ "type": "Whale", "name": "Moby Dick", "class": "Mammalia"},
	{ "type": "Lizard", "name": "Larry", "class": "Reptilia"}
]

console.log('\nBEFORE');
console.log(animals);
const cow = animals.findIndex( animal => animal.type === "Cow" );
animals.splice(cow, 1);
console.log('\nAFTER');
console.log(animals);
*/


const animals = [
	{ "type": "Cat", "name": "Fluffy", "class": "Mammalia" },
	{ "type": "Dog", "name": "Fido", "class": "Mammalia"},
	{ "type": "Horse", "name": "Mr. Ed", "class": "Mammalia"},
	{ "type": "Cow", "name": "Betsy", "class": "Mammalia"},
	{ "type": "Coyote", "name": "Wile E.", "class": "Mammalia"},
	{ "type": "Road Runner", "name": "Beep Beep", "class": "Aves"},
	{ "type": "Dolphin", "name": "Flipper",  "class": "Mammalia"},
	{ "type": "Whale", "name": "Moby Dick", "class": "Mammalia"},
	{ "type": "Lizard", "name": "Larry", "class": "Reptilia"}
]

console.log('\nBEFORE');
console.log(animals);
const deletedAnimals = animals.splice(1, animals.length - 2);
console.log('\nAFTER');
console.log(animals);
console.log('\nDELETED ANIMALS');
console.log(deletedAnimals);
