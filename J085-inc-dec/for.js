const animals = [
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

let index = 0;
let num = animals.length;
while (index < num) {
	const animal = animals[index];
	console.log(`Animal #${index} is a ${animal.type} named ${animal.name}`);
	++index;
}
