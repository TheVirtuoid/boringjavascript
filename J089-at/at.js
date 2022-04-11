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

const first = animals.at(0);
const last = animals.at(-1);
const thirdFromLast = animals.at(-3);

console.log(`The first animal type in the list is: ${first.type} `);
console.log(`The last animal type in the list is: ${last.type} `);
console.log(`The third from last animal type in the list is: ${thirdFromLast.type} `);

/*

const first = animals[0];
const last = animals[animals.length - 1];
const thirdFromLast = animals[animals.length - 3]

*/
