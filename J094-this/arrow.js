const myCatWalk = (name) => {
	console.log(`\n\nMy cat ${name} is walking.`);
	console.log(this);
}

myCatWalk('Fluffy');

const myCat = {
	name: 'Mr. Tinkles',
	type: 'Cat',
	walk: () => {
		console.log(`\n\nMy cat '${this.name}' is walking.`);
		console.log(this);
	}
}

// myCat.walk();

const myOtherCat = {
	name: 'Tom',
	type: 'Cat',
	legs: [
			'rightFront', 'leftFront', 'rightRear', 'leftRear'
	],
	getLeg: function(legName) {
		console.log('-----inside isLeg: ');
		console.log(this);
		return this.legs.find((leg) => {
			console.log(`---------getting leg ${leg}:`);
			console.log(this);
			return leg === legName;
		});
	}
};

console.log(`My other cat's leg is ${myOtherCat.getLeg('rightFront')}`);
