
const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

animals.push("Dinosaur");
console.log('BEFORE');
console.log(animals);

let lostAnimal = animals.pop();

console.log('AFTER');
console.log(animals);
console.log(`Lost animal is: ${lostAnimal}`)

lostAnimal = animals.pop();

console.log('AFTER 2ND TIME');
console.log(animals);
console.log(`Lost animal is: ${lostAnimal}`)












/*

const animals = [];
const lostAnimal = animals.pop();
console.log('AFTER POP');
console.log(animals);
console.log(`Lost animal is: ${lostAnimal}`)
*/
