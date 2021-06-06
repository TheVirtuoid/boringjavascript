const animals = [
	{ "type": "Cat", "name": "Fluffy", "class": "Mammalia" },
	{ "type": "Dog", "name": "Fido", "class": "Mammalia"},
	{ "type": "Horse", "name": "Mr. Ed", "class": "Mammalia"},
	{ "type": "Cow", "name": "Betsy", "class": "Mammalia"},
	{ "type": "Coyote", "name": "Wile E.", "class": "Mammalia"},
	{ "type": "Road Runner", "name": "Beep Beep", "class": "Aves"},
	{ "type": "Dolphin", "name": "Flipper",  "class": "Mammalia"},
	{ "type": "Whale", "name": "Moby Dick", "class": "Mammalia"},
	{ "type": "Lizard", "name": "Larry", "class": "Reptilia"}
];

let isMammalia = animals.every( animal => animal.class === "Mammalia" );
console.log(`\nAre all of my animals mammal? ${isMammalia ? "Yes" : "No"}.`);

const mammals = animals.filter( animal => animal.class === "Mammalia" );
isMammalia = mammals.every( animal => animal.class === "Mammalia" );
console.log(`Are all of my mammals mammal? ${isMammalia ? "Yes" : "No"}.`);
