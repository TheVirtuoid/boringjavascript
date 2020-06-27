const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

let mostLetters = processTwoAnimals("Cat", "Horse", "Dolphin");
console.log(`\nThe animal with the most letters is "${mostLetters}".`);






















function processTwoAnimals(animalOne, animalTwo) {
	if (animalTwo === undefined) {
		throw new Error('WHOOPS! Give me at least TWO animals!');
	}
	const animals = [animalOne, animalTwo];
	let selectedAnimal = "";
	animals.forEach( (animal) => {
		if (animal.length > selectedAnimal.length) {
			selectedAnimal = animal;
		}
	});
	return selectedAnimal;
}
