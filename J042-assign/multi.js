const myAnimals = {
	"Cat": "Fluffy",
	"Dog": "Fido",
	"Horse": "Mr. Ed",
	"Cow": "Betsy"
};
const coyote = { "Coyote": "Wile E." };
const roadRunner = { "Road Runner": "Beep Beep" };
const dolphin = { "Dolphin": "Flipper" };
const whale = { "Whale": "Moby Dick" };
const lizard = { "Lizard": "Larry" };
const beluga = { "Whale": "Beluga"};

console.log('\nBEFORE');
console.log(myAnimals);

Object.assign(myAnimals, coyote, roadRunner, dolphin, whale, lizard, beluga);

console.log('\nAFTER');
console.log(myAnimals);
