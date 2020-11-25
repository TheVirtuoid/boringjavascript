const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

const AnimalsThatStartWithC = animals.filter( animal => animal.startsWith("C") );

console.log(`\nOriginal List:`);
console.log(animals);
console.log(`\nNew List:`);
console.log(AnimalsThatStartWithC);
