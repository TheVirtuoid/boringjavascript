const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

const result = animals.filter( (animal, animalIndex, animalArray) => {
	let animalsLength = animalArray.length;
	if (animalIndex === animalsLength - 1) {
		return true;
	} else {
		return false;
	}
});
const myAnimal = result[result.length - 1];
console.log(`The last animal in my list is ${myAnimal}`);

