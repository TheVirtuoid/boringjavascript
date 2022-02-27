import fs from 'fs';
const addAnimalToMyZoo = (animal) => {
	if (myZoo[animal.key]) {
		throw new Error(`ERROR: Already have this key: ${animal.type}`);
	}
	myZoo[animal.key] = animal;
	console.log(`Welcome to the zoo, ${animal.name} the ${animal.type}`);
}
const myZoo = {};

const animals = JSON.parse(fs.readFileSync('./animals.json').toString());
animals.forEach( (animal) => {
	animal.key = animal.type;
	addAnimalToMyZoo(animal);
});

