const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

const myAnimalIndex = Math.floor(Math.random() * animals.length);

if (myAnimalIndex === 0) {
	console.log('\nMy animal is a Cat!');
} else {
	console.log(`\nMy animal is NOT a Cat! It's a ${animals[myAnimalIndex]}.`);
}