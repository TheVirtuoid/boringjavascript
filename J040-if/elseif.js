const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

const myAnimal = animals[Math.floor(Math.random() * animals.length)];
if (myAnimal === "Cat") {
	console.log('\nMy animal is a Cat!');
} else if (myAnimal === "Dog") {
	console.log('\nMy animal is a Dog!!');
} else if (myAnimal === "Horse") {
	console.log('\nMy animal is a Horse!');
} else {
	console.log(`\nMy animal is NOT a Cat, Dog, or Horse! It's a ${myAnimal}.`);
}