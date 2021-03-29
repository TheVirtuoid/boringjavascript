const myAnimals =
		{ "Cat": "Fluffy", "Dog": "Fido", "Horse": "Mr. Ed", "Cow": "Betsy" };
const yourAnimals =
		{ "Coyote": "Wile E.", "Road Runner": "Beep Beep", "Dolphin": "Flipper", "Whale": "Moby Dick", "Lizard": "Larry" };

const allAnimals = Object.assign(yourAnimals, myAnimals);

console.log(myAnimals);
console.log(yourAnimals);
console.log(allAnimals);
