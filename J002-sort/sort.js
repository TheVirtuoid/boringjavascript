const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

animals.sort( function (firstElement, secondELement) {
	if (firstElement < secondELement) {
		return -1;
	} else if (firstElement > secondELement) {
		return 1;
	} else {
		return 0;
	}
});
console.log(`\nA listing of my animals:`);
animals.forEach( animal => console.log(animal));
