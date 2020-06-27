const processAnimals = require('./processAnimals');

const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

let mostLetters = processAnimals(...animals);
console.log(`\nThe animal with the most letters is "${mostLetters}".`);


