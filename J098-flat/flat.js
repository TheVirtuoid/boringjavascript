const myAnimals = [
	[{ name: 'Fluffy', type: 'Cat' }],
		[
				[
					{ name: 'Squeeky', type: 'Chihuahua' },
					{ name: 'Godzilla', type: 'Chihuahua'}
				],
				[
					{ name: 'Mothra', type: 'Great Dane' },
					{ name: 'Itty Bit', type: 'Great Dane' }
				]
		],
	[{ name: 'Mr. Ed', type: 'Horse' }]
];
console.log(`Number of animals in my zoo: ${myAnimals.length}`);
console.log(myAnimals);

const allAnimals = myAnimals.flat(2);
console.log(`Number of animals in my flattened zoo: ${allAnimals.length}`);
console.log(allAnimals);

/*
const myAnimals = [
	[{ name: 'Fluffy', type: 'Cat' }],
		[
			{ name: 'Fido', type: 'Dog' },
			{ name: 'Rolf', type: 'Dog' }
		],
	[{ name: 'Mr. Ed', type: 'Horse' }]
];
console.log(`Number of animals in my zoo: ${myAnimals.length}`);
console.log(myAnimals);

const allAnimals = myAnimals.flat();
console.log(`Number of animals in my flattened zoo: ${allAnimals.length}`);
console.log(allAnimals);

 */


/*
const myAnimals = [
	[{ name: 'Fluffy', type: 'Cat' }],
		[
				[
					{ name: 'Squeeky', type: 'Chihuahua' },
					{ name: 'Godzilla', type: 'Chihuahua'}
				],
				[
					{ name: 'Mothra', type: 'Great Dane' },
					{ name: 'Itty Bit', type: 'Great Dane' }
				]
		],
	[{ name: 'Mr. Ed', type: 'Horse' }]
];
console.log(`Number of animals in my zoo: ${myAnimals.length}`);
console.log(myAnimals);

const allAnimals = myAnimals.flat();
console.log(`Number of animals in my flattened zoo: ${allAnimals.length}`);
console.log(allAnimals);
 */