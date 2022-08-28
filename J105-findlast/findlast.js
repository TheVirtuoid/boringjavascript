const animals = [
	{ "type": "Cat", "name": "Fluffy", "class": "Mammalia"},
	{ "type": "Dog", "name": "Fido", "class": "Mammalia"},
	{ "type": "Horse", "name": "Mr. Ed", "class": "Mammalia"},
	{ "type": "Cow", "name": "Betsy", "class": "Mammalia"},
	{ "type": "Coyote", "name": "Wile E.", "class": "Mammalia"},
	{ "type": "Road Runner", "name": "Beep Beep", "class": "Aves"},
	{ "type": "Dolphin", "name": "Flipper",  "class": "Mammalia"},
	{ "type": "Whale", "name": "Moby Dick", "class": "Mammalia"},
	{ "type": "Lizard", "name": "Larry", "class": "Reptilia"},
	{ "type": "Cat", "name": "Mr. Tinkles", "class": "Mammalia"},
	{ "type": "Horse", "name": "Trigger", "class": "Mammalia"},
	{ "type": "Cat", "name": "Hairball", "class": "Mammalia"},
	{ "type": "Dog", "name": "Rover", "class": "Mammalia"},
	{ "type": "Coyote", "name": "Clarkston", "class": "Mammalia"},
	{ "type": "Cat", "name": "Cool", "class": "Mammalia"},
	{ "type": "Horse", "name": "Secretariat", "class": "Mammalia"},
	{ "type": "Coyote", "name": "Waldo", "class": "Mammalia"},
	{ "type": "Cat", "name": "Tom", "class": "Mammalia"}
];

const animalFinder = (args) => {
	const { animals, type } = args;
	return { type: type, critter: animals.findLast( (animal) => animal.type === type ) };
}


const lastCat = animalFinder({ animals, type: 'Cat' });
const lastDog = animalFinder({ animals, type: 'Dog' });
const lastAntelope = animalFinder({ animals, type: 'Antelope' });

[lastCat, lastDog, lastAntelope].forEach((animal) => {
	const { type, critter } = animal;
	if (critter) {
		console.log(`My last ${type} in the list is named "${critter.name}"`);
	} else {
		console.log(`It seems like I do not have an ${type} in my list!`);
	}
});

/*
const animalFinder = (args) => {
	const { animals, type } = args;
	return { type: type, critter: animals.findLast( (animal) => animal.type === type ) };
}


const lastCat = animalFinder({ animals, type: 'Cat' });
const lastDog = animalFinder({ animals, type: 'Dog' });
const lastAntelope = animalFinder({ animals, type: 'Antelope' });

[lastCat, lastDog, lastAntelope].forEach((animal) => {
	const { type, critter } = animal;
	if (critter) {
		console.log(`My last ${type} in the list is named "${critter.name}"`);
	} else {
		console.log(`It seems like I do not have an ${type} in my list!`);
	}
});
*/


/*

const animalFinder = (args) => {
	const { animals, type } = args;
	return { type: type, critterIndex: animals.findLastIndex( (animal) => animal.type === type ) };
}


const lastCat = animalFinder({ animals, type: 'Cat' });
const lastDog = animalFinder({ animals, type: 'Dog' });
const lastAntelope = animalFinder({ animals, type: 'Antelope' });

[lastCat, lastDog, lastAntelope].forEach((animal) => {
	const { type, critterIndex } = animal;
	const critter = animals[critterIndex];
	if (critter) {
		console.log(`My last ${type} in the list is named "${critter.name}"`);
	} else {
		console.log(`It seems like I do not have an ${type} in my list!`);
	}
});
*/
