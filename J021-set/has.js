const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

let animalSet = new Set(animals);
const haveCat = animalSet.has("Cat");
const haveSalamander = animalSet.has("Salamander");
console.log(`Do I have a cat? ${haveCat ? "Yes!" : "No."}`);
console.log(`Do I have a salamander? ${haveSalamander ? "Yes!" : "No."}`);

/*
let animalSet = new Set(animals);
animalSet.add({type: "Salamander", name: "Sammy"});
const haveSalamander = animalSet.has({type: "Salamander", name: "Sammy"});
console.log(`Do I have a salamander? ${haveSalamander ? "Yes!" : "No."}`);
*/


/*
let animalSet = new Set(animals);
let salamander = {type: "Salamander", name: "Sammy"};
animalSet.add(salamander);
const haveSalamander = animalSet.has(salamander);
console.log(`Do I have a salamander? ${haveSalamander ? "Yes!" : "No."}`);
*/
