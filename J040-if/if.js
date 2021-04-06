const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

const myAnimal = animals[Math.floor(Math.random() * animals.length)];
if (myAnimal === "Cat") {
	console.log('\nMy animal is a Cat!');
} else {
	console.log(`\nI am not a cat, I am a ${myAnimal}!`);
}
