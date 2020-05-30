const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

if (!Array.isArray(animals)) {
	console.error('ERROR: Your variable is not an Array!');
} else {
	const result = animals.filter( (animal, animalIndex, animalArray) => {
		let animalsLength = animalArray.length;
		if (animalIndex === animalsLength - 1) {
			return true;
		} else {
			return false;
		}
	});
	if (result.length !== 1) {
		console.error(`ERROR: Your variable has two ending elements or was empty! If there were two ending elements ... I'm impressed!`);
	} else {
		const myAnimal = result[result.length - 1];
		console.log(`The last animal in my list is ${myAnimal}`);
	}
}

