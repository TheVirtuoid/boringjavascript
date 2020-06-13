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
	return firstValue.name < secondValue.name ? -1 : firstValue.name > secondValue.name ? 1 : 0;
});
animals.forEach( animal => console.log(animal.name));









/*
function sortBy (field) {
	animals.sort( function (firstValue, secondValue) {
		return firstValue[field] < secondValue[field] ? -1 : firstValue[field] > secondValue[field] ? 1 : 0;
	});
	animals.forEach( animal => console.log(animal[field]));
}

console.log('\n\n----------BY TYPE-----------');
sortBy('type');
console.log('\n\n----------BY NAME-----------');
sortBy('name');
*/
