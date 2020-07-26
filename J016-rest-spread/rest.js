
let mostLetters = processTwoAnimals("Cat", "Horse", "Cow", "Coyote", "Road Runner");
console.log(`\nThe animal with the most letters is "${mostLetters}".`);


function processTwoAnimals(animalOne, animalTwo, ...otherAnimals) {
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
	if (otherAnimals.length) {
		console.log(`***** animals not processed: ${otherAnimals.join(",")}`);
	}
	return selectedAnimal;

}
