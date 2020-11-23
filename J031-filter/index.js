const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

const AnimalsThatStartWithC = animals.filter( (animal, index) => {
	if (animal.startsWith("C")) {
		return { animal, index };
	}
} )

console.log(`\nOriginal List:`);
console.log(animals);
console.log(`\nNew List:`);
console.log(AnimalsThatStartWithC);
