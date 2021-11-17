const zoo = [
	{ "type": "Cat", "name": "Fluffy", "class": "Mammalia"},
	{ "type": "Dog", "name": "Fido", "class": "Mammalia"},
	{ "type": "Horse", "name": "Mr. Ed", "class": "Mammalia"},
	{ "type": "Cow", "name": "Betsy", "class": "Mammalia"},
	{ "type": "Cat", "name": "Mr. Tinkles", "class": "Mammalia"},
	{ "type": "Coyote", "name": "Wile E.", "class": "Mammalia"},
	{ "type": "Road Runner", "name": "Beep Beep", "class": "Aves"},
	{ "type": "Dolphin", "name": "Flipper",  "class": "Mammalia"},
	{ "type": "Whale", "name": "Moby Dick", "class": "Mammalia"},
	{ "type": "Cat", "name": "Mittens", "class": "Mammalia"},
	{ "type": "Lizard", "name": "Larry", "class": "Reptilia"}
];

const myCat = zoo.find((animal) => animal.type === 'Cat');
console.log(`The zoo's cat is named ${myCat.name}.`);


const allMyCats = zoo.filter((animal) => animal.type === 'Cat');
console.log(allMyCats);