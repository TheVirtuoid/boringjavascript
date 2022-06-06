const myCat = {
	name: 'Fluffy',
	type: 'Cat',
	classification: 'Mammalia'
}
const myDog = {
	name: 'Fido',
	type: 'Dog',
	classification: 'Mammalia'
}
const myHorse = {
	name: 'Mr. Ed',
	type: 'Horse',
	classification: 'Mammalia'
}

const threeAnimals =
		myCat.type === 'Cat'
				? myDog.type === 'Dog'
						? myHorse.type === 'Horse'
								? 3
								: 2
						: myHorse.type === 'Horse'
								? 2
								: 1
				: 0;

console.log(`I don't know what this number is: ${threeAnimals}`);
