const zoo = [
	{ "type": "Cat", "name": "Fluffy", "class": "Mammalia"},
	{ "type": "Dog", "name": "Fido", "class": "Mammalia"},
	{ "type": "Horse", "name": "Mr. Ed", "class": "Mammalia"},
	{ "type": "Cow", "name": "Betsy", "class": "Mammalia"},
	{ "type": "Coyote", "name": "Wile E.", "class": "Mammalia"},
	{ "type": "Road Runner", "name": "Beep Beep", "class": "Aves"},
	{ "type": "Dolphin", "name": "Flipper",  "class": "Mammalia"},
	{ "type": "Whale", "name": "Moby Dick", "class": "Mammalia"},
	{ "type": "Lizard", "name": "Larry", "class": "Reptilia"}
];

const myCatIndex = zoo.findIndex((animal) => animal.type === 'Cat');
console.log(`The zoo's cat is named ${zoo[myCatIndex].name}.`);

const myZebraIndex = zoo.findIndex((animal) => animal.type === 'Zebra');
if (myZebraIndex === -1) {
	console.log('Sorry, but we have no Zebras in the zoo.');
} else {
	console.log(`The zoo's zebra is named ${zoo[myZebraIndex].name}.`);
}









