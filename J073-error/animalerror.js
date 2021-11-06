class AnimalError extends Error {
	constructor(animal) {
		super();
		this.message = `Animal type "${animal.type}" is not accepted at the zoo.`;
	}
}

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

animals.forEach((animal) => {
	if (animal.type === 'Coyote') {
		throw new AnimalError(animal);
	};
	console.log(`Welcome ${animal.name} the ${animal.type} to the zoo.`);
});