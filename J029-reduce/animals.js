const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

const cAnimals = (accumulator, animal) => {
	return animal.startsWith('C') ? accumulator + 1 : accumulator;
}

const allMyCAnimals = animals.reduce(cAnimals);
console.log(`\nI have ${allMyCAnimals} animals that start with the letter "C".`);
