const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

const AnimalsThatStartWithC = animals.map( (animal, index) => {
	if (animal.startsWith("C")) {
		return { animal, index };
	}
}).filter( record => !!record );

console.log(`\nOriginal List:`);
console.log(animals);
console.log(`\nNew List:`);
console.log(AnimalsThatStartWithC);
