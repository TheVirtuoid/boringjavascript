
const myCat = {
	name: 'Fluffy',
	type: 'Cat',
	whoAmI: this,
	walk: function () {
		console.log(`\nFLUFFY: My cat '${this.name}' is walking.`);
		console.log(`'this' for the above object:`);
		console.log(this);
	}
}

const myOtherCat = {
	name: 'Mr. Tinkles',
	type: 'Cat',
	walk: function () {
		console.log(`\nMR. TINKLES: My cat '${this.name}' is walking.`);
		console.log(`'this' for the above object:`);
		console.log(this);
	}
}

myOtherCat.walk();
myCat.walk.apply(myOtherCat);


















/*

const myCat = {
	name: 'Fluffy',
	type: 'Cat',
	walk: function () {
		console.log(`\nFLUFFY: My cat '${this.name}' is walking.`);
		console.log(`'this' for the above object:`);
		console.log(this);
	}
}
myCat.walk();

const myOtherCat = {
	name: 'Mr. Tinkles',
	type: 'Cat',
	walk: function () {
		console.log(`\nMR. TINKLES: My cat '${this.name}' is walking.`);
		console.log(`'this' for the above object:`);
		console.log(this);
	}
}

myOtherCat.walk();
myCat.walk.apply(myOtherCat);

const oneMoreCat = {
	name: 'Tom',
	type: 'Cat',
	walk: function () {
		console.log(`TOM: My cat '${this.name}' is walking.`);
		console.log(`'this' for the above object:`);
		console.log(this);
	}
}

const tomWalk = myCat.walk.bind(oneMoreCat);
tomWalk();
*/


