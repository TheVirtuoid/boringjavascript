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

function addAnimal () {
	for(let i = 0, l = arguments.length; i < l; i++) {
		animals.push({ type: 'Unknown', 'name': arguments[i], 'class': 'Unknown' });
	}
}

/*
function addAnimal (name) {
	animals.push({ type: 'Unknown', name, 'class': 'Unknown' });
}
*/

addAnimal('Tigger', 'Carl', 'Waldo', 'Samantha', 'Una');

console.log(animals);
