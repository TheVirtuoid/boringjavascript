const animals = [
	{ "type": "Cat", "name": "Fluffy", "class": "Mammalia" },
	{ "type": "Dog", "name": "Fido", "class": "Mammalia"},
	{ "type": "Horse", "name": "Mr. Ed", "class": "Mammalia"},
	{ "type": "Road Runner", "name": "Beep Beep", "class": "Aves"},
	{ "type": "Dolphin", "name": "Flipper",  "class": "Mammalia"},
	{ "type": "Whale", "name": "Moby Dick", "class": "Mammalia"},
	{ "type": "Lizard", "name": "Larry", "class": "Reptilia"}
]

const cow = { "type": "Cow", "name": "Betsy", "class": "Mammalia"};
const coyote = { "type": "Coyote", "name": "Wile E.", "class": "Mammalia"};


console.log('\nBEFORE');
console.log(animals);
const horse = animals.findIndex( animal => animal.type === "Horse" );
animals.splice(horse, 0, cow, coyote );
console.log('\nAFTER');
console.log(animals);


/*
const animals = [
	{ "type": "Cat", "name": "Fluffy", "class": "Mammalia" },
	{ "type": "Dog", "name": "Fido", "class": "Mammalia"},
	{ "type": "Horse", "name": "Mr. Ed", "class": "Mammalia"},
	{ "type": "Road Runner", "name": "Beep Beep", "class": "Aves"},
	{ "type": "Dolphin", "name": "Flipper",  "class": "Mammalia"},
	{ "type": "Whale", "name": "Moby Dick", "class": "Mammalia"},
	{ "type": "Lizard", "name": "Larry", "class": "Reptilia"}
]

const newAnimals = [
	{ "type": "Cow", "name": "Betsy", "class": "Mammalia"},
	{ "type": "Coyote", "name": "Wile E.", "class": "Mammalia"}
]


console.log('\nBEFORE');
console.log(animals);
const horse = animals.findIndex( animal => animal.type === "Horse" );
animals.splice(horse, 0, ...newAnimals );
console.log('\nAFTER');
console.log(animals);
*/

