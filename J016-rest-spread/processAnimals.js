module.exports = function processAnimals() {
	const animals = [].slice.call(arguments);
	let selectedAnimal = "";
	animals.forEach( (animal) => {
		if (animal.length > selectedAnimal.length) {
			selectedAnimal = animal;
		}
	});
	return selectedAnimal;
}
