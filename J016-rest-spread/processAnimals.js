module.exports = function processAnimals(animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9) {
	const animals = [].slice.call(arguments);
	let selectedAnimal = "";
	animals.forEach( (animal) => {
		if (animal.length > selectedAnimal.length) {
			selectedAnimal = animal;
		}
	});
	return selectedAnimal;
}



















/*
module.exports = function processAnimals(...animals) {
	let selectedAnimal = "";
	animals.forEach( (animal) => {
		if (animal.length > selectedAnimal.length) {
			selectedAnimal = animal;
		}
	});
	return selectedAnimal;
}
*/
