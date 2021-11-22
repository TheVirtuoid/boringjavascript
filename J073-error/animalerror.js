class CannotAddAnimalError extends Error {
	constructor(animal) {
		super();
		this.message = `Animal type "${animal.type}" is not accepted at the zoo.`;
		this.name = 'CannotAddAnimalError';
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

const processError = (err, animal) => {
	let errorMessage = '';
	switch(err.name) {
		case 'CannotAddAnimalError':
			errorMessage = `\n****WARNING: There is a ${animal.type} in the transfer vehicle!\n****${err.message}\n`;
			break;
		default:
			errorMessage = `**WHOOPS! We have a STRANGE animal (${animal.type}) on the transfer vehicle.`;
			break;
	}
	return errorMessage;
}

const processAnimal = (animal) => {
	let status = '';
	try {
		if (animal.type === 'Coyote') {
			throw new CannotAddAnimalError(animal);
		};
		status = `Welcome ${animal.name} the ${animal.type} to the zoo.`;
	} catch (err) {
		status = processError(err, animal);
	}
	return status;
}

animals.forEach((animal) => {
	console.log(processAnimal(animal));
});