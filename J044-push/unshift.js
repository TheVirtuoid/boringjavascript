const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

const dinosaur = "Dinosaur";

console.log('BEFORE');
console.log(animals);

animals.unshift(dinosaur);

console.log('AFTER');
console.log(animals);