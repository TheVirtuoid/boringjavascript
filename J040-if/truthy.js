const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

const myAnimal = animals[Math.floor(Math.random() * animals.length)];
/*
const isMyCat = myAnimal === "Cat"
if (isMyCat) {
	console.log('\nMy animal is a Cat!');
} else {
	console.log(`\nMy animal is NOT a Cat! It's a ${myAnimal}.`);
}
*/


if (myAnimal) {
	console.log('\nMy animal is a Cat!');
} else {
	console.log(`\nMy animal is NOT a Cat! It's a ${myAnimal}.`);
}