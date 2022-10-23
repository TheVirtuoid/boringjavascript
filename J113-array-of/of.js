const myAnimals = Array.of("Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard");

console.log('My Animals Are:');
console.log(myAnimals);


const myNewAnimals = Array.of(
		{ "type": "Cat", "name": "Fluffy" },
		{ "type": "Dog", "name": "Fido" },
		{ "type": "Horse", "name": "Mr. Ed" },
		{ "type": "Cow", "name": "Betsy" },
		{ "type": "Coyote", "name": "Wile E." },
		{ "type": "Road Runner", "name": "Beep Beep" },
		{ "type": "Dolphin", "name": "Flipper" },
		{ "type": "Whale", "name": "Moby Dick" },
		{ "type": "Lizard", "name": "Larry" }
);

console.log('My New Animals Are:');
console.log(myNewAnimals);

const weirdAnimals = Array.of(
		true,
		1,
		'Cat',
		null,
		Symbol('Dog'),
		function() {
			console.log('Horse')
		},
		undefined,
		{ "type": "Coyote", "name": "Wile E." },
		12345678901234567890n
);

console.log('My Weird Animals Are:')
console.log(weirdAnimals);
