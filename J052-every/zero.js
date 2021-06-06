/*
const animals = [];

const isMammalia = animals.every( animal => animal.class === "Mammalia" );
console.log(`\nAre all of my animals mammal? ${isMammalia ? "Yes" : "No"}.`);
*/


let animalsAdded = 5;
const animals = [
	{ "type": "Cat", "name": "Fluffy", "class": "Mammalia" },
	{ "type": "Dog", "name": "Fido", "class": "Mammalia"},
	{ "type": "Horse", "name": "Mr. Ed", "class": "Mammalia"},
	{ "type": "Cow", "name": "Betsy", "class": "Mammalia"},
	{ "type": "Coyote", "name": "Wile E.", "class": "Mammalia"},
	{ "type": "Dolphin", "name": "Flipper",  "class": "Mammalia"},
	{ "type": "Whale", "name": "Moby Dick", "class": "Mammalia"}
];

const isMammalia = animals.every( animal => {
	if (animalsAdded > 0) {
		animals.push({ type: `Lizard${animalsAdded}`, name: `Lizard${animalsAdded}`, class: 'Reptilia' });
		animalsAdded--;
	}
	return animal.class === "Mammalia";
} );
console.log(`\nAre all of my animals mammal? ${isMammalia ? "Yes" : "No"}.`);
console.log(animals);
