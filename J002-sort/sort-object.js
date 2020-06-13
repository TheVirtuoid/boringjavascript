const animals = [
	{ type: "Cat", name: "Fluffy" },
	{ type: "Dog", name: "Fido" },
	{ type: "Horse", name: "Mr. Ed" },
	{ type: "Cow", name: "Betsy" },
	{ type: "Coyote", name: "Wile E." },
	{ type: "Road Runner", name: "Beep Beep" },
	{ type: "Dolphin", name: "Flipper" },
	{ type: "Whale", name: "Moby Dick" },
	{ type: "Lizard", name: "Larry" }
];

animals.sort( function (firstValue, secondValue) {
	if (firstValue.name < secondValue.name) {
		return -1;
	} else if (firstValue.name > secondValue.name) {
		return 1;
	} else {
		return 0;
	}
});
console.log(`\nA listing of my animals in ASCENDING order:`);
animals.forEach( animal => console.log(animal.name));
