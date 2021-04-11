const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

const dinosaur = "Dinosaur";
const bird = {
	name: "Tweety",
	type: "Bird",
	color: "yellow"
}

console.log('BEFORE');
console.log(animals);

animals.push(dinosaur);
animals.push(bird);

console.log('AFTER');
console.log(animals);