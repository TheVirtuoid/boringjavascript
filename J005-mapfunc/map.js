const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

let newAnimals = animals.map( function (animal, animalIndex) {
	let result = "";
	for (let part of animal) {
		result = `${part}${result}`;
	}
	return result;
});
console.log(animals);
console.log(newAnimals);

