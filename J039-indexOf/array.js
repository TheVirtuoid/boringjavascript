const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

const whereIsMyCat = animals.indexOf("Cat");
const whereIsMyHorse = animals.indexOf("Horse");
const whereIsMyDinosaur = animals.indexOf("Dinosaur");
const whereIsMyOtherCat = animals.indexOf("cat");

console.log(`\nMy Cat is at position ${whereIsMyCat}`);
console.log(`My Horse is at position ${whereIsMyHorse}`);
console.log(`My Dinosaur is at position ${whereIsMyDinosaur}`);
console.log(`My Other Cat is at position ${whereIsMyOtherCat}`);