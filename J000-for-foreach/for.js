const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

let numAnimals = animals.length;

for (let animalIndex = 0; animalIndex < numAnimals; animalIndex++ ) {
	const animal = animals[animalIndex];
	console.log(`Animal Number ${animalIndex} is ${animal}`);
}
