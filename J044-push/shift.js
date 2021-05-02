const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

animals.unshift("Dinosaur");
console.log('BEFORE');
console.log(animals);

let lostAnimal = animals.shift();

console.log('AFTER');
console.log(animals);
console.log(`Lost animal is: ${lostAnimal}`)












/*

const animals = [];
const lostAnimal = animals.shift();
console.log('AFTER SHIFT');
console.log(animals);
console.log(`Lost animal is: ${lostAnimal}`)
*/
