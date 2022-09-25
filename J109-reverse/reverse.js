const animals = [
	{ "type": "Cat", "name": "Fluffy", "class": "Mammalia"},
	{ "type": "Dog", "name": "Fido", "class": "Mammalia"},
	{ "type": "Horse", "name": "Mr. Ed", "class": "Mammalia"},
	{ "type": "Cow", "name": "Betsy", "class": "Mammalia"},
	{ "type": "Coyote", "name": "Wile E.", "class": "Mammalia"},
	{ "type": "Road Runner", "name": "Beep Beep", "class": "Aves"},
	{ "type": "Dolphin", "name": "Flipper",  "class": "Mammalia"},
	{ "type": "Whale", "name": "Moby Dick", "class": "Mammalia"},
	{ "type": "Lizard", "name": "Larry", "class": "Reptilia"}
];

const reversedAnimals = [...animals].reverse();

console.log('\nRegular Animals:')
animals.forEach((animal, index) => {
	console.log(`${index.toString().padStart(2)} - ${animal.type}`);
});

console.log('\nReversed Animals:')
reversedAnimals.forEach((animal, index) => {
	console.log(`${index.toString().padStart(2)} - ${animal.type}`);
});
